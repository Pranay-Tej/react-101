import React, { useState } from "react";
import ChildB from "./ChildB";

function ParentB() {
    const [parentBData, setparentBData] = useState("");
    const handleChange = (data) => {
        setparentBData(data);
    };
    return (
        <div>
            <p>Case B: Child to Parent using callback</p>

            <h2>ParentB</h2>
            <p>{`parentBData: ${parentBData}`}</p>
            <ChildB setParentBData={handleChange} />
        </div>
    );
}

export default ParentB;
