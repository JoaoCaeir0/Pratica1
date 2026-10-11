import assert from "node:assert/strict";
import { timeExecution } from "../src/exercise5.mjs";

describe("Exercise 5 - timeExecution (Node assert)", function(){
    it("validates a function after timeExecution()", function(){
        const obj = {
            compute(x) {
                return x * 2
            }
        }

        timeExecution(obj, 'compute');
        assert.deepStrictEqual(obj.compute(5), 10)
        assert.deepStrictEqual(obj.compute(10), 20)
    })
})