window.onload = function(){
  var navs =document.getElementById('tabNav').getElementsByTagName('a');
  var dds =document.getElementById('tabBox').getElementsByTagName('dd');
  for (var i=0; i<navs.length; i++){
    navs[i].id = i;
    navs[i].onclick = function(){
      
      for (var j=0; j<navs.length; j++){
        
        navs[j].className= "";
        dds[j].style.display = "none";
      }
      this.className = "hover";
      dds[this.id].style.display = "block";
    }
  } 
   var textBox = document.getElementById('textBox');
  function inputTips(inputs){
    var placeholder = inputs.getAttribute("placeholder") || "";
    inputs.onfocus = function(){
      if (this.value == placeholder){
        this.value = "";
        this.setAttribute("placeholder", "");
      }
      this.style.color = "#333";
      

    }
    inputs.onblur = function(){
      if (this.value == "") {
        this.value = placeholder;
        this.style.color = "#ccc";
      }
  
    }
  }
   inputTips(textBox);
  var spans =document.getElementById('commentsType').getElementsByTagName('span');
  for (var i=0; i<spans.length; i++){
    spans[i].onclick = function(){
      
      for (var j=0; j<spans.length; j++){
        spans[j].className = "";
      }
      this.className = "hover";
    }
  }

}