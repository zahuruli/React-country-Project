import React from 'react';
import './App.css';
import Datafetch from './components/Country/Datafetch';

const App = () => {
    return (
        <div>
            <h1 className="appHeading"> Country App</h1>
            <Datafetch />
        </div>
    );
};

export default App;
