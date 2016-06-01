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

populateFormValues(passedId);

function populateFormValues(passedId) {
  var currentContact = contact(passedId);
  document.getElementById('firstName').value = currentContact.firstName;
  document.getElementById('lastName').value = currentContact.lastName;
  document.getElementById('email').value = currentContact.email;
  document.getElementById('phone').value = currentContact.phone;
  document.getElementById('reachOut').value = currentContact.reachOut;
  document.getElementById('topic').value = currentContact.topic;
  // document.getElementById('contactPhoto').value = currentContact.contactPhoto;
}
