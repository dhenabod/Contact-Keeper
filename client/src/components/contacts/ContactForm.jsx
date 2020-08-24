import React, { useState, useContext, useEffect } from "react";

import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, current, clearCurrent, updateContact } = contactContext;

    // useEffect will mimic the componentDidMount of class based components
    useEffect(() => {
        // if current is not null pass the current(which is a contact)
        if (current !== null) {
            setContact(current);
        } else {
            // else set to nothing/default
            setContact({
                name: "",
                email: "",
                phone: "",
                type: "personal",
            });
        }
        // dependency, useEffect will monitor contactContext and current for changes
    }, [contactContext, current]);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        type: "personal",
    });

    const { name, email, phone, type } = contact;

    const onChangeHandler = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (current === null) {
            // use method addContact from context
            addContact(contact);
        } else {
            updateContact(contact);
        }
        // cleanup the form after saving
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <h2 className="text-primary">
                {current ? "Edit Contact" : "Add Contact"}
            </h2>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChangeHandler}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onChangeHandler}
            />
            <h5>Contact Type </h5>
            <input
                type="radio"
                name="type"
                value="personal"
                checked={type.toLowerCase() === "personal"}
                onChange={onChangeHandler}
            ></input>{" "}
            Personal{" "}
            <input
                type="radio"
                name="type"
                value="professional"
                checked={type.toLowerCase() === "professional"}
                onChange={onChangeHandler}
            ></input>{" "}
            Professional{" "}
            <div>
                <input
                    type="submit"
                    value={current ? "Update Contact" : "Add Contact"}
                    className="btn btn-primary btn-block"
                ></input>
            </div>
            {current && (
                <div>
                    <button
                        className="btn btn-light btn-block"
                        onClick={clearAll}
                    >
                        Clear
                    </button>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
