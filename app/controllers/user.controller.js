const User = require('../models/user.model.js');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const user = ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        } else {
            res.send(data);
        }
    });
};

exports.login = (req, res) => {
    User.findUser(req.body, (err, data) => {
        // console.log(req.params.email + '////////////////////////////////////////////');
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `email and passord missmatched ${req.params.userEmail}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving email " + req.params.userEmail
                });
            }
        } else res.send(data);
    });
};