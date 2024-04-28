import React, { useState } from 'react';
import './App.css';
import Transaction from './Transaction';
import TransactionForm from './TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([
    { date: '2024-04-01', description: 'House', category: 'Rent', amount: 'Kshs 1500' },
    { date: '2024-04-02', description: 'Fare', category: 'Transport', amount: 'Kshs 500' },
    { date: '2024-04-03', description: 'Food', category: 'Shopping', amount: 'Kshs 300' },
    { date: '2024-04-04', description: 'Salary', category: 'Income', amount: 'Kshs 10000' },
    { date: '2024-04-05', description: 'Fun', category: 'Entertainment', amount: 'Kshs 100' },
    { date: '2024-04-06', description: 'House', category: 'Rent', amount: 'Kshs 1000' },
    { date: '2024-04-03', description: 'Food', category: 'Shopping', amount: 'Kshs 300' },
    { date: '2024-04-05', description: 'Fun', category: 'Entertainment', amount: 'Kshs 100' },
    { date: '2024-04-01', description: 'House', category: 'Rent', amount: 'Kshs 1500' },
    { date: '2024-04-30', description: 'Food', category: 'Shopping', amount: 'Kshs 600' },
    { date: '2024-04-17', description: 'House', category: 'Rent', amount: 'Kshs 500' },
    { date: '2024-04-15', description: 'Fun', category: 'Entertainment', amount: 'Kshs 100' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>The Royal Bank of Flatiron</p>
      </header>
      <br />
      <form>
        <input
          className='input1'
          type="text"
          placeholder='Search Your Recent Transactions'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <br />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <br />
      <div className='Table'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <Transaction
                key={index}
                date={transaction.date}
                description={transaction.description}
                category={transaction.category}
                amount={transaction.amount}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
