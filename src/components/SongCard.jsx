import React from 'react';
import { Link } from 'react-router-dom';
const SongCard = ({ song, searchSongs,}) => {

  return (
  <div className='hover:opacity-75 transition-all flex flex-col hover:border overflow-hidden'>
  <img src={song ? song?.item?.header_image_thumbnail_url
 : searchSongs?.result?.header_image_url} alt="song-img" className='w-full aspect-square hover:scale-90 transition-all' />
  <p className='text-base md:text-lg text-white font-medium my-1'>
  <Link to={song ? `/songs/${song?.item?.id}` : `/songs/${searchSongs?.result?.id}`} className='no-underline capitalize'>
  {song ? song?.item?.title : searchSongs?.result?.title}
  </Link>        
  </p>
 <p className='text-md text-white font-normal my-1'>
  <Link to={song ? `/artists/${song?.item?.primary_artist?.id}` : `/artists/${searchSongs?.result?.primary_artist?.id}`} className='no-underline capitalize'>
    {song ? song?.item?.artist_names : searchSongs?.result?.artist_names}
  </Link>
 </p>
</div>


  )
}

export default SongCard;
