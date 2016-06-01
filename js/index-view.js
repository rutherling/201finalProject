//Any functions that affect what the users see are here

//Previous step: contactArray.push(submitObject)
//Input: index from contactArray
//Output: single <div> that holds everything
//then for loop that appends them all to document.body
for (var i = 0; i < contactArray.length; i++) {
  var singleBubble = labelMaker(contactArray[i].details.topic,
    contactArray[i].details.firstName,
    contactArray[i].details.lastName);
  document.getElementById('timeline').appendChild(singleBubble);
}

//Next step: chronological order
