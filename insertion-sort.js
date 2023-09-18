function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	for(let i=1;i<array.length;i++){
		let value;
		if(array[i]<array[i-1]){
			value = array[i]
			array[i] = array[i-1]
			array[i-1] = value
			i = i-2

		}
		}
	return array;
}

module.exports = insertionSort;
console.log(insertionSort([8,4,3,5,7]))

