import SongBar from "./SongBar";


const RelatedArtists = ({data,  isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId}) => {
  return(
    <div className="flex flex-col bg-[#FAA094FF]  p-10 m-[30px]">
      <h1 className="font-bold text-[20px] ">Songs</h1>
      <div className="mt-6 w-full flex flex-col text-3xl text-[#008C76FF]">
        {data?.map((song, i) => (
          <SongBar 
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
)};

export default RelatedArtists;
