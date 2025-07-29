export default function ContactInformationForm() {
    return (
        <div className="flex lg:flex-row flex-col lg:p-6 p-2">
            <div className="w-full lg:ml-6 ml-0 lg:mt-0 mt-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Contact Email <i
                        className="text-error">*</i>
                    </legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Contact Person</legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
            </div>
            <div className="w-full lg:ml-6 ml-0 lg:mt-0 mt-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Phone / Mobile Number</legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
            </div>
        </div>
    )
}