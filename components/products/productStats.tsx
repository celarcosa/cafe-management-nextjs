import {PiggyBank, ShoppingCart, Package, Users, Clock, PackageX} from "lucide-react";

export default function ProductStats () {
    return (
        <div>
            <div className="stats shadow flex lg:flex-row flex-col">
                <div className="stat bg-white">
                    <div className="stat-figure text-indigo-500">
                        <Package/>
                    </div>
                    <div className="stat-title">Products</div>
                    <div className="stat-value">34</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-error">
                        <PackageX />
                    </div>
                    <div className="stat-title">Out of Stock</div>
                    <div className="stat-value">3</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
    );
}