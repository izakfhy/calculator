const controller = require("../routes/controller");

describe("calculator tests", () => {
    test('Addtion works', () => {
        expect(controller.PerformOperation(1, 2, "Add")).toBe(3);
    });
    
    test('Subtraction works', () => {
        expect(controller.PerformOperation(1, 2, "Subtract")).toBe(-1);
    });

    test('Invalid Input-A works', () => {
        expect.assertions(1);
        try
        {
            controller.PerformOperation("A", 2, "Add")
        }
        catch(err)
        {
            expect(err.message).toBe("Invalid input")
        }
    });
    test('Invalid Input-B works', () => {
        expect.assertions(1);
        try
        {
            controller.PerformOperation(2, "b", "Add")
        }
        catch(err)
        {
            expect(err.message).toBe("Invalid input")
        }
    });

    test('Invalid method works', () => {
        expect.assertions(1);
        try
        {
            controller.PerformOperation(2, 3, "Multiply")
        }
        catch(err)
        {
            expect(err.message).toBe("Unsupported operation")
        }
    });
})
