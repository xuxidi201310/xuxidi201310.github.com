// JavaScript Document
window.onload=function(){
	var str = '欢迎来到我的个人站！';
		for(var i = 0;i<str.length;i++){
			var oSpan =document.document.createElement('span');
			oSpan.innerHTML = str.charAt(i);
			document.body.appendChild(oSpan);
		}
		var aSpan = document.body.children;
		var i = 0;
		var timer = null;
		clearInterval(timer);
		timer = setInterval(function(){
			move(aSpan[i],{opacity:1});
			i++;
			if(i == aSpan.length){
				clearInterval(timer);	
			}
		},200);				
};