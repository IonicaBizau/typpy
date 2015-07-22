/**
 * Typpy
 * Creates a new `Typpy` instance.
 *
 * Usage:
 *
 * ```js
 * // Let Typpy to create a new instance
 * Typpy({}).is(Object); // => true
 *
 * // Use the `new` keyword
 * new Typpy({}).is(Object); // => true
 *
 * // Use the `getTypeOf` method
 * Typpy.getTypeOf(42); // => Number
 *
 * // Stringify the type
 * Typpy.getTypeOf([], true); => "array"
 * ```
 *
 * @name Typpy
 * @function
 * @param {Anything} input The input value.
 * @return {Typpy} The `Typpy` instance.
 */
function Typpy(input) {
    if (Typpy.getTypeOf(this) !== Typpy) {
        return new Typpy(input);
    }
    this.input = input;
}

/**
 * is
 * Checks if the input value has a specified type.
 *
 * @name is
 * @function
 * @param {String} target The target type. It could be a string (e.g. `"array"`) or a constructor (e.g. `Array`).
 * @return {Boolean} `true`, if the input has the same type with the target or `false` otherwise.
 */
Typpy.prototype.is = function (target) {
    return Typpy.getTypeOf(this.input, typeof target === "string") === target;
};

/**
 * Typpy.getTypeOf
 * Gets the type of the input value. This is used internally.
 *
 * @name Typpy
 * @function
 * @param {Anything} input The input value.
 * @param {Boolean} str A flag to indicate if the return value
 * should be a string or not.
 * @return {Constructor|String} The input value constructor
 * (if any) or the stringified type (always lowercase).
 */
Typpy.getTypeOf = function (input, str) {

    if (typeof input === "string") {
        return str ? "string" : String;
    }

    if (null === input) {
        return str ? "null" : null;
    }

    if (undefined === input) {
        return str ? "undefined" : undefined;
    }

    if (input !== input) {
        return str ? "nan" : NaN;
    }

    return str ? input.constructor.name.toLowerCase() : input.constructor;
};

module.exports = Typpy;
