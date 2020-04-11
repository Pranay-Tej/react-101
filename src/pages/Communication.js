import React from "react";
import ParentA from "../components/communication/caseA/ParentA";
import ParentB from "../components/communication/caseB/ParentB";
import ParentC from "../components/communication/caseC/ParentC";
import ParentD from "../components/communication/caseD/ParentD";
import "./Communication.css"


function Communication() {
    return (
        <div className="Communication">
            <h2>React - Component Communication</h2>
            <div className="App">
                <ParentA />
                <ParentB />
                <ParentC />
                <ParentD />
            </div>
        </div>
    );
}

export default Communication;
