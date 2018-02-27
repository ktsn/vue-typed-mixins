import * as assert from 'power-assert'
import Vue from 'vue'
import mixins from '../src/index'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('mixins', () => {
  it('should mixin multiple components', () => {
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
  })
})
