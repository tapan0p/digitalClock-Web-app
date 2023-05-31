function showTime(){
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    if(h<10){
      h="0"+h;
    }
    if(m<10){
      m="0"+m;
    }
    if(s<10){
      s="0"+s;
    }
    let ampm;
    if (h >= 0 && h <= 11) {
      ampm = "AM";
    } else {
      ampm = "PM";
    }
    if(h>12){
      h=h-12;
    }
    document.getElementById("hr").innerHTML =h;
    document.getElementById("min").innerHTML =m;
    document.getElementById("sec").innerHTML =s;
    document.getElementById("ampm").innerHTML =ampm;
  
   setTimeout(showTime,1000);
  }
  showTime();
     
  
  