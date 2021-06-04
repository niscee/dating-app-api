const express = require('express');
const Interest = require('../model/Interest');
const router = express.Router();


router.get('/', async(req, res) => {
    const data = await Interest.findAll();
    res.json(data)
});

router.post('/add', async(req, res) => {
    const {title} = req.body;
    const data = Interest.create({title});
    res.json({msg: "Added Successfully"});
});


module.exports = router;