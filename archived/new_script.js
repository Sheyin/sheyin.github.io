// Quack?!
function duck_clicked() {
	document.getElementById('audio_quack').play();
}


// Only shows on initial page load / reload
function page_loaded() {
	const text = "Hello there, visitor.  What would you like to see today?";
	slow_text(text);
}


// Clear the text from the screen - might not be needed anymore
function clear_text() {
	const textNode = document.getElementById("speech-bubble");
	textNode.innerHTML = "";
}


// Only shows when the github link is clicked
function github_note() {
	const text = "This will open a new tab.";
	slow_text(text);
}


// Only shows when the projects link is clicked
function project_note() {
	const text = "These are some projects that I've been working on.";
	slow_text(text);
}

// Only shows when the secret link is clicked
function secret_note() {
	const text = "Don't look at that!";
	slow_text(text);
}


// Do slow text animation for given text
function slow_text(text) {
	const textNode = document.getElementById("speech-bubble");
	textNode.innerHTML = "";

	for (let i=0; i<text.length; i++) {
		setTimeout(addText, i * 50, i);
	  }

	// Slowly add the text letter by letter (helper function)
	function addText(i) {
		return textNode.innerHTML += text.charAt(i); 
	}
}


// Closes the mascot and removes him from the screen (X clicked)
function close_mascot() {
	const text = "Bye!";
	slow_text(text);
	const mascotNode = document.getElementById("mascot");
	mascotNode.style.display = "none";
}

// Makes mascot reappear
function show_mascot() {
	const mascotNode = document.getElementById("mascot");
	mascotNode.style.display = "block";
}