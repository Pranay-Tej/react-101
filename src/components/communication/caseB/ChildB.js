import React, { useState } from "react";

function ChildB(props) {
    const { setParentBData } = props;
    const [childBData, setChildBData] = useState("");

    const handleChange = (event) => {
        setChildBData(event.target.value);
        setParentBData(event.target.value);
    };

    return (
        <div>
            <h4>ChildB</h4>
            <input type="text" value={childBData} onChange={handleChange} />
            {/* <button onClick={() => setParentBData()}>Send to ParentB</button> */}
        </div>
    );
}

export default ChildB;
