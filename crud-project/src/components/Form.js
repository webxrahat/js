import React from "react";

const Form = () => {
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
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default Form;
