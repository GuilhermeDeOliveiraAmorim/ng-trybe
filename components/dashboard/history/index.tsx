import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IBalance {
    balance: number;
    createdAt: number;
}

const transactionsReport: IBalance[] = [];

for (let index = 0; index < 16; index++) {
    transactionsReport.push({ balance: Math.floor(Math.random() * 100), createdAt: index + 1 })
}

const arrCategories = transactionsReport.map(t => t.createdAt);
const arrData = transactionsReport.map(t => t.balance);

function History() {
    const state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            xaxis: {
                categories: arrCategories,
            },
            fill: {
                colors: ["#581C87", "#E91E63", "#9C27B0"],
            },
        },
        series: [
            {
                name: "saldo",
                data: arrData,
            },
        ],
    };

    return (
        <div>
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