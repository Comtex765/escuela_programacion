<<<<<<< HEAD
function secondLargestNumber_2(numbers){
    let first = numbers[0];
    let second = 0;
    for (let i=0; i < numbers.length; i++){
        if (numbers[i] > first){
            second = first;
            first = numbers[i]
        }
        if (numbers[i] > second && numbers[i] < first){
            second = numbers[i]
        }
    }
    return second
}
function secondLargestNumber(numbers){
    numbers.sort( function(a, b){
        return b-a
    } );
    return numbers;
}


=======
function secondLargestNumber_2(numbers){
    let first = numbers[0];
    let second = 0;
    for (let i=0; i < numbers.length; i++){
        if (numbers[i] > first){
            second = first;
            first = numbers[i]
        }
        if (numbers[i] > second && numbers[i] < first){
            second = numbers[i]
        }
    }
    return second
}
function secondLargestNumber(numbers){
    numbers.sort( function(a, b){
        return b-a
    } );
    return numbers;
}


>>>>>>> d1bff8aa9e084cc099db80a3377014aa5d90fe12
console.log(secondLargestNumber(nums))