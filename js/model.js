var contactArray = [];

// When a new Contact is created or imported from memory, it accepts an object literal
//  which can have a wide variety of details. The only details that are mandatory are
//  a first or last name.
function Contact(detailsProp) {
  this.details = detailsProp;
  this.sortName = detailsProp.lastName + detailsProp.firstName;
  // If either of these are missing, the construction cannot proceed.
  if (this.sortName == '') {
    console.error('Error creating Contact:');
    console.info(detailsProp);
    return;
  }
  this.id = detailsProp.id || getUniqueId();

  this.save = function() {
    localStorage[this.id] = JSON.stringify(this);
  };

  this.save();
}

Contact.prototype.postpone = function(days) {
  var newDate = new Date();
  newDate.setDate(newDate.getDate() + days);
  newDate.setHours(
    this.details.next.getHours(),
    this.details.next.getMinutes(),
    this.details.next.getSeconds(),
    this.details.next.getMilliseconds()
  );
  this.details.next = newDate;
};

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

Contact.prototype.initials = function() {
  // A quick method of getting a contact's initials for the alt list icon.
  return this.details.firstName[0] + this.details.lastName[0];
};
