
if (!document.getElementsByClassName) {
    document.getElementsByClassName = function(className, element) {
        var children = (element || document).getElementsByTagName('*');
        var elements = new Array();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var classNames = child.className.split(' ');
            for (var j = 0; j < classNames.length; j++) {
                if (classNames[j] == className) {
                    elements.push(child);
                    break;
                }
            }
        }
        return elements;
    };
}



function startMove2(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;//假设所有值都到了目标点；
		for(var attr in json){
			var cur=0;
			if(attr=='opacity'){  //判读属性是不是透明度；
				cur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else{
				cur=parseInt(getStyle(obj,attr));//获取目标属性的当前值；
			}
			var speed=(json[attr]-cur)/15;//求出速度
			speed=speed>0?Math.ceil(speed):Math.floor(speed);//把速度变成整数
			if(cur!=json[attr]){bStop=false;}
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:)'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else{
				obj.style[attr]=cur+speed+'px';
			}
		}
		if(bStop){
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
		}
	},30);
}


function startMove(obj,json,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;// 假设所有的值都已经到了
		for(var attr in json)
		{var cur=0;
		if(attr=='opacity')
		{cur=Math.round(parseFloat(getStyle(obj, attr))*100);
		}
		else
		{cur=parseInt(getStyle(obj, attr));
		}
		 var speed=(json[attr]-cur)/15;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur!=json[attr])bStop=false;
			if(attr=='opacity')
			{obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{obj.style[attr]=cur+speed+'px';
			}
		}
			if(bStop){
			clearInterval(obj.timer);
			if(fnEnd)fnEnd();
			}
	}, 30);
}
function startMove1(obj,josn,fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json){
			var cur=0;
			if(attr="opacity"){cur=Math.round(parseFloat(getStyle(obj,attr))*100);}
			else{cur=parseInt(getStyle(obj,attr));}
			var speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur!=json[attr])bStop=false;
			if(attr=="opacity"){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else{obj.style[attr]=cur+speed+'px';}
		}
			if(bStop){
				clearInterval(obj.timer);
				if(fnEnd)fnEnd();
			}
	},30);
}




function addEv(obj,type,fn)
 {
	obj.attachEvent?obj.attachEvent('on'+type,function(){fn.call(obj);})
	:obj.addEventListener(type,fn,false);	 
 }





function getStyle(obj, name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj, false)[name];
	}
}
