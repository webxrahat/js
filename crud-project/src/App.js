import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Form from "./components/Form";
import "./App.css";

function App() {
    const [data, setData] = useState([]);
    const [formState, setFormState] = useState({ id: "", name: "", email: "" });

    const handleAddOrUpdate = (newItem) => {
        setData((prev) =>
            prev.some((item) => item.id === newItem.id)
                ? prev.map((item) => (item.id === newItem.id ? newItem : item))
                : [...prev, { ...newItem, id: Date.now() }]
        );
        setFormState({ id: "", name: "", email: "" });
    };

    const handleEdit = (item) => setFormState(item);

    const handleDelete = (id) =>
        setData((prev) => prev.filter((item) => item.id !== id));

    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <Form
                    formState={formState}
                    setFormState={setFormState}
                    onSubmit={handleAddOrUpdate}
                />
                <Table
                    data={data}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
}

export default App;
