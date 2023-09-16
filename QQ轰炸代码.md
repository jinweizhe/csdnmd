1、新建一个文本文档复制以下代码

Set WshShell = WScript.CreateObject("Wscript.Shell")
WshShell.AppActivate"涛哥真帅" //这里的字可以随便改
for i=1 to 50 //循环次数
WScript.sleep 50 //延迟次数
WshShell.Sendkeys "^v"
WshShell.Sendkeys i
WshShell.Sendkeys" %s"
Next

2、保存后，改后缀名为vbs

3、打开请求，输入你想发送的消息，复制

4，双击vbs文件后发送