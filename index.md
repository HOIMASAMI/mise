<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>

<script language="JavaScript">
  
              var http_request = false;
              var temp=10;
//              var tempii=0;
            function makeRequest(url) {
                http_request = false;
                if (window.XMLHttpRequest) { // Mozilla, Safari,...
                    http_request = new XMLHttpRequest();
                    if (http_request.overrideMimeType) {
                        http_request.overrideMimeType('text/xml');
                    }
                } else if (window.ActiveXObject) { // IE
                    try {
                        http_request = new ActiveXObject("Msxml2.XMLHTTP");
                    } catch (e) {
                        try {
                        http_request = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {}
                    }
                }
                if (!http_request) {
                    alert('Giving up :( Cannot create an XMLHTTP instance');
                    return false;
                }
                http_request.onreadystatechange = alertContents;
                http_request.open('GET', url, true);
                http_request.send(null);
//                tempii=alertContents();
//                alert(temp);
//                alert(tempii);
//                return temp;
//                tempii = alertContents();
//                alert('out of alertC = ' + temp);
//                alert('makerequest tempii = '+tempii);
//                return tempii;
//                setTimeout('makeRequest("yasumi.txt")',1000);
            }

function alertContents() {
                if (http_request.readyState == 4) {
                    if (http_request.status == 200) {
//                        alert(http_request.responseText);
                        temp = http_request.responseText;
//                          return temp;
//                        alert('alertcontents temp = '+temp);
//                        return http_request.responseText;
                    } else {
                        console.log('錯誤 There was a problem with the request.');
//                        return '錯誤';
                    }
                }
//                setTimeout('alertContents()',1000);
}

function ShowTime(){
  
　var d=new Date();
  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  var NowDate=new Date(utc + (3600000*8));
  //時區固定為台北
  
　var h=NowDate.getHours();
　var m=NowDate.getMinutes();
　var s=NowDate.getSeconds();

  var youbi=NowDate.getDay();

  makeRequest('yasumi.txt');
  var rijio =new Number(temp);

　document.getElementById('showbox').innerHTML = h+'時'+m+'分'+s+'秒';
//  document.getElementById('kyouha').innerHTML = '<br></br>今天是' + youbi ;
  document.getElementById('rijioyou').innerHTML ='Showtime = ' + rijio;
//  alert(rijio);
  
  if ( rijio == 1 ) {
    document.getElementById('eigyou').innerHTML = '1特殊開店中';
  } else if ( rijio == 0 ) {
    document.getElementById('eigyou').innerHTML = '0特殊已售完';
  } else if ( youbi==0 ) {
    document.getElementById('eigyou').innerHTML = '週日休息';
  } else if ( ((h < 11) || (h >= 19)) ) {
    document.getElementById('eigyou').innerHTML = '關店中';
  } else if ( (( ( h*60+m ) < 1140) && ( ( h*60+m ) >= 990)) ) {
    document.getElementById('eigyou').innerHTML = '開店中';
  } else if ( (( ( h*60+m ) < 990) && ( ( h*60+m ) >= 870)) ) {
    document.getElementById('eigyou').innerHTML = '關店中';
  } else if ( (( ( h*60+m ) < 870) && ( ( h*60+m ) >= 660)) ) {
    document.getElementById('eigyou').innerHTML = '開店中';
  }
  setTimeout('ShowTime()',1000);
}
</script>



<body onload="ShowTime()">
<div id="showbox"></div>
<!-- <div id="kyouha"></div> -->
<div id="rijioyou"></div>
<div id="eigyou"></div>
</body>

<body>
<div id="sonzai"></div>
</body>

<br><br/>
<br><br/>
<br><br/>
