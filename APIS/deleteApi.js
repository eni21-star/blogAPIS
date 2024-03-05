const express = require('express')
const router = express.Router();
const model = require('../Database');

router.delete('/:id',async (req, res)=>{

    const { id } = req.params; 
   
 
    try {
       const removeData = await model.deleteOne({ blogTitle: id });
       //console.log(removeData);
       if (removeData.deletedCount == 1) {
          res.json({
             message: 1
          });
       }
       else {
          res.json({
             message: 0
          })
       }
    } catch (error) {
       console.log(error.message);
    }
 
 

})

module.exports = router;