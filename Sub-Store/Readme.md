▎Sub-Store 配置指南  

重写：https://raw.githubusercontent.com/WSL33099/QuantumultX/main/Conf/Sub-Store.snippet  

指南  
https://github.com/Peng-YM/Sub-Store/tree/master/config  

脚本处理添加链接：
https://raw.githubusercontent.com/futurkk/Potato/main/Rename/rename.js  

脚本作用：把所有节点格式化成机场+国家+编号的形式。  

剩余流量脚本：
❶ https://raw.githubusercontent.com/xream/scripts/main/surge/modules/sub-store-scripts/sub-info/headers.js  

❷ https://raw.githubusercontent.com/NobyDa/Script/master/Sub-store-parser/DataQuery.js  

代理链路脚本：
https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/Sub-Store/ScriptAction.js  

脚本添加混淆：
https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/scripts/vmess-ws-obfs-host.js#host=google.com  

花里胡哨字体：https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/scripts/fancy-characters.js  

有问题清除缓存：  
> [task_local]  
> ##### 运行脚本清楚缓存
> * * * * * https://raw.githubusercontent.com/Peng-YM/Sub-Store/master/scripts/revert.js, tag=清除缓存, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Lab.png, enabled=false   
> 
> event-interaction https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/TaskLocal/NodeLinkCheck.js, tag=代理链路检测, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Stack.png, enabled=true  

使用捷径批量同步节点到 Gist
https://www.icloud.com/shortcuts/cfe17d8ef9ab44b2b7ab1bc7be30efa3


其他订阅转换地址  
❶https://acl4ssr-sub.github.io  
❷https://sub.feng666.tk  
❸https://sub.v1.mk  
❹https://id9.cc  


1⃣️Sub-Store脚本操作：

https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/Sub-Store/ScriptAction.js

2⃣️QX配置文件[task_local]：

event-interaction https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/TaskLocal/NodeLinkCheck.js, tag=代理链路检测, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Stack.png, enabled=true

▎使用方法：

❶使用Sub-Store正常订阅节点，但在最下方的 节点操作 中选择 脚本操作 并选择 链接 添加 代码内容1⃣️

❷ QX配置文件[task_local]下粘贴代码内容2⃣️

❸ QX中添加Sub-Store处理后的订阅

详细教程[Sub-Store教程](https://www.notion.so/Sub-Store-6259586994d34c11a4ced5c406264b46)
