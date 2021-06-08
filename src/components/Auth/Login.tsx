import {Formik, Form, FormikProps, Field} from "formik"
import './style.scss'
import CheckoutLine from "./CheckoutLine"
import FormWrapper from "./FormWrapper"
import SubmitButton from "./SubmitButton"
import {validationSchema} from "./ValidationSchema"
import {useEffect, useState} from "react"
import FormLink from "./FormLink"
import {useAuth} from "../../context/AuthState"
import {useHistory} from "react-router-dom"


export type initialFormState = {
    email: string,
    password: string,
}


export function Login() {
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const initialValues: initialFormState = {
        email: '',
        password: ''
    }

    const fieldsArray = [
        {name: 'email', label: 'Email', place: "Email"},
        {name: 'password', label: 'Password', place: "Password"},
    ] as Array<{ name: string, label: string, place: string }>

    const {login, currentUser} = useAuth()

    async function handleLogin(values: initialFormState) {
        try {
            setLoading(true)
            login(values.email, values.password)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    if (currentUser) {
        history.push('/')
    }


    return (
        <FormWrapper login>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
            >
                {(props: FormikProps<initialFormState>) => (
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        props.handleSubmit()
                    }}>
                        {
                            fieldsArray.map(el => <CheckoutLine key={el.name} name={el.name} label={el.label}
                                                                place={el.place}/>)
                        }
                        <div className={'form__bottom'}>
                            <SubmitButton login disabled={loading}/>
                            <FormLink login/>
                        </div>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    )
}
