var contactArray = [];
// When a new Contact is created or imported from memory, it accepts an object literal
//  which can have a wide variety of properties. The only properties that are mandatory are
//  a first or last name.
function Contact(newInfo) {
  for (property in newInfo) {
    this[property] = newInfo[property];
  }
  // If either of these are missing, the construction cannot proceed.
  if (this.sortName == '') {
    console.error('Error creating Contact:');
    console.info(newInfo);
    return;
  }
  this.id = newInfo.id;

  if (!this.id) {
    this.id = getUniqueId();
    this.save();
  }
}

// Each object has the ability and responsibility to save itself to persistent storage.
Contact.prototype.save = function() {
  localStorage[this.id] = JSON.stringify(this);
  var arrayId = contact(this.id);
  if (arrayId) {
    contactArray[arrayId] = this;
  } else {
    contactArray.push(this);
  }
};

// This method takes a number of days and pushes off the next scheduled contact
//  day until that many days after today.
Contact.prototype.postpone = function(days) {
  var newDate = new Date();
  newDate.setDate(newDate.getDate() + days);
  newDate.setHours(
    this.next.getHours(),
    this.next.getMinutes(),
    this.next.getSeconds(),
    this.next.getMilliseconds()
  );
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
    newContact.last = new Date(newContact.last);
    newContact.next = new Date(newContact.next);
    contactArray.push(newContact);
  }
}

// This is a function to make a new Contact object, but it might also be
//  adapted to update a current object already in the array and storage.
function addContact(submitObject) {
  // construct and push object to array
  var newContact = new Contact(submitObject);
  contactArray.push(newContact);
}

// If there's nothing in storage, this will generate demo contacts.
populateDemoContacts();

function populateDemoContacts() {
  if (localStorage.length == 0) {
    for (var i = 0; i < demoContacts.length; i++) {
      var newContact = new Contact(demoContacts[i]);
      contactArray.push(newContact);
    }
  }
}

// This should be an easy way to call a specific contact from the array by id.
//  Example use: var currentContact = contactArray[contact(15)];
function contact(id) {
  for (var i = 0; i < contactArray.length; i++) {
    if (contactArray[i].id == id) {
      return i;
    }
  }
  return false;
}
