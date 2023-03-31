---

sidebarDepth: 1

---

# go

## 切片

```go
package main

import "fmt"

func main() {
  // 基于数组定义切片
  a := [5]int {55,56,57,58,59}
  // 获取数组所有值，返回的是一个切片
  b := a[:]
  // 从数组获取指定的切片
  c := a[1:4]
  // 获取 下标3之前的数据（不包括3）
  d := a[:3]
  // 获取下标3以后的数据（包括3）
  e := a[3:]
  // 长度和容量
  fmt.Println(b)
  fmt.Println(c)
  fmt.Println(d)
  fmt.Println(e)

  s := []int {2,3,5,7,11,13}
  fmt.Printf("长度%d 容量%d\n", len(s), cap(s))

  ss := s[2:]
  fmt.Printf("长度%d 容量%d\n", len(ss), cap(ss))

  sss := s[2:4]
  fmt.Printf("长度%d 容量%d\n", len(sss), cap(sss))
}
```

切片的长度就是它所包含的元素个数。

切片的容量是从它的第一个元素开始数，到其底层数组元素末尾的个数。切片s的长度和容量可通过表达式len（s）和cap（s）来获取。

[参考](https://www.cnblogs.com/SR-Program/p/16438543.html)

### 切片
