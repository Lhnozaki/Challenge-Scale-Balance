// write tests here
const chai = require("chai");
const expect = chai.expect;
const should = chai.should();
const scaleBalance = require("../index");

describe("Scale Balance", function() {
  it("Should be a function", function() {
    expect(scaleBalance).to.be.a("function");
  });

  it("should return a string", function() {
    expect(scaleBalance(["[5, 9]", "[1, 2, 6, 7]"])).to.be.a("string");
  });

  it("Should return a string of the values separated by commas in ascending order; if there is only one value, return a zero followed by the value", function() {
    expect(scaleBalance(["[3, 9]", "[1, 2, 6, 9]"])).to.equal("0, 6");
  });

  it("Should throw an error if the array of values is empty", function() {
    expect(scaleBalance(["[9, 3]", "[]"])).to.equal("No values");
  });

  it("Should return the value 'Not Possible' if scale is already balanced", function() {
    expect(scaleBalance(["[6, 6]", "[1, 2, 4]"])).to.equal("Not Possible");
  });

  it("Should return the value 'Not Possible' if scale cannot balance with given values", function() {
    expect(scaleBalance(["[4, 9]", "[1, 2, 9]"])).to.equal("Not Possible");
  });

  it("Should return a string of the values separated by commas in ascending order", function() {
    expect(scaleBalance(["[5, 9]", "[1, 2, 6, 7]"])).to.equal("2, 6");
  });
});
