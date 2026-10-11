import assert from "node:assert/strict";
import { validateAndCorrectArray } from "../src/exercise2.mjs";

describe("Exercise 2 - validateAndCorrectArray (Node assert)", function () {
  it("corrects the numbers from the assignment example", function () {
    const numbers = [2, 3, 4, 5];

    const result = validateAndCorrectArray(numbers, number => number % 2 === 0, 0);

    assert.deepStrictEqual(result.correctedArray, [2, 0, 4, 0]);
    assert.deepStrictEqual(result.invalidElements, [3, 5]);
  });

  it("corrects the products from the assignment example", function () {
    const products = [
      { name: "Laptop", category: "Electronics" },
      { name: "Shirt", category: "" },
      { name: "Chair", category: "Furniture" }
    ];
    const defaultProduct = { name: "Unknown", category: "Misc" };

    const result = validateAndCorrectArray(products, product => product.category.length > 0, defaultProduct);

    assert.deepStrictEqual(result.correctedArray, [
      products[0],
      defaultProduct,
      products[2]
    ]);
    assert.deepStrictEqual(result.invalidElements, [products[1]]);
  });

  it("corrects an empty array with the default value", function(){
    const obj = []
    const result = validateAndCorrectArray(obj, object => object % 2 == 0, 0)

    assert.deepStrictEqual(result.correctedArray, [])
    assert.deepStrictEqual(result.invalidElements, [])
  })

  it("accepts all elements of an array", function(){
    const obj = [2,4,6,8]
    
    const result = validateAndCorrectArray(obj, number => number % 2 === 0, 0)
    assert.deepStrictEqual(result.correctedArray, obj)
    assert.deepStrictEqual(result.invalidElements, [])
  })

  it("rejects all elements of an array", function(){
    const obj = [1,3,5,7]
    
    const result = validateAndCorrectArray(obj, number => number % 2 === 0, 0)
    assert.deepStrictEqual(result.correctedArray, [0,0,0,0])
    assert.deepStrictEqual(result.invalidElements, obj)
  })

  it("corrects the numbers from the assignment example (string default)", function () {
    const numbers = [2, 3, 4, 5];

    const result = validateAndCorrectArray(numbers, number => number % 2 === 0, "false");

    assert.deepStrictEqual(result.correctedArray, [2, "false", 4, "false"]);
    assert.deepStrictEqual(result.invalidElements, [3, 5]);
  });

  it("verification that each element is validated only once", function(){
    const numbers = [2, 3, 4, 5];
    const ver = []
    
    const result = validateAndCorrectArray(numbers, number => {
      ver.push(number)
      number % 2 === 0
    })

    assert.deepStrictEqual(ver, numbers)
  })
});