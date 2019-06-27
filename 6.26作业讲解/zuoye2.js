let fs = require("fs");
let fsPromise = fs.promises;
let path = require("path");
let filename = path.resolve(__dirname, "good.json");
fsPromise.readFile(filename, "utf-8").then(data => {
  data = JSON.parse(data); //good数组
  // data = [ { id: 1, name: '苹果' }, { id: 2, name: '🍊' } ]
  let newary = data.map(item => {
    if (item.id === 1) {
      item.name = "香蕉";
    }
    return item;
  });
  fsPromise.writeFile(filename, JSON.stringify(newary), "utf8");
});
