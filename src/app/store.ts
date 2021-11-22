import { configureStore } from '@reduxjs/toolkit';
import switchReducer from '../features/switch/switch-slice';
import serverReducer from '../features/server/server-slice';

export const store = configureStore({
    reducer: {
        switch: switchReducer,
        server: serverReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
