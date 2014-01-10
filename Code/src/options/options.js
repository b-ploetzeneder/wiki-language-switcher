// Saves options to Storage API.
function save_options() {

  var select = document.getElementById("l1");
  var language1 = select.children[select.selectedIndex].value;
  var select2 = document.getElementById("l2");
  var language2 = select2.children[select2.selectedIndex].value;
 
 
  chrome.storage.sync.set({'l1': language1}, function() { // this is asynchronous, so you need to wait 
    chrome.storage.sync.get("l1", function(data) {
      console.log("Saved Language 1", data);
    });
  });

  chrome.storage.sync.set({'l2': language2}, function() {
    chrome.storage.sync.get("l2", function(data) {
      console.log("Saved Language 2", data);
    });
  });
  
      
  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from Storage API.
function restore_options() {
 
	//get l1 from storage.
	chrome.storage.sync.get("l1", function(data) { 
	  console.log("l1", data.l1);
	  var favorite=data.l1;
       if (!favorite) {
			favorite ="interlanguage-link interwiki-de"; //Default value is German if nothing is here
	   }
	  var select = document.getElementById("l1");			//get the options and select the one that was save.
	  for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == favorite) {
		  child.selected = "true";
		  break;
		}
  }
	});
	
  chrome.storage.sync.get("l2", function(data) { //same thing with l2.
	  console.log("l2", data.l2);
	  var favorite=data.l2;
       if (!favorite) {
			favorite ="interlanguage-link interwiki-en"; //Default value is English
	   }
	  var select = document.getElementById("l2");
	  for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == favorite) {
		  child.selected = "true";
		  break;
		}
  }
	});
	}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);