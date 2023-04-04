import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { DetailsHeader, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery  } from "../redux/services/shazam";

const SongDetails = () => {

    const dispatch = useDispatch()
    const { songid } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid })
    const { data: related, isFetching: isFetchingRelatedSongs } = useGetSongRelatedQuery({ songid })

    if(isFetchingSongDetails  && isFetchingRelatedSongs && !data && !related) return <Loader title="getting song details" />

    const handlePauseClick = () => {
        dispatch(playPause(false))
      }

      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i}))
        dispatch(playPause(true))
      }

      console.log(related)
    return(
        <div className="flex flex-col">
            <DetailsHeader data={data?.result} />
            <div className="mb-10">
                <h2 className="text-[#191624] mt-2 text-[22px] font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {data?.result?.sections[1].type === 'LYRICS'
                        ? data?.result?.sections[1].text.map((line, i) => (
                            <p className="text-base my-1 text-[#191624]">{line}</p>
                        )) :
                        (<p className="my-1 text-[#191624]">Sorry , no lyrics found!</p>)
                    }
                </div>
            </div>
            <RelatedSongs
                data={related}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
            />
        </div>
    )
};

export default SongDetails;
