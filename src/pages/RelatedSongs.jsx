import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillPlayCircle} from "react-icons/ai";
const RelatedSongs = ({relatedSongData}) => {
    // console.log(relatedSongData);
  return (
    <div>
        <h2 className='text-white font-medium py-3 text-xl md:text-3xl capitalize my-6'>Related Songs</h2>
 
         <div className='flex flex-col gap-5 my-8'>
           {relatedSongData?.song_recommendations.recommendations.map((relatedSong, i) => (
            <div className='flex flex-row gap-10 justify-between items-center' key={i}>
            <div className='flex flex-row gap-5 justify-center items-center'>
              <Link to={`/artists/${relatedSong?.recommended_song?.primary_artist?.id}`}>
                <img src={relatedSong?.recommended_song?.header_image_url} alt="song" className='w-12 h-12 sm:w-16 sm:h-16 rounded-full'/>
              </Link>
              <Link to={`/songs/${relatedSong?.recommended_song?.id}`}>
                <h3 className='text-white text-sm sm:text-lg font-medium lowercase cursor-pointer'>{relatedSong?.recommended_song?.title}</h3>
              </Link>
            </div>
            <div>
                <p className='text-white'><AiFillPlayCircle className='text-xl sm:text-4xl cursor-pointer hover:opacity-80'/></p>
            </div>
            </div>
           ))}

         </div>
    </div>
  )
}

export default RelatedSongs;