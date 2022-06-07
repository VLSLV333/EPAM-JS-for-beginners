// let myCar2 = {

//     maxSpeed: 50,
//     driver: "Julia",
//     drive: function(speed, time){
//         console.log(speed * time)
//     },
//     logDriver: function(){
//       console.log(`This car's driver is ${this.driver}`)
//     }
  
//   };

let Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed,
    this.driver = driver,
    this.drive = function(speed, time){
        console.log(speed * time)
    },
    this.logDriver = function(){
        console.log(`This car's driver is ${this.driver}`)
    }

}

let juliaCar = new Car(200, "Julia")
let vladCar = new Car(400, "Vladislav")

// console.log(juliaCar.driver)
console.log(juliaCar.driver)