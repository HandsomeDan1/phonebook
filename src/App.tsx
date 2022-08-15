import React from 'react';
import './App.css'
import Navbar from "./components/navbar/navbar";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Profcom from "./pages/Profcom/Profcom";
import Npa from "./pages/Npa/Npa";
import Search from "./pages/Search/Search";
import Log from "./pages/Log/Log";
import Help from "./pages/Help/Help";
import Login from "./pages/Login/Login";


const App = () => {
    return (
        <BrowserRouter>
            <Link className='header' to='/'>
                <div className='header-title'>Телефонный справочник</div>
                <div className='header-description'>Министерства финансов кыргызской республики</div>
            </Link>
            <div className='body'>
                <Navbar/>
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/profcom' element={<Profcom/>}/>
                        <Route path='/npa' element={<Npa/>}/>
                        <Route path='/search' element={<Search/>}/>
                        <Route path='/log' element={<Log/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/help' element={<Help/>}/>
                    </Routes>
            </div>
            <div className='footer'>
                *links
            </div>
        </BrowserRouter>
    );
};

export default App;