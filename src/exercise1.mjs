export function validateArrayElements(arr, elementValidator) {
  return arr.map(value => {
    const isValid = elementValidator(value)
    return {value: value, isValid: isValid}
  })
}