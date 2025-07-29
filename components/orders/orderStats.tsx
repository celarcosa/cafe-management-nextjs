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
                    <div className="stat-value">2</div>
                    <div className="stat-desc">2 pending</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-emerald-300">
                        <PiggyBank/>
                    </div>
                    <div className="stat-title">Today's Revenue</div>
                    <div className="stat-value">{formatCurrency(51.8, 'USD', true)}</div>
                    <div className="stat-desc">Avg. Daily Revenue {formatCurrency(123.48, 'USD', true)}</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-orange-500">
                        <Clock/>
                    </div>
                    <div className="stat-title">Avg. Preparation Time</div>
                    <div className="stat-value">5.2 m</div>
                    <div className="stat-desc">Longest Time 23m</div>
                </div>
            </div>
        </div>
    );
}