document.getElementById('completeBtn').addEventListener('click', completeAction);
document.getElementById('postponeBtn').addEventListener('click', testing);
document.getElementById('editBtn').addEventListener('click', redirectToEdit);
document.getElementById('removeBtn').addEventListener('click', testing);

function testing(event) {
  console.log(event);
}

var passedId = urlObject(window.url).parameters.id;

populateDetails();

function populateDetails() {
  var currentContact = contactArray[lookup(passedId)];
  for (key in currentContact) {
    var domElement = document.getElementById(key);
    if (currentContact[key] && domElement) {
      if (typeof(currentContact[key]) == 'object') {
        // Dates just show up as "objects"
        domElement.innerText = currentContact[key].toDateString();
      } else {
        domElement.innerText = currentContact[key];
      }
    }
  }
  document.getElementById('name').innerText = currentContact.firstName + ' ' + currentContact.lastName;
}

function redirectToEdit() {
  window.location = 'form.html?id=' + passedId;
}

function completeAction() {
  var currentContact = lookup(passedId);
  console.log(currentContact);
  contactArray[currentContact].reset();
  window.location.reload(true);
}
