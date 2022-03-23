let skills = {
  "Battle Fury": {
    "text": "When you **fling yourself into a fury of weapon, tooth, and claw in an all-out attack at intimate range**, mark wear on your weapon and roll with Luck. On a hit, fill your exhaustion track. For each box you mark, inflict 2-injury on your target. On a 7-9, your target also inflicts their harm upon you. This move does not require the weapon to be tagged with intimate range; weapons with close range may also be used.\n",
    "allowItem": [
      "Weapon"
    ],
    "allowRange": [
      "intimate",
      "close"
    ]
  },
  "Charge": {
    "text": "When you **charge at an opponent at far range**, mark exhaustion and roll with Might. On a hit, they must choose to either mark 2-exhaustion or allow you to push them\u00e2\u20ac\u201dyou say where they are driven, and you say what range you now stand at. On a 10+, inflict morale harm on them as well.\n",
    "allowItem": [
      "weapon"
    ],
    "allowRange": [
      "intimate",
      "close"
    ]
  },
  "Cleave": {
    "text": "When you **cleave armored foes at close range**, mark exhaustion and roll with Might. On a hit, you smash through their defenses and equipment; inflict 3-wear. On a 7-9, you overextend your weapon or yourself: mark wear or end up in a bad spot, your choice.\n",
    "mastery": "On a 12+, you inflict 6-wear instead. Any excess wear instead becomes injury or exhaustion (your choice) dealt to your foes.",
    "allowItem": [
      "Weapon"
    ],
    "allowRange": [
      "close"
    ]
  },
  "Confuse Senses": {
    "text": "When you **throw something to confuse an opponent's senses at close or intimate range**, roll with Finesse. On a hit, you've thrown them off balance, blinded them, deafened them, or confused them, and given yourself an opportunity. On a 10+, they have to take some time to get their bearings and restore their senses before they can act clearly again. On a 7-9, you have just a few moments.",
    "mastery": "On a 12+, choose one:\n\n* you successfully confuse the senses of a whole group; apply the results of the 10+ move to any foes you choose in range\n* you knock a single foe so off-kilter you can take them out exactly as you choose right now, without triggering any move\n"
  },
  "Disarm": {
    "text": "When you target an opponent's weapon with your strikes at close range, roll with Finesse. On a hit, they have to mark 2-exhaustion or lose their weapon\u00e2\u20ac\u201dit's well out of reach. On a 10+, they have to mark 3-exhaustion instead of 2.",
    "mastery": "On a 12+, your opponent both marks 3-exhaustion and loses their weapon.",
    "allowItem": [
      "Weapon",
      "Bow"
    ],
    "allowRange": [
      "close"
    ]
  },
  "Hammerpaws": {
    "text": "When you **come to blows with an armed opponent at close or intimate range while you are unarmed**, roll with Finesse. On a hit, they inflict their harm on you. On a 7-9, choose 2. On a 10+, choose 3.\n\n* you inflict 2-exhaustion on your opponent\n* you shift your range one step\n* you deflect some of their incoming blows; suffer little (-1) harm\n* you inflict wear on their equipment with precise strikes\n* you take an object from them; they must mark exhaustion to stop you\n",
    "allowItem": [],
    "allowRange": [
      "close"
    ]
  },
  "Harry": {
    "text": "When you **harry a group of enemies at far range**, mark wear and roll with Cunning. On a 10+, both. On a 7-9, choose 1:\n\n* inflict 2-morale harm\n* they are pinned or blocked\n",
    "mastery": "On a 12+, in addition to the results of the 10+, you inflict an additional 2-injury or 2-morale, your choice.",
    "allowItem": [
      "Bow",
      "Weapon"
    ],
    "allowRange": [
      "far"
    ]
  },
  "Hurl": {
    "text": "When you **hurl a weapon or dangerous object not intended for throwing at an enemy at far range**, mark exhaustion and roll with Might. On a hit, your hurled weapon strikes your target; mark wear on the weapon and inflict 1-injury and 1-exhaustion on your target. On a 7-9, choose 1. On a 10+, choose 2.\n\n* mark an additional wear on the hurled item to inflict an additional 1-injury\n* the hurled item rebounds to somewhere reachable, instead of out of sight or out of reach\n* your target is knocked off their feet by the throw\n",
    "allowItem": [
      "Bow",
      "Weapon"
    ]
  },
  "Improvise Weapon": {
    "text": "When you **make a weapon out of improvised materials around you**, roll with Cunning. On a hit, you make a weapon; the GM will tell you its range tag and at least one other tag based on the materials you used. On a 7-9, the weapon also has a weakness tag.\n",
    "mastery": "On a 12+, you may choose your weapon's range and two beneficial tags it bears (as long as they make sense to the item).",
    "allowItem": [],
    "allowRange": []
  },
  "Long Shot": {
    "text": "When you **pull hard on your bow's draw to extend its range beyond far**, mark wear and exhaustion to roll any far range weapon move (**target someone**, **pinpoint shot**, etc.) with Might instead of the move's normal stat, paying the additional cost(s) of the weapon move as well. **This weapon skill requires your weapon to be tagged with far range, this skill, and the tag for whatever weapon move you are using (if needed).**\n",
    "allowItem": [
      "Bow"
    ],
    "allowRange": [
      "far"
    ]
  },
  "Lunge": {
    "text": "When you **make an outright lunge at a foe within close range**, choose an amount of injury between 1-injury and 3-injury and roll with Finesse. On a hit, you inflict that amount of injury\u00e2\u20ac\u201dignoring armor\u00e2\u20ac\u201dbut if your target survives (or if other foes are present) they can take advantage of your over-extension to inflict the same amount on you. On a 7-9, they can inflict 1-injury more upon you than you had originally chosen to inflict upon them.\n",
    "allowItem": [
      "Weapon"
    ],
    "allowRange": [
      "close"
    ]
  },
  "Paired Fighting": {
    "text": "When you and another vagabond **pair fight back to back against foes at close range**, you each mark exhaustion and one of you rolls with the following modifiers (max +3):\n\n* +1 if you have a connection with each other\n* +1 if you are outnumbered\n* +1 for every 2 additional exhaustion you mark between the two of you\n\nOn a hit, you together inflict 1-injury on every foe within close range (or 3-injury total against a group), and you each suffer 1-injury. On a 7-9, choose 1. On a 10+, choose 2.\n\n* you each suffer little (-1) harm\n* you inflict an additional 2-injury to any single target (including a single group) of your choice\n* you inflict 2-morale harm\n* you create a path for the two of you to retreat or advance\n",
    "allowItem": [
      "Weapon"
    ],
    "allowRange": [
      "close"
    ]
  },
  "Parry": {
    "text": "When you **try to parry the attacks of an enemy at close range**, mark exhaustion and roll with Finesse. On a hit, you consume their attention. On a 10+, pick 3. On a 7-9, pick 1.\n\n* you inflict morale or exhaustion (GM's choice)\n* you disarm your opponent; their weapon is out of hand, but in reach\n* you don't suffer any harm\n",
    "mastery": "On a 12+, in addition to the results of the 10+, you can immediately riposte, choosing one:\n\n* you inflict 2-injury with a strike that pierces their defenses; they cannot absorb the injury with armor\n* you inflict 2-morale with an insulting line or gesture that demeans them\n* you inflict 2-exhaustion with a quick punch or blow intended to disorient and knock them out\n",
    "allowItem": [
      "Weapon",
      "Bow"
    ],
    "allowRange": [
      "close"
    ]
  },
  "Pinpoint Shot": {
    "text": "When you **take the time to fire a shot at far range with pinpoint accuracy**, roll with Cunning. On a hit, you put the shot exactly where you choose:\n\n* if you target an NPC's weak point, inflict 3-injury (unblockable by armor)\n* if you target a piece of equipment's weak point, inflict 2-wear\n* if you target something in the environment, you strike it, cut it, or break it as appropriate\n\nOn a 7-9, your current vantage point isn't quite right; you need to move to a better one before you can make the perfect shot. Mark exhaustion to scramble there, and then choose as normal.\n",
    "allowItem": [
      "Bow"
    ],
    "allowRange": [
      "far"
    ]
  },
  "Point-Blank Shot": {
    "text": "When you **fire a shot at point-blank range (intimate range)**, mark any combination of up to 2-wear and up to 2-exhaustion, and roll with Luck. On a hit, you put your shot into your target; inflict injury equivalent to the wear and exhaustion you marked, combined. On a 10+, you can also skip back after your shot, moving to close range before your opponent can grab you or otherwise retaliate. **Your weapon does not need to be tagged with intimate range to use this weapon skill.**\n",
    "allowItem": [
      "Bow"
    ],
    "allowRange": [
      "intimate",
      "close",
      "far"
    ]
  },
  "Quick Shot": {
    "text": "When you **fire a snap shot at an enemy at close range**, roll with Luck. On a hit, inflict injury. On a 7-9, choose 1. On a 10+, choose 2.\n\n* you don't mark wear\n* you don't mark exhaustion\n* you move quickly and change your position (and, if you choose, range)\n* you keep your target at bay\u00e2\u20ac\u201dthey don't move\n",
    "mastery": "On a 12+, take all four options from the list and inflict 2-injury instead of 1-injury.",
    "allowItem": [
      "Bow"
    ],
    "allowRange": [
      "close"
    ]
  },
  "Storm a Group": {
    "text": "When you storm a group of foes in melee, mark exhaustion and roll with Might. On a hit, trade harm. On a 10+, choose 2. On a 7-9, choose 1.\n\n* you show them up; you inflict 2-morale\n* you keep them off balance and confused; you inflict 2-exhaustion\n* you avoid their blows to the best of your ability; you suffer little (-1) harm.\n* you use them against each other; mark exhaustion again and they inflict their harm against themselves\n",
    "mastery": "On a 12+, take all four options from the list and choose one for double effect.",
    "allowItem": [
      "Weapon"
    ],
    "allowRange": [
      "close"
    ]
  },
  "Switch Hands": {
    "text": "When you shift your grip to change your dominant hand in the middle of an extended bout with a foe, roll with Finesse. On a 7-9, choose 1. On a 10+, choose 2:\n\n* your new dominant hand is fresher; clear 2-exhaustion\n* your opponent is startled by the shift; they mark morale harm\n* your shift gives you an immediate opportunity; mark exhaustion to seize it and inflict 2-injury\n",
    "allowItem": [
      "Bow",
      "Weapon"
    ],
    "allowRange": [
      "intimate",
      "close",
      "far"
    ]
  },
  "Trick Shot": {
    "text": "When you **fire a clever shot designed to take advantage of the environment**, mark wear and roll with Finesse. On a 7-9, choose 2. On a 10+, choose 3.\n\n* your shot lands in any target of your choice within range, even if it's behind cover or hidden (inflicting injury or wear if appropriate)\n* your shot strikes a second available target of your choice\n* your shot cuts something, breaks something, or knocks something over, your choice\n* your shot distracts an opponent and provides an opportunity\n",
    "mastery": "On a 12+, take all four options from the list, and your shot strikes a third available target of your choice.",
    "allowItem": [
      "Bow"
    ],
    "allowRange": [
      "far",
      "close",
      "intimate"
    ]
  },
  "Vicious Strike": {
    "text": "When you **viciously strike an opponent where they are weak at intimate or close range**, mark exhaustion and roll with Might. On a hit, they suffer serious (+1) harm and cannot mark wear on their armor to block it. On a 10+, you get away with the strike. On a 7-9, they score a blow against you as well.\n",
    "mastery": "On a 12+, in addition to the results of the 10+, you strike them so well you incapacitate them, choosing one from the list:\n\n* they cannot change position\u00e2\u20ac\u201dfleeing, advancing, maneuvering, etc.\u00e2\u20ac\u201d until they receive medical aid\n* they cannot wield a weapon until they receive medical aid\n* they cannot communicate until they receive medical aid\n",
    "allowItem": [
      "Weapon",
      "Bow"
    ],
    "allowRange": [
      "intimate",
      "close"
    ]
  }
};