import React from "react";
import { useLoaderData } from "react-router-dom";

export const SingleUser = () => {
    const user = useLoaderData();
    // console.log(user);
    const { name, id, email } = user;

    return (
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
};
