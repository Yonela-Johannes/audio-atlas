import { useParams } from "react-router-dom";
import { useSelector, useDispatch} from 'react-redux'
import { DetailsHeader, Loader } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/shazam";

const SongDetails = () => {

    const dispatch = useDispatch()
    const { songid } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid })
    if(isFetchingSongDetails  && !data) return <Loader title="getting song details" />

    return(
        <div className="flex flex-col">
            <DetailsHeader data={data?.result} />
            <div className="mb-10">
                <h2 className="text-[#191624] mt-2 text-[22px] font-bold">Lyrics:</h2>
                <div className="mt-5">
                    {data?.result?.sections[1].type === 'LYRICS'
                        ? data?.result?.sections[1].text.map((line, i) => (
                            <p key={i} className="text-base my-1 text-[#191624]">{line}</p>
                        )) :
                        (<p className="my-1 text-[#191624]">Sorry , no lyrics found!</p>)
                    }
                </div>
            </div>
        </div>
    )
};

export default SongDetails;
