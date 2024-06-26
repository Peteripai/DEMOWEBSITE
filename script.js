document.addEventListener("DOMContentLoaded", function() {
    var backToTop = document.getElementById("back-to-top");

    // Show or hide the button
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    // Scroll to the top smoothly
    backToTop.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});