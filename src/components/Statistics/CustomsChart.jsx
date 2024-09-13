import React, { useEffect, useState } from 'react';
import './CustomChart.scss';

const CustomChart = () => {
  const [chartWidth, setChartWidth] = useState(600);
  const height = 400;  // Фиксированная высота графика
  const padding = 50;  // Отступы

  // Данные для графика
  const data = {
    labels: ['26 тра', '14 Чер', '21 Чер', '19'],  // Метки по оси X
    datasets: [
      { label: 'Подтвержденные', color: '#ff6384', points: [400, 600, 500, 900] },
      { label: 'Некорректные', color: '#36a2eb', points: [150, 250, 300, 800] },
      { label: 'Неподтвержденные', color: '#cc65fe', points: [100, 250, 200,300] },
      { label: 'Отложенные', color: '#4bc0c0', points: [50, 100, 80, 400] }
    ]
  };

  // Функция для нормализации данных по оси Y
  const maxY = 900; // Максимальное значение по оси Y (для масштаба)
  const scaleY = (value) => (height - padding) - (value / maxY) * (height - 2 * padding);
  const scaleX = (index) => padding + (index * (chartWidth - 2 * padding) / (data.labels.length - 1));

  // Обработчик изменения размера окна для динамического пересчета ширины графика
  useEffect(() => {
    const handleResize = () => {
      const parentWidth = document.querySelector('.chart-container').clientWidth;
      setChartWidth(parentWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="chart-container">
      <svg
        width="100%"  // Ширина по 100% контейнера
        height={height}  // Фиксированная высота
        viewBox={`0 0 ${chartWidth} ${height}`}  // Используем viewBox для адаптивности
        className="chart"
      >
        {/* Штрихованная область по центру */}
        <rect x={scaleX(1) - 40} y={padding} width={80} height={height - 2 * padding} fill="none" stroke="#cccccc" strokeDasharray="5 5" />

        {/* Сетка по оси Y */}
        {[0, 200, 400, 600].map((yValue, index) => (
          <g key={index}>
            <line
              x1={padding}
              y1={scaleY(yValue)}
              x2={chartWidth - padding}
              y2={scaleY(yValue)}
            />
            <text
              x={padding - 10}
              y={scaleY(yValue) + 5}
              textAnchor="end"
              fontSize="12"
              fill="#333"
            >
              {yValue}
            </text>
          </g>
        ))}

        {/* Данные для каждого набора */}
        {data.datasets.map((dataset, datasetIndex) => (
          <g key={datasetIndex}>
            {/* Кривая линия с разрывами */}
            <path
              d={dataset.points.map((point, i) =>
                i === 0
                  ? `M${scaleX(i)} ${scaleY(point)}`
                  : `C${scaleX(i - 1) + 30},${scaleY(dataset.points[i - 1])} ${scaleX(i) - 30},${scaleY(point)} ${scaleX(i)},${scaleY(point)}`
              ).join(' ')}
              fill="none"
              stroke={dataset.color}
              strokeWidth={3}
            />

            {/* Точки на графике */}
            {dataset.points.map((point, i) => (
              <circle
                key={i}
                cx={scaleX(i)}
                cy={scaleY(point)}
                r={6}
                fill={dataset.color}
              />
            ))}
          </g>
        ))}

        {/* Метки по оси X с размещением между точками */}
        {data.labels.map((label, index) => (
          <text
            key={index}
            x={scaleX(index)}
            y={height - 10}
            textAnchor="middle"
            fontSize="12"
            fill="#333"
          >
            {label}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default CustomChart;