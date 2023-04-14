import React from 'react';
import { useParams} from 'react-router-dom';
import { useGetArtistDetailsQuery, useGetArtistSongsQuery, useGetArtistAlbumsQuery} from '../redux/services/fetchData';
import { ArtistCard, DetailsHeader, Loader} from '../components';

const ArtistDetails = () => {
  const {artistId} = useParams();
  const {data, isFetching, error} = useGetArtistDetailsQuery({artistId});
  const {data: artistSongData, isFetching: isFetchingArtistSongs, error: errorSongsData} = useGetArtistSongsQuery({artistId});
  const {data: artistAlbumData, isFetching: isFetchingAlbumData, error: errorAlbumData} = useGetArtistAlbumsQuery({artistId});

  // console.log(data);
  // console.log(artistSongData);
  // console.log(artistAlbumData);

  if(isFetching || isFetchingArtistSongs || isFetchingAlbumData ) return <Loader/>;

  if(error || errorSongsData || errorAlbumData) return <Error/>;

  return (
    <section>
      <div className='flex justify-between items-center flex-col md:flex-row'>
        <DetailsHeader artistData={data} artistId={artistId}/>
      </div>
         {artistSongData?.songs && (<h1 className='text-white font-medium py-3 text-xl md:text-3xl  capitalize'>Artist Songs</h1>) }        
        <div className="grid grid-col-mobile grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
          {artistSongData?.songs?.map((song, i) => (
            <ArtistCard data={artistSongData?.songs} key={i} artistSongs={song} artistId={artistId}/>
          ))}
        </div>
        {artistAlbumData?.albums.length > 1 && (<h1 className='text-white font-medium py-3 text-xl md:text-3xl  capitalize'>Artist Albums</h1>)}
        <div className="grid grid-col-mobile grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
          {artistAlbumData?.albums?.map((artistAlbum, i) => (
            <ArtistCard data={artistAlbumData?.albums} key={i} artistAlbum={artistAlbum}/>
          ))}
        </div>
        
        
    </section>
  )
}

export default ArtistDetails;