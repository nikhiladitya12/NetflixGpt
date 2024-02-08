import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{


const dispatch=useDispatch();

//fetching the trailer video && updating the store  with trailer video data
const fetchMovieTrailer=async()=>{


const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
const json=await data.json();
const filterData= json.results.filter((video)=>video.type ==="Trailer");
const trailer= filterData.length? filterData[0]:json.results[0];


dispatch(addTrailerVideo(trailer));
}


useEffect(()=>{

fetchMovieTrailer();


},[]);










}

export default useMovieTrailer;