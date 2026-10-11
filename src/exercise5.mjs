export function timeExecution(object, method) {
  const originalFunc = object[method]
  object[method] = (...args) => {
    const start = performance.now()   
    const result = originalFunc.apply(object, args)
    const end = performance.now()
    console.log(end - start)
    return result
  }
}