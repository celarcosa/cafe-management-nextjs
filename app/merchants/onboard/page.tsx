'use client'

import Header from "@/components/common/header";
import BasicInformationForm from "@/components/profile/basicInformationForm";
import MerchantAddressForm from "@/components/profile/merchantAddressForm";
import OperatingHoursForm from "@/components/profile/operatingHoursForm";
import ContactInformationForm from "@/components/profile/contactInformationForm";
import {useState} from "react";

export default function MerchantOnboardPage() {
    const [activeStep, setActiveStep ] = useState(1);

    const nextStep = () => {
        setActiveStep(activeStep + 1);
    }

    const previousStep = () => {
        setActiveStep(activeStep - 1);
    }

    return (
        <div className="flex-grow-1">
            <div className="w-full">
                <Header title="New Merchant" merchants={true}></Header>

                <ul className="steps w-full mt-4">
                    <li className={`step ${activeStep >= 1 ? 'step-primary' : ''}`}>Basic Information</li>
                    <li className={`step ${activeStep >= 2 ? 'step-primary' : ''}`}>Merchant Address</li>
                    <li className={`step ${activeStep >= 3 ? 'step-primary' : ''}`}>Operating Hours</li>
                    <li className={`step ${activeStep >= 4 ? 'step-primary' : ''}`}>Contact Information</li>
                </ul>

                <div className="card w-full bg-base-100 card-md shadow-sm mt-4">
                    <div className="card-body">
                        {activeStep === 1 && (
                            <div>
                                <BasicInformationForm/>
                                <div className="flex justify-end mt-6">
                                    <button className="btn btn-primary rounded-full" onClick={nextStep}>Next</button>
                                </div>
                            </div>
                        )}
                        {activeStep === 2 && (
                            <div>
                                <MerchantAddressForm/>
                                <div className="flex justify-between mt-6">
                                    <button className="btn btn-soft rounded-full" onClick={previousStep}>Previous
                                    </button>
                                    <button className="btn btn-primary rounded-full" onClick={nextStep}>Next</button>
                                </div>
                            </div>
                        )}
                        {activeStep === 3 && (
                            <div>
                                <OperatingHoursForm/>
                                <div className="flex justify-between mt-6">
                                    <button className="btn btn-soft rounded-full" onClick={previousStep}>Previous
                                    </button>
                                    <button className="btn btn-primary rounded-full" onClick={nextStep}>Next</button>
                                </div>
                            </div>
                        )}
                        {activeStep === 4 && (
                            <div>
                                <ContactInformationForm/>
                                <div className="flex justify-between mt-6">
                                    <button className="btn btn-soft rounded-full" onClick={previousStep}>Previous</button>
                                    <button className="btn btn-primary rounded-full">Save</button>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}