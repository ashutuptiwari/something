
window.onload = function()
{
    var jsConfetti = new JSConfetti()
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");

    // Use click for "Yes" — works on both desktop and mobile
    yes.addEventListener("click", function() {
        alert("yey it's a date <3");
        jsConfetti.addConfetti();
        console.log("yay i love you too");
        window.location.href = "form.html";
    });

    // Desktop: move "No" on hover
    no.onmouseover = function() {
        moveNoButton();
    }

    // Mobile: move "No" on touch START (before finger lifts)
    no.addEventListener("touchstart", function(e) {
        e.preventDefault(); // prevent the touch from bubbling to "Yes"
        moveNoButton();
    });

    function moveNoButton() {
        no.style.position = "absolute";
        yes.style.position = "absolute";
        var x1 = yes.style.left;
        var y1 = yes.style.top;
        yes.style.left = x1;
        yes.style.top = y1;
        var x = Math.random() * (window.innerWidth - 200);
        var y = Math.random() * (window.innerHeight - 200);
        console.log(x + "\n" + y);
        no.style.left = `${x}px`;
        no.style.top = `${y}px`;
    }
}