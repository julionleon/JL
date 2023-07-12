
function toggleInputField() {
    var radioButton = document.getElementById("radio-button");
    var inputField = document.getElementById("input-field");

}


    if (radioButton.checked) {
      inputField.classList.add("show-input");
    } else {
      inputField.classList.remove("show-input");
    }

  function updateCustomerName() {
    var nameInput = document.getElementById("input-field");
    var customerName = document.getElementById("customer-name");
    customerName.textContent = nameInput.value;
  }
