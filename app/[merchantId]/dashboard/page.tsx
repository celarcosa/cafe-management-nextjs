import DashboardStats from "@/components/dashboard/dashboardStats";
import Header from "@/components/common/header";
import AreaChart from "@/components/common/charts/areaChart";
import React from "react";
import PendingOrders from "@/components/dashboard/pendingOrders";
import StaffOnDuty from "@/components/dashboard/staffOnDuty";
import DonutChart from "@/components/common/charts/donutChart";
import LineChart from "@/components/common/charts/lineChart";
import NewsFeed from "@/components/dashboard/newsFeed";
import EventsFeed from "@/components/dashboard/eventsFeed";
import {formatCurrency} from "@/utils/formatCurrency";
import {notFound} from "next/navigation";

export default async function DashboardPage ({ params }: any) {
    const { merchantId } = await params;
    if (!merchantId || merchantId == 'undefined' || merchantId == 0) {
        notFound();
    }
    return (
        <div className="flex-grow-1">
            <div className="w-full">
                <Header title="Dashboard" merchantId={merchantId}></Header>
            </div>
            <div className="w-full">
                <div className="flex justify-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm rounded-full m-1">Last 7 Days</div>
                        <ul tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a>Last 7 Days</a></li>
                            <li><a>Last 30 Days</a></li>
                            <li><a>Year to Date</a></li>
                        </ul>
                    </div>
                </div>
                <DashboardStats/>
            </div>
            <div className="mt-4">
                <div className="grid lg:grid-cols-[1fr_35%] grid-cols-1 lg:grid-rows-1 grid-rows-2 gap-4">
                    <div className="card w-full h-full bg-base-100 card-md shadow-sm lg:col-start-1 row-start-1">
                        <div className="card-body">
                            <AreaChart title="Revenue"
                                       series={['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan']}
                                       values={[305, 357, 571, 453, 221, 328, 245]} width="100%"/>
                            <div className="flex justify-end items-center text-xs opacity-60">
                                <div className="mr-2">Avg. Revenue</div>
                                <div className="">{formatCurrency(27200, 'PHP', true)}</div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="card w-full h-auto bg-base-100 card-md shadow-sm lg:col-start-2 lg:row-start-1 row-start-2">
                        <div className="card-body">
                            <div className="w-full mt-2">
                                <LineChart title="Sales"
                                           series={['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan']}
                                           values={[45, 52, 138, 45, 19, 53, 32]}/>
                                <div className="flex justify-end items-center text-xs opacity-60">
                                    <div className="mr-2">Avg. Sales</div>
                                    <div className="">5 orders</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="mt-4">
                <div className="grid lg:grid-cols-[40%_30%_1fr] grid-cols-1 lg:grid-rows-1 grid-rows-3 gap-4">
                    <div
                        className="card w-full bg-base-100 card-md shadow-sm lg:col-start-1 row-start-1">
                        <div className="card-body">
                            <NewsFeed/>
                        </div>
                    </div>
                    <div
                        className="card w-full h-full bg-base-100 card-md shadow-sm lg:col-start-2 lg:row-start-1 row-start-2">
                        <div className="card-body">
                            <DonutChart title="Best Sellers"
                                        series={['Caramel Macchiato', 'Bolognese Spaghetti', 'Cafe Latte', 'Carbonara', 'Blueberry Cheesecake']}
                                        values={[44, 14, 20, 18, 23]} width="100%"/>
                        </div>
                    </div>
                    <PendingOrders/>
                </div>
            </div>
            <div className="mt-4">
                <div className="grid lg:grid-cols-[35%_1fr] grid-cols-1 lg:grid-rows-1 grid-rows-2 gap-4">
                    <div
                        className="card w-full bg-base-100 card-md shadow-sm lg:col-start-1 row-start-1">
                        <div className="card-body">
                            <EventsFeed/>
                        </div>
                    </div>

                    <div className="lg:col-start-2 lg:row-start-1 row-start-2">
                        <StaffOnDuty/>
                    </div>
                </div>
            </div>
        </div>
    );
}