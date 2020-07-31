//forEach Array Method
const numbers = [1,2,3,4,5];
let sum = 0;

numbers.forEach((number, index) => {
    sum += number;
    console.log(`[${index}] : ${number}`);
});
console.log(sum);


//How many times a letters apears in an arr
const letters = ['a', 'b', 'a', 'c', 'd', 'a'];
let count = {};
letters.forEach((letter) =>{
    if(count[letter]){
        count[letter]++
        console.log(count[letter]);
        
    }else{
        count[letter] = 1;
    }
});
console.log(count);

