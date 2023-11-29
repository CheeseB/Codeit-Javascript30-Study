# Things to memorize

## 1. querySelectorAll returns NodeList. So what is it?

---

`NodeList` objects are collections of nodes, usually returned by properties such as `Node.childNodes` and methods such as `document.querySelectorAll()`.

**Note** Although `NodeList` is not an `Array`, it is possible to iterate over it with `forEach()`. It can also be converted to a real `Array` using `Array.from()`.

This also means you can not use some methods like map and reduce etc. If you open up he prototype for the node list you can see only a couple of methods like entries, forEach etc.

## 2. dataset

---

The `dataset` read-only property of the `HTMLElement` interface provides read/write access to custom data attributes (`data-*`) on elements. It exposes a map of strings (`DOMStringMap`) with an entry for each `data-*` attribute.

**Note** The `dataset` property itself can be read, but not directly written. Instead, all writes must be to the individual properties within the `dataset`, which in turn represent the data attributes.

An HTML `data-\*` attribute and its corresponding DOM `dataset.property` modify their shared name according to where they are read or written:

### In HTML

The attribute name begins with `data-`. It can contain only letters, numbers, dashes (`-`), periods (`.`), colons (`:`), and underscores (`_`). Any ASCII capital letters (`A` to `Z`) are converted to lowercase.

### In JavaScript

The property name of a custom data attribute is the same as the HTML attribute without the `data-` prefix, and removes single dashes (`-`) for when to capitalize the property's "camel-cased" name.

dataset is an object that contains all the data attributes from that specific element whose name starts from 'data-'.
It returns DOMStringMap {sizing: "px"}.

## Sources from

---

### MDN Web Docs

[MDN WEb Docs](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

### YOUTUBE Wes Bos

[Wes Bos](https://www.youtube.com/watch?v=AHLNzv13c2I&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=3)
