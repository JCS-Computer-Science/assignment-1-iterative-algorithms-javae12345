function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
   let undone = false;
   while(true){
       undone = false
   for(i = 1;i<array.length;i++){
    if(array[i]<array[i-1]){
        value = array[i]
        array[i] = array[i-1]
        array[i-1] = value
        undone = true
   }
}
if(!undone){
 break
   }

   }
	return array;

}

module.exports = bubbleSort;
console.log(bubbleSort([8,4,3,5,7]))