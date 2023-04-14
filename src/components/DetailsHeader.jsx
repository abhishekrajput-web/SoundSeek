import React from 'react';
import { Link } from 'react-router-dom';
function DetailsHeader({songId, songData, artistData}) {
  return (
    <div className='flex gap-5 items-center md:flex-row flex-col'>
    <img src={songId ? songData?.song?.album?.cover_art_url : artistData?.artist?.image_url} alt="sfsf" className='w-36 h-36 rounded-full border-white border ' />
    <div className='flex flex-col gap-3'>
    <h3 className='font-bold text-xl text-center md:text-left text-white'>{songId ? songData?.song?.title : artistData?.artist?.name}</h3>
    <Link to={songId ? `/artists/${songData?.song?.album?.artist?.id}` : ""} >
    <h3 className='font-semibold text-lg text-yellow-500 hover:text-yellow-600 opacity-80 transition-all cursor-pointer'>{songId ? songData?.song?.album?.name : artistData?.artist?.instagram_name || "no insatgram name found" }</h3>
    </Link>
    </div>
</div>
  )
}

export default DetailsHeader;