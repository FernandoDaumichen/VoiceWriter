if ("webkitSpeechRecognition" in window) {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  var startButton = document.getElementById("startButton");
  var output = document.getElementById("output");
  startButton.addEventListener('click', function () {
    recognition.start();
  });
  recognition.onresult = function (event) {
    var transcript = "";
    for (var i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        transcript += event.results[i][0].transcript;
      } else {
        transcript += event.results[i][0].transcript + " ";
      }
    }
    output.innerHTML = transcript;
  };
  recognition.onerror = function (event) {
    console.log('error:' + event.error);
  };
} else {
  console.log("Your browser does not support the Web Speech API");
}