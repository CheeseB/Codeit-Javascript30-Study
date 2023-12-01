# flex

## what is flex

The `flex` is a shorthand for `flex-grow`, `flex-shrink`, `felx-basis`.

## The flex property may be specified using one to three values.

- One-value syntax: the value must be one of:
  -a valid value for <flex-grow>: then the shorthand expands to `flex: <flex-grow> 1 0`.
  -a valid value for <flex-basis>: then the shorthand expands to `flex: 1 1 <flex-basis>`.
  - the keyword none or one of the global keywords.
- Two-value syntax:
  - The first value must be a valid value for `flex-grow`.
  - The second value must be one of:
    - a valid value for `flex-shrink`: then the shorthand expands to flex: `<flex-grow> <flex-shrink> 0`.
    - a valid value for `flex-basis`: then the shorthand expands to flex: `<flex-grow> 1 <flex-basis>`.
- Three-value syntax: the values must be in the following order:
  1. a valid value for `flex-grow`.
  2. a valid value for `flex-shrink`.
  3. a valid value for `flex-basis`.

## Values

`initial`
&nbsp; The item is sized according to its `width` and `height` properties. It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container. This is equivalent to setting `"flex: 0 1 auto"`.

`auto`
&nbsp; The item is sized according to its `width` and `height` properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container. This is equivalent to setting `"flex: 1 1 auto`".

`none`
&nbsp; The item is sized according to its `width` and `height` properties. It is fully inflexible: it neither shrinks nor grows in relation to the flex container. This is equivalent to setting `"flex: 0 0 auto"`.

`<'flex-grow'>`
&nbsp; Defines the `flex-grow` of the flex item. Negative values are considered invalid. Defaults to `1` when omitted. (initial is `0`)

`<'flex-shrink'>`
&nbsp; Defines the `flex-shrink` of the flex item. Negative values are considered invalid. Defaults to `1` when omitted. (initial is `1`)

`<'flex-basis'>`
&nbsp; Defines the `flex-basis` of the flex item. A preferred size of `0` must have a unit to avoid being interpreted as a flexibility. Defaults to `0` when omitted. (initial is `auto`)
