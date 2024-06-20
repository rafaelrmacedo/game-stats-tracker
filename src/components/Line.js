import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { getData } from './Data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
);

export const LineGraph = ({ dataKey }) => {
    const data = getData(dataKey);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: 'white' 
                }
            },
            title: {
                display: true,
                text: '',
                color: 'white' 
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: 'xy',
                },
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true
                    },
                    mode: 'xy',
                },
            },
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    color: 'white' 
                },
                ticks: {
                    color: 'white' 
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: ' ',
                    color: 'white'
                },
                ticks: {
                    color: 'white'
                }
            },
        },
    };

    return <Line data={data} options={options} />;
};
