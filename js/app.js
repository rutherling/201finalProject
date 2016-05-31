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
    // construct and push object to array
    var newContact = new Contact(submitObject);
    contactArray.push(newContact);
  }
  //Write to DOM from contactArray
  labelMaker();
  window.location = 'details.html';
}

document.addEventListener('keydown', populateDemoContacts);

function populateDemoContacts(event) {
  console.log(event);
  if (event.code == 'Equal') {
    for (var i = 0; i < demoContacts.length; i++) {
      var newContact = new Contact(demoContacts[i]);
      contactArray.push(newContact);
    }
    console.log(contactArray);
    document.removeEventListener('keydown', populateDemoContacts);
  }
};
