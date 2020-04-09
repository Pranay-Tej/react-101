import React from "react";

function ChildA(props) {
    const { userInput } = props;
    return (
        <div>
            <h4>ChildA</h4>
            <p>{`childAData: ${userInput}`}</p>
        </div>
    );
}

export default ChildA;
