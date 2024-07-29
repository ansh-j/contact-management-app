import { ChartData } from 'chart.js';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import LineChart from './LineChart';

const LineChartSetup = () => {

    const getData = async () => {

        // Fetching World wide data of Covid cases with dates
        // Returns an object of objects
        const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        return res.json();
    }

    const { data: fetchData, isLoading } = useQuery({
        queryFn: () => getData(),
        queryKey: ["data"]
    });

    // console.log((fetchData?.deaths || {}))

    const [casesData, setCasesData] = useState<ChartData<"line">>({
        labels: [],
        datasets: [{
            label: "Number of Cases",
            data: [],
            borderColor: "rgb(75,192,192)",
            backgroundColor: "white"
        },
        {
            label: "Number of Deaths",
            data: [],
            borderColor: "yellow",
            backgroundColor: "white"
        },
        {
            label: "Number of Recovered",
            data: [],
            borderColor: "green",
            backgroundColor: "white"
        }]
    });

    useEffect(() => {

        setCasesData(({
            labels: Object.keys(fetchData?.cases || {}),
            datasets: [{
                label: "Number of Cases",
                data: Object.keys(fetchData?.cases || {}).map((key, item) => (fetchData?.cases[key])),
                borderColor: "rgb(75,192,192)",
                backgroundColor: "white"
            },
            {
                label: "Number of Deaths",
                data: Object.keys(fetchData?.deaths || {}).map((key, item) => (fetchData?.deaths[key])),
                borderColor: "yellow",
                backgroundColor: "white"
            },
            {
                label: "Number of Recovered",
                data: Object.keys(fetchData?.recovered || {}).map((key, item) => (fetchData?.recovered[key])),
                borderColor: "green",
                backgroundColor: "white"
            }]
        }))

    }, [fetchData])

    return <>
        {isLoading ?
            <div className='pt-10'>Loading...</div>
            :
            <div className='w-full'>
                <LineChart chartData={casesData} />
            </div>
        }
    </>
}

export default LineChartSetup