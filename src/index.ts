import Vue, { VueConstructor } from 'vue'

export type VueClass<T> = VueConstructor<T & Vue>

type UnionToIntersection<U> = (U extends any
? (k: U) => void
: never) extends (k: infer I) => void
  ? I
  : never

export type MixedVueConstructor<
  Ctors extends VueConstructor[]
> = Ctors extends VueConstructor<infer Vs>[]
  ? VueClass<UnionToIntersection<Vs>>
  : never

export default function mixins<Ctors extends VueConstructor[]>(
  ...Ctors: Ctors
): MixedVueConstructor<Ctors>
export default function mixins(...Ctors: VueConstructor[]): VueConstructor {
  return Vue.extend({ mixins: Ctors })
}
