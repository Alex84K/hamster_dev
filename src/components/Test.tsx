import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface KpIndexData {
    time: string;
    kp24: number;
    kp25: number;
    kp26: number;
}

interface KpBreakdownData {
    time: string;
    kp24: number;
    kp25: number;
    kp26: number;
}

const Test = () => {
    const [kpData, setKpData] = useState<KpIndexData[]>([]);
    const [kpBreakdownData, setKpBreakdownData] = useState<KpBreakdownData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            // Запрос для Kp индекса
            const responseKp = await fetch('https://services.swpc.noaa.gov/text/3-day-geomag-forecast.txt');
            const textKp = await responseKp.text();

            // Парсинг данных индекса Kp
            const linesKp = textKp.split('\n');
            const kpIndexLines = linesKp.slice(linesKp.indexOf('NOAA Kp index forecast 24 Dec - 26 Dec') + 2);
            const parsedData: KpIndexData[] = kpIndexLines.map(line => {
                const parts = line.trim().split(/\s+/);
                return {
                    time: parts[0],
                    kp24: parseFloat(parts[1]),
                    kp25: parseFloat(parts[2]),
                    kp26: parseFloat(parts[3]),
                };
            }).filter(data => data.time);

            setKpData(parsedData);

            // Запрос для разбивки Kp индекса
            const responseBreakdown = await fetch('https://services.swpc.noaa.gov/text/3-day-forecast.txt');
            const textBreakdown = await responseBreakdown.text();

            // Парсинг данных разбивки Kp
            const linesBreakdown = textBreakdown.split('\n');
            const kpBreakdownLines = linesBreakdown.slice(linesBreakdown.indexOf('NOAA Kp index breakdown Dec 24-Dec 26 2024') + 2);
            const parsedBreakdownData: KpBreakdownData[] = kpBreakdownLines.map(line => {
                const parts = line.trim().split(/\s+/);
                return {
                    time: parts[0],
                    kp24: parseFloat(parts[1]),
                    kp25: parseFloat(parts[2]),
                    kp26: parseFloat(parts[3]),
                };
            }).filter(data => data.time);

            setKpBreakdownData(parsedBreakdownData);
        };

        fetchData();
    }, []);


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-10 mx-auto'>
                    <h1 className='mt-4'>Geomagnetic Forecast</h1>
                    <LineChart width={600} height={300} data={kpData} className='mx-auto mt-5'>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="kp24" stroke="#8884d8" name="Kp Index 24 Dec" />
                        <Line type="monotone" dataKey="kp25" stroke="#82ca9d" name="Kp Index 25 Dec" />
                        <Line type="monotone" dataKey="kp26" stroke="#ffc658" name="Kp Index 26 Dec" />
                    </LineChart>

                    <h2 className='mt-4'>Kp Index Breakdown</h2>
                    <LineChart width={600} height={300} data={kpBreakdownData} className='mx-auto mt-5'>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="kp24" stroke="#ff7300" name="Kp Breakdown 24 Dec" />
                        <Line type="monotone" dataKey="kp25" stroke="#00C49F" name="Kp Breakdown 25 Dec" />
                        <Line type="monotone" dataKey="kp26" stroke="#FFBB28" name="Kp Breakdown 26 Dec" />
                    </LineChart>
                </div>
            </div>
        </div>
    );
}

export default Test;
