var test = document.getElementById('test');
test.textContent = 'DID THIS WORK?';
function getRatio(){
  var reachRatio = [];
  var postponeCount = contactArray[passedID].postponeCount;
  var countCompleted = contactArray[passedID].countCompleted;
  reachRatio.push(postponeCount);
  reachRatio.push(countCompleted); //Not a propoerty yet
  return reachRatio;
}//call getRatio(); on the details-view.js.

var pieChart = new Chart(canvas,
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
          hoverBackgroundColor: [
            '#9A9A9A',
            '#9A9A9A',
          ]//end hover color
        }//end datasets object
      ]//end datasets
    }//end data object
  }//end constructor thing?
  );
