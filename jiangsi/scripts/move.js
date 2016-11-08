
$(document).ready(function(){
	$imgs = $('#box').find('img');
	$('.start').click(function(){
		game();
	})
	function game(){
		$imgs.each(function(n){
			var timer;
			var node = $(this);
			timer = setInterval(move,200);
			node.mouseover(function(){
				node.css("left",0);
			})
			var sc_width = document.documentElement.clientWidth;
			if (node.css("left")>1300){
				alert('你输了游戏结束');
			}
			console.log(node.position().left);
			function move(){
				node.css("left",function(index,value){
					return parseInt(value) + random(50);
				})
			// console.log(node.position().left);
				if (node.position().left>sc_width-55){
					alert('你输了，游戏结束');
					stop();
					$imgs.css("left",0);
					window.location.href="index.html";
				}

			}
			function stop(){
				$imgs.each(function(){
					clearInterval(timer);
				})

			}		
		})
	}
	
  function random(x) { return Math.random() * x };
  

})