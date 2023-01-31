const { User } = require('../../database/models');

const getAllSellers = async () => {
    const sellers = await User.findAll({
        where: {
            role: 'seller',
        },
    });
    return sellers;
};

const getSellerbyId = async (email) => {
const seller = await User.findOne({
    where: {
        email,
    },
});
return seller;
};

const getUserbyId = async (email) => {
    const user = await User.findOne({
        where: {
            email,
        },
    });
    return user;
};

const getAllUsers = async () => {
    const users = await User.findAll({});
    return users;
};

module.exports = {
    getAllSellers,
    getSellerbyId,
    getUserbyId,
    getAllUsers,
};