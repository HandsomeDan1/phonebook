import React from 'react';

const TableItem = (props: any) => {
    return (
        <tr>
            <td style={{width: '80%'}}>{props.item.title}</td>
            <td style={{width: '20%'}}>{props.item.views}</td>
        </tr>
    );
};

export default TableItem;