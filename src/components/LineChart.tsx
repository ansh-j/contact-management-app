import {
  ChartData, Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
} from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart = ({ chartData }: { chartData: ChartData<"line"> }) => {
  const options={
    responsive:true,
    maintainAspectRation:true,
    plugins:{
      legend:{
        position:"bottom" as const
      },
      title:{
        display:true,
        text:"Graph showing fluctuations in covid cases"
      }
    }
  }
  return (

    <Line data={chartData} options={options}/>
  )
}

export default LineChart