import React, { useContext, Fragment, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactItem from "./ContactItem";
import Spinner from "../../components/layout/Spinner";

import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
    const contactContext = useContext(ContactContext);

    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // es-lint-disable-next-line
    }, []);

    if (contacts == !null && contacts.length === 0 && !loading) {
        return <h4>Please add contact</h4>;
    }
    return (
        <Fragment>
            {contacts !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null
                        ? filtered.map((contact) => (
                              <CSSTransition
                                  key={contact._id}
                                  timeout={500}
                                  classNames="item"
                              >
                                  <ContactItem contact={contact}></ContactItem>
                              </CSSTransition>
                          ))
                        : contacts.map((contact) => (
                              <CSSTransition
                                  key={contact._id}
                                  timeout={500}
                                  classNames="item"
                              >
                                  <ContactItem contact={contact}></ContactItem>
                              </CSSTransition>
                          ))}
                </TransitionGroup>
            ) : (
                <Spinner> </Spinner>
            )}
        </Fragment>
    );
};

export default Contacts;
