import { useAppSelector } from '../app/hooks';
import React from 'react';
import { Typography } from '@mui/material';

function ServerStatus(): JSX.Element {
    const fixedServer = useAppSelector((state) => state.server.fixedValue);

    return <Typography>Current Server: {fixedServer}</Typography>;
}

export default ServerStatus;
