import {
    Package,
    Bolt,
    LayoutDashboard,
    Users,
    Warehouse,
    ShoppingCart,
    ChartPie,
    HardDrive,
    Star,
    BriefcaseBusiness, Speech, Ticket, Split, Plus, Store
} from "lucide-react";
import Image from "next/image";
import BusinessNav from "@/components/common/businessNav";

export default function Sidemenu (props: any) {
    const alwaysShow = props && props.alwaysShow;
    return (
        <div className={`${alwaysShow ? 'block' : 'lg:block hidden'} min-h-screen w-[200px] fixed top-0 left-0 lg:ml-[50px] ml-0 
              ${alwaysShow ? 'z-50 w-full max-w-xs bg-base-100' : ''} lg:relative`}>
            <div className="flex flex-col h-screen">
                <a href="/1" className="p-4 flex justify-center">
                    <Image
                        className="dark:invert"
                        src="/logomark.svg"
                        alt="Next.js logo"
                        width={30}
                        height={30}
                        priority
                    />
                </a>
                <div>
                    <BusinessNav merchantId={props.merchantId} />
                </div>
                {/*<div className="flex items-center border-gray-200 border-t-[1px] border-b-[1px] p-4">*/}
                {/*    <div className="avatar flex justify-center">*/}
                {/*        <div className="w-8 rounded-full">*/}
                {/*            <img*/}
                {/*                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="font-bold ml-2 text-sm">Starbucks</div>*/}
                {/*</div>*/}
                {
                    props.merchantId && (
                        <div className="flex-1 overflow-auto lg:pt-0 border-t-[1px] border-gray-100">
                            <h6 className="opacity-30 uppercase text-[10px] font-bold ml-4 pt-4">Navigation</h6>
                            <ul className="menu menu-vertical rounded-box w-full">
                                <li><a href={`/${props.merchantId || 0}/dashboard`}><LayoutDashboard width={16}/> Dashboard</a>
                                </li>
                                <li><a href={`/${props.merchantId || 0}/orders`}><ShoppingCart width={16}/> Orders</a></li>
                                <li><a href={`/${props.merchantId || 0}/products`}><Package width={16}/> Products</a></li>
                                <li><a><Warehouse width={16}/> Inventory</a></li>
                                <li><a><Star width={16}/> Customer Reviews</a></li>
                            </ul>

                            <h6 className="opacity-30 uppercase text-[10px] font-bold ml-4 pt-4">Administration</h6>
                            <ul className="menu menu-vertical rounded-box w-full">
                                <li><a href={`/${props.merchantId || 0}/profile`}><BriefcaseBusiness width={16}/> Merchant
                                    Profile</a></li>
                                <li><a><ChartPie width={16}/> Reports</a></li>
                                <li><a><Users width={16}/> Staff</a></li>
                                <li><a><Bolt width={16}/> Settings</a></li>
                            </ul>
                        </div>
                    )
                }
                {
                    props?.merchants && (
                        <div className="flex-1 overflow-auto lg:pt-0 border-t-[1px] border-gray-100">
                            <h6 className="opacity-30 uppercase text-[10px] font-bold ml-4 pt-4">Navigation</h6>
                            <ul className="menu menu-vertical rounded-box w-full">
                                <li><a href="/merchants"><Store width={16}/> All Merchants</a></li>
                                <li><a href="/merchants/onboard"><Plus width={16}/> Add Merchant</a></li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}