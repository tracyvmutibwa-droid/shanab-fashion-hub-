
const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");


menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const isOpen = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";
});
const navLinks = document.querySelectorAll("#navigation a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
