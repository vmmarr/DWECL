function src(e) {
    alert(this.src);
}

window.onload = function(){
   img2.onmouseover = src;
}