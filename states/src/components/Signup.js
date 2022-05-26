import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validation';

function Signup() {
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
        validationSchema,
    });

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    onChange={handleChange}
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    value={values.email}
                />

                <br /><br />

                <label>Password</label>
                <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={values.password}
                />

                <br /><br />

                <label>Confirm Password</label>
                <input
                    onChange={handleChange}
                    name="passwordConfirm"
                    type="password"
                    value={values.passwordConfirm}
                />

                <br /><br />


                <button type="submit">Submit</button>

                <br /><br />

                {JSON.stringify(values)}

            </form>
        </div>
    )
}

export default Signup