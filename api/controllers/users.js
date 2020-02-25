const userRepository = require('../repository/users');

const createUser = (req, res, next) => {
    console.log(">>>")
    const login = req.body.login;
    const password = req.body.password;

    const userId = userRepository.addUser({login, password});

    console.log('>>>', userId, login, password)

    if (userId) {
        res.send({ response: "OK" });
    } else {
        res.send(400, { response: "Something went wrong" });
    }
    next();
}


module.exports = {createUser};