/**
 * Async Code in memory --(setTimeout)
 * Promises
 * fetch
 * asyn ... await
 * -----------------------------------
 *  == class in es6
 *  == modules
 *
 */

// function display() {
//   console.log("First");
//   second();
//   console.log("End");
// }

// function second() {
//   setTimeout(() => {
//     console.log("Second");
//   }, 2000);
//   console.log("After Second");
// }

// display();

/**
 * first
 * second
 * End
 *
 *
 */

// setTimeout(() => {
//   console.log("Hello Dot Net");
// }, 0);

// console.log("Welcome From ITI");

// setTimeout(() => {
//   console.log("Dot Net");
// }, 2000);

// setTimeout(() => {
//   console.log("welcome From ITI");
// }, 1000);

// console.log("End Of Execution");

/*
var productsIds;

setTimeout(() => {
  productsIds = [100, 200, 400];
  setTimeout(() => {
    var product = {
      id: productsIds[0],
      productName: "sumsung",
      price: "200$",
    };
    setTimeout(() => {
      var price = product.price;
      console.log(price);
    }, 500);
  }, 1000);
}, 2000);

*/

// function display(x) {
//   x(
//     function () {
//       console.log("Call back 1");
//     },
//     function () {
//       console.log("call back 2");
//     }
//   );
// }

// display(function (a, b) {
//   a();
//   b();
// });

/** js */

// function getProductsId() {
//   return new Promise(function (x, y) {
//     var productIds;
//     setTimeout(() => {
//       productIds = [100, 200, 300];
//       productIds ? x(productIds) : y("Error On getting Ids List");
//     }, 2000);
//   });
// }

// function getProduct(productId) {
//   return new Promise(function (resolve, reject) {
//     var product = {
//       id: productId,
//       productName: "sumsung",
//       price: "200$",
//     };

//     product ? resolve(product) : reject("Error on getting Product");
//   });
// }

// function getPrice(product) {
//   return new Promise(function (resolve, reject) {
//     var price = product.price;
//     price ? resolve(price) : reject("Error on getting price");
//   });
// }

// async function execute() {
//   try {
//     var productIds = await getProductsId();
//     var product = await getProduct(productIds[0]);
//     var price = await getPrice(product);
//     console.log(price);
//   } catch (error) {
//     console.log(error);
//   }
// }

// execute();
/*
getProductsId()
  .then(function (productIds) {
    return getProduct(productIds[1]);
  })
  .then(function (product) {
    return getPrice(product);
  })
  .then(function (price) {
    console.log(price);
  })
  .catch(function (myError) {
    console.log(myError);
  });
  */

// getProduct(60)
//   .then(function (product) {
//     console.log(product);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
/*
getProductsId()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (myError) {
    console.log(myError);
  });

  */

/**
 * Pending
 * fullfilled
 * rejected
 */

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// async function execute() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");
//     let userData = await response.json();
//     console.log(userData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// execute();

/**=============== Classes============== */

// super class , parent class
class Person {
  #id;
  constructor(id, fname = "default fname", lname = "", age = 1) {
    this.#id = id;
    this.fname = fname; // initalization
    this.lname = lname;
    this.age = age;
  }
  display() {
    console.log(this.fname);
  }
  //

  get getId() {
    return this.#id;
  }

  set setId(value) {
    this.#id = value;
  }
}

var p1 = new Person(1, "ali", "ahmed");

p1.setId = "123";
console.log(p1.getId); // get
// subclass , child

// class User extends Person {
//   constructor(fname, lname, age, password) {
//     super(fname, lname, age);
//     this.password = password;
//   }

//   // override
//   display() {
//     console.log(this.fname + " " + this.lname);
//   }

//   sayHello() {
//     console.log("Welcome From ITI");
//   }
// }

// let myUser = new User("ali", "ahmed", 20, "123");

// myUser.display();
// // let p1 = new Person("mona", "ahmed", 40);

// p1.display();
