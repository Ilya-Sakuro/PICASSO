import type { IPost } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: builder => ({
        fetchAllPosts: builder.query<
            IPost[],
            { limit?: number; start?: number }
        >({
            query: ({ limit = 5, start = 0 }) =>
                `/posts?_limit=${limit}&_start=${start}`,

            // serializeQueryArgs: ({ endpointName }) => {
            //     return endpointName;
            // },
            // merge(currentCacheData, responseData) {
            //     currentCacheData.push(...responseData);
            // },
            // forceRefetch({ currentArg, previousArg }) {
            //     return currentArg !== previousArg;
            // },
        }),
        fetchPostById: builder.query<IPost, string>({
            query: (id: string = '1') => ({
                url: `/posts/${id}`,
            }),
        }),
    }),
});
export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postsApi;
