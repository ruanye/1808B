let str = "?name=1&age=2&c=3";
function urlToObj(str) {
  let obj = {};
  str = str.slice(1).split("&");
  for (item of str) {
    item = item.split("=");
    item;
    obj[item[0]] = item[1];
  }
  return obj;
}
let res = urlToObj(str);
res;
let a = 1,b=2
console.log(a+b)
