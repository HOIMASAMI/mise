<script language="JavaScript">

function ShowTime(){
  
　var d=new Date();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var NowDate=new Date(utc + (3600000*8));
  //時區固定為台北
  
　var h=NowDate.getHours();
　var m=NowDate.getMinutes();
　var s=NowDate.getSeconds();　
　document.getElementById('showbox').innerHTML = h+'時'+m+'分'+s+'秒';
  
   if ( ((h < 11) || (h >= 19)) ) {
    document.getElementById('eigyou').innerHTML = '關店中';
  } else if ( ((h < 19) && (h >= 16)) ) {
    document.getElementById('eigyou').innerHTML = '開店中';
  } else if ( ((h < 16) && (h >= 14)) ) {
    document.getElementById('eigyou').innerHTML = '關店中';
  } else if ( ((h < 14) && (h >= 11)) ) {
    document.getElementById('eigyou').innerHTML = '開店中';
  }
  setTimeout('ShowTime()',1000);
}
</script>

<script type="text/javascript" language="javascript" src="js/jquery-1.4.3.js"></script>
<script type="text/javascript" language="javascript">

    $.get('https://raw.githubusercontent.com/HOIMASAMI/mise/master/yasumi', function(data) {

            alert(data);

    });

</script>

<body onload="ShowTime()">
<div id="showbox"></div>
<div id="eigyou"></div>
</body>

<body>
<div id="sonzai"></div>
</body>

<br><br/>
<br><br/>
<br><br/>
