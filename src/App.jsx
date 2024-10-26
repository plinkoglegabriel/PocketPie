import React, { useState } from 'react';
import Header from './components/Header';
import PieChart from './components/PieChart';
import './App.css';

const App = () => {
    const [income, setIncome] = useState(2000);  // default monthly income
    const [categories, setCategories] = useState([
        { name: 'Rent', amount: 800 },
        { name: 'Food', amount: 300 },
        { name: 'Transport', amount: 100 },
        { name: 'Utilities', amount: 100 },
        { name: 'Entertainment', amount: 100 },
        { name: 'Other', amount: 100 },
    ]);

    return (
        <div className="app">
            <Header />
            <div className="income-input">
                <label>Monthly Income: £</label>
                <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(parseFloat(e.target.value))}
                />
            </div>
            <PieChart income={income} categories={categories} />
        </div>
    );
};

export default App;
