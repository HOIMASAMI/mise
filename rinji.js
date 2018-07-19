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
              url='yasumi.txt?_=' + new Date().getTime(); //リアルタイムファイル読み込み更新実現
                http_request.onreadystatechange = alertContents;
                http_request.open('GET', url, true);
//xhr.setRequestHeader('Cache-Control', 'no-cache');
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
