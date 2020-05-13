const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

//route GET /api/user/me
//dics   get user profile
//access private

router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if (!user) return res.status(400).json({ msg: 'user not found' });
    res.json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

//route GET /api/user
//dics   get all users profile
//access private

router.get('/', auth, async (req, res) => {
  try {
    //route GET /api/user/me
    //dics   get user profile
    //access private

    const users = await User.find().select(['-password', '-date', '-taken']);
    res.json({ users });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
