import { configureStore } from '@reduxjs/toolkit';
import serverReducer from '../features/server/server-slice';

export const store = configureStore({
    reducer: {
        server: serverReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
