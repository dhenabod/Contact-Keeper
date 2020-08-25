import React, { useContext, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
            <TransitionGroup>
                {filtered !== null
                    ? filtered.map((contact) => (
                          <CSSTransition
                              key={contact.id}
                              timeout={500}
                              classNames="item"
                          >
                              <ContactItem contact={contact}></ContactItem>
                          </CSSTransition>
                      ))
                    : contacts.map((contact) => (
                          <CSSTransition
                              key={contact.id}
                              timeout={500}
                              classNames="item"
                          >
                              <ContactItem
                                  key={contact.id}
                                  contact={contact}
                              ></ContactItem>
                          </CSSTransition>
                      ))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Contacts;
