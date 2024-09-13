import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import './Statistics.scss'
import SmallBar from './SmallBar';
import TitleTxt from '../TitleTxt/TitleTxt';
import Button from '../Buttons/Button';

const Statistics = () => {
    const [legendData, setLegendData] = useState([]);

    const data = {
        labels: ['26 May', '28 May', '30 May', '02 Jun', '04 Jun'],
        datasets: [
            {
                label: 'Подтвержденные',
                data: [2700, 450, 470, 900, 500, 1200, 540],
                borderColor: '#ff6384',
                fill: false,
                tension: 0.5,
            },
            {
                label: 'Некорректные',
                data: [200, 100, 230, 800, 250, 1540, 270],
                borderColor: '#36a2eb',
                fill: false,
                tension: 0.5,
            },
            {
                label: 'Неподтвержденные',
                data: [700, 320, 900, 8500, 350, 360, 370],
                borderColor: '#cc65fe',
                fill: false,
                tension: 0.5,
            },
            {
                label: 'Отложенные',
                data: [10, 160, 1840, 150, 2200, 200, 210],
                borderColor: '#ffce56',
                fill: false,
                tension: 0.5,
            },
        ],
    };

    const maxDataValue = Math.max(...data.datasets.flatMap(d => d.data));
    const stepSize = Math.ceil((maxDataValue - 0) / 2);

    const options = {
    responsive: true,  // Эти параметры должны быть в корневом объекте options
    maintainAspectRatio: false, 
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                borderColor: 'transparent',
            },
            border: {
                display: false,
            }
        },
        y: {
            min: 0,
            max: maxDataValue + stepSize,
            grid: {
                display: false,
            },
            ticks: {
                stepSize: stepSize,
                callback: function (value) {
                    return value % stepSize === 0 ? value : '';
                },
                borderColor: 'transparent',
            },
            border: {
                display: false,
            }
        },
    },
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    const datasetLabel = context.dataset.label || '';
                    const dataPoint = context.raw || context.parsed.y;
                    return `${datasetLabel}: ${dataPoint}`;
                }
            }
        }
    },
};


    // Обновляем данные легенды при рендере
    useEffect(() => {
        const labels = data.datasets.map(dataset => ({
            label: dataset.label,
            color: dataset.borderColor,
            total: dataset.data.reduce((acc, val) => acc + val, 0),
            percent: dataset.data.reduce((acc, val) => val / 100 * 10),
        }));
        setLegendData(labels);
    }, []);

    return (
        
            <div className="statistics">

                 <div className="statistics__title title">
                    <TitleTxt titleTxt="Статистика" />
                    <div className="statistics__btn title__btn">
                        <p className='offers__btn-txt'>Сортировать по:</p>
                         <Button iconFirst='calendar' text={'26 Тра - 11 Чер'} className="icon" iconSecond="arow" classNameSecond="icon-smal" />
                    <Button iconFirst='country' text={'Усі країни'} className="icon" iconSecond="arow" classNameSecond="icon-smal" />
                    </div>
                </div>
            
            

                <div className="statistics__wraper">
                <div className="statistics__chart">
                    <h2>Конверсии</h2>
                        <Line data={data} options={options} />
                       
                    </div>
                    <div className="statistics__chart-legend">
                        {legendData.map((item, index) => (
                            <div key={index} >
                                <div className="statistics__chart-block">
                                    <p className='statistics__chart-num'>{item.total}</p>
                                    <p className='statistics__chart-percent'>{item.percent + `%`}</p>
                                </div>
                                <div className="statistics__chart-txt"><div className='circle' style={{ background: item.color }}></div>
                                    <h4>{item.label}:</h4></div>
                            </div>

                        ))}
                    </div>
                </div>
                <SmallBar />
            </div>
        

    );
};

export default Statistics;
