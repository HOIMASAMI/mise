<script language="JavaScript">
    
function ShowTime(){
  
　var d=new Date();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var NowDate=new Date(utc + (3600000*8));

//  var NowDate=new Date();
  
　var h=NowDate.getHours();
　var m=NowDate.getMinutes();
　var s=NowDate.getSeconds();　
　document.getElementById('showbox').innerHTML = h+'時'+m+'分'+s+'秒';
　setTimeout('ShowTime()',1000);
  
   if ( h < 22 ) {
    document.getElementById('eigyou').innerHTML = '開店中';
  } else if ( h >= 22 ) {
    document.getElementById('eigyou').innerHTML = '關店中';
  }
  
}
</script>

<body onload="ShowTime()">
<div id="showbox"></div>
<div id="eigyou"></div>
</body>

<br><br/>
<br><br/>
<br><br/>
