import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Form from "./components/Form";
import "./App.css";

function App() {
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <Form />
                <Table />
            </div>
        </div>
    );
}

export default App;
