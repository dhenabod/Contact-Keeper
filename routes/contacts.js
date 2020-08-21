const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Contact = require("../models/Contact");
const { json } = require("express");

// @route   GET api/contacts
// @desc    get all users contacts
// @access  Private
router.get("/", auth, async (req, res) => {
    try {
        // find contact for the logged in user and sort it by date
        const contacts = await Contact.find({ user: req.user.id }).sort({
            date: -1,
        });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: "Server Error" });
    }
});

// @route   GET api/contacts
// @desc    add new contact
// @access  Private

// to use multiple middleware enclose them in a bracket
router.post(
    "/",
    [auth, [check("name", "Name is required").not().isEmpty()]],
    async (req, res) => {
        // check if there are errors in the validation above
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, phone, type } = req.body;

        try {
            const newContact = new Contact({
                name: name,
                email: email,
                phone: phone,
                type: type,
                user: req.user.id,
            });

            const contact = await newContact.save();

            res.json(contact);
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server Error");
        }
    }
);

// @route   UPDATE api/contacts/:id
// @desc    update contact
// @access  Private
router.put("/:id", (req, res) => {
    res.send("update contact");
});

// @route   DELETE api/contacts/:id
// @desc    delete contact
// @access  Private
router.delete("/:id", (req, res) => {
    res.send("delete contact");
});

module.exports = router;
