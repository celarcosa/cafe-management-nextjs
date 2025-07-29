import React from "react";
import {ArrowDownUp, EllipsisVertical, Funnel, Heart, Plus, ShoppingCart} from "lucide-react";

export default function ProductCatalog(props?: any) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl opacity-60 mb-4">Beverages</h2>
                {!props?.public && (
                    <button
                        className="btn btn-primary btn-circle"><Plus/>
                    </button>
                )}
            </div>
            <div className="flex items-center">
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search"/>
                </label>
                <div className="tooltip" data-tip="Sort">
                    <button className="btn btn-circle ml-2">
                        <ArrowDownUp width={15}/>
                    </button>
                </div>
                <div className="tooltip" data-tip="Filter">
                    <button className="btn btn-circle ml-2">
                        <Funnel width={15}/>
                    </button>
                </div>
            </div>
            <div className={`grid lg:grid-cols-5 grid-cols-2 gap-4 mt-2`}>
                <div className="card bg-base-100 w-full shadow-sm col-start-1">
                    <figure className="h-[175px]">
                        <img
                            src="https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg"
                            alt="Latte" className="w-full h-full object-cover object-center"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title line-clamp-2">Cafe Latte</h2>
                        <p className="line-clamp-4 text-xs">A coffee drink made with espresso and steamed milk, topped with a
                            thin layer of foamed
                            milk.</p>
                        <div className="card-actions justify-end items-center">
                            {!props?.public && (
                                <div>
                                    <button className="btn btn-primary rounded-full">Edit</button>
                                    <div className="dropdown dropdown-end ml-2">
                                        <div tabIndex={0} role="button"
                                             className="btn btn-link text-black rounded-full p-0">
                                            <EllipsisVertical/></div>
                                        <ul tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a>Mark out of stock</a></li>
                                            <li><a>Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {props?.public && (
                                <div>
                                    <div className="tooltip" data-tip="Save to Favorites">
                                        <button className="btn btn-link btn-circle hover:text-error text-black rounded-full">
                                            <Heart/>
                                        </button>
                                    </div>
                                    <div className="tooltip ml-1" data-tip="Add to Cart">
                                        <button className="btn btn-primary btn-circle rounded-full">
                                            <ShoppingCart/>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-sm col-start-2">
                    <figure className="h-[175px]">
                        <img
                            src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211029_CaramelMacchiato.jpg?impolicy=1by1_wide_topcrop_630&crop=180,360,1440,1440&wid=630&hei=630&qlt=85"
                            alt="Latte" className="w-full h-full object-cover object-center"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title line-clamp-2">Caramel Macchiato</h2>
                        <p className="line-clamp-4 text-xs">A coffee beverage that combines espresso, steamed milk, vanilla
                            syrup, and caramel sauce,
                            typically served hot or iced
                            milk.</p>
                        <div className="card-actions justify-end items-center">
                            {!props?.public && (
                                <div>
                                    <button className="btn btn-primary rounded-full">Edit</button>
                                    <div className="dropdown dropdown-end ml-2">
                                        <div tabIndex={0} role="button"
                                             className="btn btn-link text-black rounded-full p-0">
                                            <EllipsisVertical/></div>
                                        <ul tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a>Mark out of stock</a></li>
                                            <li><a>Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {props?.public && (
                                <div>
                                    <div className="tooltip" data-tip="Save to Favorites">
                                        <button className="btn btn-link btn-circle hover:text-error text-black rounded-full">
                                            <Heart/>
                                        </button>
                                    </div>
                                    <div className="tooltip ml-1" data-tip="Add to Cart">
                                        <button className="btn btn-primary btn-circle rounded-full">
                                            <ShoppingCart/>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-sm lg:col-start-3 col-start-1">
                    <figure className="h-[175px]">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZp4yO6IciZyCO4Bo7F9W5f_EypD_J32SWWw&s"
                            alt="Latte" className="w-full h-full object-cover object-center"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title line-clamp-2">Cappuccino</h2>
                        <p className="line-clamp-4 text-xs">A classic Italian coffee drink made with espresso, steamed milk, and
                            milk foam, typically in
                            equal proportions.</p>
                        <div className="card-actions justify-end items-center">
                            {!props?.public && (
                                <div>
                                    <button className="btn btn-primary rounded-full">Edit</button>
                                    <div className="dropdown dropdown-end ml-2">
                                        <div tabIndex={0} role="button"
                                             className="btn btn-link text-black rounded-full p-0">
                                            <EllipsisVertical/></div>
                                        <ul tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a>Mark out of stock</a></li>
                                            <li><a>Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {props?.public && (
                                <div>
                                    <div className="tooltip" data-tip="Save to Favorites">
                                        <button className="btn btn-link btn-circle hover:text-error text-black rounded-full">
                                            <Heart/>
                                        </button>
                                    </div>
                                    <div className="tooltip ml-1" data-tip="Add to Cart">
                                        <button className="btn btn-primary btn-circle rounded-full">
                                            <ShoppingCart/>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-full shadow-sm lg:col-start-4 col-start-2">
                    <figure className="h-[175px]">
                        <img
                            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-d8ada0f.jpg"
                            alt="Latte" className="w-full h-full object-cover object-center"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title line-clamp-2">Flat White</h2>
                        <p className="line-clamp-4 text-xs">An espresso-based coffee drink known for its smooth, velvety texture
                            and balanced flavor.</p>
                        <div className="card-actions justify-end items-center">
                            {!props?.public && (
                                <div>
                                    <button className="btn btn-primary rounded-full">Edit</button>
                                    <div className="dropdown dropdown-end ml-2">
                                        <div tabIndex={0} role="button"
                                             className="btn btn-link text-black rounded-full p-0">
                                            <EllipsisVertical/></div>
                                        <ul tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><a>Mark out of stock</a></li>
                                            <li><a>Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {props?.public && (
                                <div>
                                    <div className="tooltip" data-tip="Save to Favorites">
                                        <button className="btn btn-link btn-circle hover:text-error text-black rounded-full">
                                            <Heart/>
                                        </button>
                                    </div>
                                    <div className="tooltip ml-1" data-tip="Add to Cart">
                                        <button className="btn btn-primary btn-circle rounded-full">
                                            <ShoppingCart/>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}