import React from 'react';
import '../styles/App.css';
import ServerLogin from './ServerLogin';

function App(): JSX.Element {
    return (
        <div className="app">
            <div className="app__content">
                <ServerLogin />
            </div>
        </div>
    );
}

export default App;
