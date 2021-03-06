
// Inefficient example:

    // let baseProduct = 10;
    
    // function minus2(x) {  
    //   return x - 2;
    // }
    // function triple(x) {
    //   return x * 3;
    // }
    // function increment(x) {
    //   return x + 1;
    // }

    // // Inefficient method with tmp variable
    // let tmp = increment(4);
    // console.log(tmp);                            // 5

    // tmp = triple(tmp);                           // 13
    // console.log(tmp);

    // totalProduct = baseProduct + minus2(tmp);
    // console.log(totalProduct);                  // 23


    // // more efficient method with nested calls
    // totalProduct2 = baseProduct + minus2(triple(increment(4)));
    // console.log(totalProduct2);                 // 23




// Improved abstraciton method with nested calls:

    // function improveProduct(x) {
    //   return minus2(triple(increment(4)));                          // 13
    // }

    // console.log(improveProduct);

    // totalProduct3 = baseProduct + improveProduct;
    // console.log(totalProduct3);                                      // 23

    // let baseProduct = 10;
    
    // function minus2(x) {  
    //   return x - 2;
    // }
    // function triple(x) {
    //   return x * 3;
    // }
    // function increment(x) {
    //   return x + 1;
    // }

    // function improveProduct(x) {
    //   let result = minus2(triple(increment(x)));
    //   return result;              
    // }

    // console.log(improveProduct(4));                                 // 13
    // totalProduct = baseProduct + improveProduct(4);
    // console.log(totalProduct);                                      // 23



// Utility example:
    
    // let baseProduct = 10;
    
    // function minus2(x) {  
    //   return x - 2;
    // }
    // function triple(x) {
    //   return x * 3;
    // }
    // function increment(x) {
    //   return x + 1;
    // }

    // function composeThree(fn3, fn2, fn1) {                      //
    //   return function composed(v) {
    //     return fn3(fn2(fn1(v)));
    //   }
    // }

    // let calculateProduct = composeThree(minus2, triple, increment);
    // let calculateProduct2 = composeThree(increment, minus2, triple);   // Product 2

    // totalProduct = baseProduct + calculateProduct(4);
    // totalProduct2 = baseProduct + calculateProduct2(4);
    // console.log(totalProduct);                                      // 23
    // console.log(totalProduct2);                                     // 21



// Associative example:

    // let baseProduct = 10;
    
    // function minus2(x) {  
    //   return x - 2;
    // }
    // function triple(x) {
    //   return x * 3;
    // }
    // function increment(x) {
    //   return x + 1;
    // }

    // function composeTwo(fn2, fn1) {                                   // composition utility
    //   return function composed(v) {
    //     return fn2(fn1(v));
    //   }
    // }

    // let product1 = composeTwo(composeTwo(minus2, triple), increment);
    // let product2 = composeTwo(minus2, composeTwo(triple, increment));

    // console.log(product1(4))     // 13
    // console.log(product2(4))     // 13



// Composition with currying

    function sum(x,y) {          // binary function
      return x + y;
    }

    function triple(x) {        // unary function
      return x * 3;
    }

    function divBy(y,x) {       // binary funciton
      return x / y;
    }

    divBy(2, triple( sum(3,5)));   // 12

    sum = curry(2, sum);
    divBy = curry(2, divBy);

    composeThree(
        divBy(2),
        triple,
        sum(3)
    ) (5);                         // 12