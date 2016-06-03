//Any functions that affect what the users see are here

//Previous step: contactArray.push(submitObject)
//Input: index from contactArray
//Output: single <div> that holds everything
//then for loop that appends them all to document.body

populateOverduePage();

function populateOverduePage() {
  if (listOverdues().length == 0) {
    window.location = 'index.html';
  } else {
    for (var i = 0; i < listOverdues().length; i++) {
      var singleBubble = labelMaker(listOverdues()[i], 'overdueList');
      document.getElementById('overdueQueue').appendChild(singleBubble);
    }
  }
}
