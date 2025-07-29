export default function OperatingHoursForm() {
    return (
        <div className="flex lg:flex-row flex-col lg:p-6 p-2">
            <div className="w-full lg:ml-6 ml-0 lg:mt-0 mt-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Days <i className="text-error">*</i>
                    </legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
            </div>
            <div className="w-full lg:ml-6 ml-0 lg:mt-0 mt-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Hours <i className="text-error">*</i>
                    </legend>
                    <input type="text" className="input" placeholder="e.g. 10:00-20:00"/>
                </fieldset>
            </div>
        </div>
    )
}