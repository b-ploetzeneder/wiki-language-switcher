chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var english_link = document.getElementsByClassName("interlanguage-link interwiki-en");
  
		console.log(english_link[0].innerHTML); 
		
		var discussion_link = document.getElementById("ca-talk");
		// Just to test if you got the lelement
  		console.log(discussion_link.innerHTML);  
	
		
    	var newtab = document.createElement('li');
		newtab.innerHTML="<span>"+english_link[0].innerHTML+"</span>";
		discussion_link.parentNode.replaceChild(newtab, discussion_link);
      //  discussion_link.parentElement.insertAdjacentElement('afterEnd',newtab); 

	}
	}, 10);
});

