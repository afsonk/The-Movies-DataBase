import classnames from "classnames"

function SubmitButton({login, disabled}: {login?: boolean, disabled?: boolean}){
    return <button className={classnames('form__submit-btn',{
        'disabled': disabled
    })} type={"submit"} disabled={disabled}>{login ? 'Login' : 'Sign Up'}</button>
}
export default SubmitButton