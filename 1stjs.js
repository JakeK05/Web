function startTime(){
    var today = new Date();
    var h = today.getHours() + "시";
    var m = today.getMinutes() + "분";
    var s = today.getSeconds() +"초"; 
    return "현재 시간은" + " " + h+ "," + m + "," + s +" " +"입니다."  ;
}
