import React from "react"
function Table({transactions}){
    const data = transactions.map((bill , index) =>{
        return (
            <tr key={index+1}>
                <td>{bill.date}</td>
                <td>{bill.description}</td>
                <td>{bill.category}</td>
                <td>{bill.amount}</td>
    
            </tr>   
        )
    })
    return(
        <>
        {data}
        </>
    )
}
export default Table
