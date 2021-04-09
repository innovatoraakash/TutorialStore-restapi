const sql = require("./db.js");


//coonstructor
const User = function(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;

}

User.create = (newUser, result) => {
    console.log(newUser);
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: aayo ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findUser = (userdata, result) => {
    console.log(userdata.email + '...........................')
    sql.query(`SELECT * FROM user WHERE email like ?`, userdata.email, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            if (res[0].password == userdata.password) {
                console.log("found user: ", res[0]);
                result(null, res[0]);
                return;
            } else {
                console.log('email or password incorrect');
            }
        }

        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;