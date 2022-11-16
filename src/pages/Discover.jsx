import axios from 'axios';
import { useEffect, useState } from 'react';
import { Error, Loader, SongCard } from '../components'
import { genres } from "../assets/constants"
import {  useGetSongsByGenreQuery  } from '../redux/services/shazam'
import { useDispatch, useSelector } from 'react-redux'
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
    const dispatch = useDispatch()
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player)
    const {data, isFetching, error} = useGetSongsByGenreQuery(genreListId || 'POP')

    if(isFetching) return <Loader title="loading songs" />;

    if(error) return <Error />;

    const genreTitle = genres?.find(({ value }) => value === genreListId)?.title;
    return (
        <div className='flex flex-col text-center justify-center items-center'>
            <div className='w-full flex justify-between px-4 items-center sm:flex-row flex-col mt-4 mb-10'>
                <h2 className='font-bold text-3xl text-[#008C76FF]'>You are Listening to {genreTitle}</h2>
                <select
                    onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                    value={genreListId || "Amapiano"}
                    className='bg-[#FFDDE2FF] text-[#008C76FF] p-4 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
                        {genres.map((genre) => <option key={genre.value} value={genre.value} >{genre.title}</option>)}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
                {data?.map((song, i) => (
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
export default Discover;