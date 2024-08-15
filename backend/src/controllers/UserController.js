const Users = require("../models/UserModel")
const bcrypt = require("bcrypt");
require("dotenv").config();

//Display All User
const allUsers = async (req, res) => {
  try {
    console.log("testing...");
    const userData = await Users.find(); //it takes data from database
    //res.json(userData);
    res.status(200).send(userData);
    //res.send('testing...');
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send(error);
  }
};
const createUser = async (req, res) => {
  try {
    // Check if email already exists
    const emailExists = await Users.findOne({ UserEmail: req.body.UserEmail });
    if (emailExists) {
      return res.status(400).json({ status: false, message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.UserPassword, 8);

    // Create the new user
    const newUser = new Users({
      UserName: req.body.UserName,
      UserMobile: req.body.UserMobile,
      UserEmail: req.body.UserEmail,
      UserPassword: hashedPassword,
    });

    // Save the user
    const savedUser = await newUser.save();
    res.status(201).json({
      status: true,
      message: 'User created successfully',
      user: {
        id: savedUser._id.toString(), // Include the user ID in the response
        email: savedUser.UserEmail
      }
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ status: false, message: 'Server error' });
  }
};

  
  
  // Check user credentials during login
  const CredentialCheck = (req, res) => {
    Users.findOne({ UserEmail: req.body.UserEmail })
      .then(user => {
        if (!user) {
          return res.status(404).json({ status: false, message: 'User not found' });
        }
  
        // Compare the hashed password
        bcrypt.compare(req.body.UserPassword, user.UserPassword, (err, isMatch) => {
          if (err) {
            return res.status(500).json({ status: false, message: 'Error comparing passwords' });
          }
  
          if (isMatch) {
            // Here you can create a session or a JWT token as per your requirement
            res.status(200).json({
              status: true,
              message: 'Login successful',
              user: {
                id: user._id.toString(), // Convert ObjectId to string
                email: user.UserEmail
              }
            });
          } else {
            res.status(400).json({ status: false, message: 'Invalid credentials' });
          }
        });
      })
      .catch(err => {
        console.error("Error:", err);
        res.status(500).json({ status: false, message: 'Server error' });
      });
  };
  
  

module.exports = {
  allUsers,
  createUser,
  CredentialCheck,
};