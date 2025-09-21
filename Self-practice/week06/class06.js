// function a() {
//     return sum
// }
// function b() {
//     return sum(1, 5)
// }
// //higher order function
// function c(x) {
//     return x 
// }
// function sum(n1, n2) {
//     return n1 + n2
// }

// console.log(typeof a())
// console.log(typeof b())
// console.log(typeof c(sum))

let a = 1 //global scope
function doSomething(x) {
    let a = 10 //local scope
    let greet = "Hello"
    function echo() {
        let a = 555
        let b = "Bob"
        console.log(a,b)
    }
    echo()
    return `${greet}, ${x}, a=${a}`
}
console.log(doSomething("guest"))
a=100
console.log(`a=${a}`)
// function Scope
// function จะเห็นตัวเเปรทุกตัวในชั้นตัวเองจนถึง global scope เเต่ไม่เห็นด้านในที่ลึกเข้าไป
// ถ้ามันเลือกตัวเเปรจะเลือกของมันเองก่อน

function doSomething(x) {
  function echo() {
    return `hello,${x}`
  }
  return echo
}
const greetGuest = doSomething("guest")
console.log(greetGuest())

function makeAdder(x) {
    function add(y) {
        return x + y
    }
    return add 
}

const add5= makeAdder(5)
console.log(add5(3))

function counter() {
  let count = 0
  function increment() {
    return ++count
  }
  function decrement() {
    return --count
  }
  function getCount() {
    return count
  }
  return {
    add: increment,
    decrese: decrement,
    getCountValue: getCount,
  }
}
const { add, getCountValue } = counter()
// console.log(add())
// console.log(getCountValue())
// const c = counter()
// console.log(c.increment()) //1
// console.log(c.increment()) //2
// console.log(c.decrement()) //1
// console.log(c.getCount()) //1

//จัดการเลย
//044
//closure
const idGen = idGenerator()
function idGenerator() {
    let id = 0

    return function() {
        id++
        return id
    }
}

console.log(idGen()) //1
console.log(idGen()) //2
console.log(idGen()) //3
console.log(idGen()) //3

const addFive = outerFunction(5)
console.log(addFive(3))

const addTen = outerFunction(10)
console.log(addTen(2))

function outerFunction(x) {
    function innerFunction(y) {
        return x + y
    }
    return innerFunction
}

