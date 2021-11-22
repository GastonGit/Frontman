import React, { ChangeEvent, FormEvent } from 'react';
import '../styles/ServerLogin.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
    updateCurrentServer,
    updateFixedServer,
} from '../features/server/server-slice';
import { Grid } from '@mui/material';

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
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <p>Current Server: {fixedServer}</p>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <form onSubmit={handleServerDispatch}>
                    <label>
                        Address:
                        <input
                            id="serverInput"
                            type="text"
                            value={currentServer}
                            onChange={handleServerChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </Grid>
        </Grid>
    );
}

export default ServerLogin;
