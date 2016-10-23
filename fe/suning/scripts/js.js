
window.onload = function () {
	// var url = document.getElementById('url');
	// var url_control = document.getElementById('url_control');
	// var url_box = document.getElementById('url_box');
	// url.onmouseover = function(){
	// 	url_control.className = "url-control url-control-hover";
	// 	url_box.style.display = "block";
	// }
	// url.onmouseout = function(){
	// 	url_control.className = "url-control";
	// 	url_box.style.display = "none";
	// }
	function get_top (element) {
		var offset_top = element.offsetTop;
		var parent = element.offsetParent;
		while(parent!= null) {
			offset_top += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return offset_top;
	}
	var brands = document.getElementById('brands');
	var b_top = get_top(brands);
	// alert(b_top);
}
