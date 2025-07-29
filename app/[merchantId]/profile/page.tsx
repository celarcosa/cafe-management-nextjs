import Header from "@/components/common/header";
import { BadgeCheck } from "lucide-react";
import { notFound } from "next/navigation";
import PublicViewButton from "@/components/profile/publicViewButton";
import BasicInformationForm from "@/components/profile/basicInformationForm";
import MerchantAddressForm from "@/components/profile/merchantAddressForm";
import OperatingHoursForm from "@/components/profile/operatingHoursForm";
import ContactInformationForm from "@/components/profile/contactInformationForm";

export default async function ProfilePage({ params }: any) {
    const { merchantId } = await params;
    if (!merchantId || merchantId == 'undefined' || merchantId == 0) {
        notFound();
    }
    return (
        <div className="flex-grow-1">
            <div className="w-full">
                <Header title="Merchant Profile" merchantId={merchantId}></Header>

                <div className="card w-96 bg-base-100 card-md shadow-sm w-full">
                    <div className="card-body">
                        <div className="flex justify-end w-full">
                            <PublicViewButton />
                        </div>
                        <div className="grid lg:grid-cols-[200px_1fr] grid-cols-1">
                            <div className="col-start-1">
                                <div className="flex flex-col items-center justify-center lg:mt-[40px] mt-0">
                                    <div className="avatar">
                                        <div className="w-42 rounded h-auto">
                                            <img
                                                src="https://www.pngplay.com/wp-content/uploads/8/Starbucks-Coffee-Logo-PNG-HD-Quality.png"/>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-ghost mt-2 rounded-full">Upload logo</button>

                                    <div className="flex items-center mt-4">
                                        <BadgeCheck className="text-success"/>
                                        <span className="ml-2">Business is verified</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-start-2 col-start-1">
                                <div className="divider text-xs uppercase font-semibold text-gray-400">Basic
                                    Information
                                </div>
                                <BasicInformationForm />
                                <div className="divider text-xs uppercase font-semibold text-gray-400">Merchant
                                    Address
                                </div>
                                <MerchantAddressForm />
                                <div className="divider text-xs uppercase font-semibold text-gray-400">Operating Hours
                                </div>
                                <OperatingHoursForm />
                                {/* <div className="lg:pl-6 pl-2 lg:pr-6 pr-2">
                            <div className="w-full flex items-center lg:ml-6 ml-0">
                                <input type="checkbox" defaultChecked className="checkbox" />
                                <legend className="fieldset-legend ml-2">Allow orders beyond operating hours</legend>
                            </div>
                        </div> */}
                                <div className="divider text-xs uppercase font-semibold text-gray-400">Contact
                                    Information
                                </div>
                                <ContactInformationForm />
                                <div className="flex justify-end lg:p-6 p-2">
                                    <button className="btn btn-primary btn-soft mr-2 rounded-full">Save</button>
                                    <button className="btn btn-soft rounded-full">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}