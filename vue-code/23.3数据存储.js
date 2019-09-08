/***
 *
 */
if(typeof localStorage=="object") {
    //事实证明可以访问到localStorage
    localStorage.setItem('Gao','Cindy')
    document.onstorage=function (e) {
        console.log(e.newValue)
    }
    console.log(localStorage.length,localStorage.getItem('Gao'),localStorage.key(0))
}
else if(typeof globalStorage=='object' ){
    console.log('globalStorage',globalStorage)
}else{
    console.log('不支持storage')
}

