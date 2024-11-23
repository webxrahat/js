import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <>
            <h4>Here are all users show : {Users.length}</h4>
        </>
    );
}

export default App;
