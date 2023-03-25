---

sidebarDepth: 1

---

# go

## 1. 字符串最后一个单词的长度

```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	// 设置结束字符
	input, _ := reader.ReadString('\n')
	sum := -1
	for i := 0; i < len(input); i++ {
		if input[i] == ' ' {
			sum = 0
		} else {
			sum++
		}
	}
	fmt.Println(sum)
}
```
