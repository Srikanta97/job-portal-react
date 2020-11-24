import Form from "./components/Form" ;
import TableContent from "./components/TableContent" ;
import React, {useState} from 'react' ;
import "./App.css" ;

function App() {
  const [inputSearch, setInputSearch] = useState("") ;
  const [inputCompany, setInputCompany] = useState("") ;
  const [inputLocation, setInputLocation] = useState("") ;
  let [tableContent, setTableContent] = useState([]) ;

  const inputSearchHandler = (e) => {
    e.preventDefault() ;
    setInputSearch(e.target.value) ;
  }

  // search results
  if(inputSearch.length > 0){
    tableContent = tableContent.filter((tableRow) => {
      return tableRow.company.toLocaleLowerCase().match(inputSearch.toLocaleLowerCase()) ;
    })
  }

  return (
    <div>

      <header>
        <h3>Job Portal</h3>
        <input value={inputSearch} onChange={inputSearchHandler} placeholder="Search"/>
      </header>

      <Form inputLocation = {inputLocation} inputCompany = {inputCompany} tableContent = {tableContent} setTableContent = {setTableContent} setInputCompany={setInputCompany} setInputLocation={setInputLocation} />
      
      <TableContent tableContent = {tableContent} setTableContent = {setTableContent} />

    </div>
  ) ;
}

export default App;