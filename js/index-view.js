//Any functions that affect what the users see are here

//Previous step: contactArray.push(submitObject)
//Input: index from contactArray
//Output: single <div> that holds everything
//Next step: chronological order
//then for loop that appends them all to document.body
labelMaker();

//function to append bubble children to timeline after looping through contactArray
document.getElementById('timeline').appendChild(bubble);
