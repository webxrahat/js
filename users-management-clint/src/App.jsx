import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [Users, setUsers] = useState([]);

    // console.log(Users);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = e.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const userData = { name, email };
        // console.log(userData);

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                const newUser = [...Users, data];
                setUsers(newUser);
                formData.reset();
                // console.log(data)
            });
    };

    return (
        <>
            <h4>Here are all users show : {Users.length}</h4>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" />
            </form>

            {Users.map((user) => (
                <div key={user.id}>
                    <p>
                        {user.id}, {user.name} : {user.email}
                    </p>
                </div>
            ))}
        </>
    );
}

export default App;
