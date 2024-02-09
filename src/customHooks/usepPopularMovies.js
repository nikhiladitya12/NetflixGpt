

import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopuarMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const usePopularMovies=()=>{
//fetch data from tmdb api and update store
const dispatch = useDispatch();


const getPopularMovies = async ()=>{
const data= await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
const json=await data.json();
dispatch(addPopuarMovies(json.results));
}
useEffect(()=>{

getPopularMovies();

},[])

}
