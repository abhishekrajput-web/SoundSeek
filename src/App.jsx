import {BrowserRouter, Route, Routes } from 'react-router-dom';

import { ArtistDetails, Discover, Search, SongDetails, AlbumDetails } from './pages';
import Header from './components/Header';
const App = () => {

  return (
    <div className='px-5 md:px-10 py-4'>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Discover/>}/>
      <Route path="/songs/:songId" element={<SongDetails/>}/>
      <Route path="/artists/:artistId" element={<ArtistDetails/>}/>
      <Route path="search/:searchTerm" element={<Search/>}/>
      <Route path="albums/:albumId" element={<AlbumDetails/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
