import React, { useState } from "react";

function Sibling1(props) {
    const {handleSibling2Change} = props

    const [sibling1Data, setsibling1Data] = useState("");

    const handleChange = (event) => {
        setsibling1Data(event.target.value);
        handleSibling2Change(event.target.value)
    };
    return (
        <div>
            <h4>Sibling1</h4>
            <input type="text" value={sibling1Data} onChange={handleChange} />
        </div>
    );
}

export default Sibling1;
