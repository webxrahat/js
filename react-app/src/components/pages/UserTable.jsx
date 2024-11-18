import React from "react";
import { Link } from "react-router-dom";

export const UserTable = ({ user }) => {
    // console.log(data);

    const handleShowDtails = () => {
        console.log("click");
    };

    const { name, phone } = user;
    // console.log(data.address.city);

    const { city } = user.address;
    // console.log(city);

    return (
        <div
            style={{
                border: "1px solid red",
                padding: "20px",
            }}
        >
            <h2>{name}</h2>
            <p>{phone}</p>
            <p>{city}</p>
            <Link to={`/users/${user.id}`}>Single User</Link>
            <button onClick={handleShowDtails}>Click Details</button>
        </div>
    );
};
