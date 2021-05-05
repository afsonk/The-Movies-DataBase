import React from "react";


type Props = {
    handleSearchClick: () => void
}

const SearchBtn: React.FC<Props> = ({handleSearchClick}) => {
    return (
    <button className={'search__btn'} onClick={handleSearchClick}>
        <svg width="35px" height="35px" fill="#01b4e4" enable-background="new 0 0 56.966 56.966"
             viewBox="0 0 56.966 56.966" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m55.146 51.887-13.558-14.101c3.486-4.144 5.396-9.358 5.396-14.786 0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837 1.192-1.147 1.23-3.049.083-4.242zm-31.162-45.887c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"/>
        </svg>
        <span>Search</span>
    </button>
    )
};

export default SearchBtn;