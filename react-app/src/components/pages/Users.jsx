import React from "react";
import { useLoaderData } from "react-router-dom";

export const Users = () => {
    const data = useLoaderData();
    console.log(data);

    return <div>Users</div>;
};
