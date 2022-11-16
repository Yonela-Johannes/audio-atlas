import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import SongBar from "./SongBar";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetSongsByCountryQuery } from "../redux/services/shazam";


const TopChartCart = ({song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex justify-center duration-100 items-center hover:bg-[#FAA094FF] hover:text-[#008C76FF] font-semibold p-4 cursor-pointer mb-2">
    <div className="w-full flex flex-row ">
      <p className="font-bold text-base mr-3">{i + 1}</p>
      <img src={song?.images?.coverart} alt={song?.title} className="w-20 h-20" />
      <div className="">
        <Link to={`/songs/${song.key}`}>
          <p className="font-bold text-base ml-3">{song?.title.slice(0, 15) + "..."}</p>
        </Link>
        <Link to={`/artist/${song?.artists[0].adamid}`}>
          <p className="font-bold text-[14px] ml-3 text-[#00203FFF] truncate">{song?.subtitle > 15 ? song?.subtitle.slice(0, 15) + "..." : song?.subtitle }</p>
        </Link>
      </div>
    </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
  </div>
)

const TopPlay = () => {
  const dispatch = useDispatch()
  const { activeSong , isPlaying } = useSelector((state) => state.player)
  const { data } = useGetSongsByCountryQuery();
  const divRef = useRef(null)

  const topPlays = data?.slice(0, 5)

  const handlePauseClick = () => {
    dispatch(playPause(false))
  }

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i}))
    dispatch(playPause(true))
  }

  return (
  <div>
    {topPlays?.map((song, i) => (
      <TopChartCart 
        key={song.key}
        song={song}
        i={i}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={() => handlePlayClick(song, i)}
      />
    ))

    }
  </div>
)};

export default TopPlay;
