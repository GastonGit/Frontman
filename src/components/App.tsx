import React from 'react';
import '../styles/App.css';
import imageExample from '../assets/image1.jpg';
import { useAppSelector } from '../app/hooks';

function App(): JSX.Element {
    const connected = useAppSelector((state) => state.server.connected);

    return (
        <div className="app">
            <div className="app__content">
                {connected && <img src={imageExample} />}
            </div>
        </div>
    );
}

export default App;
