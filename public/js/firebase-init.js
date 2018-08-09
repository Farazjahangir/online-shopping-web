
// ***************************************************** //

// Paste Your Firebase Authentication Code Here



// ******************************************************** //
  var auth = firebase.auth();
  var db = firebase.firestore();
  var storageRef = firebase.storage().ref()
  var errorEl = document.getElementById("error")


  function showMessage(msg) {
    var messageBox = document.getElementById("message-box");
    messageBox.style.display = "block";
    messageBox.innerText = msg;
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 3000);
  }
  function showLoader(text) {
    var loaderDiv = document.getElementById("loader-div");
    var loaderText = document.getElementById("loader-text");
    loaderDiv.style.display = "block";
    loaderText.innerText = text;
  }
  function hideLoader() {
    var loaderDiv = document.getElementById("loader-div");
    loaderDiv.style.display = "none";
  }

  function hideError(){
      errorEl.innerHTML = ""
  }
  


  if ("serviceWorker" in navigator) {
    
    navigator.serviceWorker.register("./firebase-messaging-sw.js").then(function() {
      console.log("Service Worker Registered");
    });
  }