
const Operation = require('../../operation');

class Subtract extends Operation
{
    constructor(a,b)
    {
        super(a, b);
    }

    ValidateInput()
    {
    }

    Operate()
    {
        return this.opA - this.opB;
    }
}
module.exports = Subtract;