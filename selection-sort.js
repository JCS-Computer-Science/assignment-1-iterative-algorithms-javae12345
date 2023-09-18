function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */
	for (let i = 0; i < array.length; i++) {
		let smallest = Math.min(...array.slice(i));
		si = array.indexOf(smallest, i)
		temp = array[i];
		array[i] = smallest;
		array[si] = temp


	}
	return array;
}

module.exports = selectionSort;


