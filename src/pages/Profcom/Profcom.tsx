import React from 'react';
import './Profcom.css'
import MyLoader from "../../components/loader/MyLoader";

const Profcom = () => {
    return (
        <div className='skeletons'>
            <div className="body-box">
                <div className='loaders'>
                    <MyLoader/>
                    <MyLoader/>
                    <MyLoader/>
                    <MyLoader/>
                    <MyLoader/>
                    <MyLoader/>
                </div>
            </div>
        </div>
    );
};

export default Profcom;