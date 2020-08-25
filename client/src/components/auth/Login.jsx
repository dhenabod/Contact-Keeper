import React, { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const onsubmitHandler = (event) => {
        event.preventDefault();
        console.log("login submit");
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
                        onChange={onChangeHandler}
                    ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
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
