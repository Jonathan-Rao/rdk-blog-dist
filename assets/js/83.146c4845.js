(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{426:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_0x01-nps-npc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-nps-npc"}},[s._v("#")]),s._v(" 0x01 nps-npc")]),s._v(" "),a("h3",{attrs:{id:"_1-1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-简介"}},[s._v("#")]),s._v(" 1.1 简介")]),s._v(" "),a("blockquote",[a("p",[s._v("nps是一款轻量级、高性能、功能强大的内网穿透代理服务器。目前支持tcp、udp流量转发，可支持任何tcp、udp上层协议（访问内网网站、本地支付接口调试、ssh访问、远程桌面，内网dns解析等等......），此外还支持内网http代理、内网socks5代理、p2p等，并带有功能强大的web管理端。")])]),s._v(" "),a("ul",[a("li",[s._v("一台有公网IP的服务器（VPS）运行服务端（NPS）")]),s._v(" "),a("li",[s._v("一个或多个运行在内网的服务器或者PC运行客户端（NPC）")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2d542f94a8aa4fcf9a822186e554b178~tplv-k3u1fbpfcp-watermark.awebp",alt:"图片"}})]),s._v(" "),a("h3",{attrs:{id:"_1-2-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-特点"}},[s._v("#")]),s._v(" 1.2 特点")]),s._v(" "),a("ul",[a("li",[s._v("Go语言编写")]),s._v(" "),a("li",[s._v("支持跨平台")]),s._v(" "),a("li",[s._v("支持多种协议的代理")]),s._v(" "),a("li",[s._v("web管理端")])]),s._v(" "),a("h3",{attrs:{id:"_1-3-使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-使用方法"}},[s._v("#")]),s._v(" 1.3 使用方法")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fehang-io%2Fnps%2Freleases",title:"https://github.com/ehang-io/nps/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("github.com/ehang-io/np..."),a("OutboundLink")],1)]),s._v(" "),a("p",[a("strong",[s._v("NPS")])]),s._v(" "),a("h4",{attrs:{id:"安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置"}},[s._v("#")]),s._v(" 安装配置")]),s._v(" "),a("p",[s._v("找到自己服务器相应版本的server：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd ~\nwget https://github.com/cnlh/nps/releases/download/v0.23.2/linux_amd64_server.tar.gz\ntar xzvf linux_amd64_server.tar.gz\ncd ~/nps\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在nps目录下面会有一个nps可执行文件、conf配置目录和web网页目录，我们只需要修改"),a("code",[s._v("conf/nps.conf")]),s._v("即可：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim conf/nps.conf\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("需要改一下"),a("code",[s._v("#web")]),s._v("下面的几个参数，")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("web_host= 服务器IP或者域名\nweb_username= admin（登录用户名）\nweb_password= 你的密码\nweb_port=8080（web管理端口）\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("修改"),a("code",[s._v("#bridge")]),s._v(" 可以更改 NPC的连接端口。比如我们拿到一台权限受限的服务器，有防火墙，可能只有部分端口（80，443）可以出网，就需要修改成出网端口。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("##bridge\nbridge_type=tcp\nbridge_port=443    # 修改连接端口\nbridge_ip=0.0.0.0\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#Mac/Linux\n./nps test|start|stop|restart|status  测试配置文件|启动|停止|重启|状态\n\n#Windows\nnps.exe test|start|stop|restart|status 测试配置文件|启动|停止|重启|状态\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"npc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npc"}},[s._v("#")]),s._v(" NPC")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./npc -server=你的IP:8024 -vkey=唯一验证密码 -type=tcp\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3916ab4ecda486a81c65d3e7f82314c~tplv-k3u1fbpfcp-watermark.awebp?",alt:"image.png"}})]),s._v(" "),a("p",[s._v("新建好客户端后，也可以在"),a("code",[s._v("+")]),s._v("中看到，详细的客户端连接命令：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f293bc5feffa48948c7fd74be72854b3~tplv-k3u1fbpfcp-watermark.awebp?",alt:"image.png"}})]),s._v(" "),a("p",[a("strong",[s._v("web管理端")])]),s._v(" "),a("p",[s._v("在客户端界面可以通过"),a("code",[s._v("新增")]),s._v("的方式添加客户端连接，每一个连接的vkey都是唯一区分的。")]),s._v(" "),a("p",[s._v("每一个客户端，在建立连接后，都可以建立多个不同协议的隧道，这一个个隧道就是不同的代理了。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aebd59dbb8414f78b5fc0b8be1072f9a~tplv-k3u1fbpfcp-watermark.awebp?",alt:"image.png"}})]),s._v(" "),a("p",[s._v("通过不同的协议和端口就可以连接代理的内网机器。")]),s._v(" "),a("h2",{attrs:{id:"_0x02-frp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x02-frp"}},[s._v("#")]),s._v(" 0x02 frp")]),s._v(" "),a("h3",{attrs:{id:"_2-1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-简介"}},[s._v("#")]),s._v(" 2.1 简介")]),s._v(" "),a("blockquote",[a("p",[s._v("frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5217b30e316d4f1988299985e2d4d534~tplv-k3u1fbpfcp-watermark.awebp?",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"_2-2-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-特点"}},[s._v("#")]),s._v(" 2.2 特点")]),s._v(" "),a("ul",[a("li",[s._v("客户端服务端通信支持 TCP、KCP 以及 Websocket 等多种协议。")]),s._v(" "),a("li",[s._v("端口复用，多个服务通过同一个服务端端口暴露。")]),s._v(" "),a("li",[s._v("跨平台，但是支持的比nps少一点")]),s._v(" "),a("li",[s._v("多种插件，提供很多功能")])]),s._v(" "),a("h3",{attrs:{id:"_2-3-使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-使用方法"}},[s._v("#")]),s._v(" 2.3 使用方法")]),s._v(" "),a("p",[s._v("下载："),a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Ffatedier%2Ffrp%2Freleases",title:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("github.com/fatedier/fr..."),a("OutboundLink")],1)]),s._v(" "),a("blockquote",[a("p",[s._v("以下内容摘自："),a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000021876836",title:"https://segmentfault.com/a/1190000021876836",target:"_blank",rel:"noopener noreferrer"}},[s._v("segmentfault.com/a/119000002..."),a("OutboundLink")],1)])]),s._v(" "),a("h4",{attrs:{id:"_1-通过-rdp-访问家里的机器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过-rdp-访问家里的机器"}},[s._v("#")]),s._v(" 1. 通过 rdp 访问家里的机器")]),s._v(" "),a("p",[s._v("修改 frps.ini 文件，为了安全起见，这里最好配置一下身份验证，服务端和客户端的 common 配置中的 "),a("code",[s._v("token")]),s._v(" 参数一致则身份验证通过：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frps.ini\n[common]\nbind_port = 7000\n# 用于身份验证，请自行修改，要保证服务端与客户端一致\ntoken = abcdefgh\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("启动 frps：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./frps -c ./frps.ini\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("修改 frpc.ini 文件，假设 frps 所在服务器的公网 IP 为 x.x.x.x：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frpc.ini\n[common]\nserver_addr = x.x.x.x\nserver_port = 7000\n# 用于身份验证，请自行修改，要保证服务端与客户端一致\ntoken = abcdefgh\n\n[rdp]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 3389\nremote_port = 6000\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("启动 frpc：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./frpc -c ./frpc.ini\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("通过 rdp 访问远程的机器，地址为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("x.x.x.x:6000\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("开机自启")]),s._v(" "),a("p",[s._v("针对 Windows 系统，为了便于使用，可以配置一下开机的时候静默启动。")]),s._v(" "),a("p",[s._v("在 frpc.exe 的同级目录创建一个 start_frpc.vbs：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\'start_frpc.vbs\n\'请根据实际情况修改路径\nCreateObject("WScript.Shell").Run """D:\\Program Files\\frp_windows_amd64\\frpc.exe""" & "-c" & """D:\\Program Files\\frp_windows_amd64\\frpc.ini""",0\n复制代码\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("复制 start_frpc.vbs 文件，打开以下目录，注意将")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<USER_NAME>\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("改为你的用户名：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("C:\\Users<USER_NAME>\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("鼠标右击，粘贴为快捷方式即可。")]),s._v(" "),a("h4",{attrs:{id:"_2-通过-ssh-访问公司内网机器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过-ssh-访问公司内网机器"}},[s._v("#")]),s._v(" 2. 通过 SSH 访问公司内网机器")]),s._v(" "),a("p",[s._v("frps 的部署步骤同上。")]),s._v(" "),a("p",[s._v("启动 frpc，配置如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frpc.ini\n[common]\nserver_addr = x.x.x.x\nserver_port = 7000\n# 用于身份验证，请自行修改，要保证服务端与客户端一致\ntoken = abcdefgh\n\n[ssh]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 22\nremote_port = 6000\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("通过 SSH 访问内网机器，假设用户名为 test：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh -oPort=6000 test@x.x.x.x\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"_3-通过自定义域名访问部署于内网的-web-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过自定义域名访问部署于内网的-web-服务"}},[s._v("#")]),s._v(" 3. 通过自定义域名访问部署于内网的 Web 服务")]),s._v(" "),a("p",[s._v("有时想要让其他人通过域名访问或者测试我们在本地搭建的 Web 服务，但是由于本地机器没有公网 IP，无法将域名解析到本地的机器，通过 frp 就可以实现这一功能，以下示例为 http 服务，https 服务配置方法相同， vhost_http_port 替换为 vhost_https_port， type 设置为 https 即可。")]),s._v(" "),a("p",[s._v("修改 frps.ini 文件，设置 http 访问端口为 8080：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frps.ini\n[common]\nbind_port = 7000\nvhost_http_port = 8080\n# 用于身份验证，请自行修改，要保证服务端与客户端一致\ntoken = abcdefgh\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("启动 frps：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./frps -c ./frps.ini\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("修改 frpc.ini 文件，假设 frps 所在的服务器的 IP 为 x.x.x.x，local_port 为本地机器上 Web 服务对应的端口， 绑定自定义域名 "),a("code",[s._v("www.yourdomain.com")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frpc.ini\n[common]\nserver_addr = x.x.x.x\nserver_port = 7000\n# 用于身份验证，请自行修改，要保证服务端与客户端一致\ntoken = abcdefgh\n\n[web]\ntype = http\nlocal_port = 80\ncustom_domains = www.yourdomain.com\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("启动 frpc：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./frpc -c ./frpc.ini\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将 "),a("code",[s._v("www.yourdomain.com")]),s._v(" 的域名 A 记录解析到 IP "),a("code",[s._v("x.x.x.x")]),s._v("，如果服务器已经有对应的域名，也可以将 CNAME 记录解析到服务器原先的域名。")]),s._v(" "),a("p",[s._v("通过浏览器访问 "),a("code",[s._v("http://www.yourdomain.com:8080")]),s._v(" 即可访问到处于内网机器上的 Web 服务。")]),s._v(" "),a("h4",{attrs:{id:"_4-对外提供简单的文件访问服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-对外提供简单的文件访问服务"}},[s._v("#")]),s._v(" 4. 对外提供简单的文件访问服务")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("static_file")]),s._v(" 插件可以对外提供一个简单的基于 HTTP 的文件访问服务。")]),s._v(" "),a("p",[s._v("frps 的部署步骤同上。")]),s._v(" "),a("p",[s._v("启动 frpc，启用 "),a("code",[s._v("static_file")]),s._v(" 插件，配置如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frpc.ini\n[common]\nserver_addr = x.x.x.x\nserver_port = 7000\n# 用于身份验证，请自行修改，要保证服务端与客户端一致\ntoken = abcdefgh\n\n[test_static_file]\ntype = tcp\nremote_port = 6000\nplugin = static_file\n# 要对外暴露的文件目录\nplugin_local_path = /tmp/file\n# 访问 url 中会被去除的前缀，保留的内容即为要访问的文件路径\nplugin_strip_prefix = static\nplugin_http_user = abc\nplugin_http_passwd = abc\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("通过浏览器访问 "),a("code",[s._v("http://x.x.x.x:6000/static/")]),s._v(" 来查看位于 "),a("code",[s._v("/tmp/file")]),s._v(" 目录下的文件，会要求输入已设置好的用户名和密码。")]),s._v(" "),a("h3",{attrs:{id:"_2-4常用功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4常用功能"}},[s._v("#")]),s._v(" 2.4常用功能")]),s._v(" "),a("h4",{attrs:{id:"_1-统计面板-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-统计面板-dashboard"}},[s._v("#")]),s._v(" 1. 统计面板（Dashboard）")]),s._v(" "),a("p",[s._v("通过浏览器查看 frp 的状态以及代理统计信息展示。")]),s._v(" "),a("p",[s._v("注：Dashboard 尚未针对大量的 proxy 数据展示做优化，如果出现 Dashboard 访问较慢的情况，请不要启用此功能。")]),s._v(" "),a("p",[s._v("需要在 frps.ini 中指定 dashboard 服务使用的端口，即可开启此功能：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[common]\ndashboard_port = 7500\n# dashboard 用户名密码，默认都为 admin\ndashboard_user = admin\ndashboard_pwd = admin\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("打开浏览器通过 "),a("code",[s._v("http://[server_addr]:7500")]),s._v(" 访问 dashboard 界面，用户名密码默认为 "),a("code",[s._v("admin")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"_2-加密与压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-加密与压缩"}},[s._v("#")]),s._v(" 2. 加密与压缩")]),s._v(" "),a("p",[s._v("这两个功能默认是不开启的，需要在 frpc.ini 中通过配置来为指定的代理启用加密与压缩的功能，压缩算法使用 snappy：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frpc.ini\n[ssh]\ntype = tcp\nlocal_port = 22\nremote_port = 6000\nuse_encryption = true\nuse_compression = true\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果公司内网防火墙对外网访问进行了流量识别与屏蔽，例如禁止了 SSH 协议等，通过设置 "),a("code",[s._v("use_encryption = true")]),s._v("，将 frpc 与 frps 之间的通信内容加密传输，将会有效防止流量被拦截。")]),s._v(" "),a("p",[s._v("如果传输的报文长度较长，通过设置 "),a("code",[s._v("use_compression = true")]),s._v(" 对传输内容进行压缩，可以有效减小 frpc 与 frps 之间的网络流量，加快流量转发速度，但是会额外消耗一些 CPU 资源。")]),s._v(" "),a("p",[a("strong",[s._v("TLS")])]),s._v(" "),a("p",[s._v("从 v0.25.0 版本开始 frpc 和 frps 之间支持通过 TLS 协议加密传输。通过在 "),a("code",[s._v("frpc.ini")]),s._v(" 的 "),a("code",[s._v("common")]),s._v(" 中配置 "),a("code",[s._v("tls_enable = true")]),s._v(" 来启用此功能，安全性更高。")]),s._v(" "),a("p",[s._v("为了端口复用，frp 建立 TLS 连接的第一个字节为 0x17。")]),s._v(" "),a("p",[s._v("注意：启用此功能后除 xtcp 外，不需要再设置 use_encryption。")]),s._v(" "),a("h4",{attrs:{id:"_3-代理限速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-代理限速"}},[s._v("#")]),s._v(" 3. 代理限速")]),s._v(" "),a("p",[s._v("目前支持在客户端的代理配置中设置代理级别的限速，限制单个 proxy 可以占用的带宽。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frpc.ini\n[ssh]\ntype = tcp\nlocal_port = 22\nremote_port = 6000\nbandwidth_limit = 1MB\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("在代理配置中增加 "),a("code",[s._v("bandwidth_limit")]),s._v(" 字段启用此功能，目前仅支持 "),a("code",[s._v("MB")]),s._v(" 和 "),a("code",[s._v("KB")]),s._v(" 单位。")]),s._v(" "),a("p",[a("strong",[s._v("4. 范围端口映射")])]),s._v(" "),a("p",[s._v("在 frpc 的配置文件中可以指定映射多个端口，目前只支持 tcp 和 udp 的类型。")]),s._v(" "),a("p",[s._v("这一功能通过 "),a("code",[s._v("range:")]),s._v(" 段落标记来实现，客户端会解析这个标记中的配置，将其拆分成多个 proxy，每一个 proxy 以数字为后缀命名。")]),s._v(" "),a("p",[s._v("例如要映射本地 6000-6005, 6007 这 6 个端口，主要配置如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# frpc.ini\n[range:test_tcp]\ntype = tcp\nlocal_ip = 127.0.0.1\nlocal_port = 6000-6006,6007\nremote_port = 6000-6006,6007\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("实际连接成功后会创建 8 个 proxy，命名为 "),a("code",[s._v("test_tcp_0, test_tcp_1 ... test_tcp_7")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_0x03-ew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x03-ew"}},[s._v("#")]),s._v(" 0x03 ew")]),s._v(" "),a("h3",{attrs:{id:"_3-1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-简介"}},[s._v("#")]),s._v(" 3.1 简介")]),s._v(" "),a("blockquote",[a("p",[s._v("EW 是一套便携式的网络穿透工具，具有 SOCKS v5服务架设和端口转发两大核心功能，可在复杂网络环境下完成网络穿透。但是，现在工具已经不更新了。。。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/576f7a0b9b9143f091b5119f0fa1a0d8~tplv-k3u1fbpfcp-watermark.awebp?",alt:"image.png"}})]),s._v(" "),a("h3",{attrs:{id:"_3-2-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-特点"}},[s._v("#")]),s._v(" 3.2 特点")]),s._v(" "),a("ul",[a("li",[s._v("轻量级，C语言编写")]),s._v(" "),a("li",[s._v("可以设置多级代理")]),s._v(" "),a("li",[s._v("跨平台")]),s._v(" "),a("li",[s._v("但是只支持Socks5代理")])]),s._v(" "),a("h3",{attrs:{id:"_3-3-使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-使用方法"}},[s._v("#")]),s._v(" 3.3 使用方法")]),s._v(" "),a("blockquote",[a("p",[s._v("以下使用方法均摘自："),a("a",{attrs:{href:"https://link.juejin.cn?target=http%3A%2F%2Frootkiter.com%2FEarthWorm%2F",title:"http://rootkiter.com/EarthWorm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rootkiter.com/EarthWorm/"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("以下所有样例，如无特殊说明代理端口均为1080，服务均为SOCKSv5代理服务.")]),s._v(" "),a("p",[s._v("该工具共有 6 种命令格式（ssocksd、rcsocks、rssocks、lcx_slave、lcx_listen、lcx_tran）。")]),s._v(" "),a("h3",{attrs:{id:"_1-正向-socks-v5-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-正向-socks-v5-服务器"}},[s._v("#")]),s._v(" 1. 正向 SOCKS v5 服务器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./ew -s ssocksd -l 1080\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-反弹-socks-v5-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-反弹-socks-v5-服务器"}},[s._v("#")]),s._v(" 2. 反弹 SOCKS v5 服务器")]),s._v(" "),a("p",[s._v("这个操作具体分两步：")]),s._v(" "),a("p",[s._v("a) 先在一台具有公网 ip 的主机A上运行以下命令：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./ew -s rcsocks -l 1080 -e 8888\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("b) 在目标主机B上启动 SOCKS v5 服务 并反弹到公网主机的 8888端口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./ew -s rssocks -d 1.1.1.1 -e 8888\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("成功。")]),s._v(" "),a("h3",{attrs:{id:"_3-多级级联"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-多级级联"}},[s._v("#")]),s._v(" 3. 多级级联")]),s._v(" "),a("p",[s._v("工具中自带的三条端口转发指令， 它们的参数格式分别为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./ew -s lcx_listen -l  1080   -e 8888  \n$ ./ew -s lcx_tran   -l  1080   -f 2.2.2.3 -g 9999  \n$ ./ew -s lcx_slave  -d 1.1.1.1 -e 8888    -f 2.2.2.3  -g  9999\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v('通过这些端口转发指令可以将处于网络深层的基于TCP的服务转发至根前,比如 SOCKS v5。首先提供两个"二级级联"本地SOCKS测试样例：')]),s._v(" "),a("p",[s._v("a) "),a("code",[s._v("lcx_tran")]),s._v(" 的用法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./ew -s ssocksd  -l 9999\n$ ./ew -s lcx_tran -l 1080 -f 127.0.0.1 -g 9999\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("b) "),a("code",[s._v("lcx_listen")]),s._v("、"),a("code",[s._v("lcx_slave")]),s._v(" 的用法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./ew -s lcx_listen -l 1080 -e 8888\n$ ./ew -s ssocksd    -l 9999\n$ ./ew -s lcx_slave  -d 127.0.0.1 -e 8888 -f 127.0.0.1 -g 9999\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v('再提供一个"三级级联"的本地SOCKS测试用例以供参考')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ ./ew -s rcsocks -l 1080 -e 8888 \n$ ./ew -s lcx_slave -d 127.0.0.1 -e 8888 -f 127.0.0.1 -g 9999  \n$ ./ew -s lcx_listen -l 9999 -e 7777  \n$ ./ew -s rssocks -d 127.0.0.1 -e 7777\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("数据流向: "),a("code",[s._v("SOCKS v5 -> 1080 -> 8888 -> 9999 -> 7777 -> rssocks")])]),s._v(" "),a("h2",{attrs:{id:"_0x04-ngrok"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x04-ngrok"}},[s._v("#")]),s._v(" 0x04 ngrok")]),s._v(" "),a("h3",{attrs:{id:"_4-1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-简介"}},[s._v("#")]),s._v(" 4.1 简介")]),s._v(" "),a("blockquote",[a("p",[s._v("ngrok 是一个反向代理，通过在公共端点和本地运行的 Web 服务器之间建立一个安全的通道，实现内网主机的服务可以暴露给外网。ngrok 可捕获和分析所有通道上的流量，便于后期分析和重放，所以ngrok可以很方便地协助服务端程序测试。")])]),s._v(" "),a("h3",{attrs:{id:"_4-2-特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-特点"}},[s._v("#")]),s._v(" 4.2 特点")]),s._v(" "),a("ul",[a("li",[s._v("官方维护，一般较为稳定")]),s._v(" "),a("li",[s._v("跨平台，闭源")]),s._v(" "),a("li",[s._v("有流量记录和重发功能")])]),s._v(" "),a("h3",{attrs:{id:"_4-3-使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-使用方法"}},[s._v("#")]),s._v(" 4.3 使用方法")]),s._v(" "),a("ul",[a("li",[s._v("进入ngrok官网（"),a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fngrok.com%2F%25EF%25BC%2589%25EF%25BC%258C%25E6%25B3%25A8%25E5%2586%258Cngrok%25E8%25B4%25A6%25E5%258F%25B7%25E5%25B9%25B6%25E4%25B8%258B%25E8%25BD%25BDngrok%25EF%25BC%259B",title:"https://ngrok.com/%EF%BC%89%EF%BC%8C%E6%B3%A8%E5%86%8Cngrok%E8%B4%A6%E5%8F%B7%E5%B9%B6%E4%B8%8B%E8%BD%BDngrok%EF%BC%9B",target:"_blank",rel:"noopener noreferrer"}},[s._v("ngrok.com/），注册ngrok账号..."),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("根据官网给定的授权码，运行如下授权命令；")]),s._v(" "),a("li",[a("code",[s._v("./ngrok authtoken 1hAotxhmORtzCYvUc3BsxDBPh1H_******************")])]),s._v(" "),a("li",[a("code",[s._v("./ngrok http 80")]),s._v("即可将机器的80端口http服务暴露到公网，并且会提供一个公网域名。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ca667f8eb334a6391dbfa227e22495b~tplv-k3u1fbpfcp-watermark.awebp?",alt:"image.png"}})]),s._v(" "),a("p",[s._v("可以通过官网的UI界面查看数据包和流量等等（但是要付费==、）")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2c680851020493b8a79796e862e3781~tplv-k3u1fbpfcp-watermark.awebp?",alt:"image.png"}})]),s._v(" "),a("p",[s._v("还可以通过一些命令将内网的文件和其他TCP服务 暴露到公网中。")]),s._v(" "),a("p",[s._v("有授权的设置文件共享")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ngrok http -auth="user:password" file:///Users/alan/share\n复制代码\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("无授权的设置文件共享")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ngrok http "file:///C:\\Users\\alan\\Public Folder"\n复制代码\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("将主机的3389的TCP端口暴露到公网")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ngrok tcp 3389\n复制代码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("更多使用方法参考："),a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fngrok.com%2Fdocs",title:"https://ngrok.com/docs",target:"_blank",rel:"noopener noreferrer"}},[s._v("ngrok.com/docs"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"_0xff-参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0xff-参考链接"}},[s._v("#")]),s._v(" 0xFF 参考链接")]),s._v(" "),a("p",[s._v("内网渗透之内网穿透")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fxz.aliyun.com%2Ft%2F7701",title:"https://xz.aliyun.com/t/7701",target:"_blank",rel:"noopener noreferrer"}},[s._v("xz.aliyun.com/t/7701"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("开源内网穿透工具 frp 简单使用教程")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000021876836",title:"https://segmentfault.com/a/1190000021876836",target:"_blank",rel:"noopener noreferrer"}},[s._v("segmentfault.com/a/119000002..."),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://link.juejin.cn?target=http%3A%2F%2Frootkiter.com%2FEarthWorm%2F",title:"http://rootkiter.com/EarthWorm/",target:"_blank",rel:"noopener noreferrer"}},[s._v("rootkiter.com/EarthWorm/"),a("OutboundLink")],1),s._v("\\")])])])}),[],!1,null,null,null);a.default=n.exports}}]);