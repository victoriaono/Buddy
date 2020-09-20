// Function to analyze inputted text variable
// Note to team: if needed you can move this to the journal.js to integrate it there


// Input a text value into the function 
// May need to strip html tags from jounral post?
function analyzeText(journalentry) {
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YXBpa2V5OllEeU1waV9xRFZiTWF6RW5NaHR6ZXlfU3E0WGdTOTh5WjE0NHlHcU1WTEhK");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
var text = 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/b8a304b3-a764-4f0c-be1b-6abeb0c611b2/v3/tone?version=2017-09-21&text=' + journalentry;
fetch(text, requestOptions)
  .then(response => response.text())
  // Logs a json with the results
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}