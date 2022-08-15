import React, {useEffect, useState} from 'react';
import './Main.css'
import axios from "axios";
import TableItem from "../../components/TableItem";
import {log} from "util";


const Main = () => {
    const [data, setData] = useState([

    ]);

    async function getData() {
        const response = await axios.get('http://10.200.24.103:8089/adressbook/');
        setData(response.data);
    }
    useEffect(()=>{
        getData()
    },[]);


    return (
        <div>
            <div className='table-title'>Структура</div>
            <div className="body-box">
                <table className='table'>
                    <tbody>
                    <tr className='table-header'>
                        <th className='table-header-title'>Заголовок</th>
                        <th className='table-header-desc'>Просмотры</th>
                    </tr>
                    </tbody>
                    {data.map(item =>
                            <tbody>
                            <TableItem item={item}/>
                            </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default Main;