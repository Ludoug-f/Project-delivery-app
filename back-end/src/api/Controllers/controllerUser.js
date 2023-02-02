const { getAllSellers,
    getSellerbyId,
    getUserbyId,
    getAllUsers } = require('../Services/serviceUser');

    const getAllSellersC = async (req, res) => {
        const sellers = await getAllSellers();
        return res.status(200).json(sellers);
    };

    const getSellerbyIdC = async (req, res) => {
        const { email } = req.params;
        const seller = await getSellerbyId(email);
        return res.status(200).json(seller);
    };

    const getUserbyIdC = async (req, res) => {
        const { email } = req.params;
        const user = await getUserbyId(email);
        return res.status(200).json(user);
    };

    const getAllUsersC = async (req, res) => {
        const users = await getAllUsers();
        return res.status(200).json(users);
    };

    module.exports = {
        getAllSellersC,
        getSellerbyIdC,
        getUserbyIdC,
        getAllUsersC,
    };