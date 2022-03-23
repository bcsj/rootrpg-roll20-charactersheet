let moves = {
  "The Worth of a Book": {
    "archetype": "The Chronicler",
    "text": "When you **study your tomes and scrolls to discover old techniques or methods** to solve an intractable problem\u00e2\u20ac\u201dcuring a deadly disease, ending a drought, legally unseating a leader, etc\u00e2\u20ac\u201ddecide what you want to change and tell the GM. The GM will give you between 1 to 4 conditions you must fulfill to discover a path forward, including time taken, additional information needed, mentors or translators needed, facilities/tools needed, or the limits of your solution. When you fulfill the conditions, you gain whatever knowledge you were seeking\u00e2\u20ac\u201dit's up to you to put to use."
  },
  "An Eye for the Real Story": {
    "archetype": "The Chronicler",
    "text": "When you **read a tense situation**, mark an exhaustion\u00e2\u20ac\u201deven on a miss\u00e2\u20ac\u201dto spot a fellow observer who knows more than you might expect. Take a +1 ongoing to convince them to share their secrets with you when you get them in private."
  },
  "Search the Records": {
    "archetype": "The Chronicler",
    "text": "When you **examine the documents, records, or assorted notes of an important NPC (your call)**, roll with Cunning. On a hit, you discover evidence of their secrets; the GM will tell you who would pay for the information you've uncovered. On a 10+, you also take a 12+ instead of rolling the next time you try to figure them out. On a miss, your search yields terrible news\u00e2\u20ac\u201dsomeone is acting against you or your interests in an unexpected arena."
  },
  "Loremaster": {
    "archetype": "The Seeker",
    "text": "When you **try to convince a powerful NPC to supply an exploratory adventure**, roll with Cunning. On a hit, they give you 8-value in resources and depletion\u00e2\u20ac\u201dbut you must fulfill a request. On a 10+, they ask for something general\u00e2\u20ac\u201dmore riches, information, a prize or trophy. On a 7-9, they want something specific\u00e2\u20ac\u201da singular treasure, secret knowledge, a lost ritual. On a miss, they mount a competing expedition based on what you have told them."
  },
  "Good Advice": {
    "archetype": "The Chronicler",
    "text": "When you **offer an NPC advice about a sticky situation**, offer them the best advice you've got and roll with cunning. On a hit, they see the wisdom of your suggestion; they have to mark exhaustion or incorporate your advice into their plans. On a 7-9, you let something about your own plans or allegiances slip as you try to help them out. On a miss, the advice angers or offends them; the GM will tell you what local custom you've overstepped with your meddling."
  },
  "Dedicated Scholar": {
    "archetype": "The Chronicler",
    "text": "Take an extra box of exhaustion. When you acquire a new tome or scroll documenting the history of the Woodland, clear your exhaustion track.",
    "addHarm": {
      "exhaustion": 1
    }
  },
  "Known by All": {
    "archetype": "The Exile",
    "text": "When you **first encounter an important NPC from the faction that exiled you**, you may declare them an old ally\u00e2\u20ac\u201dchoosing one from the list below instead of meeting someone important\u00e2\u20ac\u201dand roll.\n\n* If they merely know you by your former reputation, take a +1.\n* If you have worked closely with them before, take a +2.\n* If they were a close friend or loyal servitor, take a +3.\n\nOn a hit, your exile has done little to diminish their respect for you; they offer you whatever comfort and aid they can, even to the point of risking their own reputation and safety. On a 7-9, they can only assist you if they can cover their tracks when you leave; mark as much notoriety with their faction as you added to your roll as they spread a story of the terrible treatment they endured when they met you. On a miss, your attempts to contact your old network only reveal your position and desperation; mark as much notoriety as you added to your roll and those who hunt you will surely be here soon.\n"
  },
  "Above It All": {
    "archetype": "The Exile",
    "text": "When you **trick an NPC** into granting you access or information by pretending to be a high-ranking member of their faction, roll with Charm instead of Cunning."
  },
  "I Bring You...": {
    "archetype": "The Exile",
    "text": "When you **spend time talking to the denizens of a new clearing**, mark exhaustion to learn what vital resource or fugitive the powers-that-be currently seek. When you deliver a vital resource or prisoner to a faction, you may **ask for a favor** from the faction as if you rolled a 12+. If your reputation with that faction is already +2 or greater, you may instead **sway the NPC** whose cause you most directly benefited with your contribution as if you rolled a 12+."
  },
  "Greatest of the Age": {
    "archetype": "The Exile",
    "text": "When you engage an enemy in melee, you take all four options and one for double effect when you roll a 12+."
  },
  "Born to Be a King": {
    "archetype": "The Exile",
    "text": "Take +1 Charm (max +3).",
    "addStat": {
      "charm": 1
    }
  },
  "Fancy Paper": {
    "archetype": "The Exile",
    "text": "You gain the roguish feat Counterfeit (it does not count against your maximum for advancement). When you **attempt a roguish feat** to produce counterfeit documents using your intimate knowledge of your home faction's politics and procedures, mark notoriety with that faction to make the move as if you had rolled a 12+."
  },
  "Word on the Street": {
    "archetype": "The Seeker",
    "text": "When you **spend time in a clearing talking with locals**, roll with Finesse. On a hit, you catch wind of a nearby unexplored wonder or ruin; someone promises to take you to it for a fair fee (1-value). On a 7-9, the dangers make their price steeper\u00e2\u20ac\u201dan additional 1-value of coin or gear. On a miss, the location is under threat\u00e2\u20ac\u201dsoon it will be plundered, destroyed, or claimed by another power"
  },
  "Never Lost": {
    "archetype": "The Seeker",
    "text": "Take two additional boxes of injury and depletion you can mark when you confront dangers within a ruin and a +1 ongoing to **trusting fate** and **performing roguish feats** while exploring such ancient locales."
  },
  "Treasure Hunter": {
    "archetype": "The Seeker",
    "text": "When you sell the **treasures you found in a ruin at market**, roll with Cunning. On a hit, you find some buyers. On a 7-9, take 1. On a 10+, both:\n\n* you get a good price; you get double what such findings are usually worth\n* you are popular; mark two prestige with the controlling faction\n\nOn a miss, someone powerful takes offense at your plunder of local sites.\n"
  },
  "Watch the Signs": {
    "archetype": "The Seeker",
    "text": "When you first attune yourself to a ruin or mysterious site by taking in its signs, symbols, particular traits, and layout, roll with Cunning. On a 10+, hold 3. On a 7-9, hold 2. On a miss, you may mark an exhaustion to hold 1. While within that ruin or mysterious site, you can spend your hold 1 for 1 to:\n\n* Identify the quickest path to the closest valuable treasure or knowledge.\n* Disarm a trap or overcome a natural hazard without cost.\n* Name a character within reach about to suffer harm; you suffer it instead.\n* Name a character in the ruin; you cross the distance to them instantly.\n* Take cover in the ruin; ignore all harm from a single attack or catastrophe.\n"
  },
  "Unstable Ground": {
    "archetype": "The Seeker",
    "text": "When you use a rough or chaotic environment\u00e2\u20ac\u201dslippery rocks, a crowded market, etc\u00e2\u20ac\u201dto gain an advantage over your opponents in a fight, you can mark exhaustion to **grapple** with them using Finesse instead of Might."
  },
  "Brute": {
    "archetype": "The Arbiter",
    "text": "Take +1 Might (max +3).",
    "addStat": {
      "might": 1
    }
  },
  "Carry a Big Stick": {
    "archetype": "The Arbiter",
    "text": "When you **use words to pause an argument or violent conflict between others**, roll with Charm. On a hit, they choose: mark 2 exhaustion and keep going, or stop for now. On a 10+, take +1 ongoing to dealing with them peacefully. On a miss, NPCs turn their anger to you, and PCs take +1 ongoing against you for the scene.\n"
  },
  "Crash & Smash": {
    "archetype": "The Arbiter",
    "text": "When you smash your way through scenery to reach someone or something, roll with Might. On a hit, you reach your target. On a 10+, choose 1. On a 7-9, choose 2.\n\n* You hurt yourself: mark 1 injury\n* You break an important part of your surroundings\n* You damage or leave behind a piece of gear (GM's choice)\n\nOn a miss, you smash through, but you leave yourself totally vulnerable on the other side.\n"
  },
  "Hardy": {
    "archetype": "The Arbiter",
    "text": "Take 1 additional injury boxes. Whenever time passes or you journey to a new clearing, you can clear 2 injury boxes automatically.",
    "addHarm": {
      "injury": 1
    }
  },
  "Strong Draw": {
    "archetype": "The Arbiter",
    "text": "When you **target someone** with a bow, mark wear on the bow to roll with Might. On a hit, mark exhaustion to inflict 1 additional injury. Mark exhaustion again to make your shot ignore the enemy's armor\u00e2\u20ac\u201dthey cannot mark wear to absorb the injury."
  },
  "Guardian": {
    "archetype": "The Arbiter",
    "text": "When you defend someone or something from an immediate NPC or environmental threat, roll with Might. On a hit, you keep them safe and choose one. On a 7-9, it costs: expose yourself to danger or escalate the situation.\n\n* Draw the attention of the threat; they focus on you now.\n* Put the threat in a vulnerable spot; take +1 forward to counterstrike.\n* Push the threat back; you and your protectee have a chance to maneuver or flee.\n\nOn a miss, you take the full brunt of the blow intended for your protectee, and the threat has you where it wants you.\n"
  },
  "Silent Paws": {
    "archetype": "The Ranger",
    "text": "You are adept at slipping into and out of dangerous situations without anyone noticing. When you **attempt a roguish feat** to sneak or hide, you can mark 2 exhaustion to shift a miss to a 7-9."
  },
  "Slip Away": {
    "archetype": "The Ranger",
    "text": "When you take advantage of an opening to escape from a dangerous situation, roll with Finesse. On a hit, you get away. On a 10+, choose 1. On a 7-9, choose 2:\n\n* You suffer injury or exhaustion (GM's choice) during your escape\n* You end up in another dangerous situation\n* You leave something important behind\nOn a miss, you escape, but it costs you\u00e2\u20ac\u201dmark injury or exhaustion, GM's choice\u00e2\u20ac\u201dand you leave ample evidence behind for your foes to track and follow you.\n"
  },
  "Poisons and Antidotes": {
    "archetype": "The Ranger",
    "text": "You have expertise in the poisons and antidotes of the Woodland. When you brew a poison, mark depletion and say what effect you want it to have: sleep, weakness, inebriation, or death. Any poison you make requires ingestion or injection; you can use the poison on your weapon or put it in your target's food or drink. When you study a poison or its effects to make an antidote, the GM will tell you what special ingredient you'll need. Get the ingredient and mark 1 depletion to brew the antidote.\n"
  },
  "Forager": {
    "archetype": "The Ranger",
    "text": "When you travel or pass into a forest, before making any travel move, you can clear your choice of:\n\n* Up to 3-depletion\n* Up to 2-exhaustion\n* Up to 2-injury\n"
  },
  "Threatening Visage": {
    "archetype": "The Ranger",
    "text": "When you **persuade an NPC** with open threats or naked steel, roll with Might instead of Charm."
  },
  "Dirty Fighter": {
    "archetype": "The Ranger",
    "text": "Take two of the following weapon skills: Trick Shot, Confuse Senses, Improvise Weapon, Disarm, Vicious Strike. None of the skills you take with this move count against your maximum for advancement.\n",
    "addSkillChoose": 2,
    "addSkill": [
      "Trick Shot",
      "Confuse Senses",
      "Improvise Weapon",
      "Disarm",
      "Vicious Strike"
    ]
  },
  "Arsonist": {
    "archetype": "The Scoundrel",
    "text": "When you **wreck something** with flagrantly dangerous means (explosives, uncontrolled flame, etc.), roll with Luck instead of Might."
  },
  "Create to Destroy": {
    "archetype": "The Scoundrel",
    "text": "When you use available materials to rig up a dangerous device, roll with Finesse. On a hit, you cobble together something that will do what you want, one time. On a 10+, choose one. On a 7-9, choose two. The device is:\n\n* more dangerous than intended\n* larger or more unwieldy than intended\n* more temperamental and fragile than intended\n\nOn a miss, you need some vital component to finish it; the GM will tell you what.\n"
  },
  "It's a Distraction!": {
    "archetype": "The Scoundrel",
    "text": "You gain the roguish feat Blindside (it does not count against your maximum for advancement). When you **attempt a roguish feat** to blindside someone while they are distracted by environmental dangers (a raging fire, an oncoming flood, etc.), roll with Luck instead of Cunning.",
    "addFeat": [
      "Blindside"
    ]
  },
  "Daredevil": {
    "archetype": "The Scoundrel",
    "text": "You're at your luckiest when you go into danger without hesitation. When you dive into a dangerous situation without forethought or planning, treat yourself as having \"Luck Armor,\" with 1 box of wear (remember, armor is only \"destroyed\" when you would mark another box of wear, and all its boxes are full). The \"Luck armor\" automatically goes away once the danger has passed, and the next time you would have \"Luck armor,\" you gain it as if it was brand new with clear boxes."
  },
  "Danger Mask": {
    "archetype": "The Scoundrel",
    "text": "You have a mask or outfit you wear when you go about your most destructive work\u00e2\u20ac\u201dmore of a calling card, an identifier of \"the real you,\" than a disguise. Treat it as a piece of equipment with two boxes of wear. While you have your mask on, any notoriety you gain is doubled, any prestige you gain is halved, and take +1 to **trust fate** and all Scoundrel playbook moves. If your mask is ever taken from you, mark exhaustion. If your mask is ever destroyed, mark 4-exhaustion. If your mask is destroyed, you can make a new mask when time passes."
  },
  "Better Lucky than Good": {
    "archetype": "The Scoundrel",
    "text": "When you **use a weapon move (basic or skilled)**, mark exhaustion to roll with Luck instead of the listed stat."
  },
  "Breaking and Entering": {
    "archetype": "The Thief",
    "text": "When you **attempt roguish feats** to get into or out of a place you've previously been, you can mark exhaustion to make the move as if you had rolled a 10+, instead of rolling."
  },
  "Disappear Into the Dark": {
    "archetype": "The Thief",
    "text": "When you **slip into shadows while unnoticed**, mark exhaustion and hold 1. As long as you remain quiet, move slowly, and hold 1 for this move, you will remain hidden. If you inadvertently reveal yourself, lose your hold. Spend your hold to reveal yourself from a darkened place, suddenly and without warning. If you attack someone immediately after spending the hold, take +3 on the roll."
  },
  "Rope-a-dope": {
    "archetype": "The Thief",
    "text": "When you **evade and dodge your enemy so as to tire them out**, roll with Finesse. On a hit, you can mark exhaustion to make them mark 2-exhaustion. On a 10+, you can mark exhaustion to make them mark 3-exhaustion. On a miss, they catch you in the middle of a dodge\u00e2\u20ac\u201dyou're at their mercy."
  },
  "Small Hands": {
    "archetype": "The Thief",
    "text": "When you **grapple** with an enemy larger than you, roll with Finesse instead of Might. On a miss, they overpower you\u00e2\u20ac\u201dyou're at their mercy."
  },
  "Master Thief": {
    "archetype": "The Thief",
    "text": "Take +1 Finesse (max +3).",
    "addStat": {
      "finesse": 1
    }
  },
  "Nose For Gold": {
    "archetype": "The Thief",
    "text": "When you figure someone out, you can always ask (even on a miss):\n\n* what is the most valuable thing they are carrying?\n\nWhen you read a tense situation, you can always ask (even on a miss):\n\n* what is the most valuable thing here?\n"
  },
  "Toolbox": {
    "archetype": "The Tinker",
    "text": "You have a kit of tools and supplies with which you work on long-term projects. Choose two features:\n\n* assorted scrap wood\n* assorted gears and springs\n* esoteric hand tools\n* manuals\n* assorted medicines\n* portable alchemy kit\n* sewing kit\n* cookware\n* minor explosives\n\nChoose one drawback:\n* heavy (counts as 2 Load instead of 1)\n* bulky & obvious\n* stolen\n* fragile\n\nWhen you **open up your toolkit and dedicate yourself to making a thing or to getting to the bottom of something**, decide what and tell the GM. The GM will give you between 1 to 4 conditions you must fulfill to accomplish your goal, including time taken, materials needed, help needed, facilities/tools needed, or the limits on the project. When you **accomplish the conditions**, you accomplish the goal.\nThe item will be created when you advance beyond move selection.\n",
    "customItemTag": "toolkit"
  },
  "Repair": {
    "archetype": "The Tinker",
    "text": "When you **repair destroyed personal equipment with your toolbox**, the GM will set one condition as per the toolbox move. Fulfill it, and clear all wear for that equipment. When you **repair damaged personal equipment with your toolkit**, you do it as long as you spend depletion or value, 1 for 1, for each box of wear you clear."
  },
  "Big Pockets": {
    "archetype": "The Tinker",
    "text": "Take two extra boxes of depletion.",
    "addHarm": {
      "depletion": 2
    }
  },
  "Jury Rig": {
    "archetype": "The Tinker",
    "text": "When you create a makeshift device on the fly, roll with Cunning. On a hit, you create a device that works once, then breaks. On a 10+, choose one:\n\n* It works exceptionally well\n* You get an additional use out of it\n\nOn a miss, the device works, but it has an unintended side effect that the GM will reveal when you use it.\n"
  },
  "Nimble Mind": {
    "archetype": "The Tinker",
    "text": "When you **attempt roguish feats** involving mechanisms or locks, mark depletion to roll with Cunning instead of Finesse."
  },
  "Dismantle": {
    "archetype": "The Tinker",
    "text": "When you **dismantle a broken or disabled piece of equipment or machinery**, clear 2 depletion boxes."
  },
  "Instigator": {
    "archetype": "The Vagrant",
    "text": "When you **trick an NPC** into fighting another NPC, you can remove one option from the 7-9 list\u00e2\u20ac\u201dthey cannot choose that option instead of doing what you want."
  },
  "Pleasant Facade": {
    "archetype": "The Vagrant",
    "text": "When you **suck up to or otherwise butter up an unsuspecting NPC**, roll with Charm. On a 10+, hold 3. On a 7-9, hold 2. Spend your hold 1 for 1 to deflect their suspicion or aggression away from you onto someone or something else. On a miss, your attempts at flattery are suspicious\u00e2\u20ac\u201dthey're going to keep their eye on you."
  },
  "Desperate Smile": {
    "archetype": "The Vagrant",
    "text": "When you **trust fate** to see you through by begging, pleading, or abasing yourself, roll with Charm instead of Luck."
  },
  "Charm Offensive": {
    "archetype": "The Vagrant",
    "text": "When you **play upon an enemy's insecurities, concerns, or fears to distract them with words during a fight**, roll with Cunning. On a hit, you create an opening for yourself\u00e2\u20ac\u201dmake any available weapon move against them at +1, or strike quickly and deal injury to them. On a 7-9, you also tick them off; they aren't listening to you anymore, no matter what you do, until the situation drastically changes. On a miss, you infuriate them\u00e2\u20ac\u201dthey come at you, hard, and you're not prepared."
  },
  "Let's Play": {
    "archetype": "The Vagrant",
    "text": "When you **play a game of skill and wit to loosen another's tongue**, roll with Charm. On a hit, they let slip something useful or valuable. On a 7-9, you have to lose the game to get them there; mark one depletion. On a miss, they're better than you ever thought; either mark one depletion and cut your losses, or mark three depletion and they'll start talking."
  },
  "Pocket Sand": {
    "archetype": "The Vagrant",
    "text": "Take the weapon skill Confuse Senses. This does not count against the maximum number of weapon skills you can take. When you **throw something to confuse an opponent's senses at close or intimate range**, roll with Cunning instead of Finesse.",
    "addSkill": [
      "Confuse Senses"
    ]
  },
  "Sterling Reputation": {
    "archetype": "The Adventurer",
    "text": "Whenever you **mark any amount of prestige with a faction**, mark one additional prestige. When you **mark any amount of notoriety with a faction**, you can instead clear an equivalent amount of marked prestige."
  },
  "Subduing Strikes": {
    "archetype": "The Adventurer",
    "text": "When you **aim to subdue an enemy quickly and nonlethally**, you can **engage in melee** with Cunning instead of Might. You cannot choose to inflict serious harm if you do."
  },
  "Talon on the Pulse": {
    "archetype": "The Adventurer",
    "text": "When you gather information about the goings-on in a clearing, roll with Cunning. On a 10+, ask 3. On a 7-9, ask 2.\n\n* Who holds power in this clearing?\n* Who is the local dissident?\n* What are the denizens afraid of?\n* What do the denizens hope for?\n* What opportunities exist for enterprising vagabonds?\n\nOn a miss, your questions tip off someone dangerous.\n"
  },
  "Orator": {
    "archetype": "The Adventurer",
    "text": "When you give a speech to interested denizens of a clearing, say what you are motivating them to do and roll with Charm. On a hit, they will move to do it as they see fit. On a 10+, choose 2. On a 7-9, choose 1.\n\n* They don't try to take your intent too far\n* They don't disband at the first sign of real resistance\n* They don't demand you stand at their head and lead\n\nOn a miss, they twist your message in unpredictable ways.\n"
  },
  "Well-Read": {
    "archetype": "The Adventurer",
    "text": "Take +1 Cunning (max +3).",
    "addStat": {
      "cunning": 1
    }
  },
  "Fast Friends": {
    "archetype": "The Adventurer",
    "text": "When you **try to befriend an NPC you've just met by matching their personality, body language, and desires**, mark exhaustion and roll with Cunning. On a hit, they'll look upon you favorably\u00e2\u20ac\u201dask them any one noncompromising question and they'll answer truthfully, or request a simple favor and they'll do it for you. On a 10+, they really like you\u00e2\u20ac\u201dthey'll share a valuable secret or grant you a serious favor instead. On a miss, you read them totally wrong, and their displeasure costs you."
  },
  "Cross Country": {
    "archetype": "The Harrier",
    "text": "Take one extra box of exhaustion. When **your exhaustion track is full and you must mark exhaustion**, you may choose to mark an equivalent amount of injury instead of being removed from the situation or going unconscious.",
    "addHarm": {
      "exhaustion": 1
    }
  },
  "Fleet of Foot and Hand": {
    "archetype": "The Harrier",
    "text": "Take +1 Finesse (max +3).",
    "addStat": {
      "finesse": 1
    }
  },
  "Don't Shoot the Messenger": {
    "archetype": "The Harrier",
    "text": "Take the Counterfeit roguish feat. (It does not count against your maximum.) When you pretend to be an innocuous messenger carrying a missive of import to **trick** someone, roll with Luck instead of Cunning.",
    "addFeat": [
      "Counterfeit"
    ]
  },
  "Parkour": {
    "archetype": "The Harrier",
    "text": "When you **dash your way through a chaotic scene or fight**, roll with Finesse. On a 10+, hold 3. On a 7-9, hold 2. Spend your hold 1-for-1 to dash to something within sight and reach without being stopped, or to dash away from something nearby without being stopped. You can dash away from an enemy even at the moment they attack. On a miss, your surroundings trip you up, and you're caught in place while danger closes in."
  },
  "Traveller Extraordinaire": {
    "archetype": "The Harrier",
    "text": "When you **travel along the paths to another clearing**, you can always give +1 to the roll or clear 2-exhaustion, your choice. When you **travel through the forest to another clearing**, you can always give +1 to the roll or clear 2-depletion, your choice. In both cases, before you arrive at the next clearing, you can ask the GM any two questions about the next clearing, based on what you remember from your last time through."
  },
  "Smuggler's Path": {
    "archetype": "The Harrier",
    "text": "You've got a good sense for finding secret paths and doors. When you **spend time looking for a secret way in or out of a place that might have one**, mark exhaustion and roll with Luck. On a hit, you find a hidden path\u00e2\u20ac\u201dthe GM will detail it and to where it leads. On a 10+, there's something along or inside the path of value to you\u00e2\u20ac\u201dthe GM will tell you what. On a miss, you find a secret path...and someone else is using it right this second. They probably won't be happy you found their secret."
  },
  "Always Armed": {
    "archetype": "The Ronin",
    "text": "Take the weapon skill Improvise Weapon (it does not count against your limit). When you deal harm with an improvised weapon, deal +1 harm.",
    "addSkill": [
      "Improvise Weapon"
    ]
  },
  "Knowing a Lord's Will": {
    "archetype": "The Ronin",
    "text": "When you **figure out** a denizen of status, authority, or power, roll with Might instead of Charm. When you **trick** a denizen of status, authority, or power by playing subordinate, roll with Might instead of Cunning."
  },
  "Well-Mannered": {
    "archetype": "The Ronin",
    "text": "When you **enter a social environment dependent on manners and etiquette**, roll with Cunning. On a 10+, hold 3. On a 7-9, hold 2. Lose all hold when you leave or when social rules fall apart. Spend hold 1-for-1 to:\n\n* Cover up a social faux pas on behalf of you or an ally; clear 1 exhaustion.\n* Call out someone else's social faux pas; inflict 1-morale harm on them.\n* Charm someone; take +1 ongoing to speak to them while you have hold.\n* Demonstrate your value; mark prestige with a powerful denizen's faction.\n\nOn a miss, the rules of etiquette here are far different from what you expected; mark exhaustion as you commit a gravely impolite error.\n"
  },
  "Fealty": {
    "archetype": "The Ronin",
    "text": "When you **commit yourself to the cause of someone you deem worthy**, swear an oath to them stating what task you will complete on their behalf. Mark exhaustion to reroll a move made in pursuit of that task. You cannot commit yourself to another cause until you accomplish the first, or break your oath. If you break your oath, fill your exhaustion track and mark 4 notoriety with the faction whose trust you betrayed. If you fulfill your oath, mark 4 prestige with the faction whose trust you kept."
  },
  "The Rules of War": {
    "archetype": "The Ronin",
    "text": "When you call upon a reasonable foe to uphold a rule of war, roll with Might. On a hit, they feel obliged; choose one below they must follow. On a 7-9, they choose one that you must follow; disobey, and the obligation ends.\n\n* Show mercy to surrendering foes and prisoners\n* Refrain from underhanded tactics in a fight\n* Face each other without aid, back-up, or assistance\n* Keep the violence away from the unarmed or innocent\n* Fight to surrender or subdual, without retreat\n\nOn a miss, they feel no obligation to your ideas of war; prepare for a brutal lesson in the rules they adhere to.\n"
  },
  "Always Watching": {
    "archetype": "The Ronin",
    "text": "Take +1 Cunning (max +3).",
    "addStat": {
      "cunning": 1
    }
  },
  "Diplomat": {
    "archetype": "The Envoy",
    "text": "You are known across the Woodland as an accomplished diplomat; **you have a track (Diplomat) to reflect your professional reputation**. When you raise your reputation with any faction, raise Diplomat; when you lower your reputation with any faction, lower Diplomat. You cannot lower Diplomat below +0 or raise it above +3.\n\n* Mark exhaustion to use Diplomat when you **ask for a favor** or **meet someone important** for the first time, regardless of the faction of your target.\n* When you **persuade** or **figure** out an important NPC while acting on behalf of another\u00e2\u20ac\u201dnot you or your band\u00e2\u20ac\u201droll with Diplomat instead of Charm.\n"
  },
  "Fancy Meeting You Here": {
    "archetype": "The Envoy",
    "text": "When you **carouse in a popular locale**, roll with Luck. On a hit, you meet an affiliate of a powerful NPC (your choice); take a +1 ongoing against them for the scene. On a 10+, they also let a secret slip about the NPC's plans or offer to introduce you to them on friendly terms. On a miss, someone who is looking for you finds you before you can find a gullible mark."
  },
  "Turncoat": {
    "archetype": "The Envoy",
    "text": "You gain the roguish feat Blindside (it does not count against your maximum for advancement). When you attempt a roguish feat to blindside someone who trusts you, roll with Cunning instead of Finesse.",
    "addFeat": [
      "Blindside"
    ]
  },
  "A Silvered Tongue": {
    "archetype": "The Envoy",
    "text": "Take +1 Cunning (max+3).",
    "addStat": {
      "cunning": 1
    }
  },
  "Trust in Me": {
    "archetype": "The Envoy",
    "text": "When you **soothe or placate an angry NPC**, roll with Cunning. On a hit, you calm their rage. On a 7-9, choose 1. On a 10+, choose 2:\n\n* They reveal an unexpected vulnerability\n* They hesitate in their fury; you create an opportunity\n* They take you further into their confidence\n\nOn a miss, you can only calm them by redirecting their frustrations\n"
  },
  "Kiss the Ring": {
    "archetype": "The Envoy",
    "text": "When you **exit a meeting with someone rich and powerful**, you can say you pocketed a few of their things and roll with Cunning. On a hit, the GM will tell you what valuable or interesting item you snagged. On a 7-9, what you took will be missed, but not until you are long gone; mark notoriety with that faction. On a miss, they're going to notice any second now; mark 2-notoriety with that faction and either run or come up with a good excuse, friend."
  },
  "Small Ship": {
    "archetype": "The Pirate",
    "text": "By default, your ship has a wear track with four boxes. Mark wear when it suffers serious damage or when a move calls for it. When your ship's wear track is filled you are dead in the water and must be repaired at port. If you must mark wear on your ship but its whole track is full, your ship is lost. If you ever lose the ship the GM may present you with an opportunity to get a new one.\n\nBlessings (choose 2):\n\n* stocked: your ship gains a 2-box depletion track of cargo and gear\n* nimble: take +1 ongoing to tricking NPCs when relying on your ship's speed\n* renowned: take +1 to reputation with a faction (your choice) while on your ship\n* swift: once per session, mark wear to outrun any pursuer\n\nFlaws (choose 2):\n\n* dreaded: take +1 to reputation with a faction (your choice) while on your ship\n* rickety: your ship has one fewer box of wear\n* clumsy: take -1 ongoing to trusting fate when piloting your ship carefully\n* stolen: someone dangerous is pursuing you to recover their property\n",
    "customItemTag": "ship"
  },
  "Sail On": {
    "archetype": "The Pirate",
    "text": "When you **travel from clearing to clearing by ship**, mark wear on the ship and roll with Luck. On a hit, you reach the next port; the GM will tell you one friendly denizen you know there. On a 7-9, they are holding a grudge\u00e2\u20ac\u201dwork it out or offer at least 2-value to let things go. On a miss, you are caught in a dangerous situation along your route before you arrive at port."
  },
  "Swashbuckler": {
    "archetype": "The Pirate",
    "text": "When you first charge into battle by swinging, diving, or leaping to **engage an enemy in melee at close range**, roll with Luck instead of Might."
  },
  "X Marks the Spot": {
    "archetype": "The Pirate",
    "text": "When you try to recall the location of buried treasure in your clearing, roll with Luck. On a hit, you remember one such cache. On a 7-9, the location is accessible or private, your choice. On a 10+, both. On a miss, you remember the location, but it is guarded, difficult to reach, and very public."
  },
  "Plenty of Rum": {
    "archetype": "The Pirate",
    "text": "Once per session, you may **plead with a vagabond** a second time in a session by sharing your rum (mark depletion) with the target of your pleading."
  },
  "Sea Legs": {
    "archetype": "The Pirate",
    "text": "When you **attempt a roguish feat** to sneak, hide, or perform acrobatics, roll with Luck instead of Finesse."
  },
  "Eye For Battle": {
    "archetype": "The Raider",
    "text": "When you **read a tense situation** just as violence breaks out, roll with Might instead of Cunning."
  },
  "Ironhide": {
    "archetype": "The Raider",
    "text": "Once per session, you can **mark exhaustion to ignore a blow that would usually inflict injury upon you**. You cannot mark exhaustion to avoid injury so long as you could mark wear on your armor to avoid the injury instead."
  },
  "Loot and Plunder": {
    "archetype": "The Raider",
    "text": "When you **loot a rich area for valuables**, roll with Finesse. On a hit, something out of the ordinary catches your eye; claim it and it's yours. On a 10+ all 3. on a 7-9 choose 1:\n\n* It is worth a lot of money (+2-value)\n* It is of special value to a particular faction (+4 prestige if traded to them)\n* It is extremely durable (+1-wear)\n\nOn a miss, you can get your hands on it, but it is sought by dangerous denizens who are all too willing to kill to take it from whoever possesses it.\n"
  },
  "Merciful Might": {
    "archetype": "The Raider",
    "text": "When you **try to befriend an NPC you've saved from the wrath of another**, spend time helping them further (mark exhaustion) or buy them a drink (mark depletion). Your continued kindness pays dividends; they'll share a valuable secret or grant you a serious favor."
  },
  "Plan of Attack": {
    "archetype": "The Raider",
    "text": "When you **work out a plan of attack with someone**, roll with Might. On a 10+, hold 3. On a 7-9, hold 2. You can spend your hold 1-for-1, regardless of distance, while the plan is being carried out to:\n\n* Lend a hand; add +1 to someone's roll (choose after rolling)\n* Soften a blow; reduce by one the harm someone suffers from a single attack\n* Ensure your gear holds; allow someone to ignore marking depletion\n\nOn a miss, hold 1, but your plan encounters some disastrous opposition right from the start.\n"
  },
  "Fearsome Visage": {
    "archetype": "The Raider",
    "text": "You can **make a pointed threat** or **publicly draw attention to yourself** as an enemy of a faction when you have a Reputation of 0 or lower with that faction, not just the usual -3 or -2 reputation required. Remember, you roll as if your negative reputation was positive, so a -1 Reputation becomes a +1 for the roll and a 0 remains a 0."
  },
  "Take Up the Call": {
    "archetype": "The Champion",
    "text": "Name two non-denizen factions: declare one to be the best hope for the Woodland (_The Just_) and the other evil tyrants (_The Enemy_). Take +1 ongoing to protect members of the Just or harm agents of the Enemy. You may switch which factions you consider to be the Just or the Enemy at the end of any session by clearing all prestige from the faction which no longer inspires you; your reputation with both factions remains the same. Choose a role you often fill as a champion:\n\n\n  * **Luminary**: When you **persuade an NPC** to fight for the Just or resist the charms of the Enemy, roll with Might instead of Charm.\n\n  * **Paladin**: When you inflict harm on the Enemy, inflict 1 additional harm when you suffer harm protecting the Just, suffer 1 fewer harm.\n\n  * **Emissary**: When you mark prestige with the Just, mark an additional prestige. When you mark notoriety with the Enemy, mark an additional notoriety.\n"
  },
  "Of the People": {
    "archetype": "The Champion",
    "text": "When your band **travels down a path at a relaxing pace**, roll with +1 instead of -1. On a hit, you encounter friendly faces on the journey who offer food and assistance; your band marks half as much depletion as normal. On a 7-9, the characters you meet are in a bit of trouble; they expect you to lend a hand. On a miss, a dangerous foe committed to ending your \"righteousness\" catches you (and your friends) unaware and unprepared.\n"
  },
  "Skill Against Skill Alone": {
    "archetype": "The Champion",
    "text": "When you **grapple with an enemy** and roll a 12+, you may take their blows to incapacitate them; suffer their full harm to fill their exhaustion or injury track.\n"
  },
  "A Just Cause": {
    "archetype": "The Champion",
    "text": "When you **threaten an authority** on behalf of the downtrodden, mark notoriety with the authority's faction and roll with Might. On a hit, the force of your defiance unnerves them; they must make a concession right now to your cause or openly attack you. On a 10+, your words are inspirational; you and your allies take a +1 ongoing against them and their allies if they attack you. On a miss, the authority reveals that the cause you champion is not as just as you were led to believe.\n"
  },
  "Raw Force": {
    "archetype": "The Champion",
    "text": "Take one of the following weapon skills: _Disarm_ or _Parry_. It does not count against your maximum. When you use either weapon skill, you can mark exhaustion to roll with Might.\n",
    "addSkillChoose": 1,
    "addSkill": [
      "Disarm",
      "Parry"
    ]
  },
  "Friends Indeed": {
    "archetype": "The Heretic",
    "text": "When you **first seek out those who share your cause** after arriving in a clearing, roll with Charm. On a hit, you find one or two; they provide what they can in service to your collective work. On a 7-9, they also tell you about a threat to your shared ideology that has arisen in the clearing. On a miss, you are caught by someone in the clearing who openly despises your kind.\n"
  },
  "Hear Me!": {
    "archetype": "The Heretic",
    "text": "When you **give an inspiring speech to a persuadable crowd** in the service of your cause, mark exhaustion and roll with Charm. On a hit, you sway them; pick 2. On a 7-9, you must put yourself at the crowd's mercy and lead them directly for them to follow through.\n\n* They tear down an opposing symbol\n* They overthrow a vulnerable tyrant\n* They destroy the trappings of tradition\n* They elevate someone overlooked\n* They deliver justice to the wicked\n\nOn a miss, the crowd is moved to action but ignores your guidance, leading to terrible consequences.\n"
  },
  "Destroy Something Beautiful": {
    "archetype": "The Heretic",
    "text": "When you **wreck a false idol or symbol of oppression** alongside your allies, roll with Charm instead of Might; you and all your allies clear an exhaustion, even on a miss.\n"
  },
  "Devilish Charm": {
    "archetype": "The Heretic",
    "text": "When you **trick an NPC** you've previously aided or impressed, mark exhaustion to make the move as if you had rolled a 12+, instead of rolling.\n"
  },
  "Center of the Universe": {
    "archetype": "The Heretic",
    "text": "Take +1 Charm (max +3).\n",
    "addStat": {
      "charm": 1
    }
  },
  "You Shall Not Pass": {
    "archetype": "The Heretic",
    "text": "When you plant yourself in the way of your enemies, roll with Charm. On a hit, your foes cannot get past you until they take you down\u00e2\u20ac\u201dbrace yourself. On a 10+ choose 1. On a 7-9, choose 2:\n\n* You suffer +1 harm from all your enemies' attacks\n* A single enemy (GM's choice) slips past you\n* You cannot retreat from your position\n\nOn a miss, your enemies find or create a new way past you that makes your situation far worse.\n"
  },
  "Heirloom Weapon": {
    "archetype": "The Prince",
    "text": "Your parents bestowed a family heirloom upon you\u00e2\u20ac\u201dit has 4 boxes of wear, and its value is functionally priceless to you. If the weapon is ever destroyed, the GM will tell you what tasks you must undertake to restore it.\n\n* Choose a weapon type: dagger, axe, hammer, sword, spear, crossbow, bow\n* Choose an appropriate range: intimate, close, far\n* Choose two features:\n\n  * **Reliable**: +2 boxes of wear and an additional range\n\n  * **Feared**: When you engage in combat against foes who recognize this weapon, inflict morale harm on them\n\n  * **Deadly**: When you inflict harm with this weapon, inflict +1 harm\n\n  * **Double-headed**: One edge inflicts injury, the other exhaustion. Declare which side you use at the start of a fight\n\n  * **Flexible**: Choose 2 weapon skill tags for this weapon\n\n  * **Unique**: Your weapon is of unusual design; once per session, mark exhaustion to ignore the harm inflicted on you by a single attack\n\n  * **Rousing**: After you successfully inflict injury on a dangerous enemy, mark wear to clear exhaustion from every ally who saw you land the blow\n",
    "customItemTag": "heirloom"
  },
  "Legacy": {
    "archetype": "The Prince",
    "text": "When you **meet someone important** for the first time, mark your legacy track to take a 10+ instead of rolling. When your legacy track is full, tell the GM, clear the track, and roll. Take +1 for each \"yes\" to the following questions:\n\n* Are you in a clearing?\n* Is anyone looking for you?\n* Do you have +2 or -2 Reputation with at least one faction?\n\nOn a hit, someone with unfinished business with your parents finds you. On a 10+, they arrive without warning. On a miss, an ordinary denizen warns you about someone who might seek you out; mark your legacy track.\n"
  },
  "One of Us": {
    "archetype": "The Prince",
    "text": "When you try to **figure out** or **persuade** vagabonds, bandits, revolutionaries, or outcasts, roll with Luck instead of Charm.\n"
  },
  "Tall Tales": {
    "archetype": "The Prince",
    "text": "When you attempt to impress a crowd with a wild story, roll with Luck. On a hit, the crowd is moved; everyone in your band takes +1 ongoing to **persuade** or **trick someone** in line with the story. On a 10+, someone foolish even approaches you with profitable work! On a miss, your stories attract someone in desperate need of help you're not equipped to give.\n"
  },
  "No Jail Can Hold Me": {
    "archetype": "The Prince",
    "text": "Take the roguish feat _pick lock_. It doesn't count against your maximum. When you attempt to escape confinement, mark exhaustion to shift a miss to a 7-9.\n",
    "addSkillChoose": 1,
    "addSkill": [
      "Pick Lock"
    ]
  },
  "Favored": {
    "archetype": "The Prince",
    "text": "Take +1 Luck (max +3).\n",
    "addStat": {
      "luck": 1
    }
  },
  "Tools of the Trade": {
    "archetype": "The Raconteur",
    "text": "You have a valued (at least to you) symbol of your skill and talent; it starts with 3 boxes of wear and its value is essentially priceless to you.\nWhen you **first put on an earnest, public performance in a clearing**, roll with Charm. On a hit, name a faction you flatter; an important member comes forward to offer you work. On a 10+, mark prestige with their faction as well. On a miss, you draws the worst kind of attention to you and your friends.\n\n* Choose a type: musical instrument, poetry book, unique costume, stage prop\n* Choose a look: battered, fancy, delicate, stained, pristine\n* Choose three features:\n\n  * **Sturdy**: +2 boxes of wear; when you tend to your symbol after a public performance, clear a box of wear.\n\n  * **Enchanting**: mark wear instead of exhaustion to add +2 when you **help** another vagabond by distracting someone with your performance.\n\n  * **Versatile**: choose two equipment tags for your symbol.\n\n  * **Revealing**: when you perform in public, mark wear to ask any one character who watched \"what truly motivates your character?\", take +1 when acting on the answer.\n\n  * **Pleasant**: when you perform for your band while traveling on a path, mark wear to clear up to 2 additional exhaustion from each vagabond.\n",
    "customItemTag": "symbol"
  },
  "Adoring Fans": {
    "archetype": "The Raconteur",
    "text": "When you **first enter a clearing**, roll with Charm. On a hit, a fan recognizes you; they relate gossip, offer a place to stay, and show your band around. On a 10+, your fan will go even further to help you. On a miss, you meet a fan with good intentions who immediately makes your situation much, much worse.\n"
  },
  "All Eyes on Me": {
    "archetype": "The Raconteur",
    "text": "When you **create a distraction through outlandish performance**, mark exhaustion and roll with Charm. On a hit, the room can't look away; your allies take +1 ongoing to _sneak_, _hide_, _pickpocket_, or _trust fate_ while you perform. On a 10+, hold 1; spend the hold to grant an ally a +3 for one of the aforementioned rolls instead. On a miss, your audience finds something about your performance insulting or misguided; they fall over themselves to give you their opinion.\n"
  },
  "Quick Fingers, Quicker Eyes": {
    "archetype": "The Raconteur",
    "text": "When you **read a tense situation** while performing, you may always ask one question, even on a miss.\n"
  },
  "Silver Tongue": {
    "archetype": "The Raconteur",
    "text": "When you **persuade an NPC** with a colorful anecdote, mark exhaustion on a hit to make them reveal something important and relevant about the situation\n"
  },
  "Sweet as Honey": {
    "archetype": "The Raconteur",
    "text": "Take +1 Charm (max +3).\n",
    "addStat": {
      "charm": 1
    }
  }
};