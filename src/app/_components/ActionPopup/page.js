import { useState } from "react";

export default function ActionPopup() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-96">
                    <div className="card-header p-4 border-b">
                        <h5 className="card-title mb-0 text-lg font-semibold">Card with button</h5>
                    </div>
                    <div className="card-body p-4">
                        <p className="card-text mb-4">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a
                            className="btn btn-primary"
                            href="javascript:void(0);"
                        >
                            Go somewhere
                        </a>
                    </div>
                    {/* Close Button */}
                    <div className="p-4 flex justify-end border-t">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setShowPopup(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
