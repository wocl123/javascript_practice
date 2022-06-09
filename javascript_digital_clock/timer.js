const deg = 6;
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval (()=> {
    /*아날로그 시계 설정*/
    let day = new Date();
    let h = day.getHours() * 30;
    let m = day.getMinutes() * deg;
    let s = day.getSeconds() * deg;

    /*디지털 시계 설정*/
    let digital_hour = modifyNumber(day.getHours());
    let digital_min = modifyNumber(day.getMinutes());
    let digital_sec = modifyNumber(day.getSeconds());
    let digital_year = day.getFullYear();
    let digital_month = day.getMonth()+1;
    let digital_day = day.getDate();

    /*아날로그 시계 움직이게*/
    hour.style.transform = `rotateZ(${(h) + (m/12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;

    /*디지털 시계*/
    document.getElementById("digital_time").innerHTML = digital_hour+":"+digital_min+":"+digital_sec;
    document.getElementById("digital_date").innerHTML = digital_year+"년 "+digital_month+"월 "+digital_day+"일";
}, 1000);



function modifyNumber(time){
    if(parseInt(time) < 10){
        return "0" + time;
    }else{
        return time;
    }
}