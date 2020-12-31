import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";


const Register = () => {
    const [email, setEmail] = useState("");

    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        if (user && user.token) history.push("/");
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true,
        };

        await auth.sendSignInLinkToEmail(email, config);
        toast.success(
            `Email is sent to ${email}. Click the link to complete your registration.`
        );
        // save user email in local storage
        window.localStorage.setItem("emailForRegistration", email);
        // clear state
        setEmail("");
    };

    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                className="form-control"
                style={{textAlign: "center"}}
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
            />

            <button style={{marginTop: "30px"}} type="submit" className="btn btn-raised">
                Register
            </button>
        </form>
    );

    return (
        <div style={{margin: "120px auto 220px", textAlign: "center"}} className="container p-5">
            <div className="row">
                <div  className="col-md-6 offset-md-3">
                    <h4 style={{marginBottom: "80px"}}>Register</h4>
                    {registerForm()}
                </div>
            </div>
        </div>
    );
};

export default Register;
