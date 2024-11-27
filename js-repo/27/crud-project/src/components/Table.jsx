import React from "react";
import { useState, useEffect } from "react";

const Table = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    // console.log(users);

    return (
        <>
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
        </>
    );
};

export default Table;
