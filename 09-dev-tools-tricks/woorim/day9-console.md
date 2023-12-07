# Instance methods of Console

## console.warn()

This outputs a warning message to the console.

## console.assert()

This writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

## console.clear()

This clears the console if the console allows it. A graphical console, like those running on browsers, will allow it; a console displaying on the terminal, like the one running on Node, will not support it, and will have no effect (and no error).

## console.group() , console.groupEnd()

Those create a new inline group in the Web console log, causing any subsequent console messages to be indented by an additional level.
You have to use those both.

### How to use

```
console.group("Fruit");
console.log("Strawberry");
console.log("Peach");
console.groupEnd("Fruit");
```
