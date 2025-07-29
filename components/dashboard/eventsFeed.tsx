import React from "react";
import {Calendar, ChevronRight, Speech} from "lucide-react";

export default function EventsFeed (props?: any) {
    return (
        <div>
            <h2 className="text-xl opacity-60 pb-2">{props?.title || 'Upcoming Events'}</h2>
            <ul className="list">
                <li className="list-row pt-4 pb-4 pl-0 pr-0">
                    <div>
                        <Calendar width={30} height={30}/>
                    </div>
                    <div className="list-col-grow">
                        <div>Independence Day</div>
                        <div className="text-xs opacity-60">2 mins ago</div>
                    </div>
                    <span className="font-semibold mr-2 opacity-50">Today</span>
                </li>

                <li className="list-row pt-4 pb-4 pl-0 pr-0">
                    <div>
                        <Calendar width={30} height={30}/>
                    </div>
                    <div className="list-col-grow">
                        <div>Client meeting</div>
                        <div className="text-xs opacity-60">45 mins ago</div>
                    </div>
                    <span className="font-semibold mr-2 opacity-50">1 h</span>
                </li>

                <li className="list-row pt-4 pb-4 pl-0 pr-0">
                    <div>
                        <Calendar width={30} height={30}/>
                    </div>
                    <div className="list-col-grow">
                        <div>Independence Day</div>
                        <div className="text-xs opacity-60">7 days ago</div>
                    </div>
                    <span className="font-semibold mr-2 opacity-50">1 w</span>
                </li>
            </ul>
            <div className="text-center">
            <button className="btn btn-link">View all</button>
            </div>
        </div>
    )
}