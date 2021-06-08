import {Form, Formik, FormikProps} from "formik"
import {useHistory} from "react-router-dom"
import {useAuth} from "../../context/AuthState"
import CheckoutLine from "./CheckoutLine"
import SubmitButton from "./SubmitButton"
import FormWrapper from "./FormWrapper"
import {validationSchema} from "./ValidationSchema"
import {useState} from "react"
import FormLink from "./FormLink"


export type initialFormState = {
    email: string,
    password: string,
    passwordConfirmation: string
}


export function Signup() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()

    const initialValues: initialFormState = {
        email: '',
        password: '',
        passwordConfirmation: ''
    }

    const fieldsArray = [
        {name: 'email', label: 'Email', place: "Email"},
        {name: 'password', label: 'Password', place: "Password"},
        {name: 'passwordConfirmation', label: 'Confirm password', place: "Password"},
    ] as Array<{ name: string, label: string, place: string }>

    const {signup} = useAuth()

    async function handleSignUp(values: initialFormState) {
        try {
            setError('')
            setLoading(true)
            await signup(values.email, values.password)
            history.push('/')
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }



    return (
        <FormWrapper signup>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSignUp}
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
                            <SubmitButton disabled={loading}/>
                            <FormLink/>
                        </div>
                        {
                            error && <div className="checkout__line-error">{error}</div>
                        }
                    </Form>
                )}
            </Formik>

        </FormWrapper>
    )
}