const feedButton = document.getElementById('feedButton');
const text = document.getElementById('text');
const d = new Date();


light(0, 0);

readFeed();

function light(red, green) {
  red == 0 ? jQuery('#redLight').hide() : jQuery('#redLight').show();
  green == 0 ? jQuery('#greenLight').hide() : jQuery('#greenLight').show();
}

// Post data from record form
function postFeed(day){

  // GET FORM DATA
  let data = new FormData();
  data.append("value", day);

  // AJAX
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "valueWrite.php");

  // What to do when server responds
  //xhr.onload = function(){ console.log(feedValue); };
  xhr.send(data);
}

function readFeed() {
  
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {
    // This is where you handle what to do with the response.
    // The actual data is found on this.responseText
    var feedValue = this.responseText;
    if (feedValue != d.getDate()) {
      light(0, 1);
      text.innerHTML = `Boubouille a faim !`
      feedButton.onclick = function () {
        light(1, 0);
        text.innerHTML = `Boubouille a mangé !`
        feedButton.style.display = "none";
        postFeed(d.getDate());
      }
    }
    else {
      feedButton.style.display = "none";
      light(1, 0);
      text.innerHTML = `Boubouille a déjà mangé !`;
    }
  };
  oReq.open("get", "valueRead.php");
//                               ^ Don't block the rest of the execution.
//                                 Don't wait until the request finishes to
//                                 continue.
  oReq.send(null);
}
