// function to show description
function toggleDescription(element) {
  var description = document.getElementById("description");
  var arrowIcon = document.getElementById("arrow-icon");

  if (description.classList.contains("hidden")) {
    description.classList.remove("hidden");
    setTimeout(function() {
      description.style.opacity = "1";
    }, 100);
  } else {
    description.style.opacity = "0";
    setTimeout(function() {
      description.classList.add("hidden");
    }, 300);
  }

  element.classList.toggle("transparent");
  arrowIcon.classList.toggle("moved-down");
}

function toggleDescription1(element) {
  var description = document.getElementById("description1");
  var arrowIcon = document.getElementById("arrow-icon1");

  if (description.classList.contains("hidden")) {
    description.classList.remove("hidden");
    setTimeout(function() {
      description.style.opacity = "1";
    }, 100);
  } else {
    description.style.opacity = "0";
    setTimeout(function() {
      description.classList.add("hidden");
    }, 300);
  }

  element.classList.toggle("transparent");
  arrowIcon.classList.toggle("moved-down");
}
function toggleDescription2(element) {
  var description = document.getElementById("description2");
  var arrowIcon = document.getElementById("arrow-icon2");

  if (description.classList.contains("hidden")) {
    description.classList.remove("hidden");
    setTimeout(function() {
      description.style.opacity = "1";
    }, 100);
  } else {
    description.style.opacity = "0";
    setTimeout(function() {
      description.classList.add("hidden");
    }, 300);
  }

  element.classList.toggle("transparent");
  arrowIcon.classList.toggle("moved-down");
}
function toggleDescription3(element) {
  var description = document.getElementById("description3");
  var arrowIcon = document.getElementById("arrow-icon3");

  if (description.classList.contains("hidden")) {
    description.classList.remove("hidden");
    setTimeout(function() {
      description.style.opacity = "1";
    }, 100);
  } else {
    description.style.opacity = "0";
    setTimeout(function() {
      description.classList.add("hidden");
    }, 300);
  }

  element.classList.toggle("transparent");
  arrowIcon.classList.toggle("moved-down");
}

// close window (alert)
    var customAlertClose = document.getElementById("customAlertClose");
    customAlertClose.addEventListener("click", function () {
        customAlert.style.display = "none";
        location.reload();
    });

// close window (alert)
        var customAlertClose2 = document.getElementById("customAlertClose2");
    customAlertClose2.addEventListener("click", function () {
        customAlert2.style.display = "none";
    });


// adding product into basket
var addToBasketButton = document.getElementById("addToBasket");
addToBasketButton.addEventListener("click", function() {
  var product = {
    image: "/static/img/backpacks/backpack1.webp",
    title: "city backpack",
    price: 15
  };

  // getting list of products in local storage
  var savedProducts = localStorage.getItem("basketProducts");
  var products = savedProducts ? JSON.parse(savedProducts) : [];

  // check if product is already in basket
  var isProductInBasket = false;
  for (var i = 0; i < products.length; i++) {
    if (products[i].title === product.title) {
      isProductInBasket = true;
      break;
    }
  }

  // if it is show this
  if (isProductInBasket) {
    customAlert2.style.display = "block";
  } else {
    // adding product to basket
    products.push(product);

    // saving changes
    localStorage.setItem("basketProducts", JSON.stringify(products));

    // alert with info
    customAlert.style.display = "block";
  }
});

  var addToBasketButton2 = document.getElementById("addToBasket2");
  addToBasketButton2.addEventListener("click", function() {
    var product = {
      image: "/static/img/backpacks/backpack4.jpg",
      title: "backpack for kids",
      price: 18
    };

  var savedProducts = localStorage.getItem("basketProducts");
  var products = savedProducts ? JSON.parse(savedProducts) : [];

  var isProductInBasket = false;
  for (var i = 0; i < products.length; i++) {
    if (products[i].title === product.title) {
      isProductInBasket = true;
      break;
    }
  }

  if (isProductInBasket) {
    customAlert2.style.display = "block";
  } else {
    products.push(product);

    localStorage.setItem("basketProducts", JSON.stringify(products));

    customAlert.style.display = "block";
  }
});


  var addToBasketButton3 = document.getElementById("addToBasket3");
  addToBasketButton3.addEventListener("click", function() {
    var product = {
      image: "/static/img/backpacks/backpack2.webp",
      title: "tactical backpack",
      price: 20
    };

  var savedProducts = localStorage.getItem("basketProducts");
  var products = savedProducts ? JSON.parse(savedProducts) : [];

  var isProductInBasket = false;
  for (var i = 0; i < products.length; i++) {
    if (products[i].title === product.title) {
      isProductInBasket = true;
      break;
    }
  }

  if (isProductInBasket) {
    customAlert2.style.display = "block";
  } else {
    products.push(product);

    localStorage.setItem("basketProducts", JSON.stringify(products));

    customAlert.style.display = "block";
  }
});

  var addToBasketButton4 = document.getElementById("addToBasket4");
  addToBasketButton4.addEventListener("click", function() {
    var product = {
      image: "/static/img/backpacks/backpack3.webp",
      title: "school backpack",
      price: 12
    };

  var savedProducts = localStorage.getItem("basketProducts");
  var products = savedProducts ? JSON.parse(savedProducts) : [];

  var isProductInBasket = false;
  for (var i = 0; i < products.length; i++) {
    if (products[i].title === product.title) {
      isProductInBasket = true;
      break;
    }
  }

  if (isProductInBasket) {
    customAlert2.style.display = "block";
  } else {
    products.push(product);

    localStorage.setItem("basketProducts", JSON.stringify(products));

    customAlert.style.display = "block";
  }
});