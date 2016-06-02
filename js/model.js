var contactArray = [];
// When a new Contact is created or imported from memory, it accepts an object literal
//  which can have a wide variety of properties. The only properties that are mandatory are
//  a first or last name.
function Contact(newInfo) {
  for (property in newInfo) {
    this[property] = newInfo[property];
  }
  // If either of these are missing, the construction cannot proceed.
  if (this.sortName() == '') {
    console.error('Error creating Contact:');
    console.info(newInfo);
    return;
  }
  if (!this.id) {
    this.id = getUniqueId();
  }
  this.save();
}

// Saving makes changes permenent in both localStorage and the working array.
Contact.prototype.save = function() {
  // Whether the contact is new or not, this object call will work. Which is nice.
  localStorage[this.id] = JSON.stringify(this);
  // This is the code that determines whether a contact needs to be changed or added to the array.
  //  After getting this to work, I think it might be good to ditch the array and go
  //  for a fully object based memory structure. Maybe.
  var arrayId = lookup(this.id);
  if (arrayId !== false) {
    contactArray[arrayId] = this;
  } else {
    contactArray.push(this);
  }
};

// This method takes a number of days and pushes off the next scheduled contact
//  day until that many days after today.
Contact.prototype.postpone = function(days) {
  var newDate = new Date();
  // You have to force everything to be a number or it will concatonate! Yay, JavaScript!
  newDate.setDate( (Number(newDate.getDate()) + Number(days)) );
  this.next = newDate;
  this.save();
};

// When the user hits "done" on a contact, it's basically the same as postponing
//  them for their assigned number of days. We might add more data her for metrics
//  such as number of times postponed vs reset, and we re-examine this method at
//  that time.
Contact.prototype.reset = function() {
  this.last = new Date();
  this.postpone(this.reachOut);
};

// A quick method of getting a contact's initials for the alt list icon.
Contact.prototype.initials = function() {
  return this.firstName[0] + this.lastName[0];
};

// Simply returns an objects lastname and firstname as a single string.
Contact.prototype.sortName = function() {
  return this.lastName + this.firstName;
};

// WHen an object first gets created, it needs a unique identifier.
function getUniqueId() {
  // Start searching at ID 0
  var newId = 0;

  // Process the existing IDs, looking for the existence of the current iteration of newId.
  //  This will exit with an unused ID number.
  while ( idSearch(contactArray,newId) ) {
    newId++;
  }

  // This is the function that searches the Contact array for the existence of a given ID number.
  //  It returns null when a number is not used.
  function idSearch(array,id) {
    return array.filter(function ( obj ) {
      return obj.id == id;
    })[0];
  }

  return newId;
}

// Each object has the ability to remove itself from storage and the memory array.
Contact.prototype.removeContact = function() {
  // For the contactArray we have to go through each one looking for the right id
  for (var i = 0; i < contactArray.length; i++) {
    if (contactArray[i].id == this.id) {
      contactArray.splice(i,1);
      // For localStorage we can just say which one to remove.
      delete localStorage[this.id];
      // Easy way to exit the for loop. Maybe also useful for error detection?
      return true;
    }
  }
  return false;
};

// When each page loads, it need the object data from persistent storage.
loadDataFromStorage();

function loadDataFromStorage() {
  for (object in localStorage) {
    var newContact = new Contact(JSON.parse(localStorage[object]));
    // This next part fixes the dates from strings to date objects.
    newContact.last = new Date(newContact.last);
    newContact.next = new Date(newContact.next);
    newContact.save();
  }
}

// This is a function to make a new Contact object, but it might also be
//  adapted to update a current object already in the array and storage.
function addContact(submitObject) {
  if (!submitObject.id) {
    // construct and push object to array
    var newContact = new Contact(submitObject);
    // contactArray.push(newContact);
  } else {
    var arrayPosition = lookup(submitObject.id);
    var savedContact = contactArray[arrayPosition];
    for (key in submitObject) {
      if (submitObject[key]) {
        savedContact[key] = submitObject[key];
      } else {
        // For when a user completely removes info from a record. This avoids saving
        //  an empty property.
        delete savedContact[key];
      }
    }
    contactArray[arrayPosition] = new Contact(savedContact);
  }
}

// If there's nothing in storage, this will generate demo contacts.
populateDemoContacts();

function populateDemoContacts() {
  if (localStorage.length == 0) {
    for (var i = 0; i < demoContacts.length; i++) {
      var newContact = new Contact(demoContacts[i]);
      // This next part fixes the dates from strings to date objects.
      newContact.last = new Date(newContact.last);
      newContact.next = new Date(newContact.next);
      newContact.save();
    }
  }
}

// This should be an easy way to find specific contact in the array by id.
//  USAGE: var currentContact = contactArray[lookup(id)];
function lookup(id) {
  for (var i = 0; i < contactArray.length; i++) {
    if (contactArray[i].id == id) {
      return i;
    }
  }
  return false;
}
