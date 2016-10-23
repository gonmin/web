window.onload = function(){
  var searchform = document.getElementById("searchform");
  var engine_img = document.getElementById("engine_img");
  var link_search = document.getElementById("link_search");
  var labels = searchform.getElementsByTagName("label");
  var fieldset2 = searchform.getElementsByTagName('fieldset')[1];
  var inputs = fieldset2.getElementsByTagName("input");
  

  for (var i=0; i<labels.length; i++) {
    labels[0].onclick = function(){
      if (labels[0].getElementsByTagName("input")[0].checked == "true") {
        return false;
      }
      engine_img.setAttribute("src","images/baidu_web.png");
    }
    labels[1].onclick = function(){
      if (labels[1].getElementsByTagName("input")[0].checked == "true") {
        return false;
      }
      engine_img.setAttribute("src","images/google_web-444.png");
      // alert(1);
    }
    labels[2].onclick = function(){
      if (labels[2].getElementsByTagName("input")[0].checked == "true") {
        return false;
      }
      engine_img.setAttribute("src","images/taobao_shopping-446.png");
    }
  }

}