
window.onload = function()
{
    var jsConfetti = new JSConfetti()
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    yes.onmousedown=function()
    {
        alert("yey it's a date <3");
        jsConfetti.addConfetti();
        console.log("yay i love you too");
        window.location.href = "form.html";
    }
    no.onmouseover=function()
    {
        no.style.position="absolute";
        yes.style.position="absolute";
        var x1=yes.style.left;
        var y1=yes.style.top;
        yes.style.left=x1;
        yes.style.top=y1;
        var x=Math.random()*(window.innerWidth-no.style.height-200);
        var y=Math.random()*(window.innerHeight-no.style.height-200);
        console.log(x+"\n"+y)
        no.style.left=`${x}px`;
        no.style.top=`${y}px`;
    }
    
}