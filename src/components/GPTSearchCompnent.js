import React from 'react'
import GptSearchBar from './GptSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GPTSearchCompnent = () => {
  return (
    <div>
<div className='w-full h-full absolute -z-10'>
<img alt='netflix-bg-img' src={BG_URL} className='object-cover w-full h-full'/>
</div>
<GptSearchBar/>
<GPTMovieSuggestions/>





    </div>
  )
}

export default GPTSearchCompnent