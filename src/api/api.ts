import axios from "axios";

const obj = {
    adult: false,
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    genre_ids: [18],
    id: 550,
    original_language: "en",
    original_title: "Fight Club",
    overview: "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    popularity: 37.668,
    poster_path: "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    release_date: "1999-10-15",
    title: "Fight Club",
    video: false,
    vote_average: 8.4,
    vote_count: 21618,
}

export type ResponseType = typeof obj;

type ApiType = {
    page: number,
    results: Array<ResponseType>,
    total_results: number,
    total_page: number
}

export enum api{
    "apiKey" = "02975dd7fd4ed626e2a5a7e13f1eae70",
    'imageApi' = 'http://image.tmdb.org/t/p/w200'
}

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/',
});

export const FilmsApi = {
    getFilms(title: string) {
        return instance.get<ApiType>(`movie?api_key=${api.apiKey}&language=en-US&query=${title}&page=1&include_adult=false`)
            .then(res => res.data)
    },
}