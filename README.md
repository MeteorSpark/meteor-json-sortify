# meteorspark:json-sortify

A deterministic version of JSON.stringify that sorts object keys alphabetically.

A wrapper around [ThomasR/JSON.sortify](https://github.com/ThomasR/JSON.sortify).

**Example:**

```javascript
var x = new ReactiveVar(null, function(a, b) {
  return JSON.sortify(a) === JSON.sortify(b);
});
```
