/*
 *
 *
脚本功能：懒人听书 解锁vip
软件版本：8.3.61
下载地址：苹果商店下载
脚本作者：
更新时间：2024年2月21日 22:39
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！
*******************************
[rewrite_local]
# > 懒人听书vip
^https?:\/\/(shapi|gzapi).mting.info\/yyting\/(usercenter\/ThirdPartyLogin|userclient\/ClientGetUserInfo).action url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/lrts.js

[mitm] 
hostname = gzapi.mting.info,shapi.mting.info
*
*
*/
