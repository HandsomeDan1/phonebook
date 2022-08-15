import React, {useEffect, useState} from 'react';
import TableItem from "../../components/TableItem";
import axios from "axios";
import './Npa.css'

const Npa = () => {
    const [npa, setNpa] = useState([]);

    async function getNpa() {
        const response = await axios.get('http://10.200.24.103:8089/npa/');
        setNpa(response.data);
    }
    useEffect(()=>{
        getNpa()
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
                    {npa.map(item =>
                        <tbody>
                        <TableItem item={item}/>
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default Npa;