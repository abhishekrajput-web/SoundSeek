import React from 'react';
import { Link } from 'react-router-dom';
const ArtistCard = ({artistSongs,artistAlbum})  => {
  return (
    <div className='bg-gray-500 rounded-lg hover:opacity-75 hover:bg-gray-600 transition-all flex flex-col'>
    <img src={artistSongs ? artistSongs?.header_image_url : artistAlbum?.cover_art_url
} alt="song-img" className='w-full aspect-square' />
    <p className='text-sm sm:text-xl text-white font-medium my-1'>
    <Link to={artistSongs ? `/songs/${artistSongs?.id}` : `/albums/${artistAlbum?.id}`} className='no-underline capitalize'>
    {artistSongs ? artistSongs?.title?.slice(0,30) : artistAlbum?.name?.slice(0,30) }
    </Link>        
    </p>
   <p className='text-sm sm:text-md text-white font-normal my-1'>
    <Link to={artistSongs ? `/artists/${artistSongs?.primary_artist?.id}` : ""} className='no-underline capitalize'>
      {artistSongs ? artistSongs?.artist_names?.slice(0,50) : artistAlbum.artist?.name?.slice(0,50)}
    </Link>
   </p>
  </div>
  )
}

export default ArtistCard;