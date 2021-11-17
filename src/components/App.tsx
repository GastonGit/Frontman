import React from 'react';
import '../styles/App.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggle, setBoolean } from '../features/switch/switch-slice';

function App(): JSX.Element {
    const switching = useAppSelector((state) => state.switch.value);
    const dispatch = useAppDispatch();

    function handleToggleClick() {
        dispatch(toggle());
    }

    function handleSetClick() {
        dispatch(setBoolean(true));
    }

    return (
        <div className="app">
            <button onClick={handleToggleClick}>
                switch is: {switching.toString()}
            </button>

            <button onClick={handleSetClick}>
                switch is: {switching.toString()}
            </button>
        </div>
    );
}

export default App;
