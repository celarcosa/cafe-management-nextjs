import React from "react";
import {ChevronRight} from "lucide-react";

export default function StaffOnDuty () {
    return (
        <div className="card w-full bg-base-100 card-md shadow-sm">
            <div className="card-body">
                <h2 className="text-xl opacity-60 pb-2">Staff On-Duty</h2>
                <ul className="list">
                    <li className="list-row pt-4 pb-4 pl-0 pr-0">
                        <div><img className="size-10 rounded-box"
                                  src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84546e71fa90e0cd73a5133e92"/>
                        </div>
                        <div className="list-col-grow">
                            <div>John Doe</div>
                                <div className="text-xs uppercase font-semibold opacity-60">Manager</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </li>

                    <li className="list-row pt-4 pb-4 pl-0 pr-0">
                        <div><img className="size-10 rounded-box"
                                  src="https://cdn-images.dzcdn.net/images/artist/9f62fb085d0ce42a5ed3839493bc0c5b/1900x1900-000000-80-0-0.jpg"/>
                        </div>
                        <div className="list-col-grow">
                            <div>Jane Doe</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Cashier</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </li>

                    <li className="list-row pt-4 pb-4 pl-0 pr-0">
                        <div><img className="size-10 rounded-box"
                                  src="https://i.scdn.co/image/ab67616100005174b68234e1a673acc3d873d3e6"/>
                        </div>
                        <div className="list-col-grow">
                            <div>John Doe Jr.</div>
                            <div className="text-xs uppercase font-semibold opacity-60">Kitchen</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </li>

                </ul>
            </div>
        </div>
    )
}