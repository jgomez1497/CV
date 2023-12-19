/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

function copyClipboard(){
  var textCopied = document.getElementsByClassName("far fa-envelope");
  var infoCopied = document.getElementById("infoText");

  navigator.clipboard.writeText(textCopied[0].getAttribute("value"));

  infoCopied.className = "clipboard__msg clipboard__msg--visible";
  setTimeout(function(){
    infoCopied.className = "clipboard__msg clipboard__msg--hidden";
  }, 1000);
}

document.getElementsByClassName("far fa-envelope")[0].addEventListener("click", function(event) { 
  copyClipboard();
});