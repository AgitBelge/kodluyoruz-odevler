let userName = prompt("isminiz" ,"isminizi girin bu alana");
let myname = document.getElementById("myName");

myname.innerHTML = `${userName}`;




function time(){
    let nowTime = new Date();
    let nowDaye = nowTime.getDay();
    let nowHours = nowTime.getHours();
    let nowMinute = nowTime.getMinutes();
    let nowSecond = nowTime.getSeconds();
    let days = ["pazartesi","sali","çarşamba","perşembe","cuma","cumartesi","pazar"];
    let nowdayes = days[nowDaye -1];
    console.log(nowdayes);

    let myClock = document.getElementById("myClock");
    myClock.innerHTML = `${nowHours} : ${nowMinute} : ${nowSecond} ${nowdayes}`;

}
setInterval(time, 1000);


