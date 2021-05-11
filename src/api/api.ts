import {api, ApiType, SingleMovieResponseType, TrailerResponseType} from "../types/types";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export const FilmsApi = {
    getFilms(title: string = 'interstellar', page: number = 1) {
        return instance.get<ApiType>(`search/movie?api_key=${api.apiKey}&language=en-US&query=${title}&page=${page}&adult=false`)
            .then(res => res.data)
    },
    getMovieById(id: string){
        return instance.get<SingleMovieResponseType>(`movie/${id}?api_key=${api.apiKey}`)
            .then(res => res.data)
    },
    getMovieTrailer(id: string){
        return instance.get<TrailerResponseType>(`movie/${id}/videos?api_key=${api.apiKey}&language=en-US`)
            .then(res => res.data)
    }
}

