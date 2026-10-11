export function partitionBy(array, predicate) {
	return array.reduce((acc, value) => {
		if(predicate(value)){
			acc.valid.push(value)
		} else {
			acc.invalid.push(value)
		}
		return acc
	}, {valid: [], invalid: []}
	)
}

//const valid = arr.filter(a => predicate(a))
//const invalid = arr.filter(a => !predicate(a))
//return [{valid, invalid}]