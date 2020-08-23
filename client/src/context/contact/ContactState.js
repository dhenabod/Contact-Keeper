import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jill Johnson",
                email: "jill@gmail.com",
                phone: "111-111--1111",
                type: "Personal",
            },
            {
                id: 2,
                name: "Sarah Watson",
                email: "sarah@gmail.com",
                phone: "211-111--1111",
                type: "Personal",
            },
            {
                id: 3,
                name: "Juan Dela Cruz",
                email: "juandelacruz@gmail.com",
                phone: "311-111--1111",
                type: "Professional",
            },
        ],
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // add contact

    const addContact = (contact) => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };
    // set current contact

    // clear current contact

    // update contact

    // filter contact

    // clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,

                addContact,
                deleteContact,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;
