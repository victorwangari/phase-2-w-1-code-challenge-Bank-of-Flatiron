import React from "react";
import Table from "./Table";


function Transactions({transactions}){
    return (
        <div className=" mx-auto transactions">
           <table className="table table-primary   table-striped m-3 mt-4">
            <thead>
                <tr className="title">
                    <th className="text-primary fs-3">Date</th>
                    <th className="text-primary fs-3">Description</th>
                    <th className="text-primary fs-3">Category</th>
                    <th className="text-primary fs-3">Amount</th>
                </tr>
            </thead>
            <tbody>
                <Table transactions={transactions}/>
            </tbody>

           </table>
        </div>
      
    )
}
export default Transactions;