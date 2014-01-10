
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
  
   
   //This serves to create the default values
  	chrome.storage.sync.get("l1", function(data) { 
	var key=data.l1;
 
	console.log(key);
	if(!key)
	 {
		console.log("create default values, because nothing is available");
		var text ="interlanguage-link interwiki-de"; //Default value is German if nothing is here
		chrome.storage.sync.set({'l1': text}, function() { // save..
				chrome.storage.sync.get("l1", function(data) {
				console.log("Saved Language 1", data);
				})
			
				text ="interlanguage-link interwiki-en"; //Default value is English for second language
				chrome.storage.sync.set({'l2': text}, function() { // save..
						chrome.storage.sync.get("l2", function(data) {
							console.log("Saved Language 2", data);
							options_valid=true;

	});});

	});
	}
	});