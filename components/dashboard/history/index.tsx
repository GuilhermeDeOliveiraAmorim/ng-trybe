import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

function History() {

    const state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            },
            fill: {
                colors: ["#581C87", "#E91E63", "#9C27B0"],
            },
        },
        series: [
            {
                name: "valores",
                data: [
                    100, 80, 120, 50, 120, 123, 135, 70, 75, 80, 90, 78, 120, 210, 120,
                    50,
                ],
            },
        ],
    };

    return (
        <div>
            <div className="bg-black-900 p-4 rounded-tl-2xl rounded-tr-2xl">
                <span className="text-white text-lg font-black">
                    Histórico do saldo
                </span>
            </div>
            <div className="bg-black-900 p-4 rounded-bl-2xl rounded-br-2xl">
                <ApexCharts
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="100%"
                    height="200px"
                />
            </div>
        </div>
    )
}

export { History };