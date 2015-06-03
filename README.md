# typpy [![Donate now][donate-now]][paypal-donations]
A better `typeof` for JavaScript.

## Installation

```sh
$ npm i typpy
```

## Example

```js
// Dependencies
var Typpy = require("typpy");

console.log(Typpy("Hello World"));
// => "string"

console.log(Typpy(42));
// => "number"

console.log(Typpy([]));
// => "array"
```

## How to contribute
Have an idea? Found a bug? See [how to contribute](/CONTRIBUTING.md).

## License
See the [LICENSE](/LICENSE) file.

[donate-now]: http://i.imgur.com/jioicaN.png
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MG98D7NPFZ3MG
