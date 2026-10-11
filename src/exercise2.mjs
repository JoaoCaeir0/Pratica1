export function validateAndCorrectArray(arr, elementValidator, defaultValue) {
  return arr.reduce((acc, value) => {
    if (elementValidator(value)){
      acc.correctedArray.push(value)
    } else {
      acc.correctedArray.push(defaultValue)
      acc.invalidElements.push(value)
    }
    return acc
    }, {correctedArray: [], invalidElements: []}
  )
}