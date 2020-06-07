// Grab HTML DOM element where the address list data will be displayed
let addressListContainer = document.getElementById("addressList");

// Grab the submit button and add an event listener when clicked
document.getElementById("saveEntry").addEventListener("click", (clickEvent) => {

  // Grab the data from full name input field
  let fullNameInput = document.getElementById("fullName").value;
  // Grab the data from the address input field
  let addressInput = document.getElementById("address").value;

  // Check if both name and address fields have values, if so insert values in DOM, otherwise display alert
  if (fullNameInput !== "" && addressInput !== "") {

    // Place input data into HTML DOM element to be displayed 
    addressListContainer.innerHTML += `
      <section class="contact">
        <h3 class="contact__name">${fullNameInput}</h3>
        <div class="contact__address">${addressInput}</div>
      </section>
    `
  } else {
      alert("A valid name and address is required.")
  }

  // Reset form input fields
  document.getElementById("contactForm").reset();
  // Set focus back to full name input field
  document.getElementById("fullName").focus();
})
