    // getting products from localstorage
    var savedProducts = localStorage.getItem("basketProducts");
    var products = savedProducts ? JSON.parse(savedProducts) : [];

    productElement = document.getElementById("products-count");
    var amount = 0;

    for (var i = 0; i < products.length; i++) {
            amount += 1;
            productElement.innerHTML = amount;
    };


// pop-out text
$(document).ready(function() {
  $('#myLink').click(function(e) {
    e.preventDefault();
    $('#message').fadeToggle(190);
  });
});



// function for redirect to url
const wordLinks = document.querySelectorAll("#myLink .word-link");
  for (let i = 0; i < wordLinks.length; i++) {
    wordLinks[i].addEventListener("click", function(e) {
      e.preventDefault();
      const url = this.getAttribute("data-url");
      if (url) {
        window.location.href = url;
      }
    });
  }



document.addEventListener("DOMContentLoaded", function() {
  restrictInputCharacters("search-input");
  restrictInputCharacters("search-input-copied");
});
// restrict some characters in input
function restrictInputCharacters(inputId) {
  var input = document.getElementById(inputId);

  input.addEventListener("input", function() {
    var value = input.value;
    value = value.replace(/[^A-Za-z0-9-\s]/g, "");
    input.value = value;
  });
}


// redirect to the url function
function redirectToURL(event) {
  var url = event.target.getAttribute('data-url');
  window.location.href = url;
}

// if user is logged in we have access to cabinet url
const cabinetImage = document.querySelector("img.cabinet");
if (cabinetImage) {
  cabinetImage.addEventListener("click", function(e) {
    e.preventDefault(); // Заборонити перехід за посиланням
    const url = this.getAttribute("data-url");
    if (url) {
      window.location.href = url;
    }
  });
}

// on click show/hide menu
document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  });

// function to redirect to link
const loginLink = document.querySelector(".a-menu1");
if (loginLink) {
  loginLink.addEventListener("click", function(e) {
    e.preventDefault();
    var url = this.getAttribute("data-url-login");
    if (url) {
      window.location.href = url;
    }
  });
}


const registerLink = document.querySelector(".a-menu3");
if (registerLink) {
  registerLink.addEventListener("click", function(e) {
    e.preventDefault();
    var url = this.getAttribute("data-url-register");
    if (url) {
      window.location.href = url;
    }
  });
}


const logoutLink = document.querySelector(".a-menu4");
if (logoutLink) {
  logoutLink.addEventListener("click", function(e) {
    e.preventDefault();
    var url = this.getAttribute("data-url-logout");
    if (url) {
      window.location.href = url;
    }
  });
}


const cabinetLink = document.querySelector(".a-menu5");
if (cabinetLink) {
  cabinetLink.addEventListener("click", function(e) {
    e.preventDefault();
    var url = this.getAttribute("data-url-cabinet");
    if (url) {
      window.location.href = url;
    }
  });
}

// onclick show contacts and change styles
const contactsTrigger = document.querySelector(".contacts-trigger");
const svgTrigger = document.querySelector(".svg-trigger");
const contactsInfo = document.querySelector(".contacts-info");
let isTransparent = false;

contactsTrigger.addEventListener("click", function() {
  if (contactsInfo.style.display === "none") {
    svgTrigger.style.transform = "translateY(2px)";
    contactsTrigger.style.color = "rgb(255, 60, 66)";
    contactsInfo.style.display = "block";

  } else {
    svgTrigger.style.transform = "translateY(0px)";
    contactsInfo.style.display = "none";
    contactsTrigger.style.opacity = 1;
    contactsTrigger.style.color = "white";
  }
});


const productsTrigger = document.querySelector(".products-trigger");
const message2 = document.querySelector("#message2");
// function to show products menu onclick
productsTrigger.addEventListener("click", function() {
  if (message2.style.display === "none") {
    productsTrigger.style.color = "rgb(255, 60, 66)";
    message2.style.display = "block";
  } else {
    message2.style.display = "none";
    productsTrigger.style.color = "white";
  }
});


// redirect to link on click
document.addEventListener('DOMContentLoaded', function() {

    var wordLinks2 = document.getElementsByClassName('word-link2');


    for (var i = 0; i < wordLinks2.length; i++) {
        wordLinks2[i].addEventListener('click', function() {

            var url = this.getAttribute('data-url2');


            window.location.href = url;
        });
    }
});



// redirect to link on click
const basketLink = document.querySelector(".basket-url");
if (basketLink) {
  basketLink.addEventListener("click", function(e) {
    e.preventDefault();
    var url = this.getAttribute("data-url-basket");
    if (url) {
      window.location.href = url;
    }
  });
}


    // getting products from localstorage
    var savedProducts = localStorage.getItem("basketProducts");
    var products = savedProducts ? JSON.parse(savedProducts) : [];

    productElement2 = document.querySelector(".count-items");
    var amount = 0;

    for (var i = 0; i < products.length; i++) {
            amount += 1;
            productElement2.innerHTML = amount;
    };

