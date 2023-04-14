import React from 'react';
import { useParams } from 'react-router-dom';
import { Loader, SongCard, Error } from '../components';
import { useGetSearchSongsQuery } from '../redux/services/fetchData';
const Search = () => {
  const {searchTerm} = useParams();
  const {data, isFetching, error} = useGetSearchSongsQuery(searchTerm);
// console.log(data);
  if (isFetching) return <Loader title='Loading Songs'/>;

  if(error) return <Error/>;

  return (
    <section>
        <h1 className='text-white font-medium py-3 text-3xl capitalize'>{searchTerm} Songs</h1>
        <div className="grid grid-col-mobile grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-4">
          {data?.hits?.map((song, i) => (
            <SongCard data={data?.hits} key={i} searchSongs={song}/>
          ))}
        </div>
    </section>
  )
}

export default Search;