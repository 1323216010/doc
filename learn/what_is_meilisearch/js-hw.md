---

sidebarDepth: 1

---

# js

## 1. 字符串最后一个单词的长度

```js
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        let arr = line.split(' ')
        console.log(arr[arr.length - 1].length)
    }
}()
```

## 2. 计算某字母出现次数

```js
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let flag = 0;
    let arr = [];
    // Write your code here
    while ((line = await readline())) {
        arr.push(line.toLowerCase());
        flag++;
        if(flag == 2) {
            console.log(arr[0].split(arr[1]).length - 1);
            flag = 0;
            arr = [];
        }
    }
})();
```
