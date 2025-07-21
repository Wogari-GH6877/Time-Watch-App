function CountTime(){

    const date=new Date();

    let hours=date.getHours();
    const minute=date.getMinutes().toString().padStart(2,0);
    const second=date.getSeconds().toString().padStart(2,0);
    let merdium=hours>12?"PM":"AM";
    hours=hours%12 || 12;
    hours=hours.toString().padStart(2,0);
    const timeTable=document.getElementById("clock");

    const setTime=`${hours}:${minute}:${second} ${merdium}`;
    timeTable.textContent=setTime;

}

setInterval(CountTime,1000);