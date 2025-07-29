import React from "react";
import {ChevronRight} from "lucide-react";

export default function PendingOrders (props?: any) {
    return (
        <div className="card w-full h-full bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="text-xl opacity-60 pb-2">{props?.title || 'Pending Orders'}</h2>
                <ul className="list">
                    <li className="list-row pt-4 pb-4 pl-0 pr-0">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                        <div><img className="size-10 rounded-box"
                                  src="https://cooktoria.com/wp-content/uploads/2016/02/Caramel-Macchiato-Recipe-sq-1.jpg"/>
                        </div>
                        <div className="list-col-grow">
                            <div>Order #13634</div>
                            <div className="text-xs font-semibold opacity-60">Caramel Macchiato, +1 other item</div>
                            <div className="text-xs opacity-60">5 mins ago</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </li>

                    <li className="list-row pt-4 pb-4 pl-0 pr-0">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
                        <div><img className="size-10 rounded-box"
                                  src="https://www.foodrepublic.com/img/gallery/japanese-carbonara/intro-import.jpg"/>
                        </div>
                        <div className="list-col-grow">
                            <div>Order #12523</div>
                            <div className="text-xs font-semibold opacity-60">Carbonara, +2 other items</div>
                            <div className="text-xs opacity-60">3 mins ago</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </li>

                    <li className="list-row pt-4 pb-4 pl-0 pr-0">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
                        <div><img className="size-10 rounded-box"
                                  src="https://www.mybakingaddiction.com/wp-content/uploads/2022/08/plated-blueberry-cheesecake-hero.jpg"/>
                        </div>
                        <div className="list-col-grow">
                            <div>Order #14321</div>
                            <div className="text-xs font-semibold opacity-60">Blueberry Cheesecake</div>
                            <div className="text-xs opacity-60">2 mins ago</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </li>

                </ul>
                <div className="text-center">
                    <button className="btn btn-link">View all</button>
                </div>
            </div>
        </div>
    )
}