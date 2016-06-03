function labelMaker (contactObject, status) {
  //Make div to display contact topic excerpt
  if ((status != 'overdueTray') && (status != 'overdueList')) {
    var noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'ctctPlans');
    noteDiv.setAttribute('id', contactObject.id);
    noteDiv.textContent = contactObject.topic;
  }

  //Make div element to display contact name
  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'ctctName');
  nameDiv.setAttribute('id', contactObject.id);
  nameDiv.textContent = contactObject.firstName + ' ' + contactObject.lastName;

  //Make container div for contact name and topic excerpt
  var innerDiv = document.createElement('div');
  innerDiv.setAttribute('class', 'mini-text');
  innerDiv.setAttribute('id', contactObject.id);
  innerDiv.appendChild(nameDiv);
  if (noteDiv) {
    innerDiv.appendChild(noteDiv);
  }

  //Make img placeholder for contact avatar
  if (contactObject.photo) {
    var picture = document.createElement('img');
    picture.setAttribute('class', 'hasPic ctctFaces hasImg');
    // picture.setAttribute('id','hasImg');
    picture.setAttribute('id', contactObject.id);
    picture.setAttribute('src', 'url ("../assets/Senior_Portrait_0067-478x700.jpg");');
  } else {
    //Make alt div for contact avatar
    var noPic = document.createElement('div');
    noPic.setAttribute('class', 'altDiv ctctFaces');
    noPic.setAttribute('id', contactObject.id);
    var initString = function () {
      var string = '';
      if (contactObject.firstName) {
        string += contactObject.firstName[0];
      }
      if (contactObject.firstName && contactObject.lastName) {
        string += ' ';
      }
      if (contactObject.lastName) {
        string += contactObject.lastName[0];
      }
      return string;
    };
    var initials = document.createTextNode(initString());
    noPic.appendChild(initials);
  }

  //Make postpone button if status is overdueList
  if (status == 'overdueList') {
    var postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'postponeButton btn btn-default btn-lg');
    postDiv.textContent = 'Postpone';
    var postponeAmt = document.createElement('input');
    postponeAmt.setAttribute('class', 'btn btn-default btn-lg');
    postponeAmt.setAttribute('type', 'text');
    postponeAmt.setAttribute('maxlength', '3');
    postponeAmt.setAttribute('size', '4');
    postponeAmt.setAttribute('required', 'required');
    postponeAmt.setAttribute('value', '7');
    postponeAmt.setAttribute('id', 'postponeAmt'); //does this cause problems, does it need to concat with contactID in order to be truly unique?
    postDiv.appendChild(postponeAmt);
    innerDiv.appendChild(postDiv);
    postponeAmt.addEventListener('click', function() {
      event.stopPropagation();
    }, false);
    postDiv.addEventListener('click', function() {
      event.stopPropagation();
      console.log('postponeContact called');
      var days = document.getElementById('postponeAmt').value;
      console.log(days);
      var arrayId = lookup(event.target.parentElement.id);
      console.log(arrayId);
      console.log(contactArray[arrayId]);
      contactArray[arrayId].postpone(days);
      window.location.reload(true);
    }, false);
  //Make done button
    var doneDiv = document.createElement('div');
    doneDiv.setAttribute('class', 'doneButton btn btn-default btn-lg');
    doneDiv.textContent = 'Complete';
    innerDiv.appendChild(doneDiv);
    doneDiv.addEventListener('click', function() {
      event.stopPropagation();
      console.log('completeAction called');
      var arrayId = lookup(event.target.parentElement.id);
      contactArray[arrayId].reset();
      window.location.reload(true); // reloads the page, forcing a grab of new data.
    }, false);
  //Make remove button if status is overdueList
    var killDiv = document.createElement('i');
    killDiv.setAttribute('class', 'fa fa-times-circle');
    innerDiv.appendChild(killDiv);
    killDiv.addEventListener('click', function() {
      event.stopPropagation();
      console.log('removeContact called');
      var currentContact = contactArray[lookup(event.target.parentElement.id)];
      if (confirm('Are you sure you want to remove ' + currentContact.firstName + ' ' + currentContact.lastName + ' from the your contacts?')) {
        currentContact.removeContact();
        window.location = 'contacts.html';
      }
    }, false);
  }

  //Make containing div for contact label
  var bubble = document.createElement('div');
  bubble.setAttribute('class', 'ctctLabels');
  bubble.setAttribute('id', contactObject.id);
  bubble.appendChild(noPic);
  if (contactObject.photo) {
    bubble.appendChild(picture);
  };
  bubble.appendChild(innerDiv);
  if (killDiv) {
    bubble.appendChild(killDiv);
  };
  bubble.addEventListener('click', navigateToDetailView, false);
  return bubble;
}

function navigateToDetailView(event) {
  console.log('event.target.id: ' + event.target.id);
  console.log(event.target.id);
  window.location = 'details.html?id=' + event.target.id;
}
