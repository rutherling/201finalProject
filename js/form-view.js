document.getElementById('submitNew').addEventListener('click', addContactFromForm);

//Enters contact data from form and puts it in an array
function addContactFromForm(event) {
  event.preventDefault();
  var submitObject = {};
  var inputArray = event.target.form;
  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i].name != '' && inputArray[i].name != 'addContact') {
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
console.log(typeof(passedId));

// When this page is used as a contact editor, populate the current values
if (typeof(passedId) == 'number') {
  populateFormValues(passedId);
}

function populateFormValues(passedId) {
  var hiddenField = document.createElement('input');
  hiddenField.setAttribute('type','hidden');
  hiddenField.setAttribute('name','id');
  hiddenField.setAttribute('id','id');
  document.getElementById('theActualForm').appendChild(hiddenField);

  var currentContact = contactArray[lookup(passedId)];
  for (key in currentContact) {
    var currentField = document.getElementById(key);
    if (currentField) {
      currentField.value = currentContact[key];
    }
  }
}

function initializePostpone() {
  var hiddenField = document.createElement('input');
  hiddenField.setAttribute('type','hidden');
  hiddenField.setAttribute('name','postponeCount');
  hiddenField.setAttribute('id','postponeCount');
  hiddenField.setAttribute('value', 0);
  document.getElementById('theActualForm').appendChild(hiddenField);
}
initializePostpone();
