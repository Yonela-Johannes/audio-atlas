import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Searchbar, Sidebar, MusicPlayer, Loader } from './components';
import { Southafrica, Search, SongDetails } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  return (
      <div className="flex-1 flex flex-col text-[#008C76FF] bg-[#ffffff]">
        <Searchbar />

          <div className="flex">
            <div className="text-[#FFDDE2FF] px-4 min-w-[300px] justify-center md:flex hidden bg-[#191624]">
              <Sidebar/>
            </div>
            <div className="w-full px-6 h-[calc(100vh-100px)] overflow-y-scroll flex xl:flex-row flex-col-reverse">
              <div className="flex-1 h-fit pb-40">
                <Routes>
                  <Route path="/" element={<Southafrica />} />
                  <Route path="/songs/:songid" element={<SongDetails />} />
                  <Route path="/search/:searchTerm" element={<Search />} />
                </Routes>
              </div>
              <div className="xl:sticky bg-[#008C76FF] p-2 text-[#FFDDE2FF] relative top-0 h-fit">
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-r from-[#191624] to-[#00203FFF] backdrop-blur-sm z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
