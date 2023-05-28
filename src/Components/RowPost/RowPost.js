import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import{API_KEY, imageUrl} from '../../constants/constants'
import './Rowpost.css'
import axios from '../../axios'
function RowPost(props) {
  const[movies , setMovie]= useState([])
  const[urlId, setUrlId]= useState('')
  useEffect(()=>{
    axios.get(props.url).then(res=>{

      console.log(res.data);
      setMovie(res.data.results)

    }).catch(err=>{
      // alert('network Error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(res=>{
      if(res.data.results.length!= 0){
        setUrlId(res.data.results[0])
      }else{
        console.log("trailer not avilable");
      }
      console.log(id)
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            
            <img onClick={()=>handleMovie(obj.id)} className= { props.isSmall ?'smallPoster' :'poster' }src={`${imageUrl+obj.backdrop_path}`}></img>
          
          )}
        
        </div>
       {urlId && <Youtube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost 

