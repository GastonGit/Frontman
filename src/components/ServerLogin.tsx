import React, { ChangeEvent, FormEvent } from 'react';
import '../styles/ServerLogin.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
    updateCurrentServer,
    updateFixedServer,
} from '../features/server/server-slice';
import { FormControl, Grid, TextField } from '@mui/material';

function ServerLogin(): JSX.Element {
    const dispatch = useAppDispatch();
    const fixedServer = useAppSelector((state) => state.server.fixedValue);
    const currentServer = useAppSelector((state) => state.server.currentValue);

    function handleServerDispatch(event: FormEvent<HTMLFormElement>) {
        dispatch(updateFixedServer(currentServer));
        event.preventDefault();
    }

    function handleServerChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(updateCurrentServer(event.currentTarget.value));
    }

    return (
        <Grid
            container
            className="server__block"
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item xs={12} sm={8} md={10}>
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
                            variant="filled"
                            value={currentServer}
                            onChange={handleServerChange}
                            size="small"
                        />
                    </FormControl>
                </form>
            </Grid>
            <Grid item xs={12} sm={4} md={2}>
                <p>Current Server: {fixedServer}</p>
            </Grid>
        </Grid>
    );
}

export default ServerLogin;
