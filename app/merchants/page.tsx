import Header from "@/components/common/header";
import {EllipsisVertical} from "lucide-react";

export default function MerchantsPage() {
    return (
        <div className="flex-grow-1">
            <div className="w-full">
                <Header title="Merchants" merchants={true}></Header>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox"/>
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Domain</th>
                                <th>Industry</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox"/>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://www.pngplay.com/wp-content/uploads/8/Starbucks-Coffee-Logo-PNG-HD-Quality.png"
                                                    alt="Merchant Logo"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Starbucks</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    https://starbucks.com
                                </td>
                                <td>Food & Beverage</td>
                                <th>
                                    <button className="btn btn-ghost btn-circle btn-xs"><EllipsisVertical /></button>
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}