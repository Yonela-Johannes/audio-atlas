import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import PlayPause from './PlayPause'
import { playPause, setActiveSong } from '../redux/features/playerSlice'

const SongCard = ({song, isPlaying, activeSong , i, data}) => {
  const dispatch = useDispatch()

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i}))
    dispatch(playPause(true))
  }

  return (
    <div className={`flex flex-col w-[180px]  p-4 backdrop-blur-sm animate-slideup cursor-pointer text-center border border-[#EEA47FFF] duration-300 hover:border-[#EEA47FFF] hover:bg-[#EEA47FFF]`}>
      <div className="relative w-full h-[120px] group align-center justify-center flex">
      <img src={song?.images?.coverart} className='' />
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex rounded-lg
          ${activeSong?.title === song.title ? ' bg-opacity-70': 'hidden'}`}>
            <PlayPause 
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
        </div>
      </div>
      <div>
        <Link to={`/songs/${song.key}`}>
            <p className="text-[14px] text-[#184A45FF] font-semibold truncate">{song?.subtitle}</p>
        </Link>
      </div>
      <Link  to={song.artist ? `/artists/${song?.artist[0]?.adamid}` : `/top-artists`}>
        <p className="text-[12px] text-[#184A45FF] truncate">{song?.title}</p>
      </Link>
    </div>
  )
};

export default SongCard;
