import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import playerReducer from './features/playerSlice';
import { fetchData } from './services/fetchData';
export const store = configureStore({
  reducer: {
    [fetchData.reducerPath] : fetchData.reducer,
    player: playerReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchData.middleware),
});
