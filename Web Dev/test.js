console.log('Pepcoding FJP3')

// var let const


function multiply(a,b){
    return a*b;
}
const multiply1=(a,b)=>a*b;
const multiply2=function(a,b){
    return a*b;
}
console.log('Multiply 2*3=',multiply(2,3))
console.log('Multiply1 2*3=',multiply1(2,3))
console.log('Multiply2 2*3=',multiply2(2,3))

//function as first class Citizens
// In JS, variables can also be assigned a function 

//IIFE Immediately invoked function expressions
//Functions that are defined and run at same time when program starts
const ans=(function(a,b){
    return a*b
})(2,3);
console.log(ans)

//Arrays
console.log('----------------------------------------')
console.log('Arrays')
console.log('----------------------------------------')
let arr=['string',3,undefined,null,{name:'sahib'}]
console.log(arr);

const cricketers=['kohli','rohit','dhoni'];
console.log(cricketers)
console.log(cricketers[0])
console.log(cricketers[1])
console.log(cricketers[2])

//replace an element in an array
cricketers[1]='rahul'

//add an element

cricketers[3]='rohit'
cricketers[5]='bumrah'

console.log(cricketers)

//Array methods 

//.pop

console.log(cricketers.pop())
console.log(cricketers.pop())

//.push
cricketers.push('bumrah');
console.log(cricketers)

//.shift - removes an element from starting of an array

console.log(cricketers.shift())
console.log(cricketers)

//.unshift - add an element at the beginning of an array

cricketers.unshift('jadeja')
console.log(cricketers)

// .length

console.log(cricketers.length)

//Multidimensional arrays

const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[0][2])

//--------------------------------------------------------------------
//Strings
console.log('----------------------------------------')
console.log('Strings')
console.log('----------------------------------------')
let str='pepcoders'
console.log(str)

//.length
console.log(str.length)

//slice -take out substing of a string ,given start and end+1 index
console.log(str.slice(3,8))

//.substr - depricated get substring given start index and length to take out in substring
console.log(str.substr(3,5))

//.replace(value,newValue)

const greeting='Hello User'
console.log(greeting)
const bye=greeting.replace('Hello','Bye');
console.log(bye)

//.toUpperCase and .toLowerCase

let uppstr='HELLO'
let lostr='hello'
uppstr=uppstr.toLowerCase()
lostr=lostr.toUpperCase()
console.log(uppstr)
console.log(lostr)

//.concat()

const firstr='hello'
const lasstr='user'
const concatenated=firstr.concat(" hii ",lasstr)
console.log(concatenated)

//.trim 

let trim='             sahib    '
trim=trim.trim()
console.log(trim)

// ------------------------------------------------
//Objects
const age=20;
const user={
    name:'Sahib',
    age,
    hii(){
        return 'Sahib says hii'
    }
}
// dot notation obj.property
//bracket notation obj['property]
console.log(user.hii)
console.log(user)
for(let property in user){
    console.log(property,user[property])
}