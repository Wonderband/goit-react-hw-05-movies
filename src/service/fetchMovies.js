
import axios from 'axios';

const API_KEY = "00a5113b1c647c2d540ffbf0020a5cfd";
const TRENDING_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const BASE_URL = 'https://api.themoviedb.org/3/';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?query=';


export  async function getTrendingMovies() {
    try {
        const responce = await axios.get(TRENDING_URL, { params: { api_key: API_KEY }, });        
        return responce.data.results;
    }
    catch (error) { 
        throw new Error(error.message);
    }
}

export  async function getMovieDetails(movieId) {
    try {
        const responce = await axios.get(BASE_URL + '/movie/' + movieId, { params: { api_key: API_KEY }, }); 
        // console.log(responce);
        return responce.data;
    }
    catch (error) { 
        throw new Error(error.message);
    }
}

export  async function getSearchedMovies(query) {
    try {
        const responce = await axios.get(SEARCH_URL + query, { params: { api_key: API_KEY }, });
        // console.log(responce);
        return responce.data.results;
    }
    catch (error) { 
        throw new Error(error.message);
    }
}