import {api, ApiType, SingleMovieResponseType, TrailerResponseType} from "../types/types";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export const FilmsApi = {
    getFilms(title: string, page: number = 1) {
        return instance.get<ApiType>(`search/multi?api_key=${api.apiKey}&language=en-US&query=${title}&page=${page}&include_adult=false`)
            .then(res => res.data)
    },
    getMovieById(category: string,id: string){
        return instance.get<SingleMovieResponseType>(`${category}/${id}?api_key=${api.apiKey}`)
            .then(res => res.data)
    },
    getMovieByGenre(id: number, page: number = 1){
        return instance.get<ApiType>(`discover/movie?api_key=${api.apiKey}&with_genres=${id}&page=${page}`)
            .then(res => res.data)
    },
    getMovieTrailer(category: string,id: string){
        return instance.get<TrailerResponseType>(`${category}/${id}/videos?api_key=${api.apiKey}&language=en-US`)
            .then(res => res.data)
    }
}

// search/movie?api_key=${api.apiKey}&language=en-US&query=${title}&page=${page}&adult=false
