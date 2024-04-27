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
    description:'Pay for a mercedes-benz at Kai & Karo',
    category:'Luxury',
    amount:'$37000'
   },
   {
    date:'5/11/2023',
    description:'Pay for a pizza at Pizza-in',
    category:'Food',
    amount:'$20'
   },
   {
    date:'8/02/2023',
    description:'Pay for a sneaker-shoe at Better-burgens',
    category:'Clothing',
    amount:'$60'
   },
   {
    date:'2/07/2024',
    description:'Pay for a new house',
    category:'Housing',
    amount:'$100000'
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
