// Adding event isteners
/*
const card_elements = document.getElementsByClassName('card');
for(let i=0; i<card_elements.length, i++;) {
	card.addEventListener('click', doFlip);
} */

const doFlip = (id_name) => {
	//onst whichCard = event.target.id;
	const card = document.getElementById(id_name);
	card.classList.toggle('front');
	card.classList.toggle('back');
};
