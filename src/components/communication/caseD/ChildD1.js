import React, { useState, useEffect } from "react";
import { Emitter, events } from "../../../services/emitter";

function ChildD1() {
    const [childD1Data, setchildD1Data] = useState("");

    useEffect(() => {
        // subscribing
        Emitter.on(events.confirmationFromChild2, () =>
            console.log("Confirmation received")
        );

        return () => {
            // unsubscribing on unmount
            Emitter.off(events.confirmationFromChild2);
        };
    }, []);

    const handleChange = (event) => {
        setchildD1Data(event.target.value);

        // emitting data on change
        Emitter.emit(events.dataFromChild1ToChild2, event.target.value);
    };

    return (
        <div>
            <h4>ChildD1</h4>
            <input type="text" value={childD1Data} onChange={handleChange} />
        </div>
    );
}

export default ChildD1;
