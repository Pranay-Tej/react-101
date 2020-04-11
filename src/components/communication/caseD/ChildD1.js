import React, { useState } from "react";
import Emitter from "../../../services/emitter";

function ChildD1() {
    const [childD1Data, setchildD1Data] = useState("");

    const handleChange = (event) => {
        setchildD1Data(event.target.value);
        
        // emitting data on change 
        Emitter.emit("dataFromChild1ToChild2", event.target.value);
    };

    return (
        <div>
            <h4>ChildD1</h4>
            <input type="text" value={childD1Data} onChange={handleChange} />
        </div>
    );
}

export default ChildD1;
