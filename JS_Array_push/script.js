const arr = [1,3,5,7,9];


const pushFunction = function(array, index , element){
    const pushArr = [];
    for(let i = 0; i < array.length; i++){
        if(i === index){
            pushArr.push(element)
        }
        pushArr.push(array[i]);
    }

    if (index > array.length-1) {

        pushArr.push(element)
    }

    return pushArr;
}


const result = pushFunction(arr, 1, "Salam");

console.log(result);