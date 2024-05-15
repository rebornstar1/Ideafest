import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

function Charts(props) {

  const uniteco = {
    labels: ['Fixed Costs', 'Web Managment', 'Miscallaneous Expenses'],
      datasets: [
        {
          label: 'Equity % ',
          data: [58, 20, 22],
          backgroundColor: [
            '#FFE605',
            '#FF05C8',
            '#00FFF5',
          ],
          borderColor: [
            '#FFF000',
            '#FFF5C8',
            '#0FFFF5',
          ],
          borderWidth: 1
        }
      ]
  }

  return (
    <div className='bg-[#FFFFFF] rounded-lg p-10 pt-4 mx-auto'>
        <div className='font-semibold'>{props.title}</div>
        <div className='w-[192px] h-[192px] pt-6'>
          <Doughnut data={uniteco} className='mx-auto'/>
        </div>
    </div>
  )
}

export default Charts
