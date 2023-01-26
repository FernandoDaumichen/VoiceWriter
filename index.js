if ("webkitSpeechRecognition" in window) {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    var startButton = document.getElementById("startButton");
    var output = document.getElementById("output");
    startButton.addEventListener('click', function () {
      recognition.start();
    });
    recognition.onresult = function (event) {
      var transcript = "";
      for (var i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      output.innerHTML = transcript;
    };
    recognition.onerror = function (event) {
      console.log('error:' + event.error);
    };
  } else {
    console.log("Your browser does not support the Web Speech API");
  }
// var final_transcript = '';
// var recognizing = false;
// var start_timestamp;
// if (!('webkitSpeechRecognition' in window)) {
//   upgrade();
// } else {
//   var recognition = new webkitSpeechRecognition();
//   recognition.continuous = true;
//   recognition.interimResults = true;
//   recognition.onstart = function() {
//     recognizing = true;
//   };

//   // need to have result as well 
//   recognition.onresult = function(e) {
//     console.log(e.results);

//     // Extracting the words from the result and printing in the console 
//     var transcript = [...e.results]
//       .map(result => result[0])
//       .map(result => result.transcript)
//       .join('');
//     console.log(transcript);
//   };

//   recognition.onend = function() {
//     console.log("voice recognition terminated");
//     recognition.start();
//   };}