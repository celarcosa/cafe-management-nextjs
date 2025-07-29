import { formatCurrency } from "@/utils/formatCurrency";
import {PiggyBank, ShoppingCart, Package, Users, Star, Smile} from "lucide-react";

export default function DashboardStats () {
    return (
        <div>
            <div className="stats shadow flex lg:flex-row flex-col">
                <div className="stat bg-white">
                    <div className="stat-figure text-emerald-400">
                        <PiggyBank/>
                    </div>
                    <div className="stat-title">Total Revenue</div>
                    <div className="stat-value">{formatCurrency(52308.98, 'PHP', true)}</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-orange-500">
                        <ShoppingCart/>
                    </div>
                    <div className="stat-title">Completed Orders</div>
                    <div className="stat-value">2.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-rose-500">
                        <Package/>
                    </div>
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">32</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-indigo-500">
                        <Smile/>
                    </div>
                    <div className="stat-title">Customer Satisfaction Rating</div>
                    <div className="stat-value">3.8</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
    );
}