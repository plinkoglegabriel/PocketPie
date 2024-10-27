import React, { useState } from 'react';
import Header from './components/Header';
import PieChart from './components/PieChart';
import WelcomePopup from './components/WelcomePopup';
import FormPopup from './components/FormPopup';
import './App.css';

const App = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showPieChart, setShowPieChart] = useState(false);
    const [income, setIncome] = useState(2000); // default monthly income
    const [categories, setCategories] = useState([
        { name: 'Rent', amount: 900 },
        { name: 'Food', amount: 300 },
        { name: 'Transport', amount: 200 },
        { name: 'Utilities', amount: 200 },
        { name: 'Entertainment', amount: 200 },
        { name: 'Other', amount: 200 },
    ]);

    const handleStart = () => {
        setShowWelcome(false);
        setShowForm(true);
    };

    const handleFormSubmit = (newIncome, newCategories) => {
        setIncome(newIncome);
        setCategories(newCategories);
        setShowForm(false);
        setShowPieChart(true);
    };

    return (
        <div className="app">
            <Header />
            {showWelcome && <WelcomePopup onStart={handleStart} />}
            {showForm && <FormPopup onSubmit={handleFormSubmit} />}
            {showPieChart && <PieChart income={income} categories={categories} />}
        </div>
    );
};

export default App;
