import React, { useState } from 'react';

const FormPopup = ({ onSubmit }) => {
    const [income, setIncome] = useState(1000);
    const [categories, setCategories] = useState([
        { name: 'Rent', amount: 400 },
        { name: 'Food', amount: 150 },
        { name: 'Transport', amount: 50 },
        { name: 'Utilities', amount: 50 },
        { name: 'Entertainment', amount: 50 },
        { name: 'Other', amount: 50 },
    ]);

    const handleCategoryChange = (index, amount) => {
        const updatedCategories = [...categories];
        updatedCategories[index].amount = parseFloat(amount);
        setCategories(updatedCategories);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(income, categories);
    };

    return (
        <div className="popup">
            <h2 className='formtitle'>Enter Your Budget Details</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='popuptext'>Monthly Income: £ </label>
                    <input
                        className='category-input'
                        type="number"
                        value={income}
                        onChange={(e) => setIncome(parseFloat(e.target.value))}
                    />
                </div>
                {categories.map((category, index) => (
                    <div key={index}>
                        <label className='popuptext'>{category.name}: £ </label>
                        <input
                            className='category-input'
                            type="number"
                            value={category.amount}
                            onChange={(e) => handleCategoryChange(index, e.target.value)}
                        />
                    </div>
                ))}
                <button id="fly" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPopup;
