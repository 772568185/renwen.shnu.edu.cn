$(function(){
	/*主大图切换*/
	$(".mbanner .focus").sudyfocus({      
		p:2,
		zWidth:1920,
		zHeight:509,
		title:{
			isAutoWidth: true,
			active:true
		},
		 text:{
			 active: false,
			 isAutoHeight: false,
			 href: false
		},
		response: true,
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: false,
		href:true,
		effect: 'fade'
	});
	/*新闻图片切换*/
	$(".post-11 .focus").sudyfocus({      
		p:11,      
		zWidth:320,      
		zHeight:180,  
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
		isNavHover: false,
		href:true,
		effect: 'fade'
	});
	
	/*新闻tab切换*/
	$(".post-31,.post-33").sudyTab({
		handle:".tit .title",
		content:".con .boxm,.more_btn .more_text",		
		trigger:"mouseenter",
		start:1,
		autoPlay:{
			active:false
		}
	});	
	
	var $box = $(".main .post-35").find(".boxm");
	$(".post-35").sudyTab({
		handle:".tit .title",
		content:".con .boxm,.more_btn .more_text",		
		trigger:"mouseenter",
		start:1,
		autoPlay:{
			active:false
		},
		callback:function(index){
$box.siblings().eq(index).find(".news_conbox").unslick();
			$box.eq(index).find(".news_list").slick({
				dots: false,
				infinite: true,
				autoplay:false,
				slide: 'li.news',
				slidesToShow:1,
				slidesToScroll:1,
				responsive: [
					{
						breakpoint: 1170,
						settings: {
							slide: 'li.news',
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: true
							
						}
					},
					{
					breakpoint: 999,
						settings: {
							slide: 'li',
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
					breakpoint: 600,
					settings: {
						slide: 'li',
						slidesToShow:1,
						slidesToScroll: 1
						}
					}
				]
		
			});	
		}	
		
		
		
	});	
	
	//superslide无缝滚动
	jQuery('.post-41').slide({
			mainCell: ".news_list",    //切换元素的包裹层对象
			autoPlay: true,     //是否自动运行
			effect: "leftMarquee",  //动画效果 支持fade, top, left, topLoop, leftLoop, topMarquee, leftMarquee, fold, slideDown等效果
			opp: false,  //使动画效果相反
			vis: 5,  //mainCell的可视范围个数，当实际内容个数少于可视个数的时候，不执行SuperSlide效果。
			interTime: 50,  //自动运行间隔
			mouseOverStop: true,  //鼠标触摸暂停滚动
			easing: 'swing'  //缓动效果，需引用jquery.easing.min.js
	});
	
	/*友情链接下拉*/
	$(".botlinks").each(function(index, el){
		$(el).find(".links-wrap").hover(function(){
			$(this).addClass('wrap-open').children('.link-items').stop(true,true).slideDown(300);
		},function(){
			$(this).removeClass('wrap-open').children('.link-items').stop(true,true).slideUp(100);
		});
	});
	
	/*专题链接*/
	$(".post-61 .list_links").hover(function() {
		$(this).siblings().find('.sub-menu').stop(true,true).slideUp(150)
		$(this).children('.sub-menu').stop(true,true).slideDown(200);
		$(this).addClass('hover');
	}, function() {
		$(this).children('.sub-menu').stop(true,true).slideUp(150);
		$(this).removeClass('hover');
    });
	
	$(".post-35 .box1 .more_img").on("click",function(){
		 layer.open({
			type: 2,
			title: '讲座报告',
			fix: false,
			shadeClose: true,
			maxmin: true,
			maxmin:false,
			area: ['340px', '286px'],
                        //offset: ['100px', '200px'],
			content: ['/_s3/_t774/xsxx/main.psp','no']
		 });
	});

	$(".post-35 .box2 .more_img").on("click",function(){
		 layer.open({
			type: 2,
			title: '活动演出',
			fix: false,
			shadeClose: true,
			maxmin: true,
			maxmin:false,
			area: ['340px', '286px'],
			content: ['/_s3/_t774/hdyc/main.psp','no']
		 });
	});

	
$("#wp_news_w35 .news,#wp_news_w36 .news").each(function(index,el){
	var $news_date = $(this).find(".news_date");
    var year = $news_date.data("year"),days = $news_date.data("days").substr(0,7);
	$(this).find(".news_year").text(year);
	$(this).find(".news_days").text(days);
});

});
