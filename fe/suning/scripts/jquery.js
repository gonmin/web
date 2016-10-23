$(function(){
	var $c = $(".url-box")
	$(".url").mouseover(function(){
		$(".url-control").addClass("url-control-hover");
		// if(!$c.is(":animated")){
		// 	$(".url-box").slideDown("fast");

		// }
		$c.show();
	})
	$(".url").mouseout(function(){
		$(".url-control").removeClass("url-control-hover");
		// if(!$c.is(":animated")){
		// 	$(".url-box").slideUp("fast");

		// }
		$c.hide();
	})
	$(".businessman").mouseover(function(){
		$(".enter").addClass("enter-hover");
		$(".businesser-box").show();
	});
	$(".businessman").mouseout(function(){
		$(".enter").removeClass("enter-hover");
		$(".businesser-box").hide();
	})
	$(".order").mouseover(function(){
		$(".my-order").addClass("my-order-hover");
		$(".order-list").show();
	});
	$(".order").mouseout(function(){
		$(".my-order").removeClass("my-order-hover");
		$(".order-list").hide();
	})
	$(".yigou").hover(function(){
		$(".my-yigou").addClass('h-cell-hover');
		$(".yigou-list").show();

	},function(){
		$(".my-yigou").removeClass('h-cell-hover');
		$(".yigou-list").hide();		
	});
	$(".mobile-suning").mouseover(function(){
		$(".m-suning").addClass('h-cell-hover');
		$('.mb-box').show();
	}).mouseout(function(){
		$(".m-suning").removeClass('h-cell-hover');
		$('.mb-box').hide();

	});
	$(".customer-service").mouseover(function(){
		$(".node-service").addClass('h-cell-hover');
		$('.service-list').show();
	}).mouseout(function(){
		$(".node-service").removeClass('h-cell-hover');
		$('.service-list').hide();
	})
	//ÂÖ²¥Í¼
	// $('.focus').animate({
	// 	// marginLeft: '-= 770px',
	// 	// backgroundColor: 'red'
	// 	bottom: '-=20px'
	// },2000);
	// 	alert('z');
	// function lunbo() {
	// 	var $ml = $('.focus').css('marginLeft');
	// 	console.log($ml);
	// 	$('.focus').css('marginLeft','function(index,value) {return parseFloat(value) - 1349}');
	// }
	// var t = setInterval(lunbo,2000);

	
	var n = 0;
	var $length = $('.focus li').length;
	function lbt() {
		n++;
		if (n==$length) {
			n = 0;
		}
		$('.focus').children().eq(n).show().siblings().hide();
		$('#focus_index').children().eq(n).addClass('active').siblings().removeClass('active');	
	}
	var timer = setInterval(lbt,3000);
	$('.focus-box').hover(function(){
		$('#focus-prev').show();
		$('#focus-next').show();
		clearInterval(timer);
	},function(){
		timer = setInterval(lbt,3000);
		$('#focus-prev').hide();
		$('#focus-next').hide();
	})
	$('#focus_index li').mouseover(function(){
		var p_index = $(this).text() - 1;
		n = p_index;
		$('.focus').children().eq(p_index).show().siblings().hide();
		$('#focus_index').children().eq(p_index).addClass('active').siblings().removeClass('active');	
	});
	$('#focus-prev').click(function(){
		n--;
		if (n<0) {
			n= $length-1;
		}
		$('.focus').children().eq(n).show().siblings().hide();
		$('#focus_index').children().eq(n).addClass('active').siblings().removeClass('active');
	})
	$('#focus-next').click(function(){
		n++;
		if (n==$length) {
			n = 0;
		}
		$('.focus').children().eq(n).show().siblings().hide();
		$('#focus_index').children().eq(n).addClass('active').siblings().removeClass('active');
	})
	

	/*ÉÌÆ··ÖÀàÕ¹¿ªÓëÊÕÆð*/
	$('.category-box .cate-cell').hover(function(){
		var $c_index = $(this).attr("data-index")	- 1;
		$('.c-cell-box').eq($c_index).show().siblings().hide();	
		$('.c-cell-box').parent().show();
	},function(){
		var $c_index = $(this).attr("data-index")	- 1;
		$('.c-cell-box').eq($c_index).hide();
		$('.c-cell-box').parent().hide();

	})
	$('.news-t a').mouseover(function(){
		var index = $(this).attr('data-tab')-1;
		$(this).find('i').show().parent().siblings().children().hide();
		$('.news-c').children().eq(index).show().siblings().hide()

	})

	/*focus app show*/
	$('.snyg').hover(function(){
		$('.snyg .app-box').show();
	},function(){
		$('.snyg .app-box').hide();
	})
	$('.app-list .yfb').hover(function(){
		$('.yfb .app-box').show();
	},function(){
		$('.yfb .app-box').hide();
	})
	$('.app-list .muying').hover(function(){
		$('.muying .app-box').show();
	},function(){
		$('.muying .app-box').hide();
	})
	$('.app-list .intelligent').hover(function(){
		$('.intelligent .app-box').show();
	},function(){
		$('.intelligent .app-box').hide();
	})
	/*activity²¿·Ö*/
	$('#acti_next').click(function(){
		if($('.activity-list').is(':animated')){
			return;
		}
		var act_left = parseInt($('.activity-list').css('left'));
		if (act_left == -2400){
			$('.activity-list').animate({left: '0px'},500);
		} else {
			$('.activity-list').animate({left: '-=1200px'},500);

		}

	})
	$('#acti_prev').click(function(){
		if($('.activity-list').is(':animated')){
			return;
		}
		var act_left = parseInt($('.activity-list').css('left'));
		if (act_left == 0){
			$('.activity-list').animate({left: '-2400px'},500);
		} else {
			$('.activity-list').animate({left: '+=1200px'},500);

		}

	});
	$('.activity .w').mouseover(function(){
		$('.activity-btn').show()
	}).mouseout(function(){
		$('.activity-btn').hide()

	})

	/*´óÅÆÊ¢Ñç*/
	$('.brands-right li').mouseover(function(){
		var index = $(this).attr('data-brand') - 1;
		$('.hover-tips').eq(index).show();
	}).mouseout(function(){
		var index = $(this).attr('data-brand') - 1;
		$('.hover-tips').eq(index).hide();		
	})
	/*·þ×°tabÇÐ»»*/
	$('.floor1 .floor-tab li').mouseover(function(){
		var index = $(this).attr('data-index') -1;
		$(this).children().show().parent().siblings().children().hide();
		$('.floor1 .f-tab-list').eq(index).show().siblings().hide();	
	})

	/*floorÂÖ²¥Í¼*/
	// var n = 0;
	// var $length = $('.focus li').length;
	// function test(element){
	// 	alert(element.length);
	// }
	// var elem = $('.businesser-box a');
	// test($('.businesser-box a'));

	function prev_click(tab_n,ele_num){
		tab_n--;
		if (tab_n<0) {
			tab_n = ele_num.length-1;
		}

	}
	function lbt_action(box,f_index,index,className){
		box.children().eq(index).show().siblings().hide();
		$(f_index).children().eq(index).addClass(className).siblings().removeClass(className);	
	}
	
	
	var t1_index = 0;
	var t_length = $('.c-ol li').length;
	function t_lbt(t1_index) {
		t1_index++;
		if (t1_index==t_length) {
			t1_index = 0;
		}
	}
	var t1_timer = setInterval(function(){
		// t_lbt(t1_index);
		t1_index++;
		if (t1_index == t_length) {
			t1_index = 0;

		}
		lbt_action($('.floor1 .tb-focus-img'),$('.c-ol'),t1_index,'on');
	},3000)
	$('.floor1 .f-tab-focus').hover(function(){
		$(this).find('.f-btn').show();
		clearInterval(t1_timer);
	},function(){
		$(this).find('.f-btn').hide();
		t1_timer = setInterval(function(){
			// t_lbt(t1_index);
		t1_index++;
		if (t1_index == t_length) {
			t1_index = 0;
		}
			lbt_action($('.floor1 .tb-focus-img'),$('.c-ol'),t1_index,'on');
		},3000);
	})

	$('.c-ol li').mouseover(function(){
		var index = $(this).attr('data-index') - 1;
		t1_index = index;
		lbt_action($('.floor1 .tb-focus-img'),$('.c-ol'),t1_index,'on');
	})
	$('.floor1 .pre-btn').click(function(){
		t1_index--;
		if (t1_index<0) {
			t1_index= t_length-1;
		}
		lbt_action($('.floor1 .tb-focus-img'),$('.c-ol'),t1_index,'on');
	})
	$('.floor1 .next-btn').click(function(){
		t1_index++;
		if (t1_index == t_length) {
			t1_index = 0;
		}
		lbt_action($('.floor1 .tb-focus-img'),$('.c-ol'),t1_index,'on');
	})

	/*f-tab-2*/
	var t2_index = 0;
	var t_length = $('.c-ol li').length;
	function t_lbt(t1_index) {
		t1_index++;
		if (t1_index==t_length) {
			t1_index = 0;
		}
	}
	var t2_timer = setInterval(function(){
		// t_lbt(t1_index);
		t2_index++;
		if (t2_index == t_length) {
			t2_index = 0;

		}
		lbt_action($('.floor2 .tb-focus-img'),$('.m-ol'),t2_index,'on');
	},3000)
	$('.floor2 .f-tab-focus').hover(function(){
		$(this).find('.f-btn').show();
		clearInterval(t2_timer);
	},function(){
		$(this).find('.f-btn').hide();

		t2_timer = setInterval(function(){
			// t_lbt(t1_index);
			t2_index++;
			if (t2_index == t_length) {
				t2_index = 0;
			}
				lbt_action($('.floor2 .tb-focus-img'),$('.m-ol'),t2_index,'on');
		},3000);
	})

	$('.m-ol li').mouseover(function(){
		var index = $(this).attr('data-index') - 1;
		t2_index = index;
		lbt_action($('.floor2 .tb-focus-img'),$('.m-ol'),t2_index,'on');
	})
	$('.floor2 .pre-btn').click(function(){
		t2_index--;
		if (t2_index<0) {
			t2_index= t_length-1;
		}
		lbt_action($('.floor2 .tb-focus-img'),$('.m-ol'),t2_index,'on');
	})
	$('.floor2 .next-btn').click(function(){
		t2_index++;
		if (t2_index == t_length) {
			t2_index = 0;
		}
		lbt_action($('.floor2 .tb-focus-img'),$('.m-ol'),t2_index,'on');
	})

	/*floor2 tab transform*/
	$('.floor2 .floor-tab li').mouseover(function(){
		var index = $(this).attr('data-index') -1;
		$(this).children().show().parent().siblings().children().hide();
		$('.floor2 .f-tab-list').eq(index).show().siblings().hide();	
	})

	/*side-fixed de shen luo*/
	// $('.side-news i').hover(function(){
	// 	$(this).next().addClass('hover');
	// 	$(this).next().animate({left: '-47px'});
	// },function(){
	// 	$(this).next().removeClass('hover');
	// 	$(this).next().animate({left: '0px'});
	// })
	// $('.sidebar .finance i').hover(function(){
		
	// 	$(this).next().addClass('hover');
	// 	$(this).next().animate({left: '-47px'});
	// },function(){
	
	// 	$(this).next().removeClass('hover');
	// 	$(this).next().animate({left: '0px'});
	// })

	$('.goto_top i').click(function(){
		$('html,body').animate({scrollTop:0});
	})
	/*get elment offsetTop*/
	
	$(window).scroll(function(){
		var top = document.body.scrollTop || document.documentElement.scrollTop;
		if (top>($('.floor1').offset().top-document.documentElement.clientHeight)){
			$('.floor-nav').show();
		} else {
			$('.floor-nav').hide();
		}
		changefloor(top);
	})
	
	$('.floor-nav li').click(function(){
		var fl_index = $(this).attr('data-go')-1;
		var f_top = $('.floor').eq(fl_index).offset().top-30;
		// alert($('.floor2').height());
		$('body').animate({scrollTop:f_top});
	})
	function changefloor(top){
		var tops = [];
		var floor = $('.floor');
		for (var i = 0; i < floor.length; i++) {
			tops.push(floor.eq(i).offset().top);
		}
		for (var i = 1; i < tops.length; i++) {
			var f_i = i;
			if (top>tops[i-1] && top<(tops[i]-150)) {
				$('.floor-nav li').removeClass('on');
				$('.floor-nav li').eq(i-1).addClass('on');
			}	else if(top>(tops[i]-150) && top<(tops[i])){
				$('.floor-nav li').removeClass('on');
				$('.floor-nav li').eq(i).addClass('on');
			}else if(top>(tops[tops.length-1])+$('.floor12').height()) {
				$('.floor-nav').hide();
			}
		}

	}
	$('#close_url').click(function(){
		$('.url-box').hide();
	})
	


})