document.getElementById('completeBtn').addEventListener('click', completeAction);
document.getElementById('postponeBtn').addEventListener('click', postponeAction);
document.getElementById('editBtn').addEventListener('click', redirectToEdit);
document.getElementById('removeBtn').addEventListener('click', removeAction);

function testing(event) {
  console.log(event);
}

var passedId = urlObject(window.url).parameters.id;

populateDetails();

function populateDetails() {
  var currentContact = contactArray[lookup(passedId)];
  for (key in currentContact) {
    var domElement = document.getElementById(key);
    if (currentContact[key] && domElement) {
      if (typeof(currentContact[key]) == 'object') {
        // Dates just show up as "objects"
        domElement.innerText = currentContact[key].toDateString();
      } else {
        domElement.innerText = currentContact[key];
      }
    }
  }
  document.getElementById('name').innerText = currentContact.firstName + ' ' + currentContact.lastName;
}

// This is just a redirection and adding the ID of the current contact.
function redirectToEdit() {
  window.location = 'form.html?id=' + passedId;
}

// The contact object has a method for updating with the default number of days.
function completeAction() {
  var arrayId = lookup(passedId);
  contactArray[arrayId].completeCount++;
  contactArray[arrayId].save();
  contactArray[arrayId].reset();
  window.location.reload(true); // reloads the page, forcing a grab of new data.
}

// postponing takes the number of days from the input field on the page and
//  adds that today, setting that day as the next scheduled contact day.
function postponeAction() {
  var days = document.getElementById('postponeAmt').value;
  console.log(days);
  var arrayId = lookup(passedId);
  contactArray[arrayId].postpone(days);
  contactArray[arrayId].postponeCount++;
  contactArray[arrayId].save();
  window.location.reload(true);
}

function removeAction() {
  var currentContact = contactArray[lookup(passedId)];
  if (confirm('Are you sure you want to remove ' + currentContact.firstName + ' ' + currentContact.lastName + ' from the your contacts?')) {
    currentContact.removeContact();
    window.location = 'contacts.html';
  }
}

//canvas chart.js
//data returned in an array for display in pie chart
function getRatio(){
  var reachRatio = [];
  var postponeCount = contactArray[passedId].postponeCount;
  var completeCount = contactArray[passedId].completeCount;
  reachRatio.push(postponeCount);
  reachRatio.push(completeCount); //Not a propoerty yet
  return reachRatio;
}

//construct the chart
var pieChart = new Chart(ctx,
  {
    type: 'pie',
    data: {
      labels: ['Postponed', 'Reached Out'],
      datasets: [
        {
          label: 'Name this',
          data: [4,1],//reachRatio, TODO: test array and implement
          backgroundColor: [
            '#CC3300',//red
            '#409769', //green
          ], //end backgroundColor
          hoverBackgroundColor: ['#9A9A9A','#9A9A9A']//end hover color
        }//end datasets object
      ]//end datasets
    },//end data object
    options: {
      legend: {position: 'bottom'}
    }
  }//end constructor thing?
  );
getRatio();
