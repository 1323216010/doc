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
        var sum = 0;
        for(let i = 0; i < line.length; i++) {
            if(line[i] == ' ') {
                sum = 0;
            }else {
                sum++;
            }
        }
        console.log(sum);
    }
}()
```
