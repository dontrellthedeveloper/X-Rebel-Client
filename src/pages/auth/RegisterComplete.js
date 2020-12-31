import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistration"));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validation
        if (!email || !password) {
            toast.error("Email and password is required");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        try {
            const result = await auth.signInWithEmailLink(
                email,
                window.location.href
            );
            //   console.log("RESULT", result);
            if (result.user.emailVerified) {
                // remove user email fom local storage
                window.localStorage.removeItem("emailForRegistration");
                // get user id token
                let user = auth.currentUser;
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult();
                // redux store
                console.log("user", user, "idTokenResult", idTokenResult);
                // redirect
                history.push("/");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const completeRegistrationForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" style={{textAlign: "center"}} value={email} disabled />

            <input
                type="password"
                className="form-control"
                style={{textAlign: "center"}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoFocus
            />
            <br />
            <button style={{marginTop: "30px"}} type="submit" className="btn btn-raised">
                Complete Registration
            </button>
        </form>
    );

    return (
        <div style={{margin: "120px auto 220px", textAlign: "center"}} className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4 style={{marginBottom: "80px"}}>Register Complete</h4>
                    {completeRegistrationForm()}
                </div>
            </div>
        </div>
    );
};

export default RegisterComplete;