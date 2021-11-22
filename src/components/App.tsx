import React from 'react';
import '../styles/App.css';
import ServerLogin from './ServerLogin';

function App(): JSX.Element {
    return (
        <div className="app">
            <ServerLogin />
        </div>
    );
}

export default App;
