import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
const DoughnutChart = ({ chartData,chartOptions }) => {
  return (
    <>
      <Doughnut data={chartData} options={{
      plugins: {
        legend: {
            display: false
        },
        label: {
          display: false
        },
      },
     }} />
    </>
  )
}

export default DoughnutChart
