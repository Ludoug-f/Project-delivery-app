const { Op } = require('sequelize');
const md5 = require('md5');
const { User } = require('../../database/models');
const { TokenCreation } = require('./auth/authLogin');

const checkUser = async ({ name, email, password, role }) => {
    const user = await User.findOne({ where: { [Op.or]: [{ name }, { email }] } });
const passEncryp = md5(password);
    if (!user) {
        try {
            const createUser = await User.create({ name, email, password: passEncryp, role });
            return TokenCreation(createUser.email);
        } catch (err) {
            console.log(err);
    } 
} 
};

    module.exports = { checkUser };