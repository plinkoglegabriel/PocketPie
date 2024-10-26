import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ income, categories }) => {
    const categoryNames = categories.map(cat => cat.name);
    const categoryValues = categories.map(cat => cat.amount);

    const data = {
        labels: categoryNames,
        datasets: [
            {
                label: 'Monthly Spending',
                data: categoryValues,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ],
                hoverBackgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ]
            }
        ]
    };

    return (
        <div className="pie-chart">
            <h2>Budget Allocation</h2>
            <Pie data={data} />
        </div>
    );
};

export default PieChart;