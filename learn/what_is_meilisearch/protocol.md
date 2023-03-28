---

sidebarDepth: 2

---

# 计算机网络

## OSI

OSI(Open System Interconnection)是国际标准化组织(ISO)制定的一个用于计算机或通信系统间互联的参考模型。

![OSI](https://picture.yan-test.asia/OSI.png)

各层功能描述：

![OSI各层描述](https://picture.yan-test.asia/OSI各层描述.png)

## 网络协议

### 传输层协议

TCP和UDP都是传输层协议。

#### TCP

TCP面向连接（如打电话要先拨号建立连接），提供可靠的服务，通过它连接传送的数据，无差错，不丢失，不重复，且按序到达。

TCP使用场景：相对于 UDP，TCP 实现了数据传输过程中的各种控制，可以进行丢包时的重发控制，还可以对次序乱掉的分包进行顺序控制。在对可靠性要求较高的情况下，可以使用 TCP。

##### 三次握手

![三次握手](https://picture.yan-test.asia/75.jpg)

假设 A 为客户端，B 为服务器端。

* A 向 B 发送连接请求报文段，`SYN=1`，`ACK=0`，初始序列号`seq = x`。
* B 收到连接请求报文段，如果同意建立连接，则向 A 发送连接确认报文段，`SYN=1`，`ACK=1`，确认号为`x+1`，同时也选择一个初始的序列号`seq = y`。
* A 收到 B 的连接确认报文段后，还要向 B 发出确认，确认号为`ack = y+1`，序列号为`seq = x+1`。

为什么TCP连接需要三次握手，两次不可以吗，为什么?

TCP是双向通信协议，通信双方都有能力发送信息，并接收响应。如果只是两次握手， 至多只有连接发起方的序列号能被确认， 另一方选的序列号则得不到确认。

##### 四次挥手

![四次挥手](https://picture.yan-test.asia/76.jpg)

* A 把连接释放需要先发送报文段`FIN = 1`，其序号`seq = u`，等待 B 的确认。
* B 发出确认，确认号`ack = u+1`，报文段的序号`seq = v`。（TCP 服务器进程通知高层应用进程）。
* 当 B 不再需要连接时，发送连接释放请求报文段，FIN=1。
* A 收到后发出确认，进入`TIME-WAIT`状态，等待`2 MSL（2*2 = 4 mins）`时间后释放连接。

两次挥手后，A 到 B 这个方向的连接就释放了，TCP 连接处于半关闭状态。A 不能向 B 发送数据；B 若发送数据，A 仍要接收。

#### UDP

UDP是无连接的，即发送数据之前不需要建立连接，没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如IP电话，实时视频会议等）

UDP使用场景：

* 广播通信
* 视频、音频等多媒体通信（即时通信）

### 应用层协议

#### HTTP

HTTP(HyperText Transfer Protocol)，（HTML 文件, 图片文件, 查询结果等）。通常，由HTTP客户端发起一个请求，建立一个到服务器指定端口（默认是80端口）的TCP连接。HTTP服务器则在那个端口监听客户端发送过来的请求。

特点：

* **灵活**：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。
* **无状态**：无状态是指协议对于事务处理没有记忆能力。无状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快

#### FTP

FTP是用于文件传送的协议。

#### SMTP

SMTP是用于邮件传送的协议SMTP。

#### DNS

DNS是用于域名解析的协议，将域名转换为IP地址。

## TCP/IP

TCP/IP（Transmission Control Protocol/Internet Protocol）不是一种协议，而是一个协议族的统称，其中包括TCP、UDP、IP、HTTP、FTP、SMTP、IMCP等。

TCP/IP包含应用层、传输层、网络层和数据链路层。

![TCP/IP](https://picture.yan-test.asia/ef79e170-5461-49f0-9e4b-1a1bc6c5de23.jpg)