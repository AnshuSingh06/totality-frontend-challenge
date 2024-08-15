const router =require('express').Router();
const User =require("../controllers/UserController");

router.post("/",User.createUser);
router.post("/login",User.CredentialCheck);
router.get("/",User.allUsers);


module.exports =router;





