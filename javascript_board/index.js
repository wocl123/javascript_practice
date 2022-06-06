var button = document.getElementById("Btn");
var char = document.getElementById("char");
var char_list = ["자", "바", "스", "크", "립", "트"];
var color_list = ["red", "lightblue", "blue", "green", "violet", "black"];
var i = 0;

function start(){
    if(i>5){
        i=0;
        char.innerText = "";
    }else{
        char.innerText += char_list[i];
        char.style.color = color_list[i];
        i++;
    }
}

button.onclick = start;