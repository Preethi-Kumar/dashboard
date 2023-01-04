import React from 'react'
import { Line } from 'react-chartjs-2'
const LineChart = ({ chartData }) => {
  return (
    <>
      <Line data={chartData} options={{
      plugins: {
        legend: {
            display: false
        },
        label: {
          display: false
        },
        scaleShowVerticalLines: false
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
      }
     }} />
    </>
  )
}

export default LineChart
