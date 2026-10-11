import { expect } from "chai";
import { validateAndCorrectArray } from "../src/exercise2.mjs";

describe("Exercise 2 - validateAndCorrectArray", function () {
  it("corrects the numbers from the assignment example", function () {
    const numbers = [2, 3, 4, 5];

    const result = validateAndCorrectArray(
      numbers,
      number => number % 2 === 0,
      0
    );

    expect(result.correctedArray).to.deep.equal([2, 0, 4, 0]);
    expect(result.invalidElements).to.deep.equal([3, 5]);
  });

  it("corrects the products from the assignment example", function () {
    const products = [
      { name: "Laptop", category: "Electronics" },
      { name: "Shirt", category: "" },
      { name: "Chair", category: "Furniture" }
    ];
    const defaultProduct = { name: "Unknown", category: "Misc" };

    const result = validateAndCorrectArray(
      products,
      product => product.category.length > 0,
      defaultProduct
    );

    expect(result.correctedArray).to.deep.equal([
      products[0],
      defaultProduct,
      products[2]
    ]);
    expect(result.invalidElements).to.deep.equal([products[1]]);
  });

  it("corrects an empty array with the default value", function(){
    const obj = []
    const result = validateAndCorrectArray(obj, object => object % 2 == 0, 0)

    expect(result.correctedArray).to.deep.equal([])
    expect(result.invalidElements).to.deep.equal([])
  })

  it("accepts all elements of an array or none of them", function(){
    const obj = [2,3,4,5]
    
    function allOrNone(res){
      for (const i of res){
        if (i % 2 != 0){
          return () => false
        }
      }
      return () => true
    }

    const result = validateAndCorrectArray(obj, allOrNone(obj), 0)
    expect(result.correctedArray).to.deep.equal([0,0,0,0])
    expect(result.invalidElements).to.deep.equal(obj)
  })

  it("corrects the numbers from the assignment example (string default)", function () {
    const numbers = [2, 3, 4, 5];

    const result = validateAndCorrectArray(numbers, number => number % 2 === 0, "false");

    expect(result.correctedArray).to.deep.equal([2, "false", 4, "false"]);
    expect(result.invalidElements).to.deep.equal([3, 5]);
  });

  it("verification that each element is validated only once", function(){
    const numbers = [2, 3, 4, 5];
    const ver = []
    
    const result = validateAndCorrectArray(numbers, number => {
      ver.push(number)
      number % 2 === 0
    })

    expect(ver).to.deep.equal(numbers)
  })
});
