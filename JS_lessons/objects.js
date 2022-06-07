// let myCar = new Object();
// myCar.maxSpeed = 50
// myCar.driver = "Vlad"
// myCar.drive = function (){
//     console.log("driving");
// };
// myCar.drive()

// console.log(myCar.driver)

// console.log(this)

let myCar2 = {

  maxSpeed: 50,
  driver: "Julia",
  drive: function(speed, time){
      console.log(speed * time)
  },
  logDriver: function(){
    console.log(`This car's driver is ${this.driver}`)
  }

};

myCar2.logDriver()

// myCar2.drive( 100, 1.5)

// console.log(myCar2)