import Header from "@/components/common/header";
import React from "react";
import {notFound} from "next/navigation";
import DonutChart from "@/components/common/charts/donutChart";
import ProductStats from "@/components/products/productStats";
import BarChart from "@/components/common/charts/barChart";
import ProductCatalog from "@/components/products/productCatalog";
import {Plus} from "lucide-react";

export default async function ProductsPage ({ params }: any) {
    const { merchantId } = await params;
    if (!merchantId || merchantId == 'undefined' || merchantId == 0) {
        notFound();
    }
    return (
        <div className="flex-grow-1">
            <div className="w-full">
                <Header title="Products" merchantId={merchantId}></Header>
                <div className="flex lg:flex-row flex-col">
                    <div
                        className="card lg:w-[35%] w-full h-auto bg-base-100 card-md shadow-sm">
                        <div className="card-body">
                            <DonutChart title="All-time Best Sellers"
                                        series={['Caramel Macchiato', 'Bolognese Spaghetti', 'Cafe Latte', 'Carbonara', 'Blueberry Cheesecake']}
                                        values={[44, 14, 20, 18, 23]} width="100%"/>
                        </div>
                    </div>
                    <div className="grow-1 lg:ml-4 ml-0 lg:mt-0 mt-4">
                        <ProductStats/>

                        <div className="w-auto h-auto mt-4">
                            <div className="card w-full h-full bg-base-100 card-md shadow-sm">
                                <div className="card-body">
                                    <BarChart title="Most Ordered In The Last 7 Days" max={5} horizontal={true}
                                              series={['Caramel Macchiato', 'Bolognese Spaghetti', 'Cafe Latte', 'Carbonara', 'Blueberry Cheesecake']}
                                              values={[44, 14, 20, 18, 23]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>

                <div className="tabs tabs-lift mt-4">
                    <input type="radio" name="products" className="tab" aria-label="Active Products" defaultChecked/>
                    <div className="tab-content bg-base-100 border-base-300 p-6">
                        <ProductCatalog/>
                    </div>

                    <input type="radio" name="products" className="tab" aria-label="Out of Stock"/>
                    <div className="tab-content bg-base-100 border-base-300 p-6">Out of Stock</div>

                    <input type="radio" name="products" className="tab" aria-label="Archived"/>
                    <div className="tab-content bg-base-100 border-base-300 p-6">Archived</div>
                </div>
            </div>
        </div>
    )
}