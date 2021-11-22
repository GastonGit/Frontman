import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ServerState {
    value: string;
}

const initialState: ServerState = {
    value: '',
};

const serverSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {
        setServer(state, action: PayloadAction<string>) {
            state.value = action.payload;
        },
    },
});

export const { setServer } = serverSlice.actions;
export default serverSlice.reducer;
