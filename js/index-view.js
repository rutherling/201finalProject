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
  var singleBubble = labelMaker(listOverdues()[i].topic,
    listOverdues()[i].firstName,
    listOverdues()[i].lastName);
  document.getElementById('overdueCtcts').appendChild(singleBubble);
}
