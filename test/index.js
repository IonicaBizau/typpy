import assert from "node:assert";
import Typpy from "../lib/index.js";


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
  , ["support null objects", Object.create(null), "object"]
];

TESTS.forEach(function (c) {
    it("should " + c[0], function (cb) {
    assert.equal(Typpy(c[1], c[2]), true);
    assert.equal(Typpy.is(c[1], c[2]), true);
    assert.equal(Typpy(c[1]), c[2]);
        cb();
    });
});
