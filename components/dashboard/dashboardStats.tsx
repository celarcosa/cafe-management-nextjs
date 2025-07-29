'use client'
import { formatCurrency } from "@/utils/formatCurrency";
import {PiggyBank, ShoppingCart, Package, Users, Star, Smile} from "lucide-react";
import {useState} from "react";

export default function DashboardStats () {
    const [selectedPeriod, setSelectedPeriod] = useState('last 7 days');
    const [statPeriod, setStatPeriod] = useState('last 7 days');
    const handlePeriodChange = (period: number) => {
        switch (period) {
            case 7: {
                setStatPeriod('last 7 days');
                setSelectedPeriod('Last 7 days');
                break;
            }
            case 30: {
                setStatPeriod('last 30 days');
                setSelectedPeriod('Last 30 days');
                break;
            }
            case 12: {
                setStatPeriod('last year');
                setSelectedPeriod('Year to Date');
                break;
            }
            default: break;
        }
    }
    return (
        <div>
            <div className="flex justify-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm rounded-full m-1">{selectedPeriod}</div>
                    <ul tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handlePeriodChange(7)}>Last 7 Days</a></li>
                        <li><a onClick={() => handlePeriodChange(30)}>Last 30 Days</a></li>
                        <li><a onClick={() => handlePeriodChange(12)}>Year to Date</a></li>
                    </ul>
                </div>
            </div>
            <div className="stats shadow flex lg:flex-row flex-col">
                <div className="stat bg-white">
                    <div className="stat-figure text-emerald-400">
                        <PiggyBank/>
                    </div>
                    <div className="stat-title">Total Revenue</div>
                    <div className="stat-value">{formatCurrency(5230.98, 'USD', true)}</div>
                    <div className="stat-desc">36% more than {statPeriod}</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-orange-500">
                        <ShoppingCart/>
                    </div>
                    <div className="stat-title">Completed Orders</div>
                    <div className="stat-value">2.6K</div>
                    <div className="stat-desc">21% more than {statPeriod}</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-rose-500">
                        <Package/>
                    </div>
                    <div className="stat-title">Total Products</div>
                    <div className="stat-value">32</div>
                    <div className="stat-desc">5% more than {statPeriod}</div>
                </div>

                <div className="stat lg:mt-0 mt-2 bg-white">
                    <div className="stat-figure text-indigo-500">
                        <Smile/>
                    </div>
                    <div className="stat-title">Customer Satisfaction Rating</div>
                    <div className="stat-value">3.8</div>
                    <div className="stat-desc">10% more than {statPeriod}</div>
                </div>
            </div>
        </div>
    );
}