function toggleSubcategories(event, subcategoryId) {
    event.preventDefault();
    const subcategory = document.getElementById(subcategoryId);
    if (subcategory.style.display === "block") {
        subcategory.style.display = "none";
    } else {
        subcategory.style.display = "block";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".categories li");

    categories.forEach(category => {
        category.addEventListener("click", function() {
            const subcategories = this.querySelector(".subcategories");

            this.classList.toggle("active");

            if (subcategories.style.maxHeight) {
                subcategories.style.maxHeight = null;
            } else {
                subcategories.style.maxHeight = subcategories.scrollHeight + "px";
            }

            const subItems = subcategories.querySelectorAll("li");
            subItems.forEach(item => {
                setTimeout(() => {
                    item.style.opacity = (item.style.opacity === "1") ? "0" : "1";
                }, 100);
            });
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
