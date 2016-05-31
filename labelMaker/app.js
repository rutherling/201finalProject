function labelMaker() {
  var noteDiv = document.createElement('div');
  noteDiv.setAttribute('class', 'ctctPlans');
  noteDiv.textContent = 'Coffee at Metropol with Alicia, Danny and Pat\'s best friend from high school who I met at their beach place last summer';

  var nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'ctctName');
  nameDiv.textContent = 'Penny Lane';

  var innerDiv = document.createElement('div');
  innerDiv.setAttribute('class', 'mini-text');
  innerDiv.appendChild(nameDiv);
  innerDiv.appendChild(noteDiv);

  //Make containing div for contact avatar
  var picture = document.createElement('div');
  picture.setAttribute('class', 'ctctFaces');
  picture.style['background-image'] = 'url("assets/Senior_Portrait_0067-478x700.jpg"))';

  //Make containing div for contact label
  var bubble = document.createElement('div');
  bubble.setAttribute('class', 'ctctLabels');
  bubble.appendChild(picture);
  bubble.appendChild(innerDiv);

  document.body.appendChild(bubble);
}
labelMaker();
