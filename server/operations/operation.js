
class Operation
{
    constructor(a, b)
    {
        if(this.constuctor == Operation)
            throw new Error("Abstrct class cant be instantiated");

        this.opA = a;
        this.opB = b;
    }

    ValidateInput()
    {
        throw new Error("ValidateInput must be implemented");
    }

    isNumber(num)
    {
        if(typeof num === 'number' && !Number.isNaN(num))
        {
            return true;
        }
        return false;
    }

    StandardValidation()
    {
        if( !this.isNumber(this.opA) || !this.isNumber(this.opB))
        {
            throw new Error("Invalid input");
        }
        this.ValidateInput();
    }

    Operate()
    {
        throw new Error("Operate must be implemented");
    }
};

module.exports = Operation;