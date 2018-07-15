<script language="JavaScript">


// 計算當地時區的時間
//function calcTime(offset) {
    // 建立現在時間的物件
//  d = new Date();
    // 取得 UTC time
//  utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // 新增不同時區的日期資料
//  nd = new Date(utc + (3600000*offset));
    // 顯示當地時間
//  return "在 " + " 的本地時間是 " + nd.toLocaleString();
//}

//function callfinal(){
//  document.getElementById('tesuto').innerHTML = calcTime('taipei' , 8);
//  var date_taipei = DateTimezone(8);
//  document.getElementById('tesuto2').innerHTML = date_taipei.toLocaleString();
//}



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

<!--
## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/HOIMASAMI/mise/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/HOIMASAMI/mise/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.

-->
