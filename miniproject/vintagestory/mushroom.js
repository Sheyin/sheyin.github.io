
const searchInput = document.getElementById("food-input");
const results = document.getElementById("results");
let searchTerm = ""

searchInput.addEventListener("input", (event) => {
	searchTerm = event.target.value;
	const searchResult = searchFoodValues(searchTerm)
	if (searchResult.length === 0) {
		results.textContent = `No results were found for "${event.target.value}".`
	}
	else {
		//const resultList = searchResult.map(mushroom => `<li>${mushroom.name} - ${mushroom.poisonous ? 'Poisonous' : 'Safe'}</li>`)
		//console.log("resultList: ", resultList)
		results.textContent = `Your search for "${event.target.value}" produced these results:`
		searchResult.forEach(mushroom => {
			const newNode = document.createElement("li")
			newNode.textContent = `${mushroom.name} - ${mushroom.poisonous ? 'Poisonous' : 'Safe'}`
			results.appendChild(newNode)
		})
	}
	//results.textContent = `Your search for "${event.target.value}" produced these results: ${searchResult}`;
});

const mushroomData = [
	{
		name: "Orange oak bolete",
		poisonous: false,
		color: "orange",
		found: "ground",
		notes: ""
	},
	{
		name: "King bolete",
		poisonous: false,
		color: "brown",
		found: "ground",
		notes: ""
	},
	{
		name: "Bitter bolete",
		poisonous: true,
		color: "brown",
		found: "ground",
		notes: "-3 hp"
	},
	{
		name: "Devil bolete",
		poisonous: false,
		color: "white",
		found: "ground",
		notes: ""
	},
	{
		name: "Fly agaric",
		poisonous: true,
		color: "red",
		found: "ground",
		notes: "-6.5 hp"
	},
	{
		name: "Green cracked russula",
		poisonous: false,
		color: "green",
		found: "ground",
		notes: ""
	},
	{
		name: "Violet web cap",
		poisonous: false,
		color: "purple",
		found: "ground",
		notes: ""
	},
	{
		name: "Almond mushroom",
		poisonous: false,
		color: "beige",
		found: "ground",
		notes: ""
	},
	{
		name: "Red wine cap",
		poisonous: false,
		color: "red",
		found: "ground",
		notes: ""
	},
	{
		name: "Paddy straw",
		poisonous: false,
		color: "white",
		found: "ground",
		notes: "Looks similar to Death Caps"
	},
	{
		name: "Death cap",
		poisonous: true,
		color: "white",
		found: "ground",
		notes: "Extremely deadly, -50 hp when consumed"
	},
	{
		name: "Puffball",
		poisonous: false,
		color: "white",
		found: "ground",
		notes: "Safe, but looks similar to Earth Balls"
	},
	{
		name: "Earth ball",
		poisonous: true,
		color: "white",
		found: "ground",
		notes: "Hp -8 when consumed"
	},
	{
		name: "Chanterelle",
		poisonous: false,
		color: "yellow",
		found: "ground",
		notes: ""
	},
	{
		name: "Black trumpet",
		poisonous: false,
		color: "black",
		found: "ground",
		notes: ""
	},
	{
		name: "Field mushroom",
		poisonous: false,
		color: "white",
		found: "ground",
		notes: ""
	},
	{
		name: "Gold-drop milkcap",
		poisonous: true,
		color: "yellow",
		found: "ground",
		notes: "Hp -2.5 when consumed"
	},
	{
		name: "Indigo milkcap",
		poisonous: false,
		color: "blue",
		found: "ground",
		notes: ""
	},
	{
		name: "Saffron milkcap",
		poisonous: false,
		color: "yellow",
		found: "ground",
		notes: ""
	},
	{
		name: "Common morel",
		poisonous: false,
		color: "brown",
		found: "ground",
		notes: ""
	},
	{
		name: "Witchhat mushroom",
		poisonous: false,
		color: "yellow",
		found: "ground",
		notes: ""
	},
	{
		name: "Lobster",
		poisonous: false,
		color: "orange",
		found: "ground",
		notes: ""
	},
	{
		name: "Jack'o'lantern mushroom",
		poisonous: true,
		color: "orange",
		found: "ground",
		notes: "-6 hp.  May be disguised among chantrelles"
	},
	{
		name: "Devilstooth mushroom",
		poisonous: true,
		color: "red white",
		found: "ground",
		notes: "-2 hp"
	},
	{
		name: "Shiitake",
		poisonous: false,
		color: "brown",
		found: "tree",
		notes: ""
	},
	{
		name: "Pink bonnet",
		poisonous: false,
		color: "pink",
		found: "tree"
	},
	{
		name: "Livermushroom",
		poisonous: false,
		color: "white",
		found: "tree"
	},
	{
		name: "Funeral bell",
		poisonous: true,
		color: "brown",
		found: "tree",
		notes: "Extremely dangerous.  -40 hp when consumed."
	},
	{
		name: "Deerear mushroom",
		poisonous: false,
		color: "brown",
		found: "tree",
	},
	{
		name: "Reishi",
		poisonous: false,
		color: "brown",
		found: "tree"
	},
	{
		name: "White oyster",
		poisonous: false,
		color: "white",
		found: "tree"
	},
	{
		name: "Pink bolete",
		poisonous: false,
		color: "pink",
		found: "tree"
	},
	{
		name: "Bearded tooth",
		poisonous: false,
		color: "white",
		found: "tree"
	},
	{
		name: "Chicken of the woods",
		poisonous: false,
		color: "yellow",
		found: "tree"
	},
	{
		name: "Tinder hoof",
		poisonous: false,
		color: "white", 
		found: "tree"
	},
	{
		name: "Elfin saddle",
		poisonous: true,
		color: "brown",
		found: "tree",
		notes: "-7 hp when consumed"
	}
]

