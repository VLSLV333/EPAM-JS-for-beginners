let j = document.getElementById("show-more")

let v = function (){

    j.style.backgroundColor = "yellow"

}

colors=["red", "blue", "green", "purple"]
counter = 0;

function changeColor(){

    if(counter == colors.length){
        counter = 0;
    }

    j.style.backgroundColor = colors[counter];
    counter++


}

let interval = setInterval(changeColor, 2000)

j.onclick = function(){

clearInterval(interval);

}

