// if field is filled we can save info
document.addEventListener("DOMContentLoaded", function() {
    var nameInput = document.getElementById("nameInput");
    var cityInput = document.getElementById("cityInput");
    var addressInput = document.getElementById("addressInput");

    var postIndexInput = document.getElementById("postIndexInput");

    var savedName = localStorage.getItem("name");
    var savedCity = localStorage.getItem("city");
    var savedAddress = localStorage.getItem("address");

    var savedPostIndex = localStorage.getItem("postIndex");

    if (savedName && savedCity && savedAddress && savedPostIndex) {
        nameInput.value = savedName;
        cityInput.value = savedCity;
        addressInput.value = savedAddress;
        postIndexInput.value = savedPostIndex;

        nameInput.readOnly = true;
        nameInput.style.backgroundColor = "lightgray";
        nameInput.style.border = "none";

        cityInput.readOnly = true;
        cityInput.style.backgroundColor = "lightgray";
        cityInput.style.border = "none";

        addressInput.readOnly = true;
        addressInput.style.backgroundColor = "lightgray";
        addressInput.style.border = "none";

        postIndexInput.readOnly = true;
        postIndexInput.style.backgroundColor = "lightgray";
        postIndexInput.style.border = "none";
    }
});

var editButton = document.getElementById("editButton");
var saveButton = document.getElementById("saveButton");
// function to edit fields
editButton.addEventListener("click", function() {
    event.preventDefault();

    var nameInput = document.getElementById("nameInput");
    var cityInput = document.getElementById("cityInput");
    var addressInput = document.getElementById("addressInput");
    var postIndexInput = document.getElementById("postIndexInput");

    nameInput.readOnly = false;
    nameInput.style.backgroundColor = "white";
    nameInput.style.border = "1px solid #ccc";

    cityInput.readOnly = false;
    cityInput.style.backgroundColor = "white";
    cityInput.style.border = "1px solid #ccc";

    addressInput.readOnly = false;
    addressInput.style.backgroundColor = "white";
    addressInput.style.border = "1px solid #ccc";

    postIndexInput.readOnly = false;
    postIndexInput.style.backgroundColor = "white";
    postIndexInput.style.border = "1px solid #ccc";
});

// saving data into localstorage
var form = document.getElementById("deliverySection");

form.addEventListener("submit", function(event) {


    if (!form.checkValidity()) {
        return;
    }

    event.preventDefault(); 

    var nameInput = document.getElementById("nameInput");
    var cityInput = document.getElementById("cityInput");
    var addressInput = document.getElementById("addressInput");
    var postIndexInput = document.getElementById("postIndexInput");

    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("city", cityInput.value);
    localStorage.setItem("address", addressInput.value);
    localStorage.setItem("postIndex", postIndexInput.value);

    [nameInput, cityInput, addressInput, postIndexInput].forEach(function(input) {
        input.readOnly = true;
        input.style.backgroundColor = "lightgray";
        input.style.border = "none";
    });

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

restrictInputCharacters("cityInput");
restrictInputCharacters("addressInput");
restrictInputCharacters("nameInput");
