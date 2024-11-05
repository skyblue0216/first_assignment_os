const { test, expect } = require("@jest/globals");
const lib = require("./lib");

//test avg
test("avg([3, 5, 7]) should be 5", () => {
expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
expect(lib.avg([-5, 5])).toBe(0);
});

//test prime
test("prime(1) should be false", ()=>{
expect(lib.prime(1)).toBe(false);
})
test("prime(2) should be true", ()=>{
expect(lib.prime(2)).toBe(true);
})
test("prime(31) should be true", ()=>{
expect(lib.prime(31)).toBe(true);
})
test("prime(64) should be false", ()=>{
expect(lib.prime(64)).toBe(false);
})

//test factorial
test("factorial(4) should be 24", ()=>{
expect(lib.factorial(4)).toBe(24);
})
test("factorial(15) should be 1,307,674,368,000", ()=>{
expect(lib.factorial(15)).toBe(1307674368000);
})