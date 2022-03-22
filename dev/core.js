let classProperties = {
	'adventurer': {
		'title': 'Adventurer',
		'suggested species': ['Fox', 'Mouse', 'Rabbit', 'Bird', 'Owl'],
		'drives start': ['ambition', 'clean paws', 'principles', 'justice'],
		'drives choose': 2,
		'natures': ['extrovert', 'peacemaker'],
		'connections': ['partner', 'friend'],
		'stats': [2,1,0,0,-1],
		'bonus': 1,
		'roguish feats start': ['Counterfeit', 'Sleight of Hand'],
		'roguish feats choose': 2, 
		'weapon skills start': ['Parry', 'Disarm', 'Harry', 'Improvise'],
		'weapon skills choose': 1,
		'moves start': ['Sterling Reputation', 'Subduing Strikes', 'Talon on the Pulse', 'Orator', 'Well-Read', 'Fast Friends'],
		'moves choose': 3,
		'equipment start value': 9
	},
	'arbiter': {
		'title': 'Arbiter',
		'suggested species': ['Fox', 'Mouse', 'Rabbit', 'Bird', 'Badger'],
		'drives start': ['justice', 'principles', 'loyalty', 'protection'],
		'drives choose': 2,
		'natures': ['defender', 'punisher'],
		'connections': ['protector', 'partner'],
		'stats': [1,0,0,-1,2],
		'bonus': 1,
		'roguish feats start': 'any',
		'roguish feats choose': 1,
		'weapon skills start': ['Cleave', 'Parry', 'Disarm', 'Storm a Group'],
		'weapon skills choose': 1,
		'moves start': ['Brute', 'Carry a Big Stick', 'Crash and Smash', 'Hardy', 'Strong Draw', 'Guardian'],
		'moves choose': 3,
		'equipment start value': 10
	},
	'harrier': {
		'title': 'Harrier',
		'suggested species': ['Fox', 'Mouse', 'Rabbit', 'Bird', 'Squirrel'],
		'drives start': ['crime', 'discovery', 'infamy', 'wanderlust'],
		'drives choose': 2,
		'natures': ['dutiful', 'competitive'],
		'connections': ['professionel', 'friend'],
		'stats': [0,-1,2,1,0],
		'bonus': 1,
		'roguish feats start': ['Acrobatics', 'Sneak'],
		'roguish feats choose': 2,
		'weapon skills start': ['Quick Shot', 'Disarm', 'Harry', 'Trick shot'],
		'weapon skills choose': 1,
		'moves start': ['Cross Country', 'Fleet of Foot and Hand', 'Don\'t Shoot the Messenger', 'Parkour', 'Traveler Extraordinaire', 'Smuggler\'s Path'],
		'moves choose': 3,
		'equipment start value': 9
	}
};

let driveOptions = {
	'ambition': {
		'title': 'Ambition',
		'rule': 'Advance when you increase your reputation with any faction.'
	},
	'clean paws': {
		'title': 'Clean Paws',
		'rule': 'Advance when you accomplish an illicit, criminal goal while maintaining a believable veneer of innocence.'
	},
	'principles': {
		'title': 'Principles',
		'rule': 'Advance when you express or embody your moral principles at great cost to yourself or your allies.'
	},
	'justice': {
		'title': 'Justice',
		'rule': 'Advance when you achieve justice for someone wronged by a powerful, wealthy, or high-status individual.'
	}
};
let natureOptions = {
	'extrovert': {
		'title': 'Extrovert',
		'rule': 'Clear your exhaustion track when you share a moment of real warmth, friendship, or enjoyment with someone.'
	},
	'peacemaker': {
		'title': 'Peacemaker',
		'rule': 'Clear your exhaustion track when you resolve a dangerous conflict nonviolently.'
	}
};
let connectionOptions = {
	'partner': {
		'title': 'Partner',
		'story': '{name} and I fought alongside each other to defend a clearing from a faction’s advances...but we failed. Why did we defend the clearing? Why did we fail? Who defeated us?',
		'rule': 'When you fill in this connection, you each mark 2-prestige with the faction you helped, and mark 2-notoriety with the faction you harmed. During play, if you are spotted together, then any prestige or notoriety gains with those factions are doubled for the two of you.'
	},
	'friend': {
		'title': 'Friend',
		'story': 'I traveled with {name} for a time right after I became a vagabond. They helped keep me safe and showed me the Woodland. What keepsake did I gift them?',
		'rule': 'When you help them, you can mark 2-exhaustion to give a +2, instead of 1-exhaustion for a +1.'
	}
};
let roguishFeatOptions = ['Acrobatics', 'Pickpocket', 'Blindside', 'Sneak', 'Counterfeit', 'Pick Lock', 'Disable Device', 'Sleight of Hand', 'Hide'];
let WeaponSkillOptions = ['Cleave', 'Parry', 'Confuse Senses', 'Quick Shot', 'Disarm', 'Storm a Group', 'Harry', 'Trick Shot', 'Improvise', 'Vicious Strike'];
let moveOptions = {
	'cross country': 'test'
}

// General functions
function get_repeating_key(ev) { return ev.sourceAttribute.split("_")[2]; }
