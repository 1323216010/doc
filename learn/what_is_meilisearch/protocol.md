---

sidebarDepth: 1

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

TCP面向连接（如打电话要先拨号建立连接），提供可靠的服务，通过它连接传送的数据，无差错，不丢失，不重复，且按序到达。

UDP是无连接的，即发送数据之前不需要建立连接，没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如IP电话，实时视频会议等）

TCP使用场景：相对于 UDP，TCP 实现了数据传输过程中的各种控制，可以进行丢包时的重发控制，还可以对次序乱掉的分包进行顺序控制。在对可靠性要求较高的情况下，可以使用 TCP

UDP使用场景：

* 广播通信

* 视频、音频等多媒体通信（即时通信）

### 应用层协议

#### HTTP

HTTP(HyperText Transfer Protocol)，基于TCP/IP传递数据（HTML 文件, 图片文件, 查询结果等）。通常，由HTTP客户端发起一个请求，建立一个到服务器指定端口（默认是80端口）的TCP连接。HTTP服务器则在那个端口监听客户端发送过来的请求。

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
