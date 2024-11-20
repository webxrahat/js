import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("click");
    };
    const nameData = name;

    // console.log(name);
    // console.log(email);

    return (
        <form className="mb-4">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
