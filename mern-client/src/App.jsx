import "./App.css";

function App() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const formData = { name, email };

        console.log(formData);
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
