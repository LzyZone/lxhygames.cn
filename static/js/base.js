// JavaScript Document

(function($,window){
	
	//��̬����
	var document = window.document;

	//ȫ�ֱ���
	var global = {
			docWidth:1000		//�ĵ��ܿ�
		};
	//���÷���
	var baseJS = {
		
			getCoords:function(event){	//��ȡ��굱ǰ���꣨��������ĵ���
				var scrollLeft = $(document).scrollLeft(),
					scrollTop = $(document).scrollTop(),
					left = event.clientX + scrollLeft,
					top =  event.clientY + scrollTop;
				
				return {x:left,y:top};
			},
			showScoreTip: function(event, offset){		//	������� help���û����� score; offset: ƫ����
				
				var pos = this.getCoords(event),
					offset = offset || {x: 0, y: 0},
					left,
					top,
					timer;
				left = pos.x + offset.x +'px';
				top = pos.y + offset.y +'px';
				
				clearTimeout(timer);
				$('body').append('<div class="scoreHelpTip"><p>���Ļ�����ɣ���ֵ����+���ͻ���</p></div>');
				$('.scoreHelpTip').css({position: 'absolute', left: left, top: top});
				
				timer = setTimeout(function(){
					$('.scoreHelpTip').remove();
				}, 2000);
				
			},
			
			tabNav:function($nav,$con){		//TabЧ��
				var len = $nav.length;
				$nav.each(function(i,ele){
					$(ele).on('click',function(){
						for(var j = 0; j<len; j++){
							$nav.eq(j).removeClass('on');
						}
						$(this).addClass('on');
						$con.eq(i).show().siblings().hide();
					});
				});
			},
			
			goToTop:function(){		//�ض�Ч��
				$(window).on('scroll resize',function(){
					var winW = $(window).width();
						winH = $(window).height(),
						scrollTop = $(document).scrollTop(),
						bottom = $('.footer').height();
					if(scrollTop >= winH){
						if(winW <= 1047){
							$('.goToTop').css({right:'10px', marginRight:0}).show();
						}else{
							$('.goToTop').css('bottom',bottom).show();	
						}
					}else{
						$('.goToTop').hide();
					}
				});
				
				$('.goToTop a').on('click', function(){
					var k = $(window).scrollTop()/1000;
					$('html, body').animate({scrollTop: 0}, 500);
					return false;
				});
			},
			setShadow:function(){
				var W = $(document).width();
				var H = $(document).height();
				$('.shadow').css({width:W,height:H});
			},
			
			setAlert:function(cls){
				var srollTop = $(document).scrollTop(),
					windowH = $(window).height(),
					currY = srollTop + windowH/2;
				$(cls).css({top:currY});
			},
			
			switcher:function(){
				$('.switch').on('click',function(){
					if($(this).hasClass('switch_on')){
						$(this).removeClass('switch_on').addClass('switch_off');
					}else{
						$(this).removeClass('switch_off').addClass('switch_on');
					}
						
				});
			},
			
			dialPhone:function(){
				$('.help a').on('click',function(){
					$('.dialPhone').show();
				});
				$('.dialPhone .cancel a').on('click',function(){
					$('.dialPhone').hide();
				});
			},
			
			turnPicA:function($container){		//�ֲ�ͼ - ���뵭��
				var pics = $container.find('.pics').children(),		//ͼƬ
					len = pics.length,	//ͼƬ����
					dotNav = $container.find('.dotNav'),
					dots = null,
					timer = null,
					index = 1;
				//��̬���� ��ť����
				htmlDot();
				//����
				play();
				function htmlDot(){
					var htmlDot = '<span class="on"></span>';
					for(var i = 1; i<len; i++){
						htmlDot += '<span></span>';
					}
					dotNav.html(htmlDot);
					dots = dotNav.find('span');
				}
				
				function play(){
					timer = setTimeout(function(){
						autoPlay();
						play();
					},3000);
				}
				
				function autoPlay(){
					dots.eq(index%len).addClass('on').siblings().removeClass('on');
					pics.eq(index%len).fadeIn(0).siblings().hide();
					index++;
				}
				
				dots.each(function(i, ele) {
					$(ele).on('click',function(){
						index = i;
						$(this).addClass('on').siblings().removeClass('on');
						pics.eq(index).fadeIn(0).siblings().hide();
					});
				});	
			},
			
			turnPicB:function($container){		//�ֲ�ͼ	- ���һ���
				var $picList = $container.find('.picList'),
					$pics = $picList.find('li'),
					w = $pics.width(),	//ͼƬ��
					len = $pics.length,	//ͼƬ����
					$dotNav = $container.find('.dotNav'),
					$dots = null,
					timer = null,
					index = 1;		
															
					if(len == 1){
						$picList.css({width:( len + 1 )*w});
						$dotNav.html('');
					}else{
						init();
					}
															
					function init(){
						
						setPic();
						htmlDot();
						dotNav();
						play();
					};
					
					function setPic(){
						$picList.css({width:( len + 1 )*w});
						$picList.find('li:first').clone().appendTo($picList);
					};
					
					//��̬���� ��ť����
					function htmlDot(){		
						var htmlDot = '<span class="on"></span>';
						for(var i = 1; i<len; i++){
							htmlDot += '<span></span>';
						}
						$dotNav.html(htmlDot);
						$dots = $dotNav.find('span');
					};
					
					//����
					function play(){
						timer = setTimeout(function(){	
							autoPlay();
							play();
						},3000);
					};
					
					//�Զ�����
					function autoPlay(){
						$picList.animate({left:-index*w},'fast',function(){
							if(index == len){
								$(this).css({left:0})
								index = 1;
							}else{
								index++;
							}
							$dots.eq(index-1).addClass('on').siblings().removeClass('on');
						});
					};
					
					//���л�
					function dotNav(){
						$dots.each(function(i,ele){
							$(ele).on('click',function(){
								if(!$picList.is(':animated')){
									$dots.eq(i).addClass('on').siblings().removeClass('on');
									$picList.animate({left:-i*w},'fast');
									index = i+1;
								}
							});
						});	
					};				
			},
			turnPicC:function($container){		//�ֲ�ͼ - ���Ҽ�ͷ ����
				var $parent = $container.find('.pics'), 
					$pics = $parent.children(),
					picW = $pics.outerWidth(true),
					len = $pics.length,			//ͼƬ����
					$prev = $container.find('.prev'),
					$next = $container.find('.next'),
					timer = null,
					time = 300;
				
				$parent.css({width:len*picW});
				
				if(len<=3){
					$parent.css({width:3*picW});
					return;
				}else{
					play();
				}
									
				function play(){
					timer = setTimeout(function(){	
						autoPlay();
						play();
					},3000);
				}
								
				function autoPlay(){
					$parent.stop().animate({marginLeft:-picW},time,function(){ 
						$('li',this).first().appendTo(this);
						$(this).css('marginLeft','0');
					});
				}	
				
				
				$prev.click(function(){
					if(!$parent.is(':animated')){		//�ж�Ԫ���Ƿ������ڶ���״̬
						clearTimeout(timer);
						
						$parent.find('li').last().prependTo($parent);
						$parent.css('marginLeft',-picW);
						$parent.animate({marginLeft:0},time,function(){
							play();	
						});	
							
					}
				})
				
				$next.click(function(){
					if(!$parent.is(':animated')){
						clearTimeout(timer);
						
						$parent.animate({marginLeft:-picW},time,function(){
							$('li',this).first().appendTo(this);
							$(this).css('marginLeft','0');			
						});
						
						play();	
							
					}
				})
			}			
		};	
	
	//��ģ��
	var ltModule = {
		
			init:function(){	//��ʼ��
				var _this = this;
				window['baseJS'] = baseJS;
				window['ltModule'] = ltModule;
				$(document).ready(function() {
                    _this.common();
					baseJS.goToTop();
                });
			},
			
			common: function(){	//����
				//����ͷ��
				$('.ltUserBaseInfo .avatar a').on('click',function(){
					baseJS.setShadow();
					$('body').append('<div class="shadow"></div>');
					baseJS.setShadow();
					baseJS.setAlert('.alert_setAvatar');
					$(window).resize(function(){
						baseJS.setShadow();
						baseJS.setAlert('.alert_setAvatar');
					});
					$('.shadow,.alert_setAvatar').show();
					$('.alert_setAvatar .close').on('click',function(){
						$('.shadow,.alert_setAvatar').hide();
					});
				});
				
				$('.alert_setAvatar .close').on('click',function(){
					$('.shadow').remove();
				});
				
				//���
				$('.ltUserBaseInfo .ltIconCup').on('click', function(event){
					baseJS.showScoreTip(event, {x: -30, y: 3});
				});
				
				
				/*�����˵�*/
				$('.select').on('click',function(){	
					//e.stopPropagation();
					var flag = $('ul',this).is(':visible');
					var _this = this;
					
					if(flag){
						$('ul',this).hide(); 
					}else{
						$('ul',this).show(); 
						setTimeout(function(){
							$(document).one('click',function(e){		
								if(e.currentTarget != _this){	
									$('ul',_this).hide(); 
								}
							});	
						},0);
						/*$(document).one('click',function(e){		
							if(e.currentTarget != _this){	
								$('ul',_this).hide(); 
							}
						});*/
					}
										
				}).find('li').on('click',function(){
					var txt = $(this).html();
					$(this).parents('.select').find('.selected').html(txt);
				});
				
			},
			index:{		//��ҳ
				main:function(){
					this.tab();
					baseJS.turnPicA($('.ltbanner .wrap'));
				},
				tab:function(){		//tab�л�
					$('.ltMTabA span').each(function(i, ele) {
						$(ele).on('click',function(){				
							var _this = $(this);
							var clsName  = _this.find('a').attr('class');
							
							_this.addClass('on').siblings().removeClass('on');
							$('.tabList .tabCon>div').eq(i).show().siblings().hide();
							
							/*��Ϸ���and��Χ��Ʒ*/
							if(clsName == 'product'){
								_this.nextAll('.more').hide();
								_this.nextAll('.linkTmall').show();
							}
								
							if(clsName == 'gift'){ 
								_this.nextAll('.more').show();
								_this.nextAll('.linkTmall').hide();
							}								
						});
					});
				}
			},
				
			newsList:{		//�����б�
				main:function(){
					baseJS.turnPicB($('.ltNewsTop .container'));
					baseJS.tabNav($('.tabList .container span'),$('.tabList .listCon>div'));
				}
			},
			
			mall:{		//�̳���ҳ
			
				main:function(){
					baseJS.turnPicC($('.ltMallPicShow')); 
				},
				
				giftDetail:function(){
					
					$('.giftInfo .help').on('click',function(event){
						baseJS.showScoreTip(event, {x: 3, y: 3});
					});
					
				}
				
			},
				
			reg:{		//ע��
				main:function(){
					baseJS.tabNav($('.regLeft a'),$('.regRight>div'));
					baseJS.dialPhone();
					$('.realNameAuthen .help').on('click',function(){
						var $content = $(this).next('.content'),
							isVisible= $content.is(':visible');
						if(!isVisible){
							$content.fadeIn();
							setTimeout(function(){
								$(document).one('click',function(){
									$content.fadeOut();
								});
							},0);
						}
						
					});
				}
			},
			
			userCenter:{		//�û�����
				main:function(){
					
					baseJS.setShadow();
					
					$(window).resize(function(){
						baseJS.setShadow();
					});
					
					$('.shadow,.alertA').show();
					$('.alertA .close').on('click',function(){
						$('.shadow,.alertA').hide();
					});
				}
			},
			
			record:{		//��¼
			
				main:function(){
					baseJS.tabNav($('.recordTitle a'),$('.recordMain>div'));
				}
			
			},
			
			account:{	//�˺�
				
				safeWX:function(){			//��΢��
					$('.safeWX .btn').on('click',function(){
						if(this.id == 'scorewechat') { return; }
						baseJS.setShadow();
						$('.shadow,.alertWX').show();
					});
					
					$('.alertWX .close').on('click',function(){
						$('.shadow,.alertWX').hide();
					});
				},
				
				personalSet:function(){		//��������
					baseJS.tabNav($('.tabTitle span'),$('.tabMain>div'));
					baseJS.switcher();
					$('.tab3 .switch').off('click');
				}
				
			}
	};
	
	//��ģ���ʼ��
	ltModule.init();	
		
			
})(jQuery,window);