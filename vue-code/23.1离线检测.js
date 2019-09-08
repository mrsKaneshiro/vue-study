/***
 * 离线WEB应用开发的三个步骤：
 * 1. 检测浏览器的网络状态 navigator.onLine
 */

function checkOnline(){
    if(navigator.onLine=true){
        console.log(navigator.onLine,'浏览器--在线')
    }else{
        //如果是离线状态
        console.log('浏览器--离线')
    }
}
//事件绑定的几种方法：https://blog.csdn.net/budaoweng0609/article/details/79144606
window.ononline=function () {
    console.log('事件触发---浏览器由离线变为在线')
}
window.onoffline=function () {
    console.log('事件触发---浏览器由在线变为离线')
}


