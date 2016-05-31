var today = new Date();

function listOverdues () {
  var overdue_array = [];
  for (var i = 0; i < contact_array.length; i++) {
    if (Date.parse(contact_array[i].details.next) < Date.parse(today)) {
      overdue_array.push(contact_array[i]);
    }
  };
  var sorted_overdue_array = overdue_array.sort(function(a,b) {
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
  var sorted_alphabetical_array = contact_array.sort(function(a,b) {
    if (a.details.sortName < b.details.sortName) {
      return -1;
    }
    if (a.details.sortName > b.details.sortName) {
      return 1;
    }
    return 0;
  });
};

function listNextDates () {
  var sorted_next_array = contact_array.sort(function(a,b) {
    if (Date.parse(a.details.next) < Date.parse(b.details.next)) {
      return -1;
    }
    if (Date.parse(a.details.next) > Date.parse(b.details.next)) {
      return 1;
    }
    return 0;
  })
}
