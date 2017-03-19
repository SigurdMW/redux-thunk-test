export function toLowercase(str){
	return str.toLowerCase();
}

export function sortArrayByDate(sortingOrder, sortingArray, key){
	switch(sortingOrder){
		case "asc":
			return sortingArray.sort((a, b) => new Date(a[key]) - new Date(b[key]))
		case "desc":
			return sortingArray.sort((a, b) => new Date(b[key]) - new Date(a[key]))
		default:
			return sortingArray
	}
}