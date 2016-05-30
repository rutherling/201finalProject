document.getElementById('submitNew').addListener('click',addContactFromForm);

function addContactFromForm(event) {
  event.preventDefaultAction();
  var submit_object = {};
  var input_array = event.target;
  for (var i = 0; i < input_array.length; i++) {
    if (input_array[i].name != '') {
      // event.target[i].name // field name
      // event.target[i].value // input value
      submit_object[input_array[i].name] = input_array[i].value;
    }
  }
  if (submit_object.firstName != '' || submit_object.lastName != '') {
    // construct and push object to array
    var new_contact = new Contact(submit_object);
    contact_array.push(new_contact);
  }
}
