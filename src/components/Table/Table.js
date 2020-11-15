import React from 'react';



const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}
//Если кто то знает как это упростить ПАМАГИТЕ
//<td><button onClick={ function(){ props.removeCharacter(row.id); props.handleSubmit(props.characterData); }.bind(this)}>Delete</button></td>
const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.firstname}</td>
                <td>{row.lastname}</td>
                <td>{row.email}</td>
                <td><button onClick={ function(){ props.removeCharacter(row.id); props.handleSubmit(props.characterData); }.bind(this)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter, handleSubmit } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} handleSubmit={handleSubmit} />
            </table>
        );
}

export default Table;