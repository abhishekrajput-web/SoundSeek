import React from 'react';
import { useParams} from 'react-router-dom';
import { useGetSongDetailsQuery, useGetRelatedSongsQuery} from '../redux/services/fetchData';
import { DetailsHeader, Loader} from '../components';
import RelatedSongs from './RelatedSongs';
import ReleaseDetail from '../components/ReleaseDetail';

const SongDetails = () => {
  const {songId} = useParams();
  const {data, isFetching, error} = useGetSongDetailsQuery({songId});
  const {data: relatedSongs, isFetching:isFetchingRelatedSongs, error: errorRelatedSongs} = useGetRelatedSongsQuery({songId});


  if(isFetching || isFetchingRelatedSongs ) return <Loader/>;

  if(error || errorRelatedSongs) return <Error/>;

  return (
    <section>
      <div className='flex justify-between items-center flex-col md:flex-row gap-0 md:gap-8'>
        {data?.song?.album?.cover_art_url && (<DetailsHeader songData={data} songId={songId} />) }
        {data?.song?.album?.release_date_components && (
        <ReleaseDetail songDetailData={data} title="song"/>) }
      </div>

      <div className='justify-center items-center text-white'>
        <p className='text-sm md:text-lg font-medium text-white my-5'>
      {data?.song?.description_preview}
        </p>
      </div>
       
      {data?.song?.producer_artists.length > 1 && ( <h1 className='text-white font-medium py-1 text-xl md:text-3xl capitalize'>song producers</h1>)}
       
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 my-10 transition-all">
       {data?.song?.producer_artists?.map((artist, i) => (
        <div className='bg-gray-900 hover:opacity-80 opacity-100 transition-all overflow-hidden aspect-auto' key={i}>
        <img src={artist?.image_url} alt={artist?.name} className="w-full hover:scale-110 transition-all duration-300 aspect-square"/>
        <h3 className='text-white text-lg font-normal py-5'>{artist?.name}</h3>
        </div>
       ))}
      </div>

      {data?.song?.youtube_url && ( <h1 className='text-white font-medium py-1 text-xl md:text-3xl capitalize my-6'>watch on youtube</h1>)}

      <div className='youtube-container'>
        <a href={data?.song?.youtube_url} className="no-underline" target="_blank">
        <img src={data?.song?.header_image_url || data?.song?.custom_header_image_url} alt="video" className='w-1/2'/>
        </a>
      </div>

      <RelatedSongs relatedSongData={relatedSongs} songId={songId} />
       
    </section>
  )
}

export default SongDetails;