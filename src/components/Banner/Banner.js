import './Banner.css'
import React from 'react'
import axios from '../../axios'
import { useEffect , useState } from 'react'
import {API_KEY , imageURL} from '../constants/constant'

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      var randomnumber = Math.floor(Math.random() * (20 - 0 + 1)) + 0;
      setMovie(response.data.results[randomnumber])
    })
  }, []);

  return (
    <div style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path : ""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title : ""} </h1>
        <div className='banner_buttons'>
            <button className='button'> Play </button>
            <button className='button'> My list </button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
