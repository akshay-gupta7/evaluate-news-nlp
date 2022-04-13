const { TestScheduler } = require("jest");

import { checkURL } from '../src/client/js/stringcheck'
import { checkForURLvalidity } from '../src/client/js/URLChecker' 
import { handleSubmit } from '../src/client/index' 

let sample_event=[];
function logevent(e)
{
    e.preventDefault();
    sample_event.push(e);
}

describe("Testing the submit functionality", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the handlesubmit() function", () => {
           // Testing if Hi is a valid input as an URL
           expect(checkForURLvalidity("https://www.cnbc.com/2022/04/13/us-extends-mask-mandate-for-airplanes-and-transit-by-15-days.html")).toBe(true);
})});