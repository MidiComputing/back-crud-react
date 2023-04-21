const userModel=require("../models/user")


//Add new user
module.exports.addUser = async (req, res) => {
  const { email } = req.body;
  
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "user already exists" });
    }
    
    const user = new userModel({ ...req.body });
    await user.save();
    res.send({ msg: "user successfully created" });
  } 
  catch (error) {
    res.status(500).send({ msg: error.message });
  }
};

//Get all users
module.exports.getallUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send({ users });
  } 
  catch (error) {
    res.send({ msg: error.message });
  }
};

//Get user by id
module.exports.getUserById = async (req, res) => {
  const {idUser}=req.params

  try { 
    const users = await userModel.findById(idUser);
    res.send({ users });
  } 
  catch (error) {
    res.send({ msg: error.message });
  }
};

//Update user by id
module.exports.updateUserById = async (req, res) => {
  const {idUser}=req.params

  try { 
    const user = await userModel.findById(idUser)
    const updateUser = await user.updateOne({ ...req.body }); 
    res.send({ msg: "user successfully updated" });
  }
  catch (error) {
    res.send({ msg: error.message });
  }
};

//Delete user by id
module.exports.deleteUserById = async (req, res) => {
  const {idUser}=req.params

  try { 
    const userExist = await userModel.findById(idUser);
    if (userExist) {
      const users = await userModel.findByIdAndDelete(idUser);
      res.send({ msg: "user successfully deleted" });
    } else {
      res.send({ msg: "user not exist" });
    }
  } 
  catch (error) {
    res.send({ msg: error.message });
  }
};