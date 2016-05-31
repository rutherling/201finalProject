function labelMaker() {
  console.log('Label Maker is running.');
  var noteDiv = document.createElement('div');
  noteDiv.setAttribute('class', 'ctctPlans');
  noteDiv.textContent = 'Coffee at Metropol with Alicia, Danny and Pat\'s best friend from high school who I met at their beach place last summer';

  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'ctctName');
  nameDiv.textContent = contactArray[0].details.firstName + ' ' + contactArray[0].details.lastName;

  var innerDiv = document.createElement('div');
  innerDiv.setAttribute('class', 'mini-text');
  innerDiv.appendChild(nameDiv);
  innerDiv.appendChild(noteDiv);

  //Make containing div for contact avatar -- changed to <img>
  var picture = document.createElement('img');
  picture.setAttribute('class', 'ctctFaces');
  picture.setAttribute('src', '../images/Senior_Portrait_0067-478x700.jpg');

  //Make containing div for contact label
  var bubble = document.createElement('div');
  bubble.setAttribute('class', 'ctctLabels');
  bubble.appendChild(picture);
  bubble.appendChild(innerDiv);

  return bubble;
}
