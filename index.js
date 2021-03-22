const navbar = document.getElementById("myTopnav");

navbar.addEventListener("click", () => {
    (navbar.className === "topnav") ? navbar.className += " responsive" : navbar.className = "topnav";
})

