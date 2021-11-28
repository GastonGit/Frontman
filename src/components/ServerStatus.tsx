import { useAppSelector } from '../app/hooks';
import React from 'react';

function ServerStatus(): JSX.Element {
    const fixedServer = useAppSelector((state) => state.server.fixedValue);

    return <p>Current Server: {fixedServer}</p>;
}

export default ServerStatus;
