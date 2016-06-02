document.getElementById('submitNew').addEventListener('click', addContactFromForm);

//Enters contact data from form and puts it in an array
function addContactFromForm(event) {
  event.preventDefault();
  var submitObject = {};
  var inputArray = event.target.form;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].name != '' && inputArray[i].value != '') {
      // event.target[i].name // field name
      // event.target[i].value // input value
      submitObject[inputArray[i].name] = inputArray[i].value;
    }
  }
  // Validate that new objects confirming they have at least a firstname or lastname
  //  AND a phone or email.
  if ( (submitObject.firstName != '' || submitObject.lastName != '') &&
       (submitObject.phone != '' || submitObject.email != '') ) {
    addContact(submitObject);
  }
}

// Demo of how we will get the properties in the URL
// console.log(urlObject(window.url));

var passedId = urlObject(window.url).parameters.id;

// When this page is used as a contact editor, populate the current values
if (passedId) {
  populateFormValues(passedId);
}

function populateFormValues(passedId) {
  var currentContact = contactArray[contact(passedId)];
  for (key in currentContact) {
    if (currentContact[key]) {
      document.getElementById(key).value = currentContact[key];
    }
  }
}
