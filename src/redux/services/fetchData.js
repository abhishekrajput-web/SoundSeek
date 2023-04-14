import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

    export const fetchData = createApi({
        reducerPath: "fetchData",
        baseQuery: fetchBaseQuery({
          baseUrl:'https://genius-song-lyrics1.p.rapidapi.com',

          prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '53b7287d96msh5f6ec404aea3eb6p16892djsn9940166e3a4d');
            return headers;
          },
        }),
        endpoints:(builder) => ({
          getTopCharts: builder.query({query: () => "/chart/songs/"}),
          getSongDetails: builder.query({query: ({songId}) => `/song/details/?id=${songId}`}),
          getRelatedSongs: builder.query({query: ({songId}) => `/song/recommendations/?id=${songId}`}),
          getArtistDetails: builder.query({query: ({artistId}) => `/artist/details/?id=${artistId}`}),
          getArtistSongs: builder.query({query: ({artistId}) => `/artist/songs/?id=${artistId}`}),
          getArtistAlbums: builder.query({query: ({artistId}) => `/artist/albums/?id=${artistId}`}),
          getSearchSongs: builder.query({query: (searchTerm) => `/search/?q=${searchTerm}`}),
          getVideoSongs: builder.query({query: () => `/videos/`}),
          getArtistCharts: builder.query({query: () => `chart/artists/`}),
          getAlbumCharts: builder.query({query: () => `/chart/albums/`}),
          getAlbumDetails:builder.query({query: ({albumId}) => `album/details/?id=${albumId}`})
        })
    });

    export const {
      useGetTopChartsQuery, 
      useGetSongDetailsQuery, 
      useGetRelatedSongsQuery,
      useGetArtistDetailsQuery,
      useGetArtistSongsQuery,
      useGetArtistAlbumsQuery,
      useGetSearchSongsQuery,
      useGetVideoSongsQuery,
      useGetArtistChartsQuery,
      useGetAlbumChartsQuery,
      useGetAlbumDetailsQuery,
    } = fetchData;
