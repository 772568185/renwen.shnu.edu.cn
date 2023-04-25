$(function(){
	$(".search-submit").click(function(event){
		$(this).removeAttr("name");
		event.preventDefault();
		var val = $.trim($(".search-title").val());
		if(val!==""){
			$(".wp-search").find("form").submit();
		}else{
			alert("请输入关键词");
		}
		return false;
	});
	
	/*导航*/
	$.fn.sudyNav = function(){};
	$(".wp-menu li").hover(function() {
		$(this).siblings().find('.sub-menu').stop(true,true).slideUp(150)
		$(this).children('.sub-menu').stop(true,true).slideDown(200);
		$(this).addClass('hover');
	}, function() {
		$(this).children('.sub-menu').stop(true,true).slideUp(150);
		$(this).removeClass('hover');
    });
	
	$(".wp-menu li").each(function(){
		$(this).children(".menu-switch-arrow").appendTo($(this).children(".menu-link"));
	});
	

});
$(function(){
	if( !('placeholder' in document.createElement('input')) ){
	  $('input[placeholder],textarea[placeholder]').each(function(){
		  var that = $(this),
		  text= that.attr('placeholder');
		  // console.log(text);
		  if(that.val()===""){
			  that.val(text).addClass('placeholder');
		  }
		  that.focus(function(){
			  if(that.val()===text){
				  that.val("").removeClass('placeholder');
			  }
		  }).blur(function(){
			  if(that.val()===""){
				  that.val(text).addClass('placeholder');
			  }
		  }).closest('form').submit(function(){
			  if(that.val() === text){
			  that.val('');
			  }
		  });
	  });
	}
	});