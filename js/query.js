var today = new Date();
// var sortedOverdueArray = [];
// var sortedNextArray = [];
// var sortedAlphabeticalArray = [];

function listOverdues () {
  // Create an array of overdue contacts
  var overdueArray = [];
  for (var i = 0; i < contactArray.length; i++) {
    if (Date.parse(contactArray[i].details.next) < Date.parse(today)) {
      overdueArray.push(contactArray[i]);
    }
  };
  //sort that array by how overdue they are
  var sortedOverdueArray = overdueArray.sort(function(a,b) {
    if (Date.parse(a.details.next) > Date.parse(b.details.next)) {
      return -1;
    }
    if (Date.parse(a.details.next) < Date.parse(b.details.next)) {
      return 1;
    }
    return 0;
  })
  return sortedOverdueArray;
};

function listAlphabetical () {
  var sortedAlphabeticalArray = contactArray.sort(function(a,b) {
    if (a.sortName() < b.sortName()) {
      return -1;
    }
    if (a.sortName() > b.sortName()) {
      return 1;
    }
    return 0;
  });
  return sortedAlphabeticalArray;
};

function listNextDates () {
  //create an array of contacts who are not overdue
  var upcomingArray = [];
  for (var i = 0; i < contactArray.length; i++) {
    if (Date.parse(contactArray[i].details.next) > Date.parse(today)) {
      upcomingArray.push(contactArray[i]);
    }
  //sort that array by next contact point (contacts furthest in the future should be indexed last)
  var sortedNextArray = contactArray.sort(function(a,b) {
    if (Date.parse(a.details.next) < Date.parse(b.details.next)) {
      return -1;
    }
    if (Date.parse(a.details.next) > Date.parse(b.details.next)) {
      return 1;
    }
    return 0;
  })
  return sortedNextArray;
}
