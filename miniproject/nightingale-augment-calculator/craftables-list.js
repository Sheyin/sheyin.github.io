
// These items should correspond to the ffirst bos where the user selects an item to craft
// bench: might be removed, but which table it would apply to
// bonusTypes: array of tags (maybe match up to the propererties in bonus for augment-list)
// augments: array of tags (matching to "type" in augment-list)


export const craftables = {
    axe: {
        bench: "Workbench",
        bonusTypes: ["tools", "melee", "melee2h", "all"],
        augments: ["assassin", "berserker", "construction", "magick", "science"]
    },
    axepick: {
        bench: "Workbench",
        bonusTypes: ["melee", "melee2h", "pickaxe", "tools", "all"],
        augments: ["miner", "assassin", "berserker", "construction", "magick", "science"]
    },
    bow: {
        bench: "Workbench",
        bonusTypes: ["ranged", "ranged2h", "all"],
        augments: ["military", "hunting", "western", "construction", "magick", "science"]
    },
    climbingPicks: {
        bench: "Workbench",
        bonusTypes: ["tools", "melee", "melee2h", "climbingPicks", "pickaxe", "all"],
        augments: ["assassin", "berserker", "explorer", "construction", "magick", "science"]
    },
    fishingRod: {
        bench: "Workbench",
        bonusTypes: ["tools", "melee", "melee2h", "fishingRod", "all"],
        augments: ["fishing", "berserker", "construction", "science"]
    },
    hammer: {
        bench: "Workbench",
        bonusTypes: ["tools", "melee", "melee1h", "hammer", "all"],
        augments: ["assassin", "construction", "magick", "science"]
    },
    knife: {
        bench: "Workbench",
        bonusTypes: ["tools", "melee", "melee1h", "all"],
        augments: ["assassin", "construction", "magick", "science"]
    },
    maul: {
        bench: "Workbench",
        bonusTypes: ["melee", "melee2h", "all"],
        augments: ["berserker", "construction", "magick", "science"]
    },
    pickaxe: {
        bench: "Workbench",
        bonusTypes: ["tools", "melee", "melee2h", "pickaxe", "all"],
        augments: ["miner", "assassin", "berserker", "construction", "magick", "science"]
    },
    revolver: {
        bench: "Workbench",
        bonusTypes: ["ranged", "ranged1h", "all"],
        augments: ["military", "western", "construction", "magick", "science"]
    },
    rifle: {
        bench: "Workbench",
        bonusTypes: ["ranged", "ranged2h", "all"],
        augments: ["military", "hunting", "western", "construction","magick", "science"]
    },
    satchel: {
        name: "Grenade Satchel",
        bench: "Workbench",
        bonusTypes: ["ranged", "ranged1h", "all"],
        augments: ["military", "western", "construction", "magick", "science"]
    },
    shotgun: {
        bench: "Workbench",
        bonusTypes: ["ranged", "ranged2h", "all"],
        augments: ["military", "hunting", "western", "construction","magick", "science"]
    },
    sickle: {
        bench: "Workbench",
        bonusTypes: ["tools", "melee", "melee2h", "sickle", "all"],
        augments: ["farming", "assassin", "construction", "magick", "science"]
    },
    slingbow: {
        bench: "Workbench",
        bonusTypes: ["ranged", "ranged2h", "all"],
        augments: ["military", "hunting", "western", "construction", "magick", "science"]
    },
    umbrella: {
        bench: "Workbench",
        bonusTypes: ["tools", "umbrella", "all"],
        augments: ["victorianDandy", "assassin", "construction", "magick", "science"]
    },
    clothing: {
        bench: "Sewing Bench",
        bonusTypes: ["clothing", "all"],
        augments: ["tailor", "victorianDandy", "science", "assassin", "berserker", "western", "explorer", "construction", "magick"]
    },
    ammunition: {
        bench: "Workbench",
        bonusTypes: ["ammunition", "all"],
        augments: ["military", "science"]
    },
    wood: {
        bench: "Saw Table",
        bonusTypes: ["wood", "all"],
        augments: ["carving", "science"]
    },
    cloth: {
        bench: "Textile Station",
        bonusTypes: ["textile", "all"],
        augments: ["tailor", "science"]
    },
    leather: {
        bench: "Tanning Station",
        bonusTypes: ["leather", "all"],
        augments: ["hunting", "science"]
    },
    metal: {
        bench: "Smelter",
        bonusTypes: ["metal", "all"],
        augments: ["blacksmith", "science"]
    },
    paper: {
        bench: "Saw Table",
        bonusTypes: ["paper", "wood", "all"],   // check if paper counts as wood?
        augments: ["victorianDandy", "carving", "science"]
    },
    ink: {
        bench: "Mortar Station", // check if stone augments work as well
        bonusTypes: ["ink", "all"],
        augments: ["victorianDandy", "science"]
    },
    fishDish: {
        bench: "Cooking Fire",
        bonusTypes: ["fishDish", "food", "all"],
        augments: ["fishing", "food", "science", "cooking"]
    },
    food: {
        bench: "Cooking Fire",
        bonusTypes: ["food", "all"],
        augments: ["food", "cooking", "science"]
    },
    spice: {
        bench: "Mortar",
        bonusTypes: ["foodMortar", "all"],
        augments: ["farming", "science"] // test: cooking?
    },
    charm: {
        bench: "Enchanting Table",
        bonusTypes: ["all"],
        augments: ["science"]
    },
    potion: {
        bench: "Alchemy Bench",
        bonusTypes: ["potion", "all"],
        augments: ["magick", "science"]
    },
    stone: {
        bench: "Masonry Bench",
        bonusTypes: ["stone", "all"],
        augments: ["miner", "science"]
    }

};

export default craftables;