'use client';

import BusinessView from "@/components/common/businessView";

export default function PublicViewButton() {
    return (
        <div>
            <button className="btn btn-sm btn-soft mt-2 rounded-full"
                    onClick={() => (document.getElementById('my_modal_5') as HTMLDialogElement).showModal()}>See public
                view
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <BusinessView columns={2}/>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
        ;
}