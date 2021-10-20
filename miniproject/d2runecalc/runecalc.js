// This is to calculate how many runes it would take to compress into a specific high rune
// Info taken from https://diablo2.diablowiki.net/Horadric_Cube_Recipes

// This works in a pseudo-recursive manner - each higher rune will need to call on lower ones etc

// this is a list of all the recipes to craft each rune (from its predecessor)
const recipes = {
	"el": {
		number: 1,
		rune: "el",
		runequantity: 1,
		gem: "none",
		gemquantity: 0
	},
	"eld": {
		number: 2,
		rune: "el",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"tir": {
		number: 3,
		rune: "eld",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"nef": {
		number: 4,
		rune: "tir",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"eth": {
		number: 5,
		rune: "nef",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"ith": {
		number: 6,
		rune: "eth",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"tal": {
		number: 7,
		rune: "ith",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"ral": {
		number: 8,
		rune: "tal",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"ort": {
		number: 9,
		rune: "ral",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"thul": {
		number: 10,
		rune: "ort",
		runequantity: 3,
		gem: "none",
		gemquantity: 0
	},
	"amn": {
		number: 11,
		rune: "thul",
		runequantity: 3,
		gem: "chipped topaz",
		gemquantity: 1
	},
	"sol": {
		number: 12,
		rune: "amn",
		runequantity: 3,
		gem: "chipped amethyst",
		gemquantity: 1
	},
	"shael": {
		number: 13,
		rune: "sol",
		runequantity: 3,
		gem: "chipped sapphire",
		gemquantity: 1
	},
	"dol": {
		number: 14,
		rune: "shael",
		runequantity: 3,
		gem: "chipped ruby",
		gemquantity: 1
	},
	"hel": {
		number: 15,
		rune: "dol",
		runequantity: 3,
		gem: "chipped emerald",
		gemquantity: 1
	},
	"io": {
		number: 16,
		rune: "hel",
		runequantity: 3,
		gem: "chipped diamond",
		gemquantity: 1
	},
	"lum": {
		number: 17,
		rune: "io",
		runequantity: 3,
		gem: "flawed topaz",
		gemquantity: 1
	},
	"ko": {
		number: 18,
		rune: "lum",
		runequantity: 3,
		gem: "flawed amethyst",
		gemquantity: 1
	},
	"fal": {
		number: 19,
		rune: "ko",
		runequantity: 3,
		gem: "flawed sapphire",
		gemquantity: 1
	},
	"lem": {
		number: 20,
		rune: "fal",
		runequantity: 3,
		gem: "flawed ruby",
		gemquantity: 1
	},
	"pul": {
		number: 21,
		rune: "lem",
		runequantity: 3,
		gem: "flawed emerald",
		gemquantity: 1
	},
	"um": {
		number: 22,
		rune: "pul",
		runequantity: 2,
		gem: "flawed diamond",
		gemquantity: 1
	},
	"mal": {
		number: 23,
		rune: "um",
		runequantity: 2,
		gem: "topaz",
		gemquantity: 1
	},
	"ist": {
		number: 24,
		rune: "mal",
		runequantity: 2,
		gem: "amethyst",
		gemquantity: 1
	},
	"gul": {
		number: 25,
		rune: "ist",
		runequantity: 2,
		gem: "sapphire",
		gemquantity: 1
	},
	"vex": {
		number: 26,
		rune: "gul",
		runequantity: 2,
		gem: "ruby",
		gemquantity: 1
	},
	"ohm": {
		number: 27,
		rune: "vex",
		runequantity: 2,
		gem: "emerald",
		gemquantity: 1
	},
	"lo": {
		number: 28,
		rune: "ohm",
		runequantity: 2,
		gem: "diamond",
		gemquantity: 1
	},
	"sur": {
		number: 29,
		rune: "lo",
		runequantity: 2,
		gem: "flawless topaz",
		gemquantity: 1
	},
	"ber": {
		number: 30,
		rune: "sur",
		runequantity: 2,
		gem: "flawless amethyst",
		gemquantity: 1
	},
	"jah": {
		number: 31,
		rune: "ber",
		runequantity: 2,
		gem: "flawless sapphire",
		gemquantity: 1
	},
	"cham": {
		number: 32,
		rune: "jah",
		runequantity: 2,
		gem: "flawless ruby",
		gemquantity: 1
	},
	"zod": {
		number: 33,
		rune: "cham",
		runequantity: 2,
		gem: "flawless emerald",
		gemquantity: 1
	}
}


// testing - gem tracker
let gems = {
	"flawless": {
		"emerald": 0,
		"ruby": 0,
		"sapphire": 0,
		"amethyst": 0,
		"topaz": 0
	},
	"whole": {
		"diamond": 0,
		"emerald": 0,
		"ruby": 0,
		"sapphire": 0,
		"amethyst": 0,
		"topaz": 0
	},
	"flawed": {
		"diamond": 0,
		"emerald": 0,
		"ruby": 0,
		"sapphire": 0,
		"amethyst": 0,
		"topaz": 0
	},
	"chipped": {
		"diamond": 0,
		"emerald": 0,
		"ruby": 0,
		"sapphire": 0,
		"amethyst": 0,
		"topaz": 0
	}
};


// Attempting to make this recursive
// Start quantity should be 1 in theory, but will increase as further down the lower runes
function makeRune(baserune, goalrune, quantity = 1) {
	let recipe = recipes[goalrune]
	addGems(recipe.gem, recipe.gemquantity * quantity);

	// Base case
	if (recipe.rune === baserune) {
		return quantity * recipe.runequantity;
	}
	else {
		return makeRune(baserune, recipe.rune, quantity * recipe.runequantity)
	}
}


// Updates the gem object with the current amount of gems needed
// gem parameter is a string that needs to be parsed into the format of the gem object and incremented
// quantity is the number of gems to add
function addGems(gem_name, quantity) {
	gem = parseGemName(gem_name);
	const {category, name} = gem;
	gems[category][name] = quantity;
	return;
}


// Helper function for addGems to connect the string name to the object's listing
function parseGemName(gemname) {
	const split_name = gemname.split(" ");

	// No tuples in Javascript.  :/
	let gem = {
		category: "",
		name: ""
	}

	// One word only - this is a "whole" gem though it isn't referred to that ingame, only in this code.
	if (split_name.length === 1) {
		gem.category = "whole";
		gem.name = gemname;
	}
	else {
		gem.category = split_name[0];
		gem.name = split_name[1];
	}

	return gem;
}


// Sets all the gem values to 0.
function resetGems() {
	for (category in gems) {
		for (item in gems[category]) {
			gems[category][item] = 0;
		}
	}
	// Also clear any display of the old gem values from the webpage.
	document.querySelector('#output-gems').textContent = "";
	return;
}

// Debug info
// startrune is the lowest rune the final result will be composed of
let baserune = "";
// goalrune is the goal rune, the highest one to calculate up to
let goalrune = "";


// These functions interact with the page

// Get input from the dropdown boxes
const selectElementGoal = document.querySelectorAll('.rune-selector').forEach(item => {
	item.addEventListener('change', (event) => {
		console.log(event.target.id);
		if (event.target.id === "goal-rune") {
			goalrune = event.target.value;
		}
		else if (event.target.id === "base-rune") {
			baserune = event.target.value;
		}
	
		doUpdateOutputBox();
	});
});


// Updates the output box depending on if both a base and goal rune have been selected.
function doUpdateOutputBox() {
	resetGems();
	let text = "";
	if (baserune != "" && goalrune != "") {
		if (isValidRuneCombination(baserune, goalrune)) {
			const amount_needed = makeRune(baserune, goalrune);
			doUpdateGemBox();

			// Results
			console.log(gems);
			text = `You need ${formatNumber(amount_needed)} ${capitalize(baserune)} runes to make a ${capitalize(goalrune)} rune.`;
		}
		else {
			text = "Error: the goal rune must be higher than the base rune."
		}
	}
	else if (baserune === "" && goalrune != "") {
		text = "Please select a base rune.";
	}
	else if (baserune != "" && goalrune === "") {
		text = "Please select a goal rune.";
	}
	else {
		text = "";
	}
	
	const outputbox = document.querySelector('#output');
	outputbox.textContent = text;
}


// Takes the given gem data (object) and prints it nicely in the gem box.
function doUpdateGemBox() {
	let text = "Gems needed: ";
	const gemBox = document.querySelector('#output-gems');
	gemBox.append(text);
	const list = gemBox.appendChild(document.createElement('ul'));
	for (category in gems) {
		for (item in gems[category]) {
			if (gems[category][item] > 0) {
				const list_item = document.createElement('li');

				let category_name = "";
				// Making gem text pretty
				if (category != "whole") {
					category_name = capitalize(category) + " ";
				}

				const gem_name = capitalize(item);

				//let item_text = `${gems[category][item]} ${category} ${item}`;
				list_item.textContent = `${formatNumber(gems[category][item])} ${category_name}${gem_name}`;
				list.appendChild(list_item);
			}
		}
	}
	
	
}

// Check if this is a valid combination of runes - ex. the goal rune must be higher than the base rune
// Returns true if it is a valid recipe (goal > base), otherwise returns false.
function isValidRuneCombination(baserune, goalrune) {
	const baserune_number = recipes[baserune].number;
	const goalrune_number = recipes[goalrune].number;
	
	if (goalrune_number > baserune_number) {
		return true;
	}
	else {
		return false;
	}
}


// Capitalizes a string and returns the modified string.
function capitalize(lowercase_text) {
	return lowercase_text.charAt(0).toUpperCase() + lowercase_text.substring(1);
}

// Formats number with commas
function formatNumber(number) {
	return new Intl.NumberFormat().format(number);
}