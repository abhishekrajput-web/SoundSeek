import React from 'react';
import { useGetAlbumDetailsQuery } from '../redux/services/fetchData';
import { useParams } from 'react-router-dom';
import { Loader, Error } from '../components';
import ReleaseDetail from '../components/ReleaseDetail';
import AlbumHeader from '../components/AlbumHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles
import { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
const AlbumDetails = () => {
  const { albumId } = useParams();
  const { data: artistAlbumData, isFetching, error } = useGetAlbumDetailsQuery({ albumId });
  // console.log(artistAlbumData);
  if (isFetching) return <Loader />;

  if (error) return <Error/>;

  return (
    <section>
      <div className='flex justify-between items-center flex-col md:flex-row'>
        <AlbumHeader albumDetailData={artistAlbumData} />
        {artistAlbumData?.album?.release_date_components && ( <ReleaseDetail albumDetailData={artistAlbumData} title="album" />)}
      </div>

      <div className='justify-center items-center text-white'>
        <p className='text-sm md:text-lg font-medium text-white my-5'>
          {artistAlbumData?.album?.description_preview || "“Say You Won’t Let Go” is the first single from British singer-songwriter James Arthur’s second studio album, Back from the Edge. The song has peaked at No. 1 in several countries, including the United Kingdom, Australia, Indonesia, New Zealand and Sweden. The song’s tender lyrics talk about falling in love with someone at first sight, and wanting to grow old with them. He talks about enjoying and loving her when she is young, and still wanting to be with her when she is old and grey, just as long as she “won’t let go.” To show how serious he is about his love for her, he even expresses the desire to be with her after they both die. James Arthur recently explained that a lot of the song came from imagination. “I wanted to write the type of song that guys would want to play for their girlfriends.” Arthur said of this: [It’s] about looking at the future and spending your life with someone, even after death."}
        </p>
      </div>

      <div>
        {artistAlbumData?.album?.song_performances.length > 0 && (<h1 className='text-white font-medium py-3 text-xl md:text-3xl capitalize'>song team</h1>)}
      <Swiper
          slidesPerView="auto"
          spaceBetween={60}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="my-3 sm:my-5"
        >
        {artistAlbumData?.album?.song_performances?.map((labels) => (
         labels?.artists?.map((worker) => (
          <SwiperSlide
          key={worker?.id}
          style={{ width: '15%', height: 'auto' }}
          className="shadow-lg rounded-full animate-slideright cursor-pointer hover:opacity-80 transition-all"
        >
          <Link to={`/artists/${worker?.id}`}>
            <img src={worker?.image_url} alt="Name" className="rounded-full w-full object-contain aspect-square" />
          </Link>
          <p className='text-white text-sm md:text-xl text-center my-5 lowercase'>{labels.label}</p>
        </SwiperSlide>
         ))
        ))}
 </Swiper>
      </div>

    </section>
  )
}

export default AlbumDetails