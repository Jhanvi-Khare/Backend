const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Respond from user add')
})

module.exports = router;