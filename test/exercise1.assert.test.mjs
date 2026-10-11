import assert from "node:assert/strict";
import { validateArrayElements } from "../src/exercise1.mjs";

describe("Exercise 1 - validateArrayElements (Node assert)", function () {
  it("validates the numbers from the assignment example", function () {
    const numbers = [2, 3, 4, 5];

    const result = validateArrayElements(numbers, number => number % 2 === 0)

    assert.deepStrictEqual(result, [
      { value: 2, isValid: true },
      { value: 3, isValid: false },
      { value: 4, isValid: true },
      { value: 5, isValid: false }
    ]);
  });

  it("validates the products from the assignment example", function () {
    const products = [
      { name: "Laptop", category: "Electronics" },
      { name: "Shirt", category: "" },
      { name: "Chair", category: "Furniture" }
    ];

    const result = validateArrayElements(
      products,
      product => product.category.length > 0
    );

    assert.deepStrictEqual(result, [
      { value: products[0], isValid: true },
      { value: products[1], isValid: false },
      { value: products[2], isValid: true }
    ]);
  });

  it("validates an empty array", function () {
    const empty = []
    const resultEmpty = validateArrayElements(empty, number => number % 2 === 0)
    assert.deepStrictEqual(resultEmpty, [])
  });

  it("validades an array with diferent type objects", function(){
    const objects = ["House", 3, true, "Object"]

    const result = validateArrayElements(objects, obj => typeof obj === "string")

    assert.deepStrictEqual(result, [
      { value: "House", isValid: true },
      { value: 3, isValid: false },
      { value: true, isValid: false },
      { value: "Object", isValid: true }
    ]);

  });

  it("rejects all the elements of the array", function(){
    const numbers = [1, 3, 5, 7];
    const result = validateArrayElements(numbers, number => number % 2 === 0)

    assert.deepStrictEqual(result, [
      { value: 1, isValid: false },
      { value: 3, isValid: false },
      { value: 5, isValid: false },
      { value: 7, isValid: false }
    ]);
  });

  it("accepts all the elements of the array", function(){
    const numbers = [2, 4, 6, 8];
    const result = validateArrayElements(numbers, number => number % 2 === 0)

    assert.deepStrictEqual(result, [
      { value: 2, isValid: true },
      { value: 4, isValid: true },
      { value: 6, isValid: true },
      { value: 8, isValid: true }
    ]);
  });

  it("verification that each element is validated only once", function(){
    const numbers = [2, 3, 4, 5];
    const ver = []
    
    const result = validateArrayElements(numbers, number => {
      ver.push(number)
      number % 2 === 0
    })

    assert.deepStrictEqual(ver, numbers)
  })

});