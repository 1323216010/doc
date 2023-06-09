---
permalink: /faq.html
sidebar: auto
---

# 常用

## 命令

### js

控制台命令网页为暗黑模式

```javascript
document.documentElement.style.filter='invert(85%) hue-rotate(180deg)'
```

### docker

镜像重命名

```powershell
docker tag yan/kkfileview:4.1.1 yan160100/kkfileview:4.1.1
```

### npm

清理缓存

```powershell
npm cache clear --force
```

### linux

查看cpu信息

```powershell
cat  /proc/cpuinfo
```

## 配置

### nginx

绕过X-Frame-Options限制

```nginx
server {
        listen       8080;
        location / {
            proxy_hide_header X-Frame-Options;
            proxy_pass http://{target};
        }
    }
```

## 开源

### meilisearch

meilisearch是一个用rust写的搜索引擎

docker启动命令

```powershell
docker run -it --rm -p 7700:7700 -e MEILI_MASTER_KEY='MASTER_KEY' getmeili/meilisearch:v1.0
```

MEILI_MASTER_KEY指定token名称

[项目地址](https://github.com/meilisearch/meilisearch)

### websocket

#### ws

ws是一个WebSocket实现。

[项目地址](https://github.com/websockets/ws)

#### Gorilla WebSocket

Gorilla WebSocket 是一个WebSocket的 Go实现。

[项目地址](https://github.com/gorilla/websocket)

### 消息队列

#### RabbitMQ

RabbitMQ是一个支持消息持久化的消息队列服务软件

在线拉取docker镜像

```powershell
docker pull rabbitmq:3-management
```

运行MQ容器

```powershell
docker run -e RABBITMQ_DEFAULT_USER=guest -e RABBITMQ_DEFAULT_PASS=guest --name mq --hostname mq1 -p 15672:15672 -p 5672:5672 -d rabbitmq:3-management
```

[文档地址](https://www.rabbitmq.com/getstarted.html)
