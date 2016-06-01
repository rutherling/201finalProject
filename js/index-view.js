//Any functions that affect what the users see are here

//Previous step: contactArray.push(submitObject)
//Input: index from contactArray
//Output: single <div> that holds everything
//then for loop that appends them all to document.body

for (var i = 0; i < listNextDates().length; i++) {
  var singleBubble = labelMaker(listNextDates()[i].topic,
    listNextDates()[i].firstName,
    listNextDates()[i].lastName);
  document.getElementById('timeline').appendChild(singleBubble);
}

for (var i = 0; i < listOverdues().length; i++) {
  if (i === 2) {
    var overdueLink = document.createElement('a');
    overdueLink.setAttribute('href', 'overdue.html');
    var doubleArrow = document.createElement('i');
    doubleArrow.setAttribute('class', 'fa fa-angle-double-right');
    doubleArrow.setAttribute('id', 'doubleRight');
    overdueLink.appendChild(doubleArrow)
    document.getElementById('overdueCtcts').appendChild(overdueLink);
    break;
  }
  var singleBubble = labelMaker('',
    listOverdues()[i].firstName,
    listOverdues()[i].lastName);
  singleBubble.style.opacity = 1 - (i / 8);
  document.getElementById('overdueCtcts').appendChild(singleBubble);
}
