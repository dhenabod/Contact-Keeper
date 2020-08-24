import React, { useContext, Fragment } from "react";

import ContactItem from "./ContactItem";

import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered } = contactContext;

    if (contacts.lenght === 0) {
        return <h4>Please add contact</h4>;
    }
    return (
        <Fragment>
            {filtered !== null
                ? filtered.map((contact) => (
                      <ContactItem
                          key={contact.id}
                          contact={contact}
                      ></ContactItem>
                  ))
                : contacts.map((contact) => (
                      <ContactItem
                          key={contact.id}
                          contact={contact}
                      ></ContactItem>
                  ))}
        </Fragment>
    );
};

export default Contacts;
