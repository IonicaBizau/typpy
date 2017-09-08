## Documentation

You can see below the API reference of this module.

### `Typpy(input, target)`
Gets the type of the input value or compares it
with a provided type.

Usage:

```js
Typpy({}) // => "object"
Typpy(42, Number); // => true
Typpy.get([], "array"); => true
```

#### Params

- **Anything** `input`: The input value.
- **Constructor|String** `target`: The target type. It could be a string (e.g. `"array"`) or a
constructor (e.g. `Array`).

#### Return
- **String|Boolean** It returns `true` if the input has the provided type `target` (if was provided),
`false` if the input type does *not* have the provided type
`target` or the stringified type of the input (always lowercase).

### `Typpy.is(input, target)`
Checks if the input value has a specified type.

#### Params

- **Anything** `input`: The input value.
- **Constructor|String** `target`: The target type. It could be a string (e.g. `"array"`) or a
constructor (e.g. `Array`).

#### Return
- **Boolean** `true`, if the input has the same type with the target or `false` otherwise.

### `Typpy.get(input, str)`
Gets the type of the input value. This is used internally.

#### Params

- **Anything** `input`: The input value.
- **Boolean** `str`: A flag to indicate if the return value should be a string or not.

#### Return
- **Constructor|String** The input value constructor (if any) or the stringified type (always lowercase).

