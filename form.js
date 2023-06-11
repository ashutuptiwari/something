window.onload=function()
{
    var jsConfetti = new JSConfetti()
    jsConfetti.addConfetti();
    var button=document.getElementById("submit");
    button.onmousedown=function(){
        jsConfetti.addConfetti();
        setTimeout(()=>{window.location.href = "final.html";},3000)
        
    }
}
