import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ServerState {
    currentValue: string;
    fixedValue: string;
    connected: boolean;
}

const initialState: ServerState = {
    currentValue: '',
    fixedValue: 'Frontman',
    connected: false,
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
            if (action.payload.match(/^[0-9a-zA-Z]{1,16}$/)) {
                if (action.payload === 'test') {
                    state.connected = true;
                }
            }
        },
    },
});

export const { updateCurrentServer, updateFixedServer } = serverSlice.actions;
export default serverSlice.reducer;
