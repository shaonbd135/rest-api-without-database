const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Saidur Rahaman",
        email: "sample@sample.com"
    },
    {
        id: uuidv4(),
        username: "Abdul Karim",
        email: "sample2@sample.com"
    }

];

module.exports = users;