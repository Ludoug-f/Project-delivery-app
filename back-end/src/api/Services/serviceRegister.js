const { Op} = require("sequelize");
const { User } = require('../../database/models');
const md5 = require ("md5");
const { TokenCreation} = require('./auth/authLogin');

// const newUser = async (user) => {
//     const { name, email, role } = user;
  
//     // const passwordMd5 = md5(password);
  
//     const createUser = await User.create({ name, email, role });
//     //  rever logica if
//     // if(newUser) return { type: '400', message: 'User already exits' }
//     return { message: createUser };
//   };

//   const findByEmail = async (email) => {
//     const user = await User.findOne({ where: { email } });
  
//     return user;
//   };

//   const findByName = async (name) => {
//     const user = await User.findOne({ where: { name } });
  
//     if (!user) {
//       return { type: 400, message: 'Name not found' };
//     }
  
//     return { type: null, message: user };
//   };

const checkUser = async ({name, email, password, role}) => {
    const user = await User.findOne({ where: { [Op.or]: [{name}, {email}] } });
const passEncryp = md5(password);
    if(!user) {
        try {
            const createUser = await User.create({ name, email, password: passEncryp, role });
            return TokenCreation(createUser.email);
        } catch(err){
            console.log(err);

    }}};

    module.exports = { checkUser };