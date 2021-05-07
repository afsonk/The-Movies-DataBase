import React from 'react';
import {ChildrenProps, ContextState, GlobalActionTypes, GlobalStateType} from "../types/types";
import filmsReducer from './Reducer';


// Initial state
const initialState: GlobalStateType = {
    title: '',
    films: null,
    movie: null,
    isFetching: false,
    isSearching: false,
    page: 1,
    total_pages: null,
    total_results: null
}

// Context creation
export const FilmsContext = React.createContext<ContextState | null>(null);

export const FilmsProvider: React.FC<ChildrenProps> = ({children}) => {
    const [state, dispatch] = React.useReducer<React.Reducer<GlobalStateType, GlobalActionTypes>>(filmsReducer, initialState);

    return (
        <FilmsContext.Provider value={{state, dispatch}}>
            {children}
        </FilmsContext.Provider>
    )
}


// Use context custom hook
export const useFilms = () => {
    const context = React.useContext(FilmsContext);
    if(!context){
        throw new Error(`useFilms must be used within FilmsProvider`);
    }
    return context;
}
