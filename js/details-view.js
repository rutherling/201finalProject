document.getElementById('completeBtn').addEventListener('click', testing);
document.getElementById('postponeBtn').addEventListener('click', testing);
document.getElementById('editBtn').addEventListener('click', testing);
document.getElementById('removeBtn').addEventListener('click', testing);

function testing(event) {
  console.log(event.target.id);
}

var passedId = urlObject(window.url).parameters.id;

populateDetails(passedId);

function populateDetails(id) {
  var currentContact = contact(id);
  for (key in currentContact) {
    var domElement = document.getElementById(key);
    if (currentContact[key] && domElement) {
      domElement.innerText = currentContact[key];
    }
  }
  document.getElementById('name').innerText = currentContact.firstName + ' ' + currentContact.lastName;
}
