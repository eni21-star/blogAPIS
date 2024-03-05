const express = require('express')
const router = express.Router();
const model = require('../Database');

router.put('/:blogTitle', async (req, res) => {

    const body = req.body.blogText;
    console.log(body);
    try {
 
       console.log(typeof body);
       const { blogTitle } = req.params;
 
       const Updated = await model.updateOne({ blogTitle: blogTitle }, { $set: { blogText: body } });
       // console.log(Updated)
       if (Updated.acknowledged && Updated.matchedCount === 1) {
          res.json({
             "message": 1
          })
       }
       else {
          res.json({
             "message": 0
          })
       }
 
    } catch (error) {
       res.status(404).send("internal server error")
       console.log(error.message);
    }
 
 })
 
 module.exports = router;
 