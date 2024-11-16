import React from "react";
import { useLoaderData } from "react-router-dom";

export const Users = () => {
    const data = useLoaderData();
    const { name } = data;
    console.log(data);

    return <div>User name: {name}</div>;
};
