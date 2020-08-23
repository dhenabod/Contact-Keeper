import React, { useContext } from "react";
import PropTypes from "prop-types";

import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);

    const { deleteContact } = contactContext;
    const { id, name, email, phone, type } = contact;

    const onDeleteHandler = () => {
        deleteContact(id);
    };
    return (
        <div className="card bg-light">
            <h3 className="primary text-left">
                {name}{" "}
                <span
                    style={{ float: "right" }}
                    className={
                        "badge " +
                        (type.toLowerCase() === "professional"
                            ? "badge-success"
                            : "badge-primary")
                    }
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className="list">
                {email && (
                    <li>
                        <i className="fas fa-envelope-open"></i>
                        {email}
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone"></i>
                        {phone}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button
                    onClick={onDeleteHandler}
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </p>
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactItem;
