//Задание 1
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

//Задание 2
const createCounter = (arg) => {
 let count=arg;   
 return {
    increment: function(){
        count++;
    },
    decrement: function() {
        count--;
    },
    getCount: function() {
        return count;
    }
 }
}

const counter = createCounter(5);
counter.increment();
console.log(counter.getCount());
counter.decrement();
counter.decrement();
console.log(counter.getCount());

//Задание 3

const factorial=(n) => {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  

console.log(factorial(5));