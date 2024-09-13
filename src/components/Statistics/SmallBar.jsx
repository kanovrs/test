import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from 'chart.js';

import Icon from '../Icon';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip
);

const MetricCard = ({ title, value, percentage, dataTop, dataBottom, dataCenter, name }) => {
    const chartData = {
        labels: Array(dataTop.length).fill(''), // Пустые метки, чтобы не отображались подписи
        datasets: [
        {
            data: dataBottom,
            backgroundColor: 'rgba(200, 200, 200, 0.5)',
            borderRadius: {
                    topLeft: 5,
                    topRight: 5,
                    bottomLeft: 5,
                    bottomRight: 5,
                },
            categoryPercentage: 0.8,
            
            },
             {
            data: dataCenter,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderRadius: 5,
            barThickness: 8,
            categoryPercentage: 0,
            barPercentage: 0.8,
        },
        
        {
            data: dataTop,
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            borderRadius: 5,
            barThickness: 8,
            categoryPercentage: 0.9,
            barPercentage: 0.8,
        },
    ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false, // Скрываем ось X
                stacked: true, // Включаем стек для оси X
                categoryPercentage: 0.8, // Процент ширины категории, занимаемой столбцами (уменьшает или увеличивает расстояние между категориями)
            },
            y: {
                display: false, // Скрываем ось Y
                beginAtZero: true, // Начинаем ось Y с нуля
                stacked: true, // Включаем стек для оси Y
            },
        },
        plugins: {
            legend: {
                display: false, // Скрываем легенду
            },
            tooltip: {
                enabled: false, // Отключаем всплывающие подсказки
            },
        },
        elements: {
            bar: {
                borderSkipped: false, // Убираем пропуск границы
            },
        },
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', width: '200px', margin: '10px' }}>
            <div style={{ marginBottom: '10px' }}>
                <Icon name={name} className='icon' />
                <h4>{title}</h4>
                <p>{value} <span style={{ color: 'green' }}>+{percentage}%</span></p>
            </div>
            <div style={{ height: '40px' }}>
                <Bar data={chartData} options={options} />
            </div>
        </div>
    );
};

const SmallBar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <MetricCard 
                title="Клики" 
                value="320,546" 
                percentage="155.50" 
                dataTop={[10, 19, 3, 5, 2, 3, 7, 10, 6, 9, 4, 8]} 
                dataCenter={[3, 4, 1, 1, 1, 1, 2, 3, 2, 2, 1, 2]} 
                dataBottom={[5, 10, 2, 4, 1, 2, 4, 5, 3, 5, 2, 6]} 
                name="leads"
            />
            <MetricCard 
                title="Выплаты" 
                value="320,546" 
                percentage="100.50" 
                dataTop={[10, 15, 20, 25, 30, 35, 20, 10, 15, 25, 30, 20]} 
                dataCenter={[3, 4, 1, 1, 1, 1, 2, 3, 2, 2, 1, 2]} 
                dataBottom={[5, 7, 12, 15, 17, 20, 12, 8, 10, 15, 17, 12]} 
            />
            <MetricCard 
                title="Лиды" 
                value="346" 
                percentage="120.50" 
                dataTop={[8, 12, 10, 14, 20, 10, 5, 10, 15, 12, 15, 20]} 
                dataCenter={[3, 4, 1, 1, 1, 1, 2, 3, 2, 2, 1, 2]} 
                dataBottom={[4, 6, 5, 7, 10, 5, 3, 5, 7, 6, 7, 10]} 
            />
            <MetricCard 
                title="Офферы" 
                value="3,246" 
                percentage="100.50" 
                dataTop={[20, 30, 25, 20, 15, 10, 5, 30, 20, 15, 25, 10]} 
                dataCenter={[3, 4, 1, 1, 1, 1, 2, 3, 2, 2, 1, 2]} 
                dataBottom={[10, 15, 12, 10, 7, 5, 3, 15, 10, 8, 12, 5]} 
            />
        </div>
    );
};

export default SmallBar;
