import React from "react";
import "./App.css";
import ParentA from "./components/caseA/ParentA";
import ParentB from "./components/caseB/ParentB";
import ParentC from "./components/caseC/ParentC";
import ParentD from "./components/caseD/ParentD";

function App() {
    return (
        <>
            <h2>React - Component Communication</h2>
            <div className="App">
                <ParentA />
                <ParentB />
                <ParentC />
                <ParentD />
            </div>
        </>
    );
}

export default App;
