import React from "react";

const Table = () => (
    <table className="table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Rohan</td>
                <td>Rohan@gmail.com</td>
                <td>
                    <button className="btn btn-warning btn-sm me-2">
                        Edit
                    </button>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>

            <tr>
                <td colSpan="4" className="text-center">
                    No Data
                </td>
            </tr>
        </tbody>
    </table>
);

export default Table;
