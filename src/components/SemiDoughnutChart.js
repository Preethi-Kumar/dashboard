import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
const SemiDoughnutChart = ({ chartData,chartOptions }) => {
  return (
    <>
      <div className='semiDonutContainer'>
          <Doughnut data={chartData} options={{
          plugins: {
            legend: {
                display: false
            },
            label: {
              display: false
            },
            tooltip: {
              enabled: false
            },
          },rotation: -90,
          circumference: 180,
          tooltips:{
            enabled:false
          },
          cutout: 86
        }} />
        <p class="percent">
          76%
        </p>
      </div>
      <div className='semiDonutContent text-center'>
        <h6>$26,256</h6>
        <p className='offsetFonts'>Earning this Month</p>
        <div className=' d-flex align-items-center justify-content-center'>
          <div class="symbol-value"><p class="">+2.65%</p></div>
          <p className='offsetFonts mb-0'>From previous period</p>
        </div>
      </div>
    </>
  )
}

export default SemiDoughnutChart
