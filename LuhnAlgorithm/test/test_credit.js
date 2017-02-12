var assert = require("chai").assert;
var isValid = require("../credit");

describe("Credit", function() {
  it("should return true if card number is valid", function() {
    var card = 79927398713;
    var result = isValid(card);
    assert.isTrue(result);
  });

  it("should return false if card number is invalid", function() {
    var card = 79927398710;
    var result = isValid(card);
    assert.isFalse(result);
  });

  it("should return true if card number is valid", function() {
    var card = 4111111111111111;
    var result = isValid(card);
    assert.isTrue(result);
  });

  it("should return false if card number is invalid", function() {
    var card = 4111111111111112;
    var result = isValid(card);
    assert.isFalse(result);
  });

  it("should return true if card number is valid", function() {
    var card = 5500000000000004;
    var result = isValid(card);
    assert.isTrue(result);
  });

  it("should return false if card number is invalid", function() {
    var card = 5500000000000002;
    var result = isValid(card);
    assert.isFalse(result);
  });

  it("should return true if card number is valid", function() {
    var card = 340000000000009;
    var result = isValid(card);
    assert.isTrue(result);
  });

  it("should return false if card number is invalid", function() {
    var card = 340000000000001;
    var result = isValid(card);
    assert.isFalse(result);
  });

  it("should return true if card number is valid", function() {
    var card = 30000000000004;
    var result = isValid(card);
    assert.isTrue(result);
  });

  it("should return false if card number is invalid", function() {
    var card = 30000000000001;
    var result = isValid(card);
    assert.isFalse(result);
  });

  it("should return true if card number is valid", function() {
    var card = 201400000000009;
    var result = isValid(card);
    assert.isTrue(result);
  });

  it("should return false if card number is invalid", function() {
    var card = 201400000000002;
    var result = isValid(card);
    assert.isFalse(result);
  });
});
