import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../customHooks/usepPopularMovies';
import GPTSearchCompnent from './GPTSearchCompnent';
import { useSelector } from 'react-redux';

const Browse = () => {

useNowPlayingMovies();
usePopularMovies();

const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)

  return (
    <div className=''>

<Header/>
{showGptSearch ? (<GPTSearchCompnent/>):(<><MainContainer/>
<SecondaryContainer/></>)}


{/*

Main Video container
-VideoBackground
-videoTitle

Secondary Container
-MovieList * n
-cards * n


  */}


    </div>
  )
}

export default Browse