
$(function(){
	/*$('.tabs').tabs();*/
});

(function($){		
  $.fn.tabs = function(){	
    return $.each(this,function(index,item){
		var wrap = $(this),
		tab = wrap.children(".tabUl").children("li");
		wrap.find('.tabCont').not(':first').hide();
		tab.click(function(){
			var i = tab.index(this);
			tab.removeClass("active").eq(i).addClass("active");
			wrap.find(".tabCont").hide().eq(i).show()
		})		
	}); 	
  };  
})(jQuery);