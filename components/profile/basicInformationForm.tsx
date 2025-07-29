export default function BasicInformationForm() {
    return (
        <div className="flex lg:flex-row flex-col rounded lg:p-6 p-2">
            <div className="w-full lg:ml-6 ml-0 lg:mt-0 mt-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Name<i className="text-error">*</i>
                    </legend>
                    <input type="text" className="input" placeholder=""/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Description</legend>
                    <textarea className="textarea h-24" placeholder=""></textarea>
                </fieldset>
            </div>
            <div className="w-full lg:ml-6 ml-0 lg:mt-0 mt-2">
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Domain name</legend>
                    <input type="text" className="input" placeholder="e.g. google.com"/>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Industry</legend>
                    <input type="text" className="input" placeholder="e.g. Food & Beverage"/>
                </fieldset>
            </div>
        </div>
    )
}