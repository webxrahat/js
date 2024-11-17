import React from "react";
import { useLoaderData } from "react-router-dom";
import { UserTable } from "./UserTable";

export const Users = () => {
    const datas = useLoaderData();
    // const { name } = data;
    // console.log(name);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "25% 25% 25% 25%",
                gap: "20px",
                margin: "20px 0",
            }}
        >
            {datas.map((user) => (
                <UserTable key={user.id} user={user} />
            ))}
        </div>
    );
};
