const User_Name = document.querySelector(".user_name input");
const User_Email = document.querySelector(".user_email input");
const User_Phone = document.querySelector(".user_phone input");
const User_Pswd = document.querySelector(".user_pswd input");
const User_Pswd2 = document.querySelector(".user_pswd_2 input");
const btn = document.querySelector(".footer button");
let c_name, c_email, c_pswd, c_pswd2, c_phone = true;

function signUp_Check(){
    //Username 확인
    if(User_Name.value === ""){
        document.getElementById("name_error").innerHTML = "이름을 입력하세요";
        c_name = false;
    }else{
        document.getElementById("name_error").innerHTML = "";
        c_name = true;
    }

    //User Password 확인
    if(User_Pswd.value === ""){
        document.getElementById("pswd_error").innerHTML = "비밀번호를 입력해주세요";
        c_pswd = false;
    }else{
        document.getElementById("pswd_error").innerHTML = "";
        c_pswd = true;
    }
    if(User_Pswd2.value === ""){
        document.getElementById("pswd_error2").innerHTML = "비밀번호를 다시 입력해주세요.";
        c_pswd2 = false;
    }
    if(User_Pswd.value !== User_Pswd2.value){
        document.getElementById("pswd_error2").innerHTML = "비밀번호가 동일하지 않습니다.";
        c_pswd2 = false;
    }else{
        document.getElementById("pswd_error2").innerHTML = "";
        c_pswd2 = true;
    }

    //User Email 확인
    if(User_Email.value.includes('@')){
        let emailID = User_Email.value.split('@')[0];
        let emailServer = User_Email.value.split('@')[1];

        if(emailID === "" || emailServer === ""){
            document.getElementById("email_error").innerHTML = "이메일이 올바르지 않습니다.";
            c_email = false;
        }else{
            document.getElementById("email_error").innerHTML = "";
            c_email = true;
        }
    }else{
        document.getElementById("email_error").innerHTML = "이메일이 올바르지 않습니다.";
        c_email = false;
    }

    //핸드폰 번호
    console.log(c_name, c_email, c_pswd, c_pswd2);
    if(c_name && c_email && c_pswd && c_pswd2){
        document.getElementById("name_error").innerHTML = "";
        document.getElementById("email_error").innerHTML = "";
        document.getElementById("pswd_error").innerHTML = "";
        document.getElementById("pswd_error2").innerHTML = "";
        document.getElementById("phone_error").innerHTML = "";

        setTimeout(function(){
            alert("가입이 완료되었습니다.");
        }, 1000);
    }
}

btn.onclick = () => {
    signUp_Check();
}