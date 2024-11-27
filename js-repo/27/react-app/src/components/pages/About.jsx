import React from "react";

export const About = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = e.target;
        let nameValue = data.name.value;
        let emailValue = data.email.value;
        console.log(nameValue, emailValue);
    };

    return (
        <div>
            <div>
                <h2>Submit Form</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <br />
                <input type="email" name="email" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
