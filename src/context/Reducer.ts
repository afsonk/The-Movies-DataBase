import {GlobalActionTypes, GlobalStateType} from "../types/types";

function filmsReducer(state: GlobalStateType, action:GlobalActionTypes): GlobalStateType {
    switch (action.type) {
        case "set film title":
            return {...state, title: action.text};
        case "set films array in state":
            return {...state, films:[...action.films]}
        default:
            throw new Error();
    }
}

export default filmsReducer;