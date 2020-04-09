import React, { useState, useEffect } from "react";

function Sibling2(props) {
    const { dataFromSibling1 } = props;

    const [sibling2Data, setsibling2Data] = useState("");

    useEffect(() => {
        setsibling2Data(dataFromSibling1);
        // console.log(
        //     `setting sibling2 data: from ${dataFromSibling1} to ${sibling2Data}`
        // );
    }, [dataFromSibling1]);

    return (
        <div>
            <h4>Sibling2</h4>
            <p>{`Sibling2 Data: ${sibling2Data}`}</p>
        </div>
    );
}

export default Sibling2;
