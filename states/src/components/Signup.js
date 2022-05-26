import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validation';

function Signup() {
    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
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
                    onBlur={handleBlur}
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    value={values.email}
                />
                {errors.email && touched.email && <div style={{ color: "red" }}>{errors.email}</div>}

                <br /><br />

                <label>Password</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    value={values.password}
                />
                {errors.password && touched.password && <div style={{ color: "red" }}>{errors.password}</div>}

                <br /><br />

                <label>Confirm Password</label>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="passwordConfirm"
                    type="password"
                    value={values.passwordConfirm}
                />
                {errors.passwordConfirm && touched.passwordConfirm && <div style={{ color: "red" }}>{errors.passwordConfirm}</div>}

                <br /><br />


                <button type="submit">Submit</button>

                <br /><br />

                {JSON.stringify(values)}

            </form>
        </div>
    )
}

export default Signup