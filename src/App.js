import React from 'react';
import { useState } from 'react';
import './App.css';
import Head from './components/Header';
import Search from './components/Seach';

import Form from './components/Form';

import Transactions from './components/Transactions';
function App() {
  const items = [
    {
    date:'2023-06-04',
    description:'Fuel',
    category:'Bill',
    amount:'ksh.15000'
   },
   {
    date:'2023-02-13',
    description:'Pizza',
    category:'Food',
    amount:'ksh.2100'
   },
   {
    date:'2023-04-23',
    description:'Rent',
    category:'Housing',
    amount:'ksh.20000'
   },
   {
    date:'2024-07-13',
    description:'New Shoe Sneaker',
    category:'Clothing',
    amount:'ksh.4000'
   },
   {
    date:'2024-06-27',
    description:'Movies',
    category:'Entertainments',
    amount:'ksh.1000'
   },
]



const [transactions, setTransactionData] = useState(items)

  return (
    <>
    <Head/>
    <Search transactions={transactions} setTransactionData={setTransactionData} items={items}/>
    <Form transactions={transactions} setTransactionData={setTransactionData}  />
    <Transactions transactions={transactions}/>
    
    </>

  
  )
}

export default App;
