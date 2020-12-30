import React, { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        //
    };

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
            />

            <button style={{marginTop: "40px"}} type="submit" className="btn btn-raised">
                Register
            </button>
        </form>
    );

    return (
        <div style={{margin: "60px auto 220px", textAlign: "center"}} className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4 style={{marginBottom: "100px"}}>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    );
};

export default Register;
