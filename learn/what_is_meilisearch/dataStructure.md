---

sidebarDepth: 3

---

# 数据结构

## 二叉树

1. 前序遍历：先访问根结点然后遍历左子树，最后遍历右子树。

2. 中序遍历：先遍历左子树，然后访问根结点，最后遍历右子树。

3. 后序遍历：先遍历左子树，然后遍历右子树，最后访问根结点。
4. 层序遍历：一层一层地遍历

<img src="https://picture.yan-test.asia/先序遍历.jpg" alt="先序遍历" style="zoom: 33%;" />

前序遍历结果为：ABDECF

中序遍历结果为：DBEAFC

后序遍历结果为：DEBFCA

层序遍历结果为：ABCDEF

### 数据结构

#### js

```js
class TreeNode {
    constructor (val, left, right) {
      this.val = val
      this.left = left
      this.right = right
    }
}
```

#### java

```java
public class TreeNode {

    public int val;

    public TreeNode left;

    public TreeNode right;

    public TreeNode(int x) { val = x; }

    public String toString(){

        return Integer.toString(val);

    }
}
```

### 中序遍历

#### 递归

```js
function inorderTraversal(root) {
    const res = [];
    function inorder(root) {
        if (root === undefined || root === null) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};
```

#### 迭代

```js
function inorderTraversal(root) {
    const res = [];
    const stk = [];
    while ((root != undefined && root != null) || stk.length != 0) {
        while (root != undefined && root != null) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};
```

### 后序遍历

#### 迭代

```js
function inorderTraversal(root) {
    const res = [];
    const stk = [];
    let prev = null;
    while ((root != undefined && root != null) || stk.length != 0) {
        while (root != undefined && root != null) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        if(root.right != undefined && root.right != null && root.right != prev) {
            stk.push(root);
            root = root.right;
        }else {
            res.push(root.val);
            //标记不再遍历右子树
            prev = root
            //标记不再遍历左子树
            root = null
        }
    }
    return res;
};
```

### 层序遍历

shift：让数组像队列一样先进先出

```js
function levelOrder(root) {
    const res = [];
    if (root === undefined || root === null) {
        return res;
    }

    const arr = [];
    arr.push(root);
    while (arr.length != 0) {
        res.push([]);
        for (let i = 1; i <= arr.length; ++i) {
            const node = arr.shift();
            res[res.length - 1].push(node.val);
            if (node.left) {
                arr.push(node.left);
            }
            if (node.right) {
                arr.push(node.right);
            }
        }
    }

    return res;
};
```

### 测试

```js
var a = new TreeNode('A')
var b = new TreeNode('B')
var c = new TreeNode('C')
var d = new TreeNode('D')
var e = new TreeNode('E')
var f = new TreeNode('F')
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

console.log(a)
console.log(inorderTraversal(a))
```
