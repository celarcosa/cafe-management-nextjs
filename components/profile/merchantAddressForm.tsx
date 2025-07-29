export default function MerchantAddressForm() {
    return (
        <div className="flex lg:flex-row flex-col lg:p-6 p-2">
            <div className="w-full lg:ml-6 ml-0 lg:mt-0 mt-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Unit No. / Building <i className="text-error">*</i></legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Street No. <i className="text-error">*</i></legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">City <i className="text-error">*</i>
                    </legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
            </div>
            <div className="w-full lg:ml-6 ml-0 lg:mt-0 mt-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">State / Region <i className="text-error">*</i></legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Country <i className="text-error">*</i>
                    </legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
            </div>
        </div>
    )
}