[![typpy](http://i.imgur.com/FkoAc5n.png)](#)

# typpy [![Support this project][donate-now]][paypal-donations]

A better typeof for JavaScript.

## Installation

```sh
$ npm i typpy
```

## Example

```js
// Dependencies
var Typpy = require("typpy");

console.log(Typpy(0));
// => "number"

console.log(Typpy("", String));
// => true

console.log(Typpy.is(null, "null"));
// => true

console.log(Typpy.get([]));
// => Array

console.log(Typpy({}, true));
// => "object"

console.log(Typpy({}, Object));
// => true
```

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`bug-killer`](https://github.com/IonicaBizau/node-bug-killer)

 - [`cli-gh-cal`](https://github.com/IonicaBizau/cli-gh-cal)

 - [`couleurs`](https://github.com/IonicaBizau/couleurs)

 - [`deffy`](https://github.com/IonicaBizau/deffy.js)

 - [`diable`](https://github.com/IonicaBizau/diable)

 - [`elm-select`](https://github.com/IonicaBizau/elm-select.js)

 - [`exec-limiter`](https://github.com/IonicaBizau/node-exec-limiter)

 - [`ghcal`](https://github.com/IonicaBizau/ghcal)

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

 - [`limit-it`](https://github.com/IonicaBizau/node-limit-it)

 - [`ul`](https://github.com/IonicaBizau/node-ul)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md