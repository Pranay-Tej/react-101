import React, {useEffect} from "react";
import "./App.css";

import {Redirect} from 'react-router-dom'

function App() {

    return (
      <>
        <Redirect
            to={{
              pathname: "/home",
            //   state: { from: location }
            }}
          />
      </>
    );
}

export default App;
