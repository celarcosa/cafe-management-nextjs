import { formatCurrency } from "@/utils/formatCurrency";
import {PiggyBank, ShoppingCart, Package, Users, Clock} from "lucide-react";

export default function OrderStats () {
    return (
        <div>
            <div className="stats shadow flex lg:flex-row flex-col">
                <div className="stat bg-white">
                    <div className="stat-figure text-indigo-500">
                        <ShoppingCart/>
                    </div>
                    <div className="stat-title">Active Orders</div>
                    <div className="stat-value">4</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-emerald-300">
                        <ShoppingCart/>
                    </div>
                    <div className="stat-title">Pending Orders</div>
                    <div className="stat-value">2</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-orange-500">
                        <Clock/>
                    </div>
                    <div className="stat-title">Avg. Preparation Time</div>
                    <div className="stat-value">15.2 m</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
    );
}