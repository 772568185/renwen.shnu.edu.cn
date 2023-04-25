$(function(){
	
	/*新闻图片切换*/
	$(".post-11 .focus").sudyfocus({      
		p:11,      
		zWidth:620,      
		zHeight:359,  
		title:{        
			isAutoWidth: false,
			active:true      
		},  
		 text: {        
			 active: false,
			 isAutoHeight: false,   
			 href: false 
		},  
		response: true,     
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: true,
		href:true,
		effect: 'fade'
	});
	/*友情链接下拉*/
	$(".botlinks").each(function(index, el){
		$(el).find(".links-wrap").hover(function(){
			$(this).addClass('wrap-open').children('.link-items').stop(true,true).slideDown(300);
		},function(){
			$(this).removeClass('wrap-open').children('.link-items').stop(true,true).slideUp(100);
		});
	});


});

	if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7.") {
		alert("检测到您的浏览器内核版本过低，无法达到完美的浏览体验，请使用新版本浏览器浏览！");
	}
	else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.") {
		alert("检测到您的浏览器内核版本过低，无法达到完美的浏览体验，请使用新版本浏览器浏览！");
	}
	else if(navigator.appName == "Microsoft Internet Explorer") {
		alert("检测到您的浏览器内核版本过低，无法达到完美的浏览体验，请使用新版本浏览器浏览！");
	}
