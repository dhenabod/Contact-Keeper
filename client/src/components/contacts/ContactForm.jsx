import React, { useState, useContext } from "react";

import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
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
        // use method addContact from context
        contactContext.addContact(contact);

        // cleanup the form after saving
        setContact({
            name: "",
            email: "",
            phone: "",
            type: "personal",
        });
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <h2 className="text-primary">Add Contact</h2>
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
                    value="Add Contact"
                    className="btn btn-primary btn-block"
                ></input>
            </div>
        </form>
    );
};

export default ContactForm;
