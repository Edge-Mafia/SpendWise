"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);
type array2 = [[string, number]];
// @ts-ignore
export default function PieChart({ chartData }) {
  // @ts-ignore
  let data = {
    labels: Object.keys(chartData),
    datasets: [{
      data: Object.values(chartData),
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ]
    }]
  }
  // setDat(data);

  return (
    <div className="w-full pt-5 bg-zinc-900 text-white" >

      <div className="mx-auto w-full md:w-1/3">
        {
        }
        {
          /* @ts-ignore */
          Object.keys(data).length &&
          /* @ts-ignore */
          <Doughnut data={data} className='text-white'
          />
        }
      </div>
    </div >
  );
}