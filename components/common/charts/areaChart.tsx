'use client'

import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically load Chart with SSR disabled
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function AreaChart(props: any) {
    const labels = props?.series?.slice(0,  props?.max || 10) || [];
    const values = props?.values?.slice(0,  props?.max || 10) || [];
    const options = {
        chart: {
            height: 280,
            type: 'area',
            toolbar: { show: false },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#10B981'],
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            },
        },
        xaxis: {
            categories: labels,
        },
    }

    const series = [
        {
            name: props?.seriesName,
            data: values,
        },
    ]

    return (
        <div>
            <h2 className="text-xl opacity-60 pb-2">{props.title}</h2>
            <div className="w-full h-72">
                <Chart options={options} series={series} type="area" height="100%" width={props.width || '100%'}/>
            </div>
        </div>
    )
}