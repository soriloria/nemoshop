
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


    var customAlertClose = document.getElementById("customAlertClose");
    customAlertClose.addEventListener("click", function () {
        customAlert.style.display = "none";
        location.reload();
    });


        var customAlertClose2 = document.getElementById("customAlertClose2");
    customAlertClose2.addEventListener("click", function () {
        customAlert2.style.display = "none";
    });


var addToBasketButton = document.getElementById("addToBasket");
addToBasketButton.addEventListener("click", function() {
  var product = {
    image: "/static/img/copybooks/copybook1.webp",
    title: "copybook in a cell",
    price: 0.9
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

  var addToBasketButton2 = document.getElementById("addToBasket2");
  addToBasketButton2.addEventListener("click", function() {
    var product = {
      image: "/static/img/copybooks/copybook2.webp",
      title: "A4 copybook in a cell",
      price: 1.2
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
      image: "/static/img/copybooks/copybook3.webp",
      title: "copybook in a line",
      price: 0.9
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
      image: "/static/img/copybooks/copybook4.webp",
      title: "A4 copybook in a line",
      price: 1.2
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