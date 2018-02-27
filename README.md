# Vue Typed Mixins

Type safe Vue.js mixins.

## Example

This has the same capability of canonical Vue [`mixins`](https://vuejs.org/v2/api/#mixins), but is type safe in TypeScript.

```ts
import Vue from 'vue'
import mixins from 'vue-typed-mixins'

const Foo = Vue.extend({
  data() {
    return {
      foo: 'test'
    }
  }
})

const Bar = Vue.extend({
  data() {
    return {
      bar: 123
    }
  }
})

const App = mixins(Foo, Bar).extend({
  data() {
    return {
      value: true
    }
  },

  computed: {
    concat(): string {
      return `${this.foo} ${this.bar} ${this.value}`
    }
  }
})

const vm = new App()
assert(vm.foo === 'test')
assert(vm.bar === 123)
assert(vm.value === true)
assert(vm.concat === 'test 123 true')
```

## License

MIT
