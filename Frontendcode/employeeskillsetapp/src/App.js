import React from 'react';
import './App.css';
import DispPage from './components/DispPage.js'
import NavBar from './components/NavBar'
function App() {
    return (
        <div className="App">
            <NavBar />
            <DispPage />
        </div>
    );
}
export default App;