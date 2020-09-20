var firebaseConfig = {
    apiKey: "AIzaSyCIFSRfV9SZp7BpiuSGM8zwPVqP_o_eV-8",
    authDomain: "hackmit2020-49f26.firebaseapp.com",
    databaseURL: "https://hackmit2020-49f26.firebaseio.com",
    projectId: "hackmit2020-49f26",
    storageBucket: "hackmit2020-49f26.appspot.com",
    messagingSenderId: "1051657151381",
    appId: "1:1051657151381:web:503dcbaa0a08f249f8cc9c",
    measurementId: "G-0VWZN4RV6N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Get a reference to the database service
var ref = firebase.database().ref('entries')
ref.on("value", getData);


// Pushes user's journal entry to firebase
document.getElementById("log-button").onclick = submitData;

function submitData() {
    var data = {
      date: document.getElementById("date").value,
      entry: document.getElementById("entry").value
    };
    ref.push(data);
    document.getElementById("date").value = "";
    document.getElementById("entry").value = "";
}

var loggedEntries = {};
function getData(data) {
  var entries = data.val();
  var keys = Object.keys(entries);
  var mood;
  for (var i=0; i<keys.length; i++) {
    var k = keys[i];
    loggedEntries[entries[k].date] = entries[k].entry
    mood = analyzeText(loggedEntries[entries[k].date]);
    // document.getElementById("logged").innerHTML += entries[k].date + ": " + mood + "<br>";
  }
}




// Input a text value into the function 
// May need to strip html tags from jounral post?
function analyzeText(journalEntry) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Basic YXBpa2V5OllEeU1waV9xRFZiTWF6RW5NaHR6ZXlfU3E0WGdTOTh5WjE0NHlHcU1WTEhK");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  var text = 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/b8a304b3-a764-4f0c-be1b-6abeb0c611b2/v3/tone?version=2017-09-21&text=' + journalEntry;
  var mood;
  fetch(text, requestOptions)
    .then(response => response.text())
    // Logs a json with the results
    .then(result => {
      mood = result;
      mood = JSON.stringify(mood.substring(mood.indexOf("tone_name")+12,mood.indexOf("\}")-1));
      displayText(mood);
    })
    .catch(error => console.log('error', error));
}

function displayText(text) {
  document.getElementById("logged").innerHTML += text + "<br>";
}
