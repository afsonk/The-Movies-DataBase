import {GlobalActionTypes, GlobalStateType} from "../types/types";

function filmsReducer(state: GlobalStateType, action:GlobalActionTypes): GlobalStateType {
    switch (action.type) {
        case "set film title":
            return {...state, title: action.text};
        case "set films array in state":
            return {...state, films:[...action.films]};
        case "set detail info of movie":
            return {...state, movie: action.film};
        case "clear movie details":
            return {...state, movie: null };
        case "is content loaded":
            return {...state, isFetching: action.payload};
        case "show searching bar":
            return {...state, isSearching: !state.isSearching};
        default:
            throw new Error();
    }
}

export default filmsReducer;