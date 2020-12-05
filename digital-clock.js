setInterval(getTime,1000);
function getTime(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var shift = "AM";

    if(hrs>12){
        shift = "PM";
    };
    if(hrs>12){
        hrs = hrs-12;
    };
    if(hrs == 0){
        hrs = 12;
    };
    if(hrs<10){
        hrs = "0"+hrs;
    }
    if(min<10){
        min = "0"+min;
    }
    if(sec<10){
        sec = "0"+sec;
    }
    document.getElementById("clock").innerHTML = hrs +":"+ min +":"+ sec +" "+ shift;
    
}