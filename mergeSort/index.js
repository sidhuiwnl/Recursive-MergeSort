function RecursionMergeSort(n){

    if(n.length<=1){
        return n
    }

        let mid=Math.floor(n.length/2)
        let leftHalf = n.slice(0,mid);
        let rightHalf = n.slice(mid);

        let sortedLeft = RecursionMergeSort(leftHalf)
        let sortedright = RecursionMergeSort(rightHalf)

    
        return merge(sortedLeft,sortedright)
} 

function merge(sortedLeft,sortedright){
    let result = []
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex<sortedLeft.length && rightIndex<sortedright.length){
        if(sortedLeft[leftIndex] < sortedright[rightIndex]){
            result.push(sortedLeft[leftIndex]);
            leftIndex++
        }else{
            result.push(sortedright[rightIndex]);
            rightIndex++
        }
    }
    return result.concat(sortedLeft.slice(leftIndex),(sortedright.slice(rightIndex)))

}

const myArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray =RecursionMergeSort(myArray);


console.log("Sorted array:", sortedArray);