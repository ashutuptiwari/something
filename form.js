window.onload=function()
{
    var jsConfetti = new JSConfetti()
    jsConfetti.addConfetti();
    document.addEventListener("DOMContentLoaded", function() {
    var but=document.getElementById("form") 
    but.onmousedown()=function(){
    
    var name = document.getElementById("name").value;
    var where = document.getElementById("where").value;
    var when = document.getElementById("when").value;
    var idea = document.getElementById("idea").value;
    var thought = document.getElementById("thought").value;
    emailjs.init("qEXEJx4R0VjzPPu8S");
    var emailParams = {
      name: name,
      where: where,
      when: when,
      idea: idea,
      thought: thought
    };
    emailjs.send("service_ktsg0pk", "template_v0qcqkw", emailParams)
  };
});

}