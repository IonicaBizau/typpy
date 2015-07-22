// Dependencies
var Typpy = require("../lib")
  , Assert = require("assert")
  ;


const TESTS = [
    ["check null", null, "null"]
  , ["check undefined", undefined, "undefined"]
  , ["check NaN", NaN, "nan"]
  , ["support objects", {}, "object"]
  , ["support numbers", 42, "number"]
  , ["support strings", "hello", "string"]
  , ["support arrays", [], "array"]
  , ["support custom types", new (function () {
        function Person() {}
        return new Person();
    })(), "person"]
];

TESTS.forEach(function (c) {
    it("should " + c[0], function (cb) {
        Assert.equal(Typpy(c[1], c[2]), true);
        Assert.equal(Typpy.is(c[1], c[2]), true);
        Assert.equal(Typpy(c[1]), c[2]);
        cb();
    });
});
