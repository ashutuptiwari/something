window.onload=function()
{
    var jsConfetti = new JSConfetti()
    jsConfetti.addConfetti();
    document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("qEXEJx4R0VjzPPu8S");

    const form = document.getElementById("forms");

    form.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var where = document.getElementById("where").value;
    var when = document.getElementById("when").value;
    var idea = document.getElementById("idea").value;
    var thought = document.getElementById("thought").value;
    var emailParams = {
      name: name,
      where: where,
      when: when,
      idea: idea,
      thought: thought
    };

      emailjs.send("service_s2vn9rl", "template_v0qcqkw", data)
        .then(function(response) {
          console.log("SUCCESS!", response.status, response.text);
        }, function(error) {
          console.log("FAILED...", error);
        });

      form.reset();
    });
  });
}
