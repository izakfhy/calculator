const opsFactory = require("../operations/opsFactory");

module.exports = {

    PerformOperation: (a, b, method) => {

        if(opsFactory[method] == undefined)
        {
            throw new Error("Unsupported operation");
        }
        let ops = new opsFactory[method](a,b);
        try
        {
            ops.StandardValidation();
        }
        catch(error)
        {
            console.log(error);
            throw error;
        }
        
        return ops.Operate();
    }
};