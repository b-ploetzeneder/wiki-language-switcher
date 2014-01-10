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
			try{
			languagelink = document.getElementsByClassName(key);
			console.log(languagelink[0].innerHTML); //this throws an error if the element does not exist.
		    //get the discussion element
			var discussion_link = document.getElementById("ca-talk");
		 	
			//replace it with newly generated tab
			var newtab = document.createElement('li');
			newtab.innerHTML="<span>"+languagelink[0].innerHTML+"</span>";
			discussion_link.parentNode.replaceChild(newtab, discussion_link);

			}
			catch(err)
			{
			  console.log("Didn't find Language 1, try again");
			  chrome.storage.sync.get("l2", function(data) { 
				var key2=data.l2;
				languagelink = document.getElementsByClassName(key2);
				console.log(languagelink[0].innerHTML); //this throws an error if the element does not exist.
				//get the discussion element
				var discussion_link = document.getElementById("ca-talk");
				
				//replace it with newly generated tab
				var newtab = document.createElement('li');
				newtab.innerHTML="<span>"+languagelink[0].innerHTML+"</span>";
				discussion_link.parentNode.replaceChild(newtab, discussion_link);
				}); 
			}
			
			 
		});
	}
	}, 10);
});

