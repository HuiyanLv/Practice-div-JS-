 /*使login-box水平垂直居中*/
 window.onload=function box() {
    	var x=document.getElementsByClassName("login-box")[0];
    	var l1=x.offsetWidth;
    	var h1=x.offsetHeight;
    	var left=(document.documentElement.clientWidth-l1)/2;
        var top=(document.documentElement.clientHeight-h1)/2;
        x.style.left=left+'px';
        x.style.top=top+'px';
        window.onresize=function() {
        	box();
        }