import React, {useState} from "react"
import {useHistory, useParams} from "react-router-dom"
import classnames from "classnames"
import {useFilms} from "../../context/FilmsState";
import {useAuth} from "../../context/AuthState"


const AddToFavBtn = () => {
    const [active, setActive] = useState<boolean>(false);
    const {state} = useFilms();
    const {addUserContent, currentUser} = useAuth();

    const history = useHistory();
    const {movieId, tvId} = useParams<{ movieId: string, tvId: string }>();

    const handleClick = ():void => {

        if(!currentUser){
           return history.push('/login')
        }

        if(!active){
            addUserContent(state.movie!)
            setActive(prev => !prev);
        }

        else {
            addUserContent(state.movie!, true)
            setActive(prev => !prev);
        }
    }

    // is film in favorites
    React.useEffect(() => {
        state.favorites?.forEach(item => {
                Number(movieId || tvId) === item?.id && setActive(prevState => !prevState);
            });
    },[state.favorites]);


    return (
        <button className={classnames("addToFav__btn",{
            "active": active,
            "disabled": !currentUser
        })}
                onClick={handleClick}
                title={active
                    ? 'Remove film from favourites' : !currentUser ? 'Please login to add film to the favorites'
                    : 'Add film to favourites'
                }>
            <span></span>
            <span></span>
        </button>
    )
};

export default AddToFavBtn;