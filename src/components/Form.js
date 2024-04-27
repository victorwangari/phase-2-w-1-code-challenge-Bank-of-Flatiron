import React from "react";
import { useState } from "react";

function Form ({transactions, setTransactionData}){
    const [formData , setFormData] = useState({
        id:'',
        date:"",
        description:"",
        category:"",
        amount:""

    })
    function handleSubmit(event){
        event.preventDefault()
        setTransactionData([...transactions, formData])
    }
    function handleChange(event){
        console.log(event.target.value);
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    }
    return(
        <form   className="row rounded-3  form mx-auto mt-4  p-4" >
            <div className="col-3">
            <h4 className="m-2 fs-3 text-primary">Date</h4>
            <input onChange={handleChange} className=" py-2 date text-center" type="date"name="date" value={formData.date} ></input>
            </div>
            <div className="col-3">
            <h4 className="m-2 fs-3 text-primary">Description</h4>
            <input onChange={handleChange} className="px-5 py-2 text-center" type="text" name="description" value={formData.description} placeholder="description"></input>
            </div>
            <div className="col-3">
            <h4 className="m-2 fs-3 text-primary">Category</h4>
            <input onChange={handleChange} className="px-5 py-2 text-center" type="text"name="category" value={formData.category} placeholder="category"></input>
            </div>
            <div className="col-3">
            <h4 className="m-2 fs-3 text-primary">Amount</h4>
            <input onChange={handleChange} className="px-5 py-2 text-center" type="text" name="amount" value={formData.amount} placeholder="amount"></input>
            </div>
            <div onClick={handleSubmit} className="col-12 text-center mt-4" >
            <button type="submit" className="px-4  btn">Add Transactions</button>
            </div>
        </form>
    )
}
export default Form;