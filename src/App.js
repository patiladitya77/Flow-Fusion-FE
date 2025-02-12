import ReactDOM from "react-dom/client"
import React from "react";
import Signup from "./components/Signup";

const Applayout = () => {

    return (

        <div className="app">
            <Signup />

        </div>

    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);