---

sidebarDepth: 1

---

# 编程语言

## 相关概念

我们平时说的MySQL数据库其实是MySQL数据库管理系统。

### 1. SQL分类

#### DDL(Data Definition Language)  

数据定义语言，用来定义数据库对象：数据库，表，列等

简单理解就是用来操作数据库，表等

#### DML(Data Manipulation Language)

数据操作语言，用来对数据库中表的数据进行增删改

简单理解就对表中数据进行增删改

#### DQL(Data Query Language)

数据查询语言，用来查询数据库中表的记录(数据)

DQL简单理解就是对数据进行查询操作。从数据库表中查询到我们想要的数据。

#### DCL(Data Control Language)

数据控制语言，用来定义数据库的访问权限和安全级别，及创建用户

DCL简单理解就是对数据库进行权限控制。比如我让某一个数据库表只能让某一个用户进行操作等。

### 2. 约束

* **非空约束： NOT NULL**

  保证列中所有的数据不能有null值。

* **唯一约束：UNIQUE**

  保证列中所有数据各不相同。

* **主键约束：PRIMARY KEY**

  主键约束 = 非空约束 + 唯一约束

* **检查约束： CHECK**

  保证列中的值满足某一条件。

  > MySQL不支持检查约束

* **默认约束： DEFAULT**

  保存数据时，未指定值则采用默认值。

* **外键约束：FOREIGN KEY**

  外键用来让两个表的数据之间建立链接，保证数据的一致性和完整性。

### 3.多表查询

#### 内连接

```sql
-- 隐式内连接
SELECT 字段列表 FROM 表1,表2… WHERE 条件;

-- 显示内连接
SELECT 字段列表 FROM 表1 [INNER] JOIN 表2 ON 条件;
```

#### 外连接

```sql
-- 左外连接
SELECT 字段列表 FROM 表1 LEFT [OUTER] JOIN 表2 ON 条件;

-- 右外连接
SELECT 字段列表 FROM 表1 RIGHT [OUTER] JOIN 表2 ON 条件;
```

#### 子查询

查询中嵌套查询，称嵌套查询为子查询。

### 4. 事务

数据库的事务（Transaction）是一种机制、一个操作序列，包含了==一组数据库操作命令==。

#### 操作命令

* 开启事务

  ```sql
  START TRANSACTION;
  或者  
  BEGIN;
  ```

* 提交事务

  ```sql
  commit;
  ```

* 回滚事务

  ```sql
  rollback;
  ```

#### 事务的四大特征

* 原子性（Atomicity）: 事务是不可分割的最小操作单位，要么同时成功，要么同时失败

* 一致性（Consistency） :事务完成时，必须使所有的数据都保持一致状态

* 隔离性（Isolation） :多个事务之间，操作的可见性

* 持久性（Durability） :事务一旦提交或回滚，它对数据库中的数据的改变就是永久的