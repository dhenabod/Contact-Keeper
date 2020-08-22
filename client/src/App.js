import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";

import Contacts from "./components/contacts/Contacts";

import "./App.css";

const App = () => {
    return (
        <ContactState>
            <Router>
                <Fragment>
                    <Navbar></Navbar>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route
                                exact
                                path="/about"
                                component={About}
                            ></Route>
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        </ContactState>
    );
};

export default App;