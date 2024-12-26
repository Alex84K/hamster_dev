import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts';
import { Container, Typography } from '@mui/material';

const SolarForecast = () => {
    const [data1, setData] = useState<string[][]>([]); // Initialize as empty array

    const fetchDataSolar = () => {
        //https://services.swpc.noaa.gov/json/boulder_k_index_1m.json
        //https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json
        fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json")
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((error) => console.error(error));
    };

    const [fooArr, setFooArr] = useState<number[]>([]);
    const [fooArr1, setFooArr1] = useState<number[]>([]);

    useEffect(() => {
        fetchDataSolar();
    }, []);

    useEffect(() => {
        // Process data after it has been fetched
        if (data1.length > 0) {
            const newFooArr: number[] = [];
            const newFooArr1: number[] = [];
            data1.forEach((item, index) => {
                const KpValue = parseFloat(item[1]);
                // Only push valid values
                if (!isNaN(KpValue)) {
                    newFooArr.push(KpValue);
                    newFooArr1.push(index);
                }
            });
            setFooArr(newFooArr);
            setFooArr1(newFooArr1);
        }
    }, [data1]); // Run this effect when data1 changes

    return (
        <Container className='bg-white'>
            <Typography variant="h4" gutterBottom className='pt-4'>
                Kp Index Chart
            </Typography>
            <LineChart
                xAxis={[{ data: fooArr1,  }]}
                series={[{ data: fooArr }]}
                width={800}
                height={400}
            />
        </Container>
    );
};

export default SolarForecast;
