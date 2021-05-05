
window.addEventListener('load', (event) => {
	console.log('page is fully loaded');
	// Adding event isteners to the cards, which makes text visible on mouseover
	const cards = document.getElementsByClassName('card');
/*
	for(var i=0; i < 10; i++){
		console.log(i);
	} */

	for(let i=0; i<cards.length; i++) {
		//card.addEventListener('click', doFlip);
		cards[i].addEventListener('mouseenter', doMakeTextVisible);
		cards[i].addEventListener('mouseleave', doMakeTextVisible);
	} 
  });


const doMakeTextVisible = (event) => {
	console.log("moused over");
	console.log(event.target.id);
	const card = document.getElementById(event.target.id);
	//card.classList.toggle('visible-card-content');
	for(let i=0; i<card.children.length; i++) {
		if (card.children[i].classList.contains('hidden-card-content')) {
			card.children[i].classList.toggle('visible-card-content');
		}
	} 
}