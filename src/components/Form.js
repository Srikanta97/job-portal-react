import React from 'react' ;
import "..//App.css" ;

const Form = ({inputCompany, inputLocation, tableContent, setTableContent, setInputCompany, setInputLocation}) => {

    const inpCompanyHandler = (e) => {
        // console.log(e.target.value) ;
        setInputCompany(e.target.value) ;
    }

    const inpLocationHandler = (e) => {
        setInputLocation(e.target.value) ;
    }

    const submitHandler = (e) => {
        e.preventDefault() ;
        setTableContent(
            [...tableContent,
                {company:inputCompany, location:inputLocation, id:Math.random() * 1000}
            ]
        )
        setInputCompany("") ;
        setInputLocation("") ;
    }

    const deleteHandler = (e) => {
        e.preventDefault() ;
        setTableContent([]) ;
    }
    return(
        <form>
            <input placeholder="Name of the Company" value={inputCompany} type="text" className="td-company" onChange = {inpCompanyHandler}/>
            <input placeholder="Location" value={inputLocation} type="text" className="td-location" onChange = {inpLocationHandler} />
            <button style = {{backgroundColor: "#26ae60"}} type="submit" onClick = {submitHandler}>
                Add
            </button>
            <button style = {{backgroundColor: "#D63031"}} type="submit" onClick = {deleteHandler}>
                Delete All
            </button>
        </form>
    );
}

export default Form ;