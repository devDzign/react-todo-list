import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";


function App() {
    return (
        <>
            <Navbar/>
            <div className="container">

                <div className="row">
                    <div className="col">
                        <TourList/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
