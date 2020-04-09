import React, { useState, useEffect, useRef } from "react";
import ChildA from "./ChildA";

function ParentA() {
    const [parentAData, setparentAData] = useState("");

    const handleChange = (event) => {
        setparentAData(event.target.value);
    };

    const userInputRef = useRef();

    useEffect(() => {
        userInputRef.current.focus();
    }, []);

    return (
        <div>
            <p>Case A: Parent to Child through props</p>
            <h2>ParentA</h2>
            <input
                type="text"
                value={parentAData}
                onChange={handleChange}
                ref={userInputRef}
            />
            <ChildA userInput={parentAData} />
        </div>
    );
}

export default ParentA;
