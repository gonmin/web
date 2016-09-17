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
      link_search.setAttribute("href","https://www.baidu.com/index.php?tn=monline_3_dg")
      engine_img.setAttribute("src","images/baidu_web.png");
    }
    labels[1].onclick = function(){
      if (labels[1].getElementsByTagName("input")[0].checked == "true") {
        return false;
      }

      link_search.setAttribute("href","https://www.google.com/")
      engine_img.setAttribute("src","images/google_web-444.png");
      // alert(1);
    }
    labels[2].onclick = function(){
      if (labels[2].getElementsByTagName("input")[0].checked == "true") {
        return false;
      }
      link_search.setAttribute("href","http://ai.taobao.com/?pid=mm_28347190_2425761_13466329")
      engine_img.setAttribute("src","images/taobao_shopping-446.png");
    }
  }

}