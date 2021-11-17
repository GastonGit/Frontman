import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SwitchState {
    value: boolean;
}

const initialState: SwitchState = {
    value: false,
};

const switchSlice = createSlice({
    name: 'switch',
    initialState,
    reducers: {
        toggle(state) {
            state.value = !state.value;
        },
        setBoolean(state, action: PayloadAction<boolean>) {
            state.value = action.payload;
        },
    },
});

export const { toggle, setBoolean } = switchSlice.actions;
export default switchSlice.reducer;
