import {useAuth} from "../../context/AuthState"
import {useHistory} from "react-router-dom"
import {useFilms} from "../../context/FilmsState"
import {setFavoriteMovie} from "../../context/ActionCreators"

function AuthBtn(){
    const {currentUser, logout} = useAuth()
    const {dispatch} = useFilms()
    const history = useHistory()

    async function handleAuthBtnClick(){
        if(currentUser){
            dispatch(setFavoriteMovie(null))
            logout()
        }

        history.push('/login')
    }

    return(
           <button className={'auth__btn'}
                   onClick={handleAuthBtnClick}>
               {currentUser ? 'Log out' : 'Log in'}
           </button>
    )
}
export default AuthBtn