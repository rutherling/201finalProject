function labelMaker (contactObject, status) {
  //Make div to display contact topic excerpt
  console.log('Label Maker is running.');
  if ((status != 'overdueTray') && (status != 'overdueList')) {
    var noteDiv = document.createElement('div');
    noteDiv.setAttribute('class', 'ctctPlans');
    noteDiv.textContent = contactObject.topic;
  }

  //Make div element to display contact name
  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'ctctName');
  nameDiv.textContent = contactObject.firstName + ' ' + contactObject.lastName;

  //Make container div for contact name and topic excerpt
  var innerDiv = document.createElement('div');
  innerDiv.setAttribute('class', 'mini-text');
  innerDiv.appendChild(nameDiv);
  if (noteDiv) {
    innerDiv.appendChild(noteDiv);
  }

  //Make alt div for contact avatar
  var noPic = document.createElement('div');
  noPic.setAttribute('class', 'altDiv ctctFaces');
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

  //Make img placeholder for contact avatar
  if (contactObject.photo) {
    var picture = document.createElement('img');
    picture.setAttribute('class', 'hasPic ctctFaces');
    picture.setAttribute('id','hasImg');
    picture.setAttribute('src', 'url ("../assets/Senior_Portrait_0067-478x700.jpg");');
  }

  //Make postpone button if status is overdueList
  if (status == 'overdueList') {
    var postDiv = document.createElement('div');
    postDiv.setAttribute('class', 'btn btn-default btn-lg');
    postDiv.textContent = 'Postpone';
    innerDiv.appendChild(postDiv);
    var killDiv = document.createElement('i');
    killDiv.setAttribute('class', 'fa fa-times-circle');
    var MT = document.getElementsByClassName('mini-text');
    MT.appendChild(killDiv);
  }

  //Make remove button if status is overdueList

  //Make containing div for contact label
  var bubble = document.createElement('div');
  bubble.setAttribute('class', 'ctctLabels');
  bubble.appendChild(noPic);
  if (contactObject.photo) {
    bubble.appendChild(picture);
  };
  bubble.appendChild(innerDiv);
  bubble.appendChild(killDiv);

  return bubble;
}
