const userRepository = require('../repository/users');

const createUser = (req, res, next) => {
    console.log(">>>")
    const user = req.body.user;

    const userId = userRepository.addUser(user);

    console.log('>>>', userId, user)

    if (userId) {
        res.send({ response: "OK" });
    } else {
        res.send(400, { response: "Something went wrong" });
    }
    next();
}


module.exports = {createUser};