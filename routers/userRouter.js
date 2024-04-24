const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.get('/add', (req, res) => {
    res.send('Respond from user add');
});

//getall
router.get('/getall', (req, res) => {
    res.send('Respond from user getall');
});

//getbyid
router.get('/getbyid', (req, res) => {
    res.send('Respond from user getbyid');
});

//delete
router.get('/delete', (req, res) => {
    res.send('Respond from user delete');
});

//update
router.get('/update', (req, res) => {
    res.send('Respond from user update');
});

module.exports = router;