import "./App.css";

function App() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const formData = { name, email };

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Your form is successfully added");
                    form.reset();
                }
                console.log(data);
            });

        // console.log(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" />
            </form>
        </>
    );
}

export default App;
