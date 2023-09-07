//* answer of question number 1
function findWhiteBox(chars) {
    let top = 12, left = 12, bottom = 0, right = 0;
    
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            const index = i * 12 + j;
            if (chars[index] === 'w') {
                top = Math.min(top, i);
                left = Math.min(left, j);
                bottom = Math.max(bottom, i);
                right = Math.max(right, j);
            }
        }
    }
    
    return {
        top: top,
        left: left,
        height: bottom - top + 1,
        width: right - left + 1
    };
}

// Example array of 144 chars
const chars = [
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b',
    'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'
];

const result = findWhiteBox(chars);

console.log("Top Left Position (x, y):", result.left, ",", result.top);
console.log("Height:", result.height);
console.log("Width:", result.width);


// * Answer of question no 2
let anArr = [9,33,0,7,2,82,77] 
function divideByNext(arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i+1] == 0 ){
            console.log("cant divide by zero")
        }else if(arr[i+1] == undefined){
            console.log( `result of division  ${arr[i]} by ${arr[0]} is: ${ arr[i]/ arr[0]}`)
        }
        else{
            console.log( `result of division  ${arr[i]} by ${arr[i+1]} is: ${ arr[i]/ arr[i+1]}`)
        }
    }
}
divideByNext(anArr)
//* Answer of question number 3
function numbersSumAndLast(st){
    let nums = st.match(/\d+/g)
    let sumOfNums = 0
    let last
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 ==0) {
            sumOfNums +=  parseInt(nums[i])  
        }
    }
    last = nums[nums.length -1]
    console.log( `sum of the numbers that are divisible by 3 in your string is: ${ sumOfNums}, last digit is : ${last}`)
}
numbersSumAndLast("i am 3 my friends are 2 and 21")
//* Answer of question number 4
function whoHasGun(){
    let numsArr = []
    for(let i =1; i<= 100 ; i++){
        numsArr.push(i)
    }
    start = 0
    while(numsArr.length > 1){
        start++
        start = start % (numsArr.length)
        // console.log(start)
        numsArr.splice(start,1)
    }  
    console.log("This number has the gun :", numsArr[0])
}
whoHasGun()

// answer to ques 5:
/**
 We need  a Table For Hotel with coulmns (id(primary key), name, location etc)
 We need a Table for menu with menu id , menus name and hotel if as a foreign key
 wen need a table for food item with food item id, food item name, ingredients etc
 then we will create a junction table which will have menu id which will be a foreign key and food item id which will aslo a forign key
 */