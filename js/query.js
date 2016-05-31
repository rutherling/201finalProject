var today = new Date();
var sorted_overdue_array = [];
var sorted_next_array = [];
var sorted_alphabetical_array = [];

function listOverdues () {
  // Create an array of overdue contacts
  var overdue_array = [];
  for (var i = 0; i < contact_array.length; i++) {
    if (Date.parse(contact_array[i].details.next) < Date.parse(today)) {
      overdue_array.push(contact_array[i]);
    }
  };
  //sort that array by how overdue they are
  sorted_overdue_array = overdue_array.sort(function(a,b) {
    if (Date.parse(a.details.next) > Date.parse(b.details.next)) {
      return -1;
    }
    if (Date.parse(a.details.next) < Date.parse(b.details.next)) {
      return 1;
    }
    return 0;
  })
};

function listAlphabetical () {
  sorted_alphabetical_array = contact_array.sort(function(a,b) {
    if (a.sortName < b.sortName) {
      return -1;
    }
    if (a.sortName > b.sortName) {
      return 1;
    }
    return 0;
  });
};

function listNextDates () {
  //create an array of contacts who are not overdue
  var upcoming_array = [];
  for (var i = 0; i < contact_array.length; i++) {
    if (Date.parse(contact_array[i].details.next) > Date.parse(today)) {
      upcoming_array.push(contact_array[i]);
    }
  //sort that array by next contact point (contacts furthest in the future should be indexed last)
  sorted_next_array = contact_array.sort(function(a,b) {
    if (Date.parse(a.details.next) < Date.parse(b.details.next)) {
      return -1;
    }
    if (Date.parse(a.details.next) > Date.parse(b.details.next)) {
      return 1;
    }
    return 0;
  })
}
