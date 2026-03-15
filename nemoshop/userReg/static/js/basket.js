    // getting list of items
    var savedProducts = localStorage.getItem("basketProducts");
    var products = savedProducts ? JSON.parse(savedProducts) : [];

    var productsContainer = document.getElementById("productsContainer");

    // elements for keep price values
    var productQuantities = {};
    var productTotalPrices = {};

    // for each product creating html element
products.forEach(function (product) {
    var productElement = document.createElement("div");
    var quantity = product.quantity || 1;
    var totalPrice = product.price * quantity;

    productElement.innerHTML = "<h3>" + product.title + "</h3>" +
        "<div class='image-container'><img src='" + product.image + "' class='product-image'></div>" +
        "<div><span>Amount:</span>" +
        "<button class='minus-button' onclick='updateQuantity(\"" + product.title + "\", -1)'>-</button>" +
        "<input onkeydown='return false' onwheel='event.preventDefault()' type='number' min='1' value='" + quantity + "' id='quantityInput_" + product.title + "'>" +
        "<button class='plus-button' onclick='updateQuantity(\"" + product.title + "\", 1)'>+</button></div>" +
        "<p><span id='totalPrice_" + product.title + "'>" + totalPrice.toFixed(2) + "</span>$</p>" +
        "<button class='remove-button' onclick='removeProduct(\"" + product.title + "\")'>Remove</button>";

    productsContainer.appendChild(productElement);


    productTotalPrices[product.title] = totalPrice;
});


// remove product
function removeProduct(title) {
    var index = products.findIndex(function (product) {
        return product.title === title;
    });

    if (index !== -1) {
        products.splice(index, 1);
        localStorage.setItem("basketProducts", JSON.stringify(products));
        location.reload();
    }
}


    // html element with totalSum
    var totalSumElement = document.createElement("div");
    totalSumElement.id = "totalSum";
    document.body.appendChild(totalSumElement);

    // update totalSum
    function updateTotalSum() {
        var totalSum = 0;
        for (var title in productTotalPrices) {
            var totalPrice = productTotalPrices[title];
            totalSum += totalPrice;
        }

        var totalSumElement = document.getElementById("totalSum");
        totalSumElement.textContent = "Total price: " + totalSum.toFixed(2) + "$";
        localStorage.setItem("totalSumValue", totalSum.toFixed(2));

        var totalPriceInput = document.getElementById("totalPriceInput");
        totalPriceInput.value = totalSum.toFixed(2);
    }

    updateTotalSum();



    var myDiv = document.getElementById("productsContainer");
    var clearButton2 = document.getElementById("payButton")
    var clearTotalSum = document.getElementById("totalSum");
// if page is clear showing info that Basket is empty
    if (myDiv.innerHTML.trim() === "") {
        myDiv.innerHTML = "Basket is empty";
        myDiv.style.fontSize = "26px";
        myDiv.style.color = "gray";
        myDiv.style.display = "block";
        myDiv.style.marginLeft = "auto";
        myDiv.style.marginRight = "auto";
        myDiv.style.marginTop = "230px";
        myDiv.style.textAlign = "center";
        clearButton2.style.display = "none";
        clearTotalSum.style.display = "none";
    }


    var payButton = document.getElementById("payButton");
    var customAlert = document.getElementById("customAlert");
    var customAlertClose = document.getElementById("customAlertClose");
    var cancelButton = document.getElementById("cancelButton");

payButton.addEventListener("click", function (event) {
    event.preventDefault();
    var totalSum = parseFloat(localStorage.getItem("totalSumValue"));
    var customAlertPay = document.getElementById("customAlertpay");

    if (totalSum < 5) {
        customAlertPay.style.display = "block";
    } else {

        customAlert.style.display = "block";


        var errorMessages = document.getElementsByClassName("error-message");
        for (var i = 0; i < errorMessages.length; i++) {
            errorMessages[i].textContent = "";
        }
    }
});

    cancelButton.addEventListener("click", function () {
        event.preventDefault();
        customAlert.style.display = "none";
    });

// if all fields are filled then we can submit the form
    customAlertClose.addEventListener("click", function () {
        // Check if all fields are filled
        var cityInput = document.getElementById("cityInput");
        var addressInput = document.getElementById("addressInput");
        var postIndexInput = document.getElementById("postIndexInput");

        var cityError = document.getElementById("cityError");
        var addressError = document.getElementById("addressError");
        var postIndexError = document.getElementById("postIndexError");

        var isValid = true;

        if (cityInput.value === "") {
            isValid = false;
        }

        if (addressInput.value === "") {
            isValid = false;
        }

        if (postIndexInput.value === "") {
            isValid = false;
        }

        if (isValid) {
            // Close the custom alert
            customAlert.style.display = "none";

            // Submit the form
            event.target.closest("form").submit();
        }
    });


// restricting some characters in input
function restrictInputCharacters(inputId) {
  var input = document.getElementById(inputId);

  input.addEventListener("input", function() {
    var value = input.value;
    value = value.replace(/[^A-Za-z0-9-\s]/g, "");
    input.value = value;
  });
}

restrictInputCharacters("cityInput");
restrictInputCharacters("addressInput");


// filling up inputs with values from cabinet
document.addEventListener("DOMContentLoaded", function() {
  const imageCabinet = document.querySelector("#imageCabinet");
  if (imageCabinet) {
    const cityInput = document.querySelector("#cityInput");
    const addressInput = document.querySelector("#addressInput");
    const postIndexInput = document.querySelector("#postIndexInput");

    const city = localStorage.getItem("city");
    const address = localStorage.getItem("address");

    const postIndex = localStorage.getItem("postIndex");

    if (city) {
      cityInput.value = city;
    }

    if (address) {
      addressInput.value = address;
    }

    if (postIndex) {
      postIndexInput.value = postIndex;
    }
  }
});


function updateQuantity(title, change) {
  var product = products.find(function (prod) {
    return prod.title === title;
  });

  if (!product) return;

  product.quantity = (product.quantity || 1) + change;
  product.quantity = Math.max(product.quantity, 1);

  localStorage.setItem("basketProducts", JSON.stringify(products));

  var quantityInput = document.getElementById("quantityInput_" + title);
  quantityInput.value = product.quantity;

  updatePrice(title);
}


// function to update total price
function updatePrice(title) {
  var product = products.find(function (prod) {
    return prod.title === title;
  });

  if (!product) return;

  var quantity = product.quantity || 1;

  var totalPriceElement = document.getElementById("totalPrice_" + title);
  var totalPrice = product.price * quantity;

  totalPriceElement.textContent = totalPrice.toFixed(2);
  productTotalPrices[title] = totalPrice;

  localStorage.setItem("basketProducts", JSON.stringify(products));

  updateTotalSum();
}



   var customAlertpayClose = document.getElementById("customAlertpayClose");
    customAlertpayClose.addEventListener("click", function () {
        customAlertpay.style.display = "none";
    });
