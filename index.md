<script language="JavaScript">
  
              var http_request = false;
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
                return a;ertContents();
            }
            function alertContents() {
                if (http_request.readyState == 4) {
                    if (http_request.status == 200) {
//                        alert(http_request.responseText);
                          return http_request.responseText;
                    } else {
//                        alert('There was a problem with the request.');
                          return '錯誤';
                    }
                }
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
 var rijio=makeRequest('yasumi.txt');
　document.getElementById('showbox').innerHTML = h+'時'+m+'分'+s+'秒';
  document.getElementById('kyouha').innerHTML = '<br></br>今天是' + youbi ;
  document.getElementById('rijioyou').innerHTML = rijio;
  
  if ( rijio == '開' ) {
    document.getElementById('eigyou').innerHTML = '1特殊開店中';
  } else if ( rijio == '關' ) {
    document.getElementById('eigyou').innerHTML = '2特殊已售完';
  } else if ( youbi==0 ) {
    document.getElementById('eigyou').innerHTML = '週日休息';
  } else if ( ((h < 11) || (h >= 19)) ) {
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



<body onload="ShowTime()">
<div id="showbox"></div>
  <div id="kyouha"></div>
  <div id="rijioyou"></div>
<div id="eigyou"></div>
</body>

<body>
<div id="sonzai"></div>
</body>

<br><br/>
<br><br/>
<br><br/>
