// injects a language link instead of discussion link on Wikipedia
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
	
		clearInterval(readyStateCheckInterval);
	
		var languagelink;

		//try to get chrome storage data for language 1
		chrome.storage.sync.get("l1", function(data) { 
		 	var key=data.l1;
			//find the element that contains string describing data 1
			languagelink = document.getElementsByClassName(key);
			 
			if (!languagelink)
			{
			  console.log("Didn't find Language 1, try again");
			  chrome.storage.sync.get("l2", function(data) { 
				key=data.l2;
				languagelink = document.getElementsByClassName(key);
				});
			}
		    //get the discussion element
			var discussion_link = document.getElementById("ca-talk");
		 	
			//replace it with newly generated tab
			var newtab = document.createElement('li');
			newtab.innerHTML="<span>"+languagelink[0].innerHTML+"</span>";
			discussion_link.parentNode.replaceChild(newtab, discussion_link);
			 
		});
	}
	}, 10);
});

