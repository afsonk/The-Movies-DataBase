import { api, ApiType } from "../types/types";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/',
});

export const FilmsApi = {
    getFilms(title: string, page: number) {
        return instance.get<ApiType>(`movie?api_key=${api.apiKey}&language=en-US&query=${title}&page=${page}&include_adult=false`)
            .then(res => res.data)
    },
}