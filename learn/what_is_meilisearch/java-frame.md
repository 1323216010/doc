---

sidebarDepth: 1

---

# Java框架

## Spring

Spring是用来简化开发的。

### IOC

IOC(Inversion of Control)是面向对象编程中的一种设计原则，指使用对象时由主动new产生对象改为由外部提供对象。

控制反转的是对象的创建权。

控制反转可以减低计算机代码之间的耦合度。

控制反转最常见的方式叫做依赖注入（Dependency Injection），还有一种方式叫“依赖查找”（Dependency Lookup）。

#### IOC容器

作用：负责对象的创建、初始化等工作，其中包含了数据层和业务层的类对象。

被创建或被管理的对象在IOC容器中称为Bean，IOC容器中放的就是一个个的Bean对象。

#### 依赖注入

依赖注入是一种设计模式，可以用来实现控制反转。实现方式是，在 Spring IOC 容器创建对象时，将所依赖的对象通过注解或者配置的方式进行注入，提供给程序使用。

#### Bean的生命周期

Bean的生命周期包括四个阶段：实例化(Instantiation )、属性赋值(Populate )、初始化(Initalization) 、销毁(Destruction)，这四个阶段会经历各种方法的调用。

#### Bean的生命周期控制

在bean创建后到销毁前做一些事情。

#### 自动装配

IoC容器根据bean所依赖的资源在容器中自动查找并注入到bean中的过程称为自动装配。方式：

* 按类型（常用）
* 按名称
* 按构造方法
* 不启用自动装配

### AOP

OOP(Object Oriented Programming)面向对象编程。

AOP(Aspect Oriented Programming)面向切面编程，是一种编程思想，指在不改变原有代码的前提下添加功能。

通知类型：

* 前置通知
* 后置通知
* 环绕通知(重点)
* 返回后通知(了解)
* 抛出异常后通知(了解)

使用场景：

* 日志记录
* 安全控制
* 异常处理

### Spring事务

Spring事务作用：在数据层或业务层保障一系列的数据库操作同成功同失败。

## SpringMvc

SpringMVC对Servlet进行了封装，主要用来做Web开发。

作用：接收前端发过来的数据，处理之后将结果响应给前端

### Servlet

Servlet是Java编写的服务端程序。

## SpringBoot

SpringBoot是用来帮助Spring在简化的基础上能更快速进行开发。
