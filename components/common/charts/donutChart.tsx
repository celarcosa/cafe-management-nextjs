'use client'

import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically load Chart with SSR disabled
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function DonutChart(props: any) {
    const labels = props?.series?.slice(0, props?.max || 5) || [];
    const values = props?.values?.slice(0, props?.max || 5) || [];
    const options = {
        labels: labels,
        colors: ['#9226b1', '#5c2de8', '#4a9fe4', '#ea7146', '#e1466a'],
        dataLabels: {
            enabled: false,
            dropShadow: {
                enabled: false
            }
        },
        legend: {
            position: "bottom",
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 320,
                    },
                },
            },
        ],
    }

    return (
        <div>
            <h2 className="text-xl opacity-60 pb-2">{props.title}</h2>
            <div className="w-full h-auto">
                {/*@ts-ignore*/}
                <Chart options={options} series={values} type="donut" width={props.width || '100%'}/>
            </div>
        </div>
    )
}