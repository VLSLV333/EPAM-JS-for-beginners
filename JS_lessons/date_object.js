// let myDate = new Date();

// console.log(myDate)

// let myPastDate = new Date(1545, 11, 2, 10, 30, 15);

// let myFutureDate = new Date(2515, 0, 31);

// console.log(myPastDate)
// console.log(myFutureDate)

let myBirthday = new Date (2455, 5, 14, 7, 7, 7);

let myBirthday2 = new Date (2455, 5, 14, 7, 7, 7);

// console.log(myBirthday.getMonth())

// console.log(myBirthday.getFullYear())

// console.log(myBirthday.getDate())

// console.log(myBirthday.getDay())

// console.log(myBirthday.getHours())

// console.log(myBirthday.getTime())

if (myBirthday.getTime() == myBirthday2.getTime()){

    console.log("Yep, same dates!")

} else {

    console.log("Nop, look for other")

}