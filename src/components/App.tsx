import React, { ChangeEvent, FormEvent } from 'react';
import '../styles/App.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggle, setBoolean } from '../features/switch/switch-slice';
import {
    updateCurrentServer,
    updateFixedServer,
} from '../features/server/server-slice';

function App(): JSX.Element {
    const dispatch = useAppDispatch();
    const switching = useAppSelector((state) => state.switch.value);
    const fixedServer = useAppSelector((state) => state.server.fixedValue);
    const currentServer = useAppSelector((state) => state.server.currentValue);

    function handleToggleClick() {
        dispatch(toggle());
    }

    function handleSetClick() {
        dispatch(setBoolean(true));
    }

    function handleServerDispatch(event: FormEvent<HTMLFormElement>) {
        dispatch(updateFixedServer(currentServer));
        event.preventDefault();
    }

    function handleServerChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(updateCurrentServer(event.currentTarget.value));
    }

    return (
        <div className="app">
            <button onClick={handleToggleClick}>
                switch is: {switching.toString()}
            </button>

            <button onClick={handleSetClick}>
                switch is: {switching.toString()}
            </button>

            <p>Current Server: {fixedServer}</p>
            <form onSubmit={handleServerDispatch}>
                <label>
                    Name:
                    <input
                        id="serverInput"
                        type="text"
                        value={currentServer}
                        onChange={handleServerChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default App;
