import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleSubmit = () => {};

    return (
        <>
            <h4>Here are all users show : {Users.length}</h4>

            <form>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" />
            </form>

            {Users.map((user) => (
                <div>
                    <p>
                        {user.id}, {user.name} : {user.email}
                    </p>
                </div>
            ))}
        </>
    );
}

export default App;
