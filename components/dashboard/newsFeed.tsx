import React from "react";
import {ChevronRight, Speech} from "lucide-react";

export default function NewsFeed (props?: any) {
    return (
        <div>
            <h2 className="text-xl opacity-60 pb-2">{props?.title || 'News Feed'}</h2>
            <ul className="list">
                <li className="list-row pt-4 pb-4 pl-0 pr-0">
                    <div><img className="size-10 rounded-box"
                              src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84546e71fa90e0cd73a5133e92"/>
                    </div>
                    <div className="list-col-grow">
                        <div>Admin published a post</div>
                        <div className="text-xs opacity-60">5 mins ago</div>
                    </div>
                    <div className="flex items-center">
                        <Speech/>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </div>
                </li>

                <li className="list-row pt-4 pb-4 pl-0 pr-0">
                    <div><img className="size-10 rounded-box"
                              src="https://i.scdn.co/image/ab67616100005174b68234e1a673acc3d873d3e6"/>
                    </div>
                    <div className="list-col-grow">
                        <div>Customer A posted a review</div>
                        <div className="text-xs opacity-60">5 mins ago</div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="rating rating-sm">
                                <div className="mask mask-star bg-primary" aria-label="star" aria-current="true"></div>
                            </div>
                            <div className="text-lg font-semibold ml-2">3.5</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </div>
                </li>

                <li className="list-row pt-4 pb-4 pl-0 pr-0">
                    <div><img className="size-10 rounded-box"
                              src="https://images.genius.com/1a4b2f40c637e1258577a2608c835c70.400x400x1.jpg"/>
                    </div>
                    <div className="list-col-grow">
                        <div>Customer B posted a review</div>
                        <div className="text-xs opacity-60">5 mins ago</div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <div className="rating rating-sm">
                                <div className="mask mask-star bg-primary" aria-label="star" aria-current="true"></div>
                            </div>
                            <div className="text-lg font-semibold ml-2">4.0</div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <ChevronRight/>
                        </button>
                    </div>
                </li>
            </ul>

            <div className="text-center">
                <button className="btn btn-link">View all</button>
            </div>
        </div>
    )
}