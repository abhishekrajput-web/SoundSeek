import React from 'react';

const ReleaseDetail = ({songDetailData, albumDetailData, title}) => {
  return (
    <div className='flex gap-3 items-center flex-col my-10 md:my-0'>
    <h2 className='text-white uppercase font-semibold text-md'>{title} release details</h2>
    <div className='flex gap-3'>
    <p className='text-lg md:text-xl font-semibold text-white'><span className='capitalize text-lg md:text-2xl text-blue-500 font-medium'>day  -  </span>{songDetailData?.song?.album?.release_date_components ? songDetailData?.song?.album?.release_date_components?.day || 'N/A'   : albumDetailData?.album?.release_date_components?.day || 'N/A' }</p>
    <p className='text-lg md:text-xl font-semibold text-white'><span className='capitalize text-lg md:text-2xl text-blue-500 font-medium'>month  -  </span>{songDetailData?.song?.album?.release_date_components ? songDetailData?.song?.album?.release_date_components?.month || 'N/A'  : albumDetailData?.album?.release_date_components?.month || 'N/A' }</p>
    <p className='text-lg md:text-xl font-semibold text-white'><span className='capitalize text-lg md:text-2xl text-blue-500 font-medium'>year  -  </span>{songDetailData?.song?.album?.release_date_components?.year ? songDetailData?.song?.album?.release_date_components?.year || 'N/A' : albumDetailData?.album?.release_date_components?.year || 'N/A' }</p>
    </div>
  </div>
  )
}

export default ReleaseDetail;