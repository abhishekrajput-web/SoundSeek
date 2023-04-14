import React from 'react';
import { Link } from 'react-router-dom';
const AlbumHeader = ({albumDetailData}) => {

  return (
    <div className='flex gap-5 items-center md:flex-row flex-col'>
    <img src={albumDetailData && albumDetailData?.album?.cover_art_url} alt="sfsf" className='w-36 h-36 rounded-full border-white border ' />
    <div className='flex flex-col gap-3'>
    <h3 className='font-bold text-xl text-white'>{albumDetailData && albumDetailData?.album?.artist?.name}</h3>
    <Link to={albumDetailData && `/artists/${albumDetailData?.album?.artist?.id}`}>
    <h3 className='font-semibold text-lg text-yellow-500 hover:text-yellow-600 opacity-80 transition-all cursor-pointer'>{albumDetailData && albumDetailData?.album?.name}</h3>
    </Link>
    </div>
</div>
  )
}


export default AlbumHeader;