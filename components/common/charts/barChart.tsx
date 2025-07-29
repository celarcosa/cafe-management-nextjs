'use client'
import dynamic from "next/dynamic";
import React, { useState } from "react";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BarChart(props: any) {
    const labels = props?.series?.slice(0, props?.max || 10) || [];
    const values = props?.values?.slice(0, props?.max || 10) || [];
    const [chartData, setChartData] = useState({
        series: [
            {
                name: props?.seriesName,
                data: values,
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            // title: {
            //     text: props?.title,
            //     align: "left",
            // },
            xaxis: {
                categories: labels,
            },
            plotOptions: {
                bar: {
                    horizontal: props?.horizontal,
                    borderRadius: 4,
                    barHeight: "50%",
                    columnWidth: "20%",
                },
            },
            colors: ["#412eeb"],
        },
    });

    return (
        <div>
            <h2 className="text-xl opacity-60 pb-2">{props.title}</h2>
            <Chart options={chartData.options} series={chartData.series} type="bar" height={300}/>
        </div>
    )
        ;
}
