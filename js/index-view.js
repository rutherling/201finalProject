document.getElementById('bigButton').addEventListener('click', function() {
  document.getElementById('bigButton').setAttribute('display','none');
});

//Any functions that affect what the users see are here

//Previous step: contactArray.push(submitObject)
//Input: index from contactArray
//Output: single <div> that holds everything
//then for loop that appends them all to document.body

// Populate overdue tray
for (var i = 0; i < listOverdues().length; i++) {
  //stop displaying new bubbles and link to overdue view
  if (i === 4) { // Eventually, this should be set higher than 2
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

//bigButton appears if there's nothing in localStorage
if (localStorage.length == 0) {
  document.getElementById('bigButton').setAttribute('style','display: flex');
  document.getElementById('footer').setAttribute('style','margin-top: 400px');
}
