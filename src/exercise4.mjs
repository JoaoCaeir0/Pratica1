export function checkItemsExist(validItems, key) {
    const filtered = validItems.map(x => x[key])
    return function verify(arr){
        return arr.every(value => filtered.includes(value[key]))
    }
}