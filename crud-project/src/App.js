import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const formData = { name, email };

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                const newUser = [...users, data];
                setUsers(newUser);
                const reset = form.reset();

                if (!reset) {
                    alert("This Form is Success fully submit");
                }
                // console.log(data)
            });

        // console.log(formData);
    };
    return (
        <div>
            <Navbar />
            <div className="container mt-4">
                <form className="mb-4" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

                {/* //------------------------------------------------ */}
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {users &&
                        users.map((user) => (
                            <tbody key={user.id}>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm me-2">
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="4" className="text-center">
                                        No Data
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                </table>
            </div>
        </div>
    );
}

export default App;
