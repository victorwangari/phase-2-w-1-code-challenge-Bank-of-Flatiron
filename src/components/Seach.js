import React from "react";
function Search({transactions, setTransactionData, items}){
    function handleChange (e) {
        const hint = e.target.value
        if(hint.length>0){
            const filter = transactions.filter((data)=>{
                return data.description.toLowerCase().includes(hint.toLowerCase())
            })
            if(filter.length>0){
                setTransactionData([...filter])
            }
           }
           else{
            setTransactionData([...items])
           }
        }
        return(

            <div className="mx-auto mt-2 search">
               <form className="d-flex" role="search">
                 <input onChange={handleChange} className="form-control me-2" type="search" placeholder="Search by description...." aria-label="Search "></input>
                 <button  className="btn btn-outline-success" type="submit">Search </button>
               </form>
           </div>
        )
}
export default Search;