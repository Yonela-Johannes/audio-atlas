import { Error, Loader, SongCard } from '../components'
import { useParams } from 'react-router-dom';
import {  useGetSongsSearchQuery  } from '../redux/services/shazam'
import { useSelector } from 'react-redux'

const Search = () => {
    const  { searchTerm }  = useParams()

    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const {data, isFetching, error} = useGetSongsSearchQuery(searchTerm)

    if(isFetching && !data) return <Loader title="loading songs" />;
    if(error) return <Error />;
  const songs = data?.result?.hits?.map((song) => song.track)
    return (
        <div className='flex flex-col text-center justify-center items-center'>
            <div className='w-full flex justify-between px-4 items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-[#008C76FF]'>You are looking for, {searchTerm}</h2>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {songs?.map((song, i) => (
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
export default Search;
