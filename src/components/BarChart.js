import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2'
const BarChart = ({ chartData }) => {
  return (
    <>
      <Bar data={chartData} options={{
        plugins: {
          legend: {
              display: false
          },
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            ticks: {
                callback: function(value, index) {
                  if (this.getLabelForValue(value) >= 10 && this.getLabelForValue(value) < 12) {
                    return value + 'k'
                  }
                  else if (this.getLabelForValue(value) >= 20 && this.getLabelForValue(value) < 22) {
                    return value + 'k'
                  }
                  else if (this.getLabelForValue(value) >= 30 && this.getLabelForValue(value) < 32) {
                    return value + 'k'
                  }
                  else if (this.getLabelForValue(value) >= 40 && this.getLabelForValue(value) < 42) {
                    return value + 'k'
                  }
                 
                }
            }
        }
        }
     }}/>
    </>
  )
}

export default BarChart
