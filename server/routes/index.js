const express = require('express')
const controller = require("./controller");
const router = express.Router();


router.post("/submit", async(req,res) => {
    try
    {
        //set default to 0 if value is null
        let a = req.body.a == undefined ? 0 : req.body.a; 
        a = req.body.a == "null" ? 0: +a;
 
    
        let b = req.body.b == undefined ? 0 : req.body.b; 
        b = req.body.b == "null" ? 0: +b;

        let method = req.body.method;

        let result = controller.PerformOperation(a,b, method);

        return res.json({result:"success", data: result});
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({
            code: 500,
            message: err.message
        });
    }
});

module.exports = router;