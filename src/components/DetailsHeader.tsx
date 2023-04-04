import { Link } from "react-router-dom";
const DetailsHeader = ({ artistId, artistData, data }) => {
  const artist = artistData?.artists[artistId].attributes

  return(
  <div className="relative w-full flex flex-col">
    <div className="flex items-center w-full bg-gradient-to-r from-transparent to-[#008C76FF] sm:h-48 h-20">
      <img
        alt="art"
        src={artistId ? artist?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
        : data?.images?.coverart
      }
      className="sm:w-40 w-20 sm:h-40 h-20 rounded-full object-cover"
      />
      <div className="ml-5 text-[#191624]">
          <p className="font-bold sm:text-[20px] text-xl">{artistId? artist?.name : data?.title}</p>
          {!artistId && (
            <Link to={`/artists/${data?.artists[0].adamid}`}>
              <p className="text-base mt-2">
                {data?.subtitle}
              </p>
            </Link>
          )}
          <p className="text-base mt-2 text-[#008C76FF]">
            {artistId ?
              artist?.genreNames[0] : data?.genres?.primary
            }
          </p>
      </div>
    </div>
  </div>
)};

export default DetailsHeader;
