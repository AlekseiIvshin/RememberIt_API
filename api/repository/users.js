const uuid = require('uuid/v4');
const userDb = require('../mocks/mockUserDb');

const usersRepository = {
    addUser: (user) => {
        const id = uuid();
        userDb.push({ ...user, id });
        return id;
    },
}

module.exports = usersRepository;