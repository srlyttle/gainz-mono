import React from 'react'
import dynamic from 'next/dynamic'

import { lineChartData, lineChartOptions } from '../../variables/charts'

export const LineChart = () => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
    const [chartData, setChartData] = React.useState([])
    const [chartOptions, setChartOptions] = React.useState({})

    React.useEffect(() => {
        setChartData(lineChartData)
        setChartOptions(lineChartOptions)
    }, [])

    return (
        <Chart
            options={chartOptions}
            series={chartData}
            type="area"
            width="100%"
            height="100%"
        />
    )
}
