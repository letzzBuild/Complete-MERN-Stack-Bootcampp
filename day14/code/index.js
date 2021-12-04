//how to create a user defined function 
//we are creating the body of the function as well as we can call the function
//definition of the function(code of the function is written here)
// function hello_letzzBuild(a,b){
// //body of the function
// let sum = a+b
// return sum
// }
//*****the code that is there inside a function will never run unitil you call the function
//how to call the function
// let sum = hello_letzzBuild(a=5,b=7)
// console.log(sum);



//built in function functions
//we are not creaitng body of the function only call is done
//console.log()


//arrow function
// const hello_letzzBuild  = (a,b)=>(a+b)

// let sum = hello_letzzBuild(a=5,b=7)
// console.log(sum)


//list
// let roll_nos = [10,11,44,54,23]
// roll_nos.push(60) //add 60 at the end of the list
// roll_nos.pop() //removes last element from list 
// console.log(roll_nos)

//Map function very very important 
//Map function is used to do something on every element of a list
//we can do whatever we want on every element of the list

// let numbers = [6,2,4,4,35,61,0,8,9,10]
// // numbers.indexOf(3) //returns the index of the element
// numbers.map((ele)=>{
//    console.log(ele*ele) //performs this operation on every element of list
// })


// let names = ["Gautam","Nikata","Priyanka"]
// names.map((ele)=>{
//   console.log(ele + " Patil")
// })



// let names = ["Gautam" ,"Nikata","Priyanka"]
// names.map((ele,index)=>{
//     console.log("<h1>" + ele + "</h1>")
//     console.log(`Index of element is ${index}`)
// })


//Objects in JS
// let family = {
//     name : "Gautam",
//     roll_no : 20,
//     college : "Jain college of engineering and research",
//     phone : 9535836222
// }
// console.log(family['roll_no'])

//List of Objects
// let fruits = [{name: "apple", color:"green"},{name: "banana", color:"yellow"},{name: "orange", color:"orange"}] //list of objects
// // console.log(fruits)

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

//you must be completely perfect in getting value of particular keys from object
// you must be able to get value of a particular index from array


//array destructing
//split all values of the array and store it in sperate varibales
// let [a,b]= [2,4]
// console.log(a,b)

//Object Destructing
// let {bookname,code} = {
//     bookname : "xyz",
//     code : "E-01"
// }
// console.log(bookname, code)


//Rest and Spread Operators
// These Operators and used to Spread or Group the element
//Spread Operators
// let arr = ["Gautam","Ganesh","Prachi","Rajat"]
// console.log(...arr)

//Rest Operator 
function sumOf3Nums(...args){
    console.log(args)
    // return a + b + c
}

sumOf3Nums(a=2,b=4,c=6)
// console.log(sum)
