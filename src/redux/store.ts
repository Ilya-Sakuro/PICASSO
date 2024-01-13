import { postsApi } from './services/posts';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(postsApi.middleware),
});

setupListeners(store.dispatch);
