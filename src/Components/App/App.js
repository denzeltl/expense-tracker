import React from 'react';
import Header from '../Header/Header';
import Balance from '../Balance/Balance';
import IncomeExpenses from '../IncomeExpenses/IncomeExpenses';
import TransactionList from '../TransactionList/TransactionList';
import AddTransaction from '../AddTransaction/AddTransaction';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
    );
}

export default App;
