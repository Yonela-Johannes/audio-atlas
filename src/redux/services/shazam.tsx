import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-song-recognizer.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '34ae51b724mshdb30bf885ce3511p1e8f90jsn61649cfcf55f');
            return headers
        },
    }),
    endpoints: (builder) => ({
        getSongsByCountry: builder.query({ query: () => `top_country_tracks/?country_code=ZA&limit=50&start_from=1`}),
        getSongsSearch: builder.query({ query: (text) => `search_track/?query=${text}&limit=20&start_from=1`}),
        getSongDetails: builder.query({ query: ({songid}) => `track_about/?track_id=${songid}`}),
    })
})

export const {
    useGetSongsByCountryQuery,
    useGetSongsSearchQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;
