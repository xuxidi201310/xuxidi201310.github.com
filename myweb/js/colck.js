// JavaScript Document
window.onload=function(){
		var oClock=document.querySelector('.clock');
		var oH=document.querySelector('.hou');	
		var oM=document.querySelector('.min');	
		var oS=document.querySelector('.sec');
		//生成60个span
		var n=60;
		for(var i=0;i<n;i++){
		var  oSpan=document.createElement('span');
		oSpan.style.WebkitTransform='rotate('+i*6+'deg)';
			oClock.appendChild(oSpan);
			if(i%5==0){
				oSpan.className='big';
				
				oSpan.innerHTML='<em>'+(i/5||12)+'<\/em>' ;	
				var oEm=oSpan.children[0];
				oEm.style.WebkitTransform='rotate('+-i*6+'deg)';
			}		
		}
		function tick(){
			var oDate=new Date;
			var h=oDate.getHours();
			var m=oDate.getMinutes();
			var s=oDate.getSeconds();
			oH.style.WebkitTransform='rotate('+(h*30+m/60*30)+'deg)';	
			oM.style.WebkitTransform='rotate('+(m*6+s/60*6)+'deg)';
			oS.style.WebkitTransform='rotate('+s*6+'deg)';
		}
		tick();
		setInterval(tick,30);
		

	};