// gave up and decided to make this instead of the twisted monstrosity that was without it

export const tierList = {
    simplemilitary: {
        tierName: "Simple Military Augment",
        augmentNames: ["Crude Ammo Box"],
        augmentsDict: ["crudeAmmoBox"],
        bonus: {
            ranged: ["Ranged Damage +"],
            ammunition: {
                name: "Ammunition",
                type: "Crafting time reduction",
                bench: "Workbench",
                percentYield: 20,
                timeBonusSeconds: 10,
            }
        }
    },
    simplehunting: {
        tierName: "Simple Hunting Augment",
        augmentNames: ["Hunter's Trophy", "Felting Bucket"],
        augmentsDict: ["huntersTrophy", "feltingBucket"],
        bonus: {
            ranged2h: ["Ranged Damage +"],
            leather: {
                type: "Animal Products",
                bench: "Tanning Station",
                percentYield: 20,
                timeBonusSeconds: 10
            }
        }
    },
    simplecarving: {
        tierName: "Simple Carving Augment",
        augmentNames: ["Hand Planer", "Open Toolbox"],
        augmentsDict: ["handPlaner", "openToolbox"],
        bonus: {
            wood: {
                type: "Wood",
                bench: "Saw Table",
                percentYield: 20,
                timeBonusSeconds: 10
            }
        } 
    },
    simpletailor: {
        tierName: "Simple Tailor Augment",
        augmentNames: ["Crude Coat Rack"],
        augmentsDict: ["crudeCoatRack"],
        bonus: {
            textile: {
                type: "Textile",
                bench: "Textile Station",
                percentYield: 20,
                timeBonusSeconds: 10
            },
            clothing: ["Health+", "Stamina+"]
        },
    },
    simpleblacksmith: {
        tierName: "Simple Blacksmith Augment",
        augmentNames: ["Bellows"],
        augmentsDict: ["bellows"],
        bonus: {
            metal: {
                type: "Metal",
                bench: "Smelter",
                percentYield: 20,
                timeBonusSeconds: 10
            }
        }
    },
    simplefarming: {
        tierName: "Simple Farming Augment",
        augmentNames: ["Crude Beehive", "Simple Plant Pot"],
        augmentsDict: ["crudeBeehive", "simplePlantPot"],
        bonus: {
            foodMortar: {
                type: "Food",
                bench: "Mortar",
                percentYield: 20,
                timeBonusSeconds: 10
            },
            sickle: ["Damage+", "Stamina+"]
        },
    },
    simplevictoriandandy: {
        tierName: "Simple Victorian Dandy Augment",
        augmentNames: ["Simple Tea Set", "Ink Making Set"],
        augmentsDict: ["simpleTeaSet", "inkMakingSet"],
        bonus: {
            paper: {
                bench: "Saw Table",
                percentYield: 20, 
                timeBonusSeconds: 10,
            },
            ink: {
                bench: "Mortar Station",
                percentYield: 20, 
                timeBonusSeconds: 10,
            },
            umbrella: ["Speed", "Stamina +"],
            clothing: ["Magic +"],
        }
    },
    simpleminer: {
        tierName: "Simple Miner Augment",
        augmentNames: ["Mining Cradle"],
        augmentsDict: ["miningCradle"],
        bonus: {
            pickaxe: ["Damage+", "Stamina+"],
            stone: {
                type: "Stone and Powder Products",
                bench: "Masonry Bench",
                percentYield: 20,
                timeBonusSeconds: 10
            }
        }
    },
    simplescience: {
        tierName: "Simple Science Augment",
        augmentNames: ["Crude Sundial", "Formula Board"],
        augmentsDict: ["crudeSundial", "formulaBoard"],
        bonus: {
            all: {
                type: "All",
                bench: "All",
                percentYield: 0,
                timeBonusSeconds: 10
            },
            clothing: ["Environmental Resistance+", "Resistance+"]
        }
    },
    simpleassassin: {
        tierName: "Simple Assassin Augment",
        augmentNames: ["Training Dummy"],
        augmentsDict: ["trainingDummy"],
        bonus: {
            types: ["tools", "One-handed Melee Tool Items", "Clothing"],
            clothing: ["Stealth+"],
            melee1h: ["Critical Damage+", "Melee Damage+"],
            tools: ["Critical Damage+"],
        }
    },
    simpleberserker: {
        tierName: "Simple Berserker Augment",
        augmentNames: ["Simple Drinking Horn",],
        augmentsDict: ["simpleDrinkingHorn"],
        bonus: {
            types: ["Two-handed Melee Tool Items", "Clothing"],
            melee2h: ["Stamina Regeneration+", "Melee Damage+"],
            clothing: ["Injury Resistance+", "Health Regeneration+"]
        }
    },
    simplewestern: {
        tierName: "Simple Western Augment",
        augmentNames: ["Simple Saddle Rack",],
        augmentsDict: ["simpleSaddleRack"],
        bonus: {
            types: ["Ranged Weapons", "One-handed Ranged Weapons", "Clothing"],
            ranged: ["Critical Damage+"],
            ranged1h: ["Ranged damage+"],
            clothing: ["Ranged damage+"]
        }
    },
    simpleexplorer: {
        tierName: "Simple Explorer Augment",
        augmentNames: ["Simple Map"],
        augmentsDict: ["simpleMap"],
        bonus: {
            types: ["Climbing Picks", "Clothing"],
            climbingPicks: ["Speed+", "Max Stamina+"],
            clothing: ["Speed+", "Stamina Regeneration+"]
        }
    },
    simpleconstruction: {
        tierName: "Simple Construction Augment",
        augmentNames: ["Basic Sawhorse"],
        augmentsDict: ["basicSawhorse"],
        bonus: {
            types: ["Tools", "Hammers", "Clothing"],
            tools: ["Durability+"],
            hammers: ["Damage+", "Max Stamina+"],
            clothing: ["Weight Limit+"]
        }
    },
    simplefishing: {
        tierName: "Simple Fishing Augment",
        augmentNames: ["Crude Redeye Bass Trophy", "Crude Heath Pupfish Trophy", "Crude Chaparral Trout Trophy", "Boat Wheel"],
        augmentsDict: ["crudeRedeyeBassTrophy", "crudeHeathPupfishTrophy", "crudeChaparralTroutTrophy", "boatWheel"],
        bonus: {
            fishingRod: ["Stamina+"],
            fishDish: {
                name: "Fish Dishes",
                bench: "Cooking Fire",
                percentYield: 20,
                timeBonusSeconds: 10
            }
        }
    },
    simplecooking: {
        tierName: "Simple Cooking Augment",
        augmentNames: ["Spit Roast", "Strange Jug"],
        augmentsDict: ["spitRoast", "strangeJug"],
        bonus: {
            food: {
                name: "Food",
                bench: "Cooking Fire",
                percentYield: 20,
                timeBonusSeconds: 10
            }
        }
    },
    simplemagick: {
        tierName: "Simple Magick Augment",
        augmentNames: ["Macabre Rack"],
        augmentsDict: ["macabreRack"],
        bonus: {
            potion: {
                name: "Potions",
                bench: "Alchemy Bench",
                percentYield: 20,
                timeBonusSeconds: 10
            },
            tools: ["Magick+"],
            clothing: ["Fire Resistance+", "Ice Resistance+", "Poison Resistance+", "Maleficum Resistance+"]
        }
    },
    refinedhunting: {
        tierName: "Refined Hunting Augment",
        augmentNames: ["Unsprung Trap"],
        augmentsDict: ["unsprungTrap"],
        bonus: {
            ranged2h: ["Ranged Damage +"],
            leather: {
                type: "Animal Products",
                bench: "Tanning Station",
                percentYield: 40,
                timeBonusSeconds: 15
            }
        }
    },
    refinedcarving: {
        tierName: "Refined Carving Augment",
        augmentNames: ["Rustic Toolbox",],
        augmentsDict: ["rusticToolbox"],
        bonus: {
            wood: {
                type: "Wood",
                bench: "Saw Table",
                percentYield: 40,
                timeBonusSeconds: 15
            }
        }
    },
    refinedblacksmith: {
        tierName: "Refined Blacksmith Augment",
        augmentNames: ["Crude Grindstone", "Anvil"],
        augmentsDict: ["crudeGrindstone", "anvil"],
        bonus: {
            metal: {
                type: "Metal",
                bench: "Smelter",
                percentYield: 40,
                timeBonusSeconds: 15
            }
        }
    },
    refinedfarming: {
        tierName: "Refined Farming Augment",
        augmentNames: ["Plough", "Wheelbarrow"],
        augmentsDict: ["plough", "wheelbarrow"],
        bonus: {
            foodMortar: {
                type: "Food",
                bench: "Mortar",
                percentYield: 40,
                timeBonusSeconds: 15
            },
            sickle: ["Damage++", "Stamina++"]
        },
    },
    refinedminer: {
        tierName: "Refined Miner Augment",
        augmentNames: ["Blasting Machine",],
        augmentsDict: ["blastingMachine"],
        bonus: {
            pickaxe: ["Damage++", "Stamina++"],
            stone: {
                type: "Stone and Powder Products",
                bench: "Masonry Bench",
                percentYield: 40,
                timeBonusSeconds: 15
            }
        }
    },
    refinedconstruction: {
        tierName: "Refined Construction Augment",
        augmentNames: ["Construction Press"],
        augmentsDict: ["constructionPress"],
        bonus: {
            tools: ["Durability++"],
            hammer: ["Damage++", "Max Stamina++"],
            clothing: ["Weight Limit++"]
        }
    },
    refinedfishing: {
        tierName: "Refined Fishing Augment",
        augmentNames: ["Fishing Trap"],
        augmentsDict: ["fishingTrap"],
        bonus: {
            fishingRod: {
                name: "Fishing Rods",
                bench: "Workbench",
                bonus: ["Stamina++"]
            },
            fishDish: {
                name: "Fish Dishes",
                bench: "Cooking Fire",
                percentYield: 40,
                timeBonusSeconds: 15
            }
        }
    },
    refinedcooking: {
        tierName: "Refined Cooking Augment",
        augmentNames: ["Cooking Knife", "Frying Pan", "Traditional Kettle", "Cast Iron Pot", "Meat Grinder",],
        augmentsDict: ["cookingKnife", "fryingPan", "traditionalKettle", "castIronPot", "meatGrinder"],
        bonus: {
            food: {
                name: "Food",
                bench: "Cooking Fire",
                percentYield: 40,
                timeBonusSeconds: 15
            }
        }
    },
    refinedmagick: {
        tierName: "Refined Magick Augment",
        augmentNames: ["Crystal Ball"],
        augmentsDict: ["crystalBall"],
        bonus: {
            potion: {
                name: "Potions",
                bench: "Alchemy Bench",
                percentYield: 40,
                timeBonusSeconds: 15
            },
            tools: ["Magick++"],
            clothing: ["Fire Resistance++", "Ice Resistance++", "Poison Resistance++", "Maleficum Resistance++"]
        }
    },
    refinedcarving: {
        tierName: "Refined Carving Augment",
        augmentNames: ["Wood Carver's Toolbox",],
        augmentsDict: ["woodCarversToolbox"],
        bonus: {
            wood: {
                type: "Wood",
                bench: "Saw Table",
                percentYield: 60,
                timeBonusSeconds: 20
            }
        }
    },
    excellenttailor: {
        tierName: "Excellent Tailor Augment",
        augmentNames: ["Mangle Machine", "Sewing Kit"],
        augmentsDict: ["mangleMachine", "sewingKit"],
        bonus: {
            textile: {
                type: "Textile",
                bench: "Textile Station",
                percentYield: 60,
                timeBonusSeconds: 20
            },
            clothing: ["Health+++", "Stamina+++"]
        },
    },
    excellentvictoriandandy: {
        tierName: "Excellent Victorian Dandy Augment",
        augmentNames: ["Paper Press", "Podium", "Jaunty Bicycle"],
        augmentsDict: ["paperPress", "podium", "jauntyBicycle"],
        bonus: {
            paper: {
                type: "Paper",
                bench: "Saw Table",
                percentYield: 60,
                timeBonusSeconds: 20
            },
            ink: {
                type: "Ink",
                bench: "Mortar Station",
                percentYield: 60,
                timeBonusSeconds: 20
            },
            umbrella: ["Speed+++", "Stamina+++"],
            clothing: ["Magick+++"]
        },  
    },
    excellentberserker: {
        tierName: "Excellent Berserker Augment",
        augmentNames: ["Shield"],
        augmentsDict: ["shield"],
        bonus: {
            melee2h: ["Damage+++", "Stamina Regeneration+++"],
            clothing: ["Injury Resistance+++", "Health Regeneration+++"]
        }
    },
    excellentmilitary: {
        tierName: "Excellent Military Augment",
        augmentNames: ["Cannon"],
        augmentsDict: ["cannon"],
        bonus: {
            product: {
                type: "Ammunition",
                bench: "Workbench",
                percentYield: 60,
                timeBonusSeconds: 20
            },
            ranged: ["Ranged Damage+++"]
        },
    },
    excellentexplorer: {
        tierName: "Excellent Explorer Augment",
        augmentNames: ["Globe"],
        augmentsDict: ["globe"],
        bonus: {
            climbingPicks: ["Speed+++", "Max Stamina+++"],
            clothing: ["Speed+++", "Stamina Regeneration+++"]
        }
    },
    excellentfishing: {
        tierName: "Excellent Fishing Augment",
        augmentNames: ["Diving Helmet"],
        augmentsDict: ["divingHelmet"],
        bonus: {
            fishingRod: ["Stamina+++"],
            fishDish: {
                name: "Fish Dishes",
                bench: "Cooking Fire",
                percentYield: 60,
                timeBonusSeconds: 20
            }
        }
    },
};

export default tierList;

/*
    excellent: {
        tierName: 
        augmentNames: ["Globe"],
        augmentsDict: [],
        bonus: {} 
    },
*/