---

sidebarDepth: 2

---

# RabbitMQ

## 相关概念

### WorkQueue

![image-20210717164238910](https://picture.yan-test.asia/image-20210717164238910.png)

Work queues，也被称为Task queues(任务模型)，让多个消费者绑定到一个队列，共同消费队列中的消息。

当消息处理比较耗时的时候，使用work 模型，多个消费者共同处理消息处理，提高处理速度。

Work模型的使用：

* 多个消费者绑定到一个队列，同一条消息只会被一个消费者处理
* 通过设置prefetch来控制消费者预取的消息数量

### Publish/Subscribe

![image-20210717165309625](https://picture.yan-test.asia/image-20210717165309625.png)

在发布订阅模型中，多了一个exchange角色，而且过程略有变化：

* Publisher：生产者，也就是要发送消息的程序，但是不再发送到队列中，而是发给X（交换机）
* Exchange：交换机，图中的X。一方面，接收生产者发送的消息。另一方面，知道如何处理消息，例如递交给某个特别队列、递交给所有队列、或是将消息丢弃。到底如何操作，取决于Exchange的类型。Exchange有以下3种类型：
  * Fanout：广播，将消息交给所有绑定到交换机的队列
  * Direct：定向，把消息交给符合指定routing key 的队列
  * Topic：通配符，把消息交给符合routing pattern（路由模式） 的队列
* Queue：消息队列也与以前一样，接收消息、缓存消息。
* Consumer：消费者，与以前一样，订阅队列，没有变化

Exchange（交换机）只负责转发消息，不具备存储消息的能力，因此如果没有任何队列与Exchange绑定，或者没有符合路由规则的队列，那么消息会丢失！

#### Fanout

![image-20210717165438225](https://picture.yan-test.asia/image-20210717165438225.png)

Fanout，英文翻译是扇出，在MQ中叫广播更合适。

在广播模式下，消息发送流程是这样的：

* 1）  可以有多个队列
* 2）  每个队列都要绑定到Exchange（交换机）
* 3）  生产者发送的消息，只能发送到交换机，交换机来决定要发给哪个队列，生产者无法决定
* 4）  交换机把消息发送给绑定过的所有队列
* 5）  订阅队列的消费者都能拿到消息

对比发布订阅模式多了4和5。

#### Direct

![image-20210717170041447](https://picture.yan-test.asia/image-20210717170041447.png)

在Direct模型下：

* 队列与交换机的绑定，要指定一个`RoutingKey`（路由key）
* 消息的发送方在向Exchange发送消息时，也必须指定消息的 `RoutingKey`。
* Exchange不再把消息交给每一个绑定的队列，而是根据消息的`Routing Key`进行判断，只有队列的`Routingkey`与消息的 `Routing key`完全一致，才会接收到消息

#### Topic

![image-20210717170705380](https://picture.yan-test.asia/image-20210717170705380.png)

`Topic`类型的`Exchange`与`Direct`相比，都是可以根据`RoutingKey`把消息路由到不同的队列。只不过`Topic`类型`Exchange`可以让队列在绑定`Routing key` 的时候使用通配符！

`Routingkey` 一般都是有一个或多个单词组成，多个单词之间以”.”分割，例如： `item.insert`

 通配符规则：

`#`：匹配一个或多个词

`*`：匹配不多不少恰好1个词
