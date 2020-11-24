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
    return(
        <form>
            <input placeholder="Name of the Company" value={inputCompany} type="text" className="td-company" onChange = {inpCompanyHandler}/>
            <input placeholder="Location" value={inputLocation} type="text" className="td-location" onChange = {inpLocationHandler} />
            <button className="td-button" type="submit" onClick = {submitHandler}>
                Add
            </button>
        </form>
    );
}

export default Form ;