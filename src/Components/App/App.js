import React from 'react';
import Header from '../Header/Header';
import Balance from '../Balance/Balance';
import IncomeExpenses from '../IncomeExpenses/IncomeExpenses';
import TransactionList from '../TransactionList/TransactionList';
import AddTransaction from '../AddTransaction/AddTransaction';

import { GlobalProvider } from '../../Context/GlobalState';

import './App.css';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
