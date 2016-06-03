//Any functions that affect what the users see are here

//Previous step: contactArray.push(submitObject)
//Input: index from contactArray
//Output: single <div> that holds everything
//then for loop that appends them all to document.body

// Populate overdue tray

function populateOverduesVersion1() {
  for (var i = 0; i < listOverdues().length; i++) {
    //stop displaying new bubbles and link to overdue view
    if (i === 4) { // This sets the limit of displayed overdue items
      var overdueLink = document.createElement('a');
      overdueLink.setAttribute('href', 'overdue.html');
      var doubleArrow = document.createElement('i');
      doubleArrow.setAttribute('class', 'fa fa-angle-double-right');
      doubleArrow.setAttribute('id', 'doubleRight');
      overdueLink.appendChild(doubleArrow);
      document.getElementById('overdueCtcts').appendChild(overdueLink);
      break;
    }
    var singleBubble = labelMaker(listOverdues()[i], 'overdueTray');
    singleBubble.style.opacity = 1 - (i / 4);
    document.getElementById('overdueCtcts').appendChild(singleBubble);
  }
}

MAXOVERDUES = 4;
populateOverdues(0); // Starts the population process.

function populateOverdues(positionNum) {
  if (positionNum < MAXOVERDUES && positionNum < listOverdues().length) {
    var singleBubble = labelMaker(listOverdues()[positionNum], 'overdueTray');
    singleBubble.style.opacity = 1 - (positionNum / 4);
    document.getElementById('overdueCtcts').appendChild(singleBubble);
    window.setTimeout(populateOverdues, 100, positionNum + 1);
  } else if (positionNum == MAXOVERDUES){
    var overdueLink = document.createElement('a');
    overdueLink.setAttribute('href', 'overdue.html');
    var doubleArrow = document.createElement('i');
    doubleArrow.setAttribute('class', 'fa fa-angle-double-right');
    doubleArrow.setAttribute('id', 'doubleRight');
    overdueLink.appendChild(doubleArrow);
    var chevronDiv = document.createElement('div');
    chevronDiv.appendChild(overdueLink);
    chevronDiv.setAttribute('class', 'ctctLabels slideinleft');
    chevronDiv.setAttribute('id', 'doubleRightDiv');
    document.getElementById('overdueCtcts').appendChild(chevronDiv);
  }
}
