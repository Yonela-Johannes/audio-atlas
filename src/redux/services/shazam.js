import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '34ae51b724mshdb30bf885ce3511p1e8f90jsn61649cfcf55f');
            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'})
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;