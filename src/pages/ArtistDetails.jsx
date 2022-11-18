import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { DetailsHeader, Error, Loader, RelatedArtists } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazam";
const ArtistDetails = () => {
    const { id: artistId } = useParams()
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data: artistData, isFetching: isFetchingArtistDetails } = useGetArtistDetailsQuery(artistId)
    if(isFetchingArtistDetails) return <Loader title="Getting Artist Details" />;

    return(
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData} />
            <RelatedArtists 
                data={Object.values(artistData?.songs)}
                isPlaying={isPlaying}
                activeSong={activeSong}
                artistId={artistId}
            />
        </div>
    )
};

export default ArtistDetails;

