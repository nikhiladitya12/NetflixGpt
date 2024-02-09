import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../customHooks/usepPopularMovies';

const Browse = () => {

useNowPlayingMovies();
usePopularMovies();


  return (
    <div className=''>

<Header/>
<MainContainer/>
<SecondaryContainer/>

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