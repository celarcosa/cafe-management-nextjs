import Header from "@/components/common/header";
import React from "react";
import OrderStats from "@/components/orders/orderStats";
import BarChart from "@/components/common/charts/barChart";
import PendingOrders from "@/components/dashboard/pendingOrders";
import OrdersAccordion from "@/components/orders/ordersAccordion";
import {ArrowDownUp, Funnel, Plus} from "lucide-react";
import {notFound} from "next/navigation";

export default async function OrdersPage ({ params }: any) {
    const { merchantId } = await params;
    if (!merchantId || merchantId == 'undefined' || merchantId == 0) {
        notFound();
    }
    return (
        <div className="flex-grow-1">
            <div className="w-full">
                <Header title="Orders" merchantId={merchantId}></Header>
            </div>
            <div className="flex lg:flex-row flex-col">
                <div>
                    <OrderStats/>
                    {/*<div className="w-full mt-2">*/}
                    {/*    <LineChart title="Orders" series={['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan']} values={[45, 52, 38, 45, 19, 23, 2]} />*/}
                    {/*</div>*/}
                    <div className="w-full mt-4">
                        <PendingOrders title="Longest Active Orders"/>
                    </div>
                </div>
                <div className="w-full h-auto lg:ml-4 lg:mt-0 mt-4">
                    <div className="card w-full h-full bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <div className="lg:block hidden">
                                <BarChart title="Active Orders" horizontal={true} max={7}
                                          series={['Caramel Macchiato', 'Bolognese Spaghetti', 'Cafe Latte', 'Carbonara', 'Blueberry Cheesecake', 'Flat White', 'Cappuccino']}
                                          values={[7, 2, 2, 3, 1, 2, 1]}/>
                            </div>
                            <div className="lg:hidden block">
                                <BarChart title="Active Orders" max={7}
                                          series={['Caramel Macchiato', 'Bolognese Spaghetti', 'Cafe Latte', 'Carbonara', 'Blueberry Cheesecake', 'Flat White', 'Cappuccino']}
                                          values={[7, 2, 2, 3, 1, 2, 1]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Active" defaultChecked/>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl opacity-60 pb-2">Orders</h2>
                            <button
                                className="btn btn-primary btn-circle"><Plus/>
                            </button>
                        </div>
                        <div className="mb-2">
                            <div className="flex items-center">
                                <label className="input">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                    <input type="search" className="grow" placeholder="Search"/>
                                </label>
                                <div className="tooltip" data-tip="Sort">
                                    <button className="btn btn-circle ml-2">
                                        <ArrowDownUp width={15}/>
                                    </button>
                                </div>
                                <div className="tooltip" data-tip="Filter">
                                    <button className="btn btn-circle ml-2">
                                        <Funnel width={15}/>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <OrdersAccordion/>
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Completed"/>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl opacity-60 pb-2">Orders</h2>
                            <div className="flex items-center">
                                <div className="tooltip" data-tip="Sort">
                                <button className="btn btn-circle mr-2">
                                        <ArrowDownUp width={15}/>
                                    </button>
                                </div>
                                <div className="tooltip" data-tip="Filter">
                                    <button className="btn btn-circle mr-2">
                                        <Funnel width={15}/>
                                    </button>
                                </div>
                                <label className="input">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                    <input type="search" className="grow" placeholder="Search"/>
                                </label>
                            </div>
                        </div>

                        <OrdersAccordion/>
                    </div>

                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Cancelled"/>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-xl opacity-60 pb-2">Orders</h2>
                            <div className="flex items-center">
                                <div className="tooltip" data-tip="Sort">
                                    <button className="btn btn-circle mr-2">
                                        <ArrowDownUp width={15}/>
                                    </button>
                                </div>
                                <div className="tooltip" data-tip="Filter">
                                    <button className="btn btn-circle mr-2">
                                        <Funnel width={15}/>
                                    </button>
                                </div>
                                <label className="input">
                                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 24 24">
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </g>
                                    </svg>
                                    <input type="search" className="grow" placeholder="Search"/>
                                </label>
                            </div>
                        </div>

                        <OrdersAccordion/>
                    </div>
                </div>
            </div>
        </div>
    );
}