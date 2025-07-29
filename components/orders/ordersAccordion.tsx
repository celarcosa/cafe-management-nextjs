import {ChevronRight} from "lucide-react";
import React from "react";
import {formatCurrency} from "@/utils/formatCurrency";

export default function OrdersAccordion() {
    return (
        <div>
            <div className="join join-vertical bg-base-100 w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked/>
                    <div className="collapse-title flex items-center justify-between">
                        <div>
                            <div className="flex items-center">
                                <div className="font-semibold text-base">Order #173452</div>
                                <div className="opacity-60 text-sm ml-2">5 items</div>
                            </div>
                            <div className="opacity-60">3 mins ago</div>
                        </div>
                        <div className="badge badge-outline badge-accent">Preparing</div>
                    </div>
                    <div className="collapse-content text-sm">
                        <ul className="timeline flex justify-center w-full">
                            <li className="basis-[20%]">
                                <div className="timeline-start p-2">
                                    <div>Order Received</div>
                                </div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="text-primary h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <hr className="bg-primary"/>
                            </li>
                            <li className="basis-[20%]">
                                <hr className="bg-primary"/>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="text-primary h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end p-2">
                                    <div>Order Preparing</div>
                                </div>
                                <hr/>
                            </li>
                            <li className="basis-[20%]">
                                <hr/>
                                <div className="timeline-start p-2">
                                    <div>Order Ready</div>
                                </div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <hr/>
                            </li>
                            <li className="basis-[20%]">
                                <hr/>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end p-2">
                                    <div>Out For Delivery</div>
                                </div>
                                <hr/>
                            </li>
                            <li className="basis-[20%]">
                                <hr/>
                                <div className="timeline-start p-2">
                                    <div>Order Complete</div>
                                </div>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </li>
                        </ul>
                        <ul className="list">
                            <li className="list-row pt-4 pb-4 pl-0 pr-0">
                                <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
                                <div><img className="size-10 rounded-box"
                                          src="https://cooktoria.com/wp-content/uploads/2016/02/Caramel-Macchiato-Recipe-sq-1.jpg"/>
                                </div>
                                <div className="list-col-grow">
                                    <div>Caramel Macchiato</div>
                                    <div className="text-xs opacity-60">1 pc</div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="btn btn-sm btn-ghost btn-accent hover:text-white rounded-full mr-4">Mark
                                        As Ready
                                    </button>
                                    <div className="text-gray-400 mr-4">Preparing</div>
                                    <div>{formatCurrency(180, 'PHP', false)}</div>
                                </div>
                            </li>

                            <li className="list-row pt-4 pb-4 pl-0 pr-0">
                                <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
                                <div><img className="size-10 rounded-box"
                                          src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-mediumSquareAt3X-v2.jpg"/>
                                </div>
                                <div className="list-col-grow">
                                    <div>Carbonara</div>
                                    <div className="text-xs opacity-60">2pcs</div>
                                </div>
                                <div className="flex items-center">
                                    <div className="text-gray-400 mr-4">Ready</div>
                                    <div>{formatCurrency(480, 'PHP', false)}</div>
                                </div>
                            </li>

                            <li className="list-row pt-4 pb-4 pl-0 pr-0">
                                <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
                                <div><img className="size-10 rounded-box"
                                          src="https://www.mybakingaddiction.com/wp-content/uploads/2022/08/plated-blueberry-cheesecake-hero.jpg"/>
                                </div>
                                <div className="list-col-grow">
                                    <div>Blueberry Cheesecake</div>
                                    <div className="text-xs opacity-60">1 pc</div>
                                </div>
                                <div className="flex items-center">
                                    <button
                                        className="btn btn-sm btn-ghost btn-accent hover:text-white rounded-full mr-2">Prepare
                                    </button>
                                    <button
                                        className="btn btn-sm btn-ghost btn-error hover:text-white rounded-full mr-4">Mark As Unavailable
                                    </button>
                                    <div className="text-gray-400 mr-4">Pending</div>
                                    <div>{formatCurrency(190, 'PHP', false)}</div>
                                </div>
                            </li>
                        </ul>
                        <div className="flex justify-end">
                            <div className="grid grid-rows-2 grid-cols-2">
                            <div className="font-semibold text-right row-start-1 col-start-1">Total Quantity:</div>
                                <div className="ml-2 text-right row-start-1 col-start-2">4</div>
                                <div className="font-semibold text-right row-start-2 col-start-1">Total Amount:</div>
                                <div
                                    className="ml-2 text-right row-start-2 col-start-2">{formatCurrency(850, 'PHP', false)}</div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center mt-8">
                            <button
                                className="btn btn-primary rounded-full">Edit
                            </button>
                            <button
                                className="btn btn-soft btn-accent text-accent hover:text-white ml-2 rounded-full">Mark
                                All As Ready
                            </button>
                            <button
                                className="btn btn-soft btn-success text-success hover:text-white ml-2 rounded-full">Mark
                                All As Complete
                            </button>
                            <button
                                className="btn btn-soft btn-error text-error hover:text-white ml-2 rounded-full">Cancel
                            </button>
                        </div>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4"/>
                    <div className="collapse-title flex items-center justify-between">
                        <div>
                            <div className="flex items-center">
                                <div className="font-semibold text-base">Order #173452</div>
                                <div className="opacity-60 text-sm ml-2">5 items</div>
                            </div>
                            <div className="opacity-60">3 mins ago</div>
                        </div>
                        <div className="badge badge-outline badge-accent">Preparing</div>
                    </div>
                    <div className="collapse-content text-sm">

                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4"/>
                    <div className="collapse-title flex items-center justify-between">
                        <div>
                            <div className="flex items-center">
                                <div className="font-semibold text-base">Order #124236</div>
                                <div className="opacity-60 text-sm ml-2">2 items</div>
                            </div>
                            <div className="opacity-60">1 min ago</div>
                        </div>
                        <div className="badge badge-outline badge-info">Pending</div>
                    </div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow
                        the
                        instructions sent to your email.
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4"/>
                    <div className="collapse-title flex items-center justify-between">
                        <div>
                            <div className="flex items-center">
                                <div className="font-semibold text-base">Order #124236</div>
                                <div className="opacity-60 text-sm ml-2">2 items</div>
                            </div>
                            <div className="opacity-60">1 min ago</div>
                        </div>
                        <div className="badge badge-outline badge-info">Pending</div>
                    </div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow
                        the
                        instructions sent to your email.
                    </div>
                </div>
            </div>
        </div>
    );
}