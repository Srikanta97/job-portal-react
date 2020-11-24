import React, { useState } from 'react' ;

const TableRows = ({company, location, tableContent, setTableContent, tableRow }) => {
    const [vacancy, setVacancy] = useState(0) ;
    const increaseValue = () =>{
        // e.preventDefault() ;
        setVacancy(vacancy+1) ;
    }
    const decreaseValue = () =>{
        // e.preventDefault() ;
        setVacancy(vacancy > 0 ? (vacancy-1) : vacancy) ;
    }
    const deleteHandler = () => {
        setTableContent(tableContent.filter((row) => row.id!==tableRow.id)) ;
    }

    return(
        <tr>
            <td>
                {company}
            </td>
            <td>
                {location}
            </td>
            <td>
                {vacancy}
                <button onClick = {increaseValue}>+</button>
                <button onClick = {decreaseValue}>-</button>
            </td>
            <td>
                <button onClick = {deleteHandler} style = {{backgroundColor:"#E44236"}}>D</button>
            </td>
        </tr>
    ) ;
}

export default TableRows ;