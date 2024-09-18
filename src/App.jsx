import React, {useState} from 'react'
import "./App.css"

const App = () => {
  const [input, setInput]=useState('');
  const [amount, setAmount]=useState('');
  const [expenses, setExpenses]=useState([]);

  const addExpense=()=>{
    if(!input || !setInput){
      return;
    }
    const newExpense={
      id:expenses.length+1,
      title: input,
      amount: amount
    };

    setExpenses([...expenses, newExpense]);
    setInput('');
    setAmount('');

  }
  const deleteExpense=(id)=>{
    const updatedExpenses=expenses.filter(expense=>expense.id!==id);
    setExpenses(updatedExpenses);
  }
  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <input type='text' placeholder='Expense'
        value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <input type='number' placeholder='Amount'
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
        />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className='expense-list'>
        {
          expenses.map((expenses)=>(
            <li key={expenses.id}>
              <span>{expenses.title}</span> - <span>${expenses.amount}</span>
              <button onClick={()=>deleteExpense(expenses.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
