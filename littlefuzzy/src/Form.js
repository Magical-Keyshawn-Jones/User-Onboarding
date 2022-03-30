import { useState } from 'react';
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

    // Storing InitialValues inside of useState
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formError, setFormError] = useState(initialFormError)

    // Making an onChange function for onChange
    const onChange = (event) => {

        // Defining Name, type, checked, value = to the event 
        const {name, type, checked, value} = event.targe.value

        // Making variable to grab the correct value of the checked boxes
        const checkerValue = type === 'checkbox' ? checked : value 
    }

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

    return (
        <form>
            <div className='errors'>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                <div>{formError.name}</div>
                <div>{formError.email}</div>
                <div>{formError.password}</div>
            </div>
        </form>
    )
}

export default Form