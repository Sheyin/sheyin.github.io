import augments from './augment-list.js';
import craftables from './craftables-list.js';
import tierList from './tier-list.js';

const selection = {
    craftable: "",
    validAugments: {}
};

let validStatAugments = [];
let validTimeReductions = [];
let currentlySelectedCraftable = "";

const craftableClick = (event) => {
    if (selection.craftable === event.target.id) {
        return;
    }

    selection.craftable = event.target.id;
    getValidAugments();
    prepareStatTimeLists();
    displayStatSelection();
    toggleSelectedCraftable(event.target.id);
}

// Adding event handlers
const craftableButtons = document.getElementsByClassName("craftable");
Array.from(craftableButtons).forEach((item) => {
    item.addEventListener("click", craftableClick);
});


// 1. User selects a craftable
const getValidAugments = () => {
    if (selection.craftable === "") { console.log("error - filteredStats should not be called"); return; }

    // Clear out old selection data in case user clicks different craftables
    clearData();

    const itemToCraft = selection.craftable;
    const possibleAugments = craftables[itemToCraft].augments;

    selection.data = craftables[itemToCraft];
    selection.validAugments = getMatchingTiers(possibleAugments);
    // at this point, we have a filtered list of valid tier-augment keys to use
}

// after getting list of valid augments (selection.validAugments) organizes for display
const prepareStatTimeLists = () => {
    const possibleBonusTypes = selection.data.bonusTypes;
    
    for(let i=0; i<selection.validAugments.length; i++) {
        const keyName = selection.validAugments[i];
        const allBonuses = tierList[keyName].bonus; // test if array or object etc
        
        // see if any element in possibleBonusTypes is in the allBonuses for that augment
        for (let j=0; j<possibleBonusTypes.length; j++) {
            if (Object.keys(allBonuses).includes(possibleBonusTypes[j])) {
                // hopefully an array (stat bonus)
                if (Array.isArray(allBonuses[possibleBonusTypes[j]])) {
                    const newSet = {
                        augmentNames: tierList[keyName].augmentNames, 
                        stats: allBonuses[possibleBonusTypes[j]], 
                        tierName: tierList[keyName].tierName
                    };
                    validStatAugments.push(newSet);
                }
                else {
                    // hopefully an object (time reduction)
                    const newSet = {
                        augmentNames: tierList[keyName].augmentNames, 
                        tierName: tierList[keyName].tierName,
                        bench: allBonuses[possibleBonusTypes[j]].bench,
                        percentYield: allBonuses[possibleBonusTypes[j]].percentYield,
                        timeBonusSeconds: allBonuses[possibleBonusTypes[j]].timeBonusSeconds
                    }
                    validTimeReductions.push(newSet);
                }
            }
        }
        
    }
    console.log("validStatAugments", validStatAugments)
    console.log("validTimeReductions", validTimeReductions);
}


function displayStatSelection() {
    const statWindow = document.getElementById('stat-choices');
    const timeReductionsWindow = document.getElementById('time-reductions');

    // clear old value before adding new
    statWindow.innerHTML = '';
    timeReductionsWindow.innerHTML = '';

    // make windows visible
    Array.from(document.getElementsByClassName('result-window')).forEach(window => {
        window.classList.remove('initial-hidden');
    });

    // Stat info
    let statWindowText = ``;

    if (validStatAugments.length === 0) {
        statWindowText = "No time reductions to display."
    }
    else {
        // cycle through validStatAugments and print/format
        for (let i=0; i<validStatAugments.length; i++) {
            const set = validStatAugments[i];
            const stats = makeStringFromArray(set.stats, "and");
            const augmentNames = makeStringFromArray(set.augmentNames, "or");
            const tierName = set.tierName;
    
            statWindowText += `<li class="result-item"><span class="result-stats">${stats}</span>: <span class="result-augmentname">${augmentNames}</span> <span class="tier">[${tierName}]</span></li>`
        };
    }
    statWindow.innerHTML = statWindowText;


    // Time reduction info    
    let timeReductionsText = ``;

    if (validTimeReductions.length === 0) {
        timeReductionsText = "No time reductions to display."
    }
    else {
        for (let i=0; i<validTimeReductions.length; i++) {
            const set = validTimeReductions[i];
            const augmentNames = makeStringFromArray(set.augmentNames, "or");
            const tierName = set.tierName;
    
            timeReductionsText += `<li class="result-item">Time reduced by <span class="result-time">${set.timeBonusSeconds}</span> seconds and +${set.percentYield}% yield: <span class="result-augmentname">${augmentNames}</span> <span class="tier">[${tierName}]</span></li>`
        };
    }
    timeReductionsWindow.innerHTML = timeReductionsText;
}

// Reset data
function clearData() {
    selection.data = {};
    selection.validAugments = {};
    validStatAugments = [];
    validTimeReductions = [];
}

// toggles selected look when clicked
function toggleSelectedCraftable(newSelection) {
    if (currentlySelectedCraftable !== "") {
        document.getElementById(currentlySelectedCraftable).classList.remove('selected-craftable');
    }
    currentlySelectedCraftable = newSelection;
    document.getElementById(newSelection).classList.add('selected-craftable');
}

// Turns array entry into string
// joinstring: "and" or "or"
function makeStringFromArray(arr, joinstring = "and") {
    let string = "";

    if (!Array.isArray(arr)) {
        return "Error - not an array";
    }
    if (arr.length === 0) {
        return "Error - empty array";
    }

    if(arr.length === 1) {
        return `${arr[0]}`;
    }
    if(arr.length === 2) {
        return `${arr[0]} ${joinstring} ${arr[1]}`
    }

    else {
        for(let i=0; i<arr.length; i++) {
            string += arr[i];
    
            if (i === arr.length-2) {
                string += `, ${joinstring} `;
            }
            else {
                if (i + 1 < arr.length) {
                    string += `, `
                }
            }
        }
    }
    return string;
}


// given an array of possible Augments
// checks if string (possible augment) is a partial match of one of the elements
// returns subarray of matching elements (augment-tier keys)
function getMatchingTiers(possibleAugments) {
    let results = [];
    const allAugmentTiers = Object.keys(tierList);

    for(let i=0; i<allAugmentTiers.length; i++) {
        for(let j=0; j<possibleAugments.length; j++) {
            const element = allAugmentTiers[i];

            if (element.includes(possibleAugments[j])) {
                results.push(element);
            }
        }
    }
    return results;
}