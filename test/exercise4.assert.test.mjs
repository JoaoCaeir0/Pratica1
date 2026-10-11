import assert from "node:assert/strict";
import { checkItemsExist } from "../src/exercise4.mjs";

describe("Exercise 4 - checkItemsExist (Node assert)", function () {
  it("validates the numbers from the assignment example", function () {
    const validProducts = [{ sku: "A123", name: "Laptop" },
                           { sku: "B456", name: "Mouse" },
                           { sku: "C789", name: "Keyboard" }]

    const checkProducts = checkItemsExist(validProducts, "sku")

    assert.deepStrictEqual(checkProducts([{ sku: "A123" }, { sku: "B456" }]), true)
    assert.deepStrictEqual(checkProducts([{ sku: "A123" }, { sku: "C345" }]), false)
  })

  it("validades an undefined array", function() {
    const validProducts = [{ sku: undefined, name: "PC" }]
    const checkProducts = checkItemsExist(validProducts, "sku")
    
    assert.deepStrictEqual(checkProducts([{ sku: undefined }]), true)
    assert.deepStrictEqual(checkProducts([{ sku: "_"}]), false)
  })

  it("accepts and rejects all elements of the array", function() {
    const validProducts = [{ name: "Laptop", model: "S235" },
                           { name: "iPhone", model: "18"}]
    const checkName = checkItemsExist(validProducts, "name")
    const checkModel = checkItemsExist(validProducts, "model")

    assert.deepStrictEqual(checkName([{ name: "Laptop" }, { name: "iPhone" }]), true)
    assert.deepStrictEqual(checkModel([{ model: "S236" }, { model: "17" }]), false)
  })

  it("validades an empty array", function() {
    const validProducts = [{ }]
    const checkProducts = checkItemsExist(validProducts, "")
    
    assert.deepStrictEqual(checkProducts([{ }]), true)
  })

  it("accepts repeated items and different order", function () {
    const check = checkItemsExist([{ sku: "A123" }, { sku: "B456" }], "sku")

    assert.strictEqual(check([{ sku: "B456" }, { sku: "A123" }, { sku: "A123" }]), true)
  })

  it("ignores extra properties, only the key matters", function () {
    const check = checkItemsExist([{ sku: "A123", name: "Laptop" }], "sku")

    assert.strictEqual(check([{ sku: "A123", name: "Outro nome" }]), true)
  })
  
});
