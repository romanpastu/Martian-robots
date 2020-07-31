const should = require("chai").should();
const { isMovementOutOfBounds, isMovementForbidden } = require("../utils");
const { input } = require('../input');

describe("Utils functions tests: ", function () {
    describe("Testing the functions that checks is the movement is out of bounds or not: ", function () {
        it("Should return a false boolean value, if the coordinates provided are in the bound of the grid: ", function () {
            result = isMovementOutOfBounds([1, 3, "W"], input)
            result.should.equal(false)
        })
        it("Should return a true boolean value if the coordinates provided are out of the bound of the grid: ", function () {
            result = isMovementOutOfBounds([1, 4, "W"], input)
            result.should.equal(true)
        })
        it("It should accept coordinates that do not contain an Orientation: ", function () {
            result = isMovementOutOfBounds([1, 3], input)
            result.should.equal(false)
        })
        it("it should return false, if the coordinates to compare with the input are anything different to 1 dimensional arrays with 2 or more values: ", function () {
            result = isMovementOutOfBounds([1, 1, 1, 1], input)
            result.should.equal(false)
            result = isMovementOutOfBounds([1], input)
            result.should.equal(false)
            result = isMovementOutOfBounds([1, 4, "W"], input)
            result.should.equal(true)
            result = isMovementOutOfBounds({coord: [1,3]}, input)
            result.should.equal(false)
            result = isMovementOutOfBounds(1, input)
            result.should.equal(false)
        })
    })
    describe("Testing the function that decides if the movement is forbidden or not: ", function () {
        it("it should return true, if the movement passed to the function, already exists in the list of forbidden movements", function () {
            result = isMovementForbidden([[[3,2],[3,3]]],[3,2],[3,3])
            result.should.equal(true)
        })
        it("it should return false, if the movement passed to the function, doesnt exist in the list of forbidden movements", function () {
            result = isMovementForbidden([[[3,2],[3,3]]],[3,4],[3,3])
            result.should.equal(false)
        })
    })
})