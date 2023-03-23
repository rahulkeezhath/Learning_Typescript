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