const mushroomDataObjects = {
	"Orange oak bolete": {
		name: "Orange oak bolete",
		poisonous: false,
		color: "orange",
		found: "ground",
		notes: ""
	},
	"King bolete": {
		name: "King bolete",
		poisonous: false,
		color: "brown",
		found: "ground",
		notes: ""
	},
	"Bitter bolete": {
		name: "Bitter bolete",
		poisonous: true,
		color: "brown",
		found: "ground",
		notes: "-3 hp"
	},
	"Devil bolete": {
		name: "Devil bolete",
		poisonous: false,
		color: "white",
		found: "ground",
		notes: ""
	},
	"Fly agaric": {
		name: "Fly agaric",
		poisonous: true,
		color: "red",
		found: "ground",
		notes: "-6.5 hp"
	},
	"Green cracked russula": {
		name: "Green cracked russula",
		poisonous: false,
		color: "green",
		found: "ground",
		notes: ""
	},
	"Violet web cap": {
		name: "Violet web cap",
		poisonous: false,
		color: "purple",
		found: "ground",
		notes: ""
	},
	"Almond mushroom": {
		name: "Almond mushroom",
		poisonous: false,
		color: "beige",
		found: "ground",
		notes: ""
	},
	"Red wine cap": {
		name: "Red wine cap",
		poisonous: false,
		color: "red",
		found: "ground",
		notes: ""
	},
	"Paddy straw": {
		name: "Paddy straw",
		poisonous: false,
		color: "white",
		found: "ground",
		notes: "Looks similar to Death Caps"
	},
	"Death cap": {
		name: "Death cap",
		poisonous: true,
		color: "white",
		found: "ground",
		notes: "Extremely deadly, -50 hp when consumed"
	},
	"Puffball": {
		name: "Puffball",
		poisonous: false,
		color: "white",
		found: "ground",
		notes: "Safe, but looks similar to Earth Balls"
	},
	"Earth ball": {
		name: "Earth ball",
		poisonous: true,
		color: "white",
		found: "ground",
		notes: "Hp -8 when consumed"
	},
	"Chanterelle": {
		name: "Chanterelle",
		poisonous: false,
		color: "yellow",
		found: "ground",
		notes: ""
	},
	"Black trumpet": {
		name: "Black trumpet",
		poisonous: false,
		color: "black",
		found: "ground",
		notes: ""
	},
	"Field mushroom": {
		name: "Field mushroom",
		poisonous: false,
		color: "white",
		found: "ground",
		notes: ""
	},
	"Gold-drop milkcap": {
		name: "Gold-drop milkcap",
		poisonous: true,
		color: "yellow",
		found: "ground",
		notes: "Hp -2.5 when consumed"
	},
	"Indigo milkcap": {
		name: "Indigo milkcap",
		poisonous: false,
		color: "blue",
		found: "ground",
		notes: ""
	},
	"Saffron milkcap": {
		name: "Saffron milkcap",
		poisonous: false,
		color: "yellow",
		found: "ground",
		notes: ""
	},
	"Common morel": {
		name: "Common morel",
		poisonous: false,
		color: "brown",
		found: "ground",
		notes: ""
	},
	"Witchhat mushroom": {
		name: "Witchhat mushroom",
		poisonous: false,
		color: "yellow",
		found: "ground",
		notes: ""
	},
	"Lobster": {
		name: "Lobster",
		poisonous: false,
		color: "orange",
		found: "ground",
		notes: ""
	},
	"Jack'o'lantern mushroom": {
		name: "Jack'o'lantern mushroom",
		poisonous: true,
		color: "orange",
		found: "ground",
		notes: "-6 hp.  May be disguised among chantrelles"
	},
	"Devilstooth mushroom": {
		name: "Devilstooth mushroom",
		poisonous: true,
		color: "red white",
		found: "ground",
		notes: "-2 hp"
	},
	"Shiitake": {
		name: "Shiitake",
		poisonous: false,
		color: "brown",
		found: "tree",
		notes: ""
	},
	"Pink bonnet": {
		name: "Pink bonnet",
		poisonous: false,
		color: "pink",
		found: "tree"
	},
	"Livermushroom": {
		name: "Livermushroom",
		poisonous: false,
		color: "white",
		found: "tree"
	},
	"Funeral bell": {
		name: "Funeral bell",
		poisonous: true,
		color: "brown",
		found: "tree",
		notes: "Extremely dangerous.  -40 hp when consumed."
	},
	"Deerear mushroom": {
		name: "Deerear mushroom",
		poisonous: false,
		color: "brown",
		found: "tree",
	},
	"Reishi": {
		name: "Reishi",
		poisonous: false,
		color: "brown",
		found: "tree"
	},
	"White oyster": {
		name: "White oyster",
		poisonous: false,
		color: "white",
		found: "tree"
	},
	"Pink bolete": {
		name: "Pink bolete",
		poisonous: false,
		color: "pink",
		found: "tree"
	},
	"Bearded tooth": {
		name: "Bearded tooth",
		poisonous: false,
		color: "white",
		found: "tree"
	},
	"Chicken of the woods": {
		name: "Chicken of the woods",
		poisonous: false,
		color: "yellow",
		found: "tree"
	},
	"Tinder hoof": {
		name: "Tinder hoof",
		poisonous: false,
		color: "white", 
		found: "tree"
	},
	"Elfin saddle": {
		name: "Elfin saddle",
		poisonous: true,
		color: "brown",
		found: "tree",
		notes: "-7 hp when consumed"
	}
}

function searchFoodValues(searchTerm) {
	// Check for spaces
	const searchArray = searchTerm.toLowerCase().split(' ')
	const matches = [];
	//console.log(searchTerm)
	//console.log("searchArray: ", searchArray)
	
	// just name search
	const searchResults = mushroomData.filter(mushroom => {
		//const values = Object.values(mushroom);
		const name = mushroom.name;
		for (const term of searchArray) {
			//console.log(mushroom['name'])
			//console.log("term:", term)
			if (mushroom.name != "" && mushroom.name.toLowerCase().includes(term)) {
				//console.log("Match found!", term)
				return mushroom;
				//matches.push(mushroom);
			}
		}
	});
	//console.log("search results: ", searchResults)
	return searchResults;
}