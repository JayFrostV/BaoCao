document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab a");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
// jquery
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 600); 
        return false;
    });
});
