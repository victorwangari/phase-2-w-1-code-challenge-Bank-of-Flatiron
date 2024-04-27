import React from 'react';
import { useState } from 'react';
import './App.css';
import Head from './components/Header';
import Search from './components/Seach';

import Form from './components/Form';

import Transactions from './components/Transactions';
function App({formData}) {
  const items = [
    {
    date:'3/04/2023',
    description:'Fuel',
    category:'Bill',
    amount:'ksh.15000'
   },
   {
    date:'5/11/2023',
    description:'Pizza',
    category:'Food',
    amount:'ksh.2100'
   },
   {
    date:'8/02/2023',
    description:'Rent',
    category:'Housing',
    amount:'ksh.20000'
   },
   {
    date:'2/07/2024',
    description:'New Shoe Sneaker',
    category:'Clothing',
    amount:'ksh.4000'
   },
   {
    date:'2/07/2024',
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
