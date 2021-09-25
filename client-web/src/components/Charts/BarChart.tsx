import React, { Component } from 'react'
import { Card } from '../../components/Card/Card'
// import Chart from 'react-apexcharts'
import { barChartData, barChartOptions } from '../../variables/charts'
import dynamic from 'next/dynamic'

export const BarChart = () => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
    const [chartData, setChartData] = React.useState([])
    const [chartOptions, setChartOptions] = React.useState({})

    React.useEffect(() => {
        setChartData(barChartData)
        setChartOptions(barChartOptions)
    }, [])

    return (
        <Card
            py="1rem"
            height={{ sm: '200px' }}
            width="100%"
            bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
            position="relative"
        >
            <Chart
                options={chartOptions}
                series={chartData}
                type="bar"
                width="100%"
                height="100%"
            />
        </Card>
    )
}
