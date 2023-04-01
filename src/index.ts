// - It is comment for using other things
//// - THis one is for not want in typescript

// let age: number =20;
// if(age < 50) 
// age += 10
// console.log(age);


// let sales = 123_456_789;   //This underscore means seperating the number with that
// let course = 'TypeScript'  //When we hover the sales or course we can see the datatype in it
// let is_published = true
// let level                  //When we doesn't initialize anything to the variable it is considered as any type

//// level = 1         // If we use any type we lose that type safety feature and major benefit of using typescript. So a best  practice we should avoid using the any type as much as possible.
//// level = 'a'                
                           
//// function render(document) {    // It is showing error because we don't specify the type of document and the any type will not work when commenting the noaimplicitAny and also it to be false
////                                while uncommenting but it should not do in typescript because it will lose the features
////  console.log(document);
    
//// }

                  //Fundamentals
  // Built-in Functions

// Arrays
// let numbers: number[] = []
// numbers.forEach(n => n.toFixed)   //After n when control space it provide a code completion in this so its a best feature that is not available in js


// Tuples
// let user: [number, string] = [1, 'Mosh']
// user[0].toPrecision            // When we access 0 th element, it is number type so it would be shown the NUMBER type features         
// user[1].charCodeAt              // When we access 0 th element, it is string type so it would be shown the STRING type features/

// user.push(1) 


// Ennums
// const small = 1;
// const medium = 2;
// const large = 3;

// const enum Size { Small = 1, Medium, Large}
// let mySize: Size = Size.Medium                      //Enum automatically assign value like this first we set other it will get the values by looking the first one
// console.log(mySize)                                 // Console it, then u will get the idea




                                // Functions

// function calculateTax(income: number): number {       // We have properly anotate the datatype of it that we are writing based on return type
//   return 0
// }


// function calculateTax(income: number): number {   
//    if(income < 50_000)
//    return income * 1.2;
   //undefined     In JS it retunes undefined value which is not a number
//    return income * 1.3
// }


// function calculateTax(income: number, taxYear = 2022): number {   
//    if(taxYear < 2022)
//    return income * 1.2;
//       return income * 1.3
// }

// calculateTax(10_000)


//                        Object

// let employee: {
//   readonly id: number,
//   name: string,
//   retire: (date: Date) => void          //readonly means that we cannot modify the id by setting it to any other                                         
// } = { id: 1,                            // datatype it will show an error
//    name: 'Mosh',
//   retire: (date: Date) => {
//     console.log(date)
//   }
// }


                                //Shorthand Notations
         
// Destructuring Assignment in Both Array and Object
// const [first, second, third] = [1, 2, 3]; // destructuring an array

// const {name, age} = {name: 'John', age: 30}; // destructuring an object

// Spread Syntax in both Array and Object
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArr = [...arr1, ...arr2]; // using spread syntax to concatenate arrays

// const obj1 = {x: 1, y: 2};
// const obj2 = {z: 3};

// const newObj = {...obj1, ...obj2}; // using spread syntax to merge objects

// Ternary Operator
// const num = 10;

// const result = num > 5 ? 'Greater than 5' : 'Less than or equal to 5';

// Optional Chaining
// const user = {
//   name: 'John',
//   address: {
//     city: 'New York'
//   }
// };

// const city = user?.address?.city; // using optional chaining to access the city property

// console.log(city);
