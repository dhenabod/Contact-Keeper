import React, { useState, useContext, useEffect } from "react";

import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        // redirect if isAuthenticated is true
        if (isAuthenticated) {
            props.history.push("/");
        }

        if (error === "Invalid Credentials") {
            setAlert(error, "danger");
            clearErrors();
        }
        // put error as a dependency so it will run whenever the error changes
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onsubmitHandler = (event) => {
        event.preventDefault();
        if (email === "" || password === "") {
            setAlert("Please fill in all fields", "danger");
        } else {
            login({ email, password });
        }
    };

    const { email, password } = user;
    return (
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onsubmitHandler}>
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
                        onChange={onChangeHandler}
                    ></input>
                </div>

                <input
                    type="submit"
                    value="Log in"
                    className="btn btn-primary btn-block"
                ></input>
            </form>
        </div>
    );
};

export default Login;
