const express = require('express');
const UserInterest = require('../model/UserInterest');
const router = express.Router();
const UserProfile = require('../model/UserProfile');

// returns all user profile info <summary, img>.
router.get('/', async(req, res) => {
    const data = await UserProfile.findAll();
    res.json(data)
});


// returns each user and respective interest id <UserId, InterestId>
router.get('/user-interest', async(req, res) => {
    const data = await UserInterest.findAll();
    res.json(data)
});


// save profile <summary, img> and UserInterest <UserId, InterestId>. 
router.post('/add', async(req, res) => {
    const {summary, interests, user_id } = req.body;
    try{
        const data = await UserProfile.create({summary: summary, UserId: user_id});
        interests.forEach((interest)=>{
            const interestData = UserInterest.create({UserId: user_id, InterestId: interest});
        })
        res.json({msg: "Success"})
    }
    catch(err){
        res.json({msg: err.message})
    }
});


module.exports = router;