import { configureStore } from '@reduxjs/toolkit';
import switchReducer from '../features/switch/switch-slice';

export const store = configureStore({
    reducer: {
        switch: switchReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
