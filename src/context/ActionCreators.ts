import {SET_FILM_TITLE, SET_FILMS_IN_STATE} from "./Constans";
import {ISetFilmsInState, ISetFilmTitle, ResponseType} from "../types/types";


export const setFilmTitle = (text: string): ISetFilmTitle=> ({
    type: SET_FILM_TITLE,
    text
})

export const setFilmsInState = (films:ResponseType[]): ISetFilmsInState => ({
    type: SET_FILMS_IN_STATE,
    films
})