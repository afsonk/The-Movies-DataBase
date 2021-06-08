

function HeaderTitle({login}: {login?: boolean, signup?: boolean}){
   return <h1 className={'form__title'}>{login ? 'Login' : 'Sign Up'}</h1>
}

export default HeaderTitle