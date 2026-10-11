import { expect } from "chai";
import { validateArrayElements } from "../src/exercise1.mjs";

describe("Exercise 1 - validateArrayElements", function () {
  it("validates the numbers from the assignment example", function () {
    const numbers = [2, 3, 4, 5];

    const result = validateArrayElements(numbers, number => number % 2 === 0);

    expect(result).to.deep.equal([
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

    expect(result).to.deep.equal([
      { value: products[0], isValid: true },
      { value: products[1], isValid: false },
      { value: products[2], isValid: true }
    ]);
  });

  it("validates an empty array", function () {
    const empty = []
    const resultEmpty = validateArrayElements(empty, number => number % 2 === 0)
    expect(resultEmpty).to.deep.equal([])
  });

  it("validades an array with diferent type objects", function(){
    const objects = ["House", 3, true, "Object"]

    const result = validateArrayElements(objects, obj => typeof obj === "string")

    expect(result).to.deep.equal([
      { value: "House", isValid: true },
      { value: 3, isValid: false },
      { value: true, isValid: false },
      { value: "Object", isValid: true }
    ])

  });

  it("accepts or rejects all the elements of the array", function(){
    const numbers = [2, 3, 4, 5];

    const result = validateArrayElements(numbers, number => number % 2 === 0)

    function allOrNone(res){
      for (const i of res){
        if (i.isValid === false){
          return res.map(obj => ({value: obj.value, isValid: false}))
        }
      }
      return res
    }
    expect(allOrNone(result)).to.deep.equal([
      { value: 2, isValid: false },
      { value: 3, isValid: false },
      { value: 4, isValid: false },
      { value: 5, isValid: false }
    ])
  });

  it("verification that each element is validated only once", function(){
    const numbers = [2, 3, 4, 5];
    const ver = []
    
    const result = validateArrayElements(numbers, number => {
      ver.push(number)
      number % 2 === 0
    })

    expect(ver).to.deep.equal(numbers)
  })

});
