chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var german_link = document.getElementsByClassName("interlanguage-link interwiki-de");
  
		console.log(german_link[0].innerHTML); 
		
		var discussion_link = document.getElementById("ca-talk");
	  		console.log(discussion_link.innerHTML);  
	
		
    	var newtab = document.createElement('li');
		newtab.innerHTML="<span>"+german_link[0].innerHTML+"</span>";
		discussion_link.parentNode.replaceChild(newtab, discussion_link); 

	}
	}, 1);
});

