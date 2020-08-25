import React, { useState, useContext, useEffect } from "react";

import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = () => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { register, error, clearErrors } = authContext;

    //The idea to use useEffect hook is to execute code that needs happens during lifecycle of the component instead of on specific user interactions or DOM events
    useEffect(() => {
        if (error === "User already exists") {
            setAlert(error, "danger");
            clearErrors();
        }
        // put error as a dependency so it will run whenever the error changes
    }, [error]);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = user;
    const onChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onsubmitHandler = (event) => {
        event.preventDefault();
        if (name === "" || email === "" || password === "") {
            setAlert("Please enter all fields", "danger");
        } else if (password !== password2) {
            setAlert("Password did not match", "danger");
        } else {
            // register takes form data(authState.js)
            register({
                name,
                email,
                password,
            });
        }
    };

    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onsubmitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        required
                        onChange={onChangeHandler}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={onChangeHandler}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        required
                        minLength="6"
                        onChange={onChangeHandler}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input
                        type="password"
                        name="password2"
                        value={password2}
                        required
                        minLength="6"
                        onChange={onChangeHandler}
                    ></input>
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="btn btn-primary btn-block"
                ></input>
            </form>
        </div>
    );
};

export default Register;
