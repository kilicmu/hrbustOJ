function placeholderPic(){

    var w = document.documentElement.offsetWidth;
    document.documentElement.style.fontSize=w/100+'px';
}
placeholderPic();
window.onresize=function(){
    placeholderPic();
}