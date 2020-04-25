// JavaScript Document

function getStyle(obj,name){
		if(obj.currentStyle){
			return obj.currentStyle[name];	
		}else{
			return getComputedStyle(obj,false)[name];	
		}
	}








	
	function isChild(oParent,obj){
		while(obj){
			if(obj==oParent)return true;
			obj=obj.parentNode;
				}
		return false;
	}
//window.onload=function()
//{
//		var oImg=document.getElementById('images');
//		var aImgs=oImg.children;
//		var oButn=document.getElementById('butn')
//		var aButs=oButn.children;
//        var LbTotal = document.getElementById('butn').children.length; // 3
//		var timer=null;
//		var timeout=null;
//		var aDetlay=300;
//		var car=5000;
//		var iNow=1;
//		var carous=null
//		carous=setInterval(function cars()
//		{
//			for(var i=0;i<aButs.length;i++)
//				{
//					aButs[i].className=''
//					aImgs[i].children[0].style.opacity='0';
//					aImgs[i].children[0].style.filter='alpha(opacity:0);'
//					aImgs[i].style.display='none'
//				}
//				aButs[iNow].className='active'
//				aImgs[iNow].style.display='block'
//				startMove(aImgs[iNow].children[0],'opacity',100)
//				iNow++
//				if(iNow>=LbTotal)
//				{
//					iNow=0
//				}
//				
//		},car)
//		
//		var s=0;
//		for(var i=0;i<aButs.length;i++)
//		{
//			aButs[i].index=i
//			aButs[i].children[0].onmouseover=function(ev)
//			{
//				var oEvent=ev || event;
//				var from=oEvent.fromElement || oEvent.relatedTarget;
//				var This=this;
//				
//				clearInterval(carous)
//				for(var i=0;i<aButs.length;i++)
//				{
//					aButs[i].className=''
//					
//					
//				}
//				this.parentNode.className='active'
//				
//				
//					if(isChild(this,from))return;
//				this.timeout=setTimeout(function()
//				{
//					for(var i=0;i<aButs.length;i++)
//				{
//					
//					aImgs[i].children[0].style.opacity='0';
//					aImgs[i].children[0].style.filter='alpha(opacity:0);'
//					aImgs[i].style.display='none'
//					
//				}
//				
//				aImgs[This.parentNode.index].style.display='block'
//				startMove(aImgs[This.parentNode.index].children[0],'opacity',100)
//				
//				},aDetlay)
//			
//			
//			}
//			aButs[i].children[0].onmouseout=function(ev)
//			{
//				clearTimeout(this.timeout)
//				var oEvent=ev || event;
//				var to=oEvent.toElement || oEvent.relatedTarget;
//				if(isChild(this,to))return;
//				iNow=this.parentNode.index+1
//				if(iNow>=LbTotal)
//					{
//						iNow=0
//					}
//					carous=setInterval(function cars()
//			{
//				for(var i=0;i<aButs.length;i++)
//					{
//						aButs[i].className=''
//						aImgs[i].children[0].style.opacity='0';
//						aImgs[i].children[0].style.filter='alpha(opacity:0);'
//					aImgs[i].style.display='none'
//						
//					}
//					aButs[iNow].className='active'
//					aImgs[iNow].style.display='block'
//					startMove(aImgs[iNow].children[0],'opacity',100)
//					iNow++
//					if(iNow>=LbTotal)
//					{
//						iNow=0
//					}
//					
//			},car)
//				
//				}
//		
//		
//		}
//		
//		
//		function startMove(obj,name,iTarget){
//		clearInterval(timer);
//		timer=setInterval(function(){
//			if(name=='opacity'){
//				var iCur=Math.round(parseFloat(getStyle(obj,name))*100);  //��ȡԪ��͸���ȳ���100
//			}else{
//				var iCur=parseInt(getStyle(obj,name));	
//			}
//																		//Ŀ��ֵ��ȥ��ȡֵ����20�����ٶ�
//			var iSpeed=(iTarget-iCur)/10;                  
//			iSpeed=iSpeed<0?Math.floor(iSpeed):Math.ceil(iSpeed);        //�������С��0����ȡ����������ȡ��
//			if(iCur==iTarget){												//���Ŀ��ֵ���ڻ�ȡֵֹͣ������
//				clearInterval(timer);
//			}else{
//				if(name=='opacity'){										//���������͸����
//					obj.style.opacity=(iCur+iSpeed)/100;
//					obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
//				}else{
//					obj.style[name]=iCur+iSpeed+'px';	
//				}
//			}
//		},30);
//	}
//		
//		
//}