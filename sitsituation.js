              var ano_http_request = false;
              var tempp=1000;
//              var tempii=0;
            function makeRequesttt(url) {
                ano_http_request = false;
                if (window.XMLHttpRequest) { // Mozilla, Safari,...
                    ano_http_request = new XMLHttpRequest();
                    if (ano_http_request.overrideMimeType) {
                        ano_http_request.overrideMimeType('text/xml');
                    }
                } else if (window.ActiveXObject) { // IE
                    try {
                        ano_http_request = new ActiveXObject("Msxml2.XMLHTTP");
                    } catch (e) {
                        try {
                        ano_http_request = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch (e) {}
                    }
                }
                if (!ano_http_request) {
                    alert('Giving up :( Cannot create an XMLHTTP instance');
                    return false;
                }
              url='isukazu.txt?_=' + new Date().getTime(); //リアルタイムファイル読み込み更新実現
                ano_http_request.onreadystatechange = alertContents;
                ano_http_request.open('GET', url, true);
//xhr.setRequestHeader('Cache-Control', 'no-cache');
                ano_http_request.send(null);
//                tempii=alertContents();
//                alert(tempp);
//                alert(tempii);
//                return tempp;
//                tempii = alertContents();
//                alert('out of alertC = ' + tempp);
//                alert('makerequesttt tempii = '+tempii);
//                return tempii;
//                setTimeout('makeRequesttt("yasumi.txt")',1000);
            }

function alertContents() {
                if (ano_http_request.readyState == 4) {
                    if (ano_http_request.status == 200) {
//                        alert(ano_http_request.responseText);
                        tempp = ano_http_request.responseText;
//                          return tempp;
//                        alert('alertcontents tempp = '+tempp);
//                        return ano_http_request.responseText;
                    } else {
                        console.log('錯誤 There was a problem with the request.');
//                        return '錯誤';
                    }
                }
//                setTimeout('alertContents()',1000);
}
