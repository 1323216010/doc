---

sidebarDepth: 1

---

# go

## 1. 字符串最后一个单词的长度

```go
package main

import (
  "bufio"
  "strings"
  "fmt"
  "os"
)

func main() {
    input := bufio.NewScanner(os.Stdin)
    for input.Scan() {
        arr := strings.Split(input.Text(), " ")
        fmt.Println(len(arr[len(arr)-1]))
    }
}
```
