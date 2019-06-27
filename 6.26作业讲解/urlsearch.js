//url 查询字符串转对象
//index.html?name=1&age=3
//let urlstr = location.search;
let urlstr = "?name=1&age=3";
function UrltoObj(str) {
  str = str.slice(1); 
  strary = str.split("&"); 
  strary.forEach(item => {
    item = item.split("=");
  
    obj[item[0]] = item[1];
  });
  return obj;
}
let res = UrltoObj(urlstr);
