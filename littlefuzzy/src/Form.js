import { useState, useEffect } from 'react';
import * as yup from 'yup';
import formTest from './Validation';


function Form (props) {

    // Making Initial form values
    const initialFormValues = {
        name: '',
        email: '',
        password: ''
    
    }

    // Making Initial form errors
    const initialFormError = {
        name: '',
        email: '',
        password: ''
    
    }

    // Initializing disabled
    const initializedDisabled = true

    // Storing InitialValues inside of useState
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formError, setFormError] = useState(initialFormError)
    const [disabled, setDisabled] = useState(initializedDisabled)

    // Making a validator for boolean values
    function validator (name, value) {
        yup.reach(formTest, name)
        .validate(value)
        .then(() => setFormError({...formError, [name]: ''}))
        .catch(err => setFormError({...formError, [err]: err.formError[0]}))
    }

    // Making a Change function for onChange
    function change(name, value) {

        // Passing the name of the input Name and the Value
        validator(name,value)

        // Changing form values
        setFormValues({...formValues, [name]: value})
    }

    // Making an onChange function for onChange
    const onChange = (event) => {

        // Defining Name, type, checked, value = to the event 
        const {name, type, checked, value} = event.target

        // Making variable to grab the correct value of the checked boxes
        const checkerValue = type === 'checkbox' ? checked : value 

        change(name, checkerValue)
    }

    // Making Value trimmer/Cleaner
    function cleaner () {

        // Storing formValues keys inside of a new object
        const refinement = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            email: formValues.password.trim()
        }
    }

    // Making function for onSubmit function
    function onSubmit (event) {

        // Stopping full page reload
        event.preventDefault()

        // Cleaning the form values
        cleaner()

        // Testing Form
        console.log(formValues)
    }

    // Adding a functionality to disable the button
    useEffect(() => {
        formTest.isValid(formValues).then(valid => setDisabled(!valid))
    },[formValues])

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                type='text'
                name='name'
                placeHolder='Please type name here'
                value={formValues.name}
                onChange={onChange}
                />

                <br/>
                <button>Submit</button>

                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                <div>{formError.name}</div>
                <div>{formError.email}</div>
                <div>{formError.password}</div>
            </div>
        </form>
    )
}

export default Form