document.getElementById('bigButton').addEventListener('click', function() {
  document.getElementById('bigButton').setAttribute('display','none');
});

//Any functions that affect what the users see are here

//Previous step: contactArray.push(submitObject)
//Input: index from contactArray
//Output: single <div> that holds everything
//then for loop that appends them all to document.body

for (var i = 0; i < listAlphabetical().length; i++) {
  var singleBubble = labelMaker(listAlphabetical()[i],'');
  document.getElementById('contactList').appendChild(singleBubble);
}

//bigButton appears if there's nothing in localStorage
if (localStorage.length == 0) {
  document.getElementById('bigButton').setAttribute('style','display: flex');
}

document.onkeydown = function(e) {
  // Hitting the Equal key on the index page will generate demo contacts.
  if (e.code == 'Equal') {
    addDemoContacts();
    window.location.reload(true);
  }
  // Hitting the minus key clears storage
  if (e.code == 'Minus') {
    localStorage.clear();
    window.location.reload(true);
  }
};
