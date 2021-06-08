import {Field} from "formik"


type Props = {
    name: string,
    label: string,
    place: string
}

function CustomInput({name, label, place}: Props) {
    return (
        <Field name={name}>
            {({field, meta}: any) => (
                <div className={'checkout__line'}>
                    <label className={'form__label'} htmlFor={name}>{label}</label>
                    <input className={'input'}
                           name={name}
                           {...field}
                           placeholder={place}
                    />
                    {meta.touched &&
                    meta.error && <div className="checkout__line-error">{meta.error}</div>}
                </div>
            )}
        </Field>
    )
}

export default CustomInput