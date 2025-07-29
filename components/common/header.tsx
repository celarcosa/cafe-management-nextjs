import {AtSign, Bell, Menu, Settings, ShoppingCart} from "lucide-react";
import Sidemenu from "@/components/common/sidemenu";

export default function Header (props: any) {
    const pageTitle = props.title;
    return (
        <header className="w-full">
            <div className="navbar flex justify-between lg:relative lg:left-auto fixed top-0 left-0 right-0 lg:bg-transparent bg-base-100 z-100">
                <div className="flex items-center">
                    <div className="lg:hidden block fixed lg:top-[28px] top-[20px] bottom-0 left-[10px] z-50">
                        <div className="drawer h-full">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>

                            <div className="drawer-content mr-2">
                                <label htmlFor="my-drawer" className="drawer-button">
                                    <Menu/>
                                </label>
                            </div>i

                            <div className="drawer-side h-full">
                                <label htmlFor="my-drawer" aria-label="close sidebar"
                                       className="drawer-overlay"></label>

                                <div className="bg-white text-base-content h-full lg:w-60 md:w-[30%] w-[70%] max-w-[300px] overflow-y-auto pt-4">
                                    <Sidemenu alwaysShow="true" merchantId={props?.merchantId} merchants={props?.merchants}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="font-bold lg:text-2xl text-lg lg:ml-0 ml-8">{pageTitle}</h1>
                </div>
                <div className="flex-none flex items-center">
                    <div className="dropdown dropdown-end">
                        <div className="lg:tooltip lg:tooltip-bottom" data-tip="Notifications">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"*/}
                                    {/*     viewBox="0 0 24 24" stroke="currentColor">*/}
                                    {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                                    {/*          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>*/}
                                    {/*</svg>*/}
                                    <Bell width={22}/>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-2 lg:w-80 w-75 shadow">
                            <div className="card-body p-4">
                                <span className="font-bold mb-2">Notifications (8)</span>

                                <a href={`/${props.merchantId || 0}/orders`}>
                                    <div className="p-2 hover:bg-gray-50 flex items-center">
                                        <ShoppingCart/>
                                        <div className="ml-2">
                                            <div>Order #1532423 was placed</div>
                                            <div className="text-gray-400 text-xs">5 mins ago</div>
                                        </div>
                                    </div>
                                </a>
                                <a href={`/${props.merchantId || 0}/orders`}>
                                    <div className="p-2 hover:bg-gray-50 flex items-center">
                                        <ShoppingCart/>
                                        <div className="ml-2">
                                            <div>Order #1532423 was placed</div>
                                            <div className="text-gray-400 text-xs">5 mins ago</div>
                                        </div>
                                    </div>
                                </a>

                                <a href={`/${props.merchantId || 0}/orders`}>
                                    <div className="p-2 hover:bg-gray-50 flex items-center">
                                        <AtSign />
                                        <div className="ml-2">
                                            <div>You were mentioned in a post</div>
                                            <div className="text-gray-400 text-xs">32 mins ago</div>
                                        </div>
                                    </div>
                                </a>
                                <div className="card-actions">
                                    <button
                                        className="btn btn-link btn-sm btn-block no-underline hover:no-underline">View
                                        all
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:tooltip lg:tooltip-bottom" data-tip="Admin Settings">
                        <button type="button" className="btn btn-ghost btn-circle"><Settings width={22}/></button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-8 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}