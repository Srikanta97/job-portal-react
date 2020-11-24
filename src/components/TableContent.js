import React from 'react' ;
import TableRows from './TableRows' ;

const TableContent = ({ tableContent, setTableContent }) => {
    return (
      <table>
        <thead>
            <tr>
                <th>Company</th>
                <th>Location</th>
                <th>Vacancies</th>
                <th>Remove</th>
            </tr>
        </thead>
        <tbody>
           { tableContent.map( (tableRow, index) => (
              <TableRows key = {index} company = {tableRow.company} location = {tableRow.location}
              tableContent = {tableContent} setTableContent = {setTableContent} tableRow = {tableRow} />
            ))
           }
        </tbody>
      </table>
    )
}

export default TableContent ;