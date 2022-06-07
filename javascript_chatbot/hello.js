var Say = document.getElementById("say");
var Btn = document.getElementById("submit");
var body = document.querySelector("body");
var Food_list = ["비빔밥", "족발", "피자", "햄버거", "짜장면", "마라탕", "떡볶이", "토스트", "라면", "김밥"];
var color_list = ["red", "blue", "green", "grey", "white", "pink"];
var num1 = Math.floor(Math.random()*10);
var count = 1;
var check_num = 0;
console.log(num1);

function check_text(){
    var value = document.getElementById("console").value;
    
    if(value=="숫자게임" && check_num == 0){
        Say.innerHTML = "숫자게임 진행중!";
        for(var i=5;i>0;i--){
            var input = prompt("한자리 숫자를 입력해주세요! 기회는 5번!");
            if(input == num1){
                Say.innerHTML = `${count}번만에 정답을 맞추셨습니다!`;
                break;
            }else if(input != num1){
                Say.innerHTML = `기회를 모두 소진하셨습니다.`;
                count++;
            }
        }
        count = 0;
    }else if(value=="메뉴추천"){
        var rand = Math.floor(Math.random()*10);
        Say.innerHTML = `제가 추천드리는 메뉴는 ${Food_list[rand]}입니다.`;
    }else if(value == "!명령어"){
        Say.innerHTML = "숫자게임, 오늘 날짜, 다크모드, 원래모드, 글자색 변경이 있습니다.";
    }else if(value == "안녕"){
        Say.innerHTML = "안녕하세요!!!!!";
    }else if(value=="오늘 날짜"){
        var date = new Date();
        Say.innerHTML = date;
    }else if(value=="다크모드"){
        body.style.backgroundColor = "black";
        Say.style.color = "white";
        Say.innerHTML = "다크모드로 변경하였습니다.";
    }else if(value=="원래모드"){
        body.style.backgroundColor = "white";
        Say.style.color = "black";
        Say.innerHTML = "원래모드로 변경하였습니다.";
    }else if(value == "글자색 변경"){
        var rand2 = Math.floor(Math.random()*6);
        Say.innerHTML = "글자색을 무작위로 변경합니다";
        Say.style.color = color_list[rand2];
    }
    
}

Btn.addEventListener("click", check_text);