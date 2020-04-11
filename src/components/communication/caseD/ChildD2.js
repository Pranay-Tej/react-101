import React, { useState, useEffect } from "react";

import Emitter from "../../../services/emitter";



function ChildD2() {
    const [childD2Data, setchildD2Data] = useState("");

    useEffect(() => {

        // subscribing
        Emitter.on('dataFromChild1ToChild2', (data) => {
            setchildD2Data(data);
        });

        return () => {
            // unsubscribing on unmount
            Emitter.off('dataFromChild1ToChild2')
        }
    }, []);

    return (
        <div>
            <h4>ChildD2</h4>
            <p>{`ChildD2 Data: ${childD2Data}`}</p>
        </div>
    );
}

export default ChildD2;
