var today = new Date();

function listOverdues () {
  // Create an array of overdue contacts
  var overdueArray = [];
  for (var i = 0; i < contactArray.length; i++) {
    if (Date.parse(contactArray[i].next) < Date.parse(today)) {
      overdueArray.push(contactArray[i]);
    }
  };
  //sort that array by how overdue they are
  var sortedOverdueArray = overdueArray.sort(function(a,b) {
    if (Date.parse(a.next) > Date.parse(b.next)) {
      return -1;
    }
    if (Date.parse(a.next) < Date.parse(b.next)) {
      return 1;
    }
    return 0;
  });
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
    if (Date.parse(contactArray[i].next) > Date.parse(today)) {
      upcomingArray.push(contactArray[i]);
    }
  };
  //sort that array by next contact point (contacts furthest in the future should be indexed last)
  var sortedNextArray = upcomingArray.sort(function(a,b) {
    if (Date.parse(a.next) < Date.parse(b.next)) {
      return -1;
    }
    if (Date.parse(a.next) > Date.parse(b.next)) {
      return 1;
    }
    return 0;
  });

  return sortedNextArray;
}
