const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register


// router.get('/', (req, res, next) => {
//   res.send('Hey, Express sends all requests to ./routes/users.js so theres no / but there is /USERS');
// })
// router.get('/register', (req, res, next) => {
//   res.send('REGISTER, prefixed with /users ');
// })
router.get('/test', (req, res, next) => {
  res.send('TEST WORKS,  prefixed with /users ');
})

router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered', newUser});
      console.log('newUser: ', newUser)
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  console.log('Authenticating...')
  const username = req.body.username;
  const password = req.body.password;
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }
    console.log('Comparing Password...')
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        console.log('Passwords Match: ', password);
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
        console.log('Passwords Problem: ', password);

      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
