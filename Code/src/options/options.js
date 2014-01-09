// Adapted from Tutorial here:  http://developer.chrome.com/extensions/options.html

// Saves options to localStorage.
function save_options() {

  var select = document.getElementById("l1");
  var language1 = select.children[select.selectedIndex].value;
  localStorage["language1"] = language1; 
  
  var select2 = document.getElementById("l2");
  var language2 = select.children[select.selectedIndex].value;
  localStorage["language2"] = language2; 
    
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite = localStorage["language1"];
  if (!favorite) {
    return; //TODO: default values (English, German)
  }
  var select = document.getElementById("l1");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite) {
      child.selected = "true";
      break;
    }
  }
  favorite = localStorage["language2"];
  var select = document.getElementById("l2");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite) {
      child.selected = "true";
      break;
    }
  }
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);