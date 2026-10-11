import assert from "node:assert/strict";
import { partitionBy } from "../src/exercise3.mjs";

describe("Exercise 3 - partitionBy (Node assert)", function () {
  it("validates the numbers from the assignment example", function () {
    const numbers = [2, 3, 4, 5];

    const result = partitionBy(numbers, number => number % 2 === 0)

    assert.deepStrictEqual(result.valid, [2, 4])
    assert.deepStrictEqual(result.invalid, [3,5])
  })

  it("validates the products from the assignment example", function () {
    const products = [
      { name: "Laptop", category: "Electronics" },
      { name: "Shirt", category: "" },
      { name: "Chair", category: "Furniture" }
    ];

    const result = partitionBy(products,product => product.category.length > 0);

    assert.deepStrictEqual(result.valid, [products[0], products[2]])
    assert.deepStrictEqual(result.invalid, [products[1]])
  })

  it("validates an empty array", function () {
    const empty = []
    const resultEmpty = partitionBy(empty, number => number % 2 === 0)
    assert.deepStrictEqual(resultEmpty.valid, [])
    assert.deepStrictEqual(resultEmpty.invalid, [])

  });

  it("validades an array with diferent type objects", function(){
    const objects = ["House", 3, true, "Object"]

    const result = partitionBy(objects, obj => typeof obj === "string")

    assert.deepStrictEqual(result.valid, ["House","Object"])
    assert.deepStrictEqual(result.invalid, [3, true])
  });

  it("rejects all the elements of the array", function(){
    const numbers = [1, 3, 5, 7];
    const result = partitionBy(numbers, number => number % 2 === 0)

    assert.deepStrictEqual(result.valid, [])
    assert.deepStrictEqual(result.invalid, [1,3,5,7])
  });

  it("accepts all the elements of the array", function(){
    const numbers = [2, 4, 6, 8];
    const result = partitionBy(numbers, number => number % 2 === 0)

    assert.deepStrictEqual(result.valid, [2,4,6,8])
    assert.deepStrictEqual(result.invalid, [])
  });

  it("verification that each element is validated only once", function(){
    const numbers = [2, 3, 4, 5];
    const ver = []
    
    const result = partitionBy(numbers, number => {
      ver.push(number)
      number % 2 === 0
    })

    assert.deepStrictEqual(ver, numbers)
  })

});