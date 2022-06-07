var Phone_name = document.getElementById("phone_name");
var Phone_num = document.getElementById("phone_num");
var Call_btn = document.getElementById("call");
var Call_name = document.getElementById("call_name");

var Status = 0;

function Click_btn(){
    if(Status==0){
        Call_name.innerText = "Calling...!";
        setTimeout(function(){
            Phone_name.innerText = "장재훈";
            Phone_num.innerText = "010-1234-5678";
            Call_name.innerText = "전화끊기";
            Call_btn.style.background="red";
            Call_btn.style.border = "2px solid red";
        }, 2000);
        return Status = 1;
    }else if(Status==1){
        Reset();
    }
}

function Reset(){
    Phone_name.innerText = "통화종료";
    Phone_num.innerText = "";
    Call_name.innerText = "Stoping...!";
    setTimeout(function(){
        Phone_name.innerText = "";
        Phone_num.innerText = "";
        Call_name.innerText = "전화걸기";
        Call_btn.style.background="green";
        Call_btn.style.border = "2px solid green";
    }, 2000);
    return Status=0;
}

Call_btn.addEventListener("click", Click_btn);