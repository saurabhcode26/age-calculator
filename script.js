let userInput = document.querySelector(".date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.querySelector(".result");

function calculateage(){ 
    let birthdate = new Date(userInput.value);

    let d1 = birthdate.getDate();//gives output as seleected date 
    console.log(d1);
    let m1 = birthdate.getMonth() + 1;
    let y1 = birthdate.getFullYear();

    let today = new Date();//output is Wed Jan 10 2024 19:23:40 GMT+0530 (India Standard Time) means this give current time.

    let d2 = today.getDate();//gives todays date
    console.log(d2);
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let  d3, m3 ,y3;
      
    y3 = y2 - y1;


    if(m2>=m1){
        m3 = m2-m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 -d1;
    }else{
        m3--;
        d3 = getDaysinMonth(y1,m1) + d2-d1;
    }
    if(m3 < 0 ){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;

}
 function getDaysinMonth(year,month){
      return new Date(year,month,0).getDate();
 }