import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ServerState {
    currentValue: string;
    fixedValue: string;
}

const initialState: ServerState = {
    currentValue: '',
    fixedValue: '',
};

const serverSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {
        updateCurrentServer(state, action: PayloadAction<string>) {
            state.currentValue = action.payload;
        },
        updateFixedServer(state, action: PayloadAction<string>) {
            state.fixedValue = action.payload;
            state.currentValue = '';
        },
    },
});

export const { updateCurrentServer, updateFixedServer } = serverSlice.actions;
export default serverSlice.reducer;
