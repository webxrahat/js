import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export const SingleUser = () => {
    const user = useLoaderData();
    // console.log(user);
    const { name, id, email } = user;

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{email}</p>
            <button onClick={handleBack}>Go Home</button>
        </div>
    );
};
