//Any functions that affect what the users see are here

//Previous step: contactArray.push(submitObject)
//Input: index from contactArray
//Output: single <div> that holds everything
//then for loop that appends them all to document.body

for (var i = 0; i < listAlphabetical().length; i++) {
  var singleBubble = labelMaker(listAlphabetical()[i].topic,
    listAlphabetical()[i].firstName,
    listAlphabetical()[i].lastName);
  document.getElementById('contactList').appendChild(singleBubble);
}



for (var i = 0; i <


  .length; i++) {



  [i]
}
