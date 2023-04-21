const express = require("express");
const { addUser, getallUsers, getUserById, deleteUserById, updateUserById } = require("../controllers/userController");
const router = express.Router();

/**
 *@method POST /user/adduser
 *@description add a new user
 *@access public
 */
 router.post("/adduser",addUser)

 /**
 * @route get /user/
 * @description get all users
 * @access public
 */
router.get("/",getallUsers);

 /**
 * @route get /user/
 * @description get user by id
 * @access public
 */
 router.get("/:idUser",getUserById);

  /**
 * @route delete /user/
 * @description delete user by id
 * @access public //or protected
 */
  router.delete("/:idUser",deleteUserById);

    /**
 * @route update /user/
 * @description update user by id
 * @access public //or protected
 */
    router.put("/:idUser",updateUserById);


 module.exports = router