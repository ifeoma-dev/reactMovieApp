import './App.css';
import Sidebar from './Components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MainPage from './Pages/MainPage';
import GenresPage from './Pages/GenresPage';
import EachCategoryPage from './Pages/EachCategoryPage';
import WatchMoviePage from './Pages/WatchMoviePage';

function App() {
  return (
    <div className="relative flex w-[100vw] h-[100vh] overflow-scroll scrollbar-none bg-black">
      <Sidebar
        className='w-[300px]' />

      <div className='relative z-10 flex-1 h-full'>
        <Navbar className='h-24' />

        <div className='h-full w-full pt-28 text-white'>
          <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/genres/:genreID' element={<GenresPage />} />
          <Route path='/categories/:category' element={<EachCategoryPage />} />
          <Route path='/movie/:movieID' element={<WatchMoviePage />} />
        </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;
