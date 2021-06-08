import {Link} from "react-router-dom"


function FormLink({login}: { login?: boolean }) {
    return (
        <Link className={'form__link'}
              to={login ? '/signup' : '/login'}>
            {!login ? 'Already have an account?' : 'Need an account?'}
        </Link>
    )
}

export default FormLink