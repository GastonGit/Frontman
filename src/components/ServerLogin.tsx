import React, { ChangeEvent, FormEvent } from 'react';
import '../styles/ServerLogin.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
    updateCurrentServer,
    updateFixedServer,
} from '../features/server/server-slice';
import { FormControl, TextField } from '@mui/material';

function ServerLogin(): JSX.Element {
    const dispatch = useAppDispatch();
    const currentServer = useAppSelector((state) => state.server.currentValue);

    function handleServerDispatch(event: FormEvent<HTMLFormElement>) {
        dispatch(updateFixedServer(currentServer));
        event.preventDefault();
    }

    function handleServerChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(updateCurrentServer(event.currentTarget.value));
    }

    return (
        <form onSubmit={handleServerDispatch}>
            <FormControl
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}
            >
                <TextField
                    label="Server"
                    variant="outlined"
                    value={currentServer}
                    onChange={handleServerChange}
                    size="small"
                />
            </FormControl>
        </form>
    );
}

export default ServerLogin;
