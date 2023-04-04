import { useState } from 'react'
import { Error, Loader, SongCard } from '../components'
import { useGetSongsByCountryQuery } from '../redux/services/shazam'
import { useSelector } from 'react-redux'

const Southafrica = () => {
  // const [music, setMusic] = useState()
  const {data, isFetching, error} = useGetSongsByCountryQuery()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  if(isFetching, !data) return <Loader title="loading songs" />;
  if(error) return <Error />;

  return (
  <div className='flex flex-col text-center justify-center items-center'>
      <div className='w-full flex justify-between items-center px-4 sm:flex-row flex-col mt-4 mb-10'>
          <h2 className='font-bold text-3xl text-[#008C76FF]'>South Africa</h2>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {data?.result?.tracks.map((song, i) => (
            <SongCard
                key={song.key}
                song={song}
                activeSong={activeSong}
                isPlaying={isPlaying}
                data={data}
                i={i}
            />
          ))}
      </div>
  </div>
  )
}
export default Southafrica;
