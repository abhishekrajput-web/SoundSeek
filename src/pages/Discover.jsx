import React from 'react';
import { Loader, SongCard, Error } from '../components';
import { useGetTopChartsQuery, useGetArtistChartsQuery, useGetAlbumChartsQuery } from '../redux/services/fetchData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  // console.log(data);
  const { data: leaderboardArtist, isFetching: isFetchingLeadorbordArtist, error: errorArtist } = useGetArtistChartsQuery();
  // console.log(leaderboardArtist);
  const { data: artistAlbumChartsData, isFetching: isFetchingLeadorbordAlbum, error: errorAlbum } = useGetAlbumChartsQuery();
  // console.log(artistAlbumChartsData);
  if (isFetching || isFetchingLeadorbordArtist || isFetchingLeadorbordAlbum) return <Loader title='Loading Songs' />;

  if (error || errorArtist || errorAlbum) return <Error/>;

  return (
    <section>
      {data?.chart_items && (
      <h1 className='text-white font-medium py-3 text-xl md:text-3xl capitalize my-1'>Discover Songs</h1>)}
      <div className="grid grid-col-mobile grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-4">
        {data?.chart_items?.map((song, i) => (
          <SongCard
            data={data?.chart_items}
            key={i}
            song={song}
          />
        ))}
      </div>

{leaderboardArtist?.chart_items && (<h2 className='text-white font-medium py-3 text-xl md:text-3xl capitalize'>Top Artist</h2>)}
      <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="my-5"
        >
          {leaderboardArtist?.chart_items?.map((artist) => (
            <SwiperSlide
              key={artist?.item?.id}
              style={{ maxWidth:"150px", height: "auto" }}
              className="shadow-lg animate-slideright cursor-pointer hover:opacity-80 transition-all overflow-hidden"
            >
              <Link to={`/artists/${artist?.item?.id}`}>
                <img src={artist?.item?.image_url} alt="Name" className="rounded-full w-full hover:scale-95 transition-all" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {artistAlbumChartsData?.chart_items && (<h2 className='text-white font-medium py-3 text-xl md:text-3xl capitalize'>Top Albums</h2>)}
      <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="my-5"
        >
          {artistAlbumChartsData?.chart_items?.map((album) => (
            <SwiperSlide
              key={album?.item?.id}
              style={{ maxWidth:"150px", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright cursor-pointer hover:opacity-80 transition-all"
            >
              <Link to={`/albums/${album?.item?.id}`}>
                <img src={album?.item?.cover_art_url} alt="Name" className="rounded-full w-full hover:scale-95 transition-all" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        

    </section>
  )
}

export default Discover;