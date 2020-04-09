import React, { useState } from "react";
import Sibling1 from "./Sibling1";
import Sibling2 from "./Sibling2";

function ParentC() {

    const [sibling2Data, setsibling2Data] = useState("");

    const handleSibling2Change = (data) => {
        setsibling2Data(data)
        // console.log('Reached parentC')
    };

    return (
        <div>
            <p>Case C: Sibling Interaction through Parent</p>
            <h2>ParentC</h2>
            <Sibling1 handleSibling2Change={handleSibling2Change}/>
            <Sibling2 dataFromSibling1={sibling2Data}/>
        </div>
    );
}

export default ParentC;
