import { useState } from 'react';
import * as yup from 'yup';



function Form (props) {

    // Making Initial form values
    const initialFormValues = {
        name: '',
        email: '',
        password: '',
    
    }

    // Storing InitialValues inside of useState
    const [formValues, setFormValues] = useState(initialFormValues)

    return (
        <div>
            <form>

            </form>
        </div>
    )
}

export default Form