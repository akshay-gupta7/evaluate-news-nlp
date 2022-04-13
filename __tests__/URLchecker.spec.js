const { TestScheduler } = require("jest");

import { checkForURLvalidity } from '../src/client/js/URLChecker' 

describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the checkforURLvalidity() function", () => {
           // Testing if Hi is a valid input as an URL
           expect(checkForURLvalidity("hi")).toBe(false);
})});