var workingDate = new Date();

//Date comparison code from http://stackoverflow.com/questions/4428327/checking-if-two-dates-have-the-same-date-info
// if (aDate.isSameDateAs(otherDate)) { ... }

function isSameDateAs(pDate, qDate) {
  return (
    qDate.getFullYear() === pDate.getFullYear() &&
    qDate.getMonth() === pDate.getMonth() &&
    qDate.getDate() === pDate.getDate()
  );
};

//Initial Timeline Code follows
// for (var i = 0; i < listNextDates().length; i++) {
//   var singleBubble = labelMaker(listNextDates()[i], '');
//   document.getElementById('timeline').appendChild(singleBubble);
// }
for (var i = 0; i < listNextDates().length; i++) {
  var idxDate = new Date(listNextDates()[i].next);
  if (isSameDateAs(idxDate,workingDate)) {
    //  Append bubble
    var singleBubble = labelMaker(listNextDates()[i], '');
    document.getElementById('timeline').appendChild(singleBubble);
    console.log('Append ' + listNextDates()[i].firstName + ' ' + listNextDates()[i].lastName + 'bubble.');
  } else {
    // Update workingDate
    workingDate = new Date(listNextDates()[i].next);
    console.log('workingDate is now ' + workingDate);
    // Append new date div
    console.log('Appending new dateDiv:' + workingDate);
    var dateDiv = document.createElement('div');
    dateDiv.setAttribute('class', 'dateDiv');
    dateDiv.textContent = workingDate;
    document.getElementById('timeline').appendChild(dateDiv);
    // Append bubble
    var singleBubble = labelMaker(listNextDates()[i], '');
    document.getElementById('timeline').appendChild(singleBubble);
    console.log('Append ' + listNextDates()[i].firstName + ' ' + listNextDates()[i].lastName + '\'s bubble.');
  }
}
