---

sidebarDepth: 2

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
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
    }
}
```

```js
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
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
function postorderTraversal(root) {
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
        let l = arr.length;
        res.push([]);
        for (let i = 0; i < l ++i) {
            const node = arr.shift();
            res[res.length - 1].push(node.val);
            if(node.left != undefined && node.left !=null) {
                arr.push(node.left)
            }
            if(node.right != undefined && node.right !=null) {
                arr.push(node.right)
            }
        }
    }

    return res;
};
```

### 测试

```js
var a = new TreeNode('A', new TreeNode('B', new TreeNode('D'), new TreeNode('E')), new TreeNode('C', new TreeNode('F')))

console.log(a)
console.log(inorderTraversal(a))
```

## 链表

### 数据结构

#### js

```js
class ListNode {
    constructor (val) {
      this.val = val
      this.next = null
    }
}
```

### [合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)

#### 迭代

```js
function mergeTwoLists(l1, l2) {
    const prehead = new ListNode(-1);

    let curr = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if(l1 === null) {
        curr.next = l2
    }else {
        curr.next = l1
    }

    return prehead.next;
};
```

#### 测试

```js
var l1 = new ListNode(1)
l1.next = new ListNode(2)
node = l1.next
node.next = new ListNode(4)

var l2 = new ListNode(1)
l2.next = new ListNode(3)
node = l2.next
node.next = new ListNode(4)

console.log(mergeTwoLists(l1, l2))
```

## 栈

### [有效的括号](https://leetcode.cn/problems/valid-parentheses/)

```js
function isValid(s) {
    if (s.length % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s){
        if (pairs.has(ch)) {
            if (stk.length == 0 || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } 
        else {
            stk.push(ch);
        }
    };
    return !stk.length;
};
```

#### 测试

```js
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
```
