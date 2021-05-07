import React from "react";
import useLocalStorage from "../LocalStorage/useLocalStorage";



const AddToFavBtn= (() => {
    const [active, setActive] = React.useState<boolean>(false);
    // const [state, setState] = useLocalStorage('film');

    const handleClick = ():void => {
        setActive(prev => !prev);
    }

    return (
        <button className={`addToFav__btn ${active ? 'active' : ''}`}
                onClick={handleClick}
                title={active
                    ? 'Remove film from favourites'
                    : 'Add film to favourites'
                }>
            <span></span>
            <span></span>
        </button>
    )
});

export default AddToFavBtn;