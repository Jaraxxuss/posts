const compose =
  (...funcs) =>
  (comp) =>
    funcs.reduceRight((wrappedComponent, func) => func(wrappedComponent), comp)

export default compose
