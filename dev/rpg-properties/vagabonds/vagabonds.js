let vagabonds = {
  "adventurer": {
    "archetype": "The Adventurer",
    "description": "You are a peaceful, diplomatic vagabond, making allies from those you aid, perhaps toppling greater powers by forging strong bonds with others from yourself.",
    "species": [],
    "adjectives": [
      "formal",
      "colorful",
      "multicultural",
      "simple"
    ],
    "items": [
      "medal of service",
      "beaded jewelry",
      "carved flute",
      "pouches with pretty stones"
    ],
    "demeanor": [
      "charming",
      "diplomatic",
      "agreeable",
      "stern"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I want to help the Woodland"
          },
          {
            "text": "I want to explore the Woodland"
          },
          {
            "text": "I believe the current factions should be overturned"
          },
          {
            "text": "I must keep a promise to a loved one"
          },
          {
            "text": "I want freedom from society's constraints"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My mentor"
          },
          {
            "text": "My family"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My student"
          },
          {
            "text": "My greatest ally"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Ambition"
      },
      {
        "name": "Clean Paws"
      },
      {
        "name": "Principles"
      },
      {
        "name": "Justice"
      }
    ],
    "natures": [
      {
        "name": "Extrovert"
      },
      {
        "name": "Peacemaker"
      }
    ],
    "connections": [
      {
        "name": "Partner",
        "text": "_ and I fought alongside each other to defend a clearing from a faction's advances...but we failed. Why did we defend the clearing? Why did we fail? Who defeated us?"
      },
      {
        "name": "Friend",
        "text": "I traveled with _ for the time right after I became a vagabond. They helped keep me safe and showed me the Woodland. What keepsake did I gift them?"
      }
    ],
    "stats": {
      "charm": 2,
      "cunning": 1,
      "finesse": 0,
      "luck": 0,
      "might": -1
    },
    "startingValue": 9,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Counterfeit"
      },
      {
        "name": "Sleight of Hand"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Parry"
      },
      {
        "name": "Improvise Weapon"
      },
      {
        "name": "Harry"
      },
      {
        "name": "Disarm"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Sterling Reputation"
      },
      {
        "name": "Subduing Strikes"
      },
      {
        "name": "Talon on the Pulse"
      },
      {
        "name": "Orator"
      },
      {
        "name": "Well-Read"
      },
      {
        "name": "Fast Friends"
      }
    ]
  },
  "arbiter": {
    "archetype": "The Arbiter",
    "description": "You are a powerful, obstinate vagabond, serving as somewhere between a mercenary and a protector, perhaps taking sides too easily in the greater conflict between the factions.",
    "species": [],
    "adjectives": [
      "large",
      "scarred",
      "well-groomed",
      "old"
    ],
    "items": [
      "faded military jacket",
      "eyepatch",
      "repaired clothes",
      "tarnished locket"
    ],
    "demeanor": [
      "intimidating",
      "honest",
      "brusque",
      "open"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I'm being hunted by a powerful official"
          },
          {
            "text": "I wish to make up for a past transgression"
          },
          {
            "text": "I want to fight injustice"
          },
          {
            "text": "I must clear my tarnished name"
          },
          {
            "text": "I have been exiled from most clearings"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My peer and friend"
          },
          {
            "text": "My family"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My ward"
          },
          {
            "text": "My commander"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Justice"
      },
      {
        "name": "Principles"
      },
      {
        "name": "Loyalty"
      },
      {
        "name": "Protection"
      }
    ],
    "natures": [
      {
        "name": "Defender"
      },
      {
        "name": "Punisher"
      }
    ],
    "connections": [
      {
        "name": "Partner",
        "text": "_ and I together helped a faction take control of a clearing, and share responsibility for it."
      },
      {
        "name": "Protector",
        "text": "I once protected _ from a mortal blow during a fight, and I would do it again. Why?"
      }
    ],
    "stats": {
      "charm": 1,
      "cunning": 0,
      "finesse": 0,
      "luck": -1,
      "might": 2
    },
    "startingValue": 10,
    "chooseFeats": 1,
    "feats": [],
    "numSkills": 1,
    "skills": [
      {
        "name": "Cleave"
      },
      {
        "name": "Parry"
      },
      {
        "name": "Storm a Group"
      },
      {
        "name": "Disarm"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Brute"
      },
      {
        "name": "Carry a Big Stick"
      },
      {
        "name": "Crash & Smash"
      },
      {
        "name": "Hardy"
      },
      {
        "name": "Strong Draw"
      },
      {
        "name": "Guardian"
      }
    ]
  },
  "champion": {
    "archetype": "The Champion",
    "description": "You are a would-be hero and legend, a defender of the innocent and a standard-bearer of lost causes. Yours is the heroic narrative, even if you sometimes oversimplify things.",
    "species": [],
    "adjectives": [
      "stout",
      "focused",
      "disheveled",
      "vain"
    ],
    "items": [
      "ornate belt",
      "heirloom ring",
      "poetry book",
      "token of chivalry"
    ],
    "demeanor": [
      "gruff",
      "thoughtful",
      "dramatic",
      "kind"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I seek justice for all the Woodland"
          },
          {
            "text": "I wish to become a legend across many clearings"
          },
          {
            "text": "My enemies will burn any home I try to make"
          },
          {
            "text": "I have sworn to redeem a lost or failed cause"
          },
          {
            "text": "I am running from a terrible secret"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My spouse"
          },
          {
            "text": "My mentor"
          },
          {
            "text": "My best friend"
          },
          {
            "text": "My ward"
          },
          {
            "text": "My command"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Justice"
      },
      {
        "name": "Principles"
      },
      {
        "name": "Loyalty"
      },
      {
        "name": "Ambition"
      }
    ],
    "natures": [
      {
        "name": "Advocate"
      },
      {
        "name": "Exemplar"
      }
    ],
    "connections": [
      {
        "name": "Protector",
        "text": "_ is a true hero, someone whom even I look up to for their moral clarity. What did they do that convinced me of their righteousness?"
      },
      {
        "name": "Family",
        "text": "_ and I are more-or-less siblings after years spent in each other's company. Why have we struggled to get along in the past?"
      }
    ],
    "stats": {
      "charm": 1,
      "cunning": -1,
      "finesse": -1,
      "luck": 1,
      "might": 2
    },
    "startingValue": 11,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Sleight of Hand"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Cleave"
      },
      {
        "name": "Quick Shot"
      },
      {
        "name": "Storm a Group"
      },
      {
        "name": "Trick Shot"
      }
    ],
    "numMoves": 2,
    "defaultMoves": [
      "Take Up the Call"
    ],
    "moves": [
      {
        "name": "Take Up the Call"
      },
      {
        "name": "Of the People"
      },
      {
        "name": "Skill Against Skill Alone"
      },
      {
        "name": "A Just Cause"
      },
      {
        "name": "Raw Force"
      }
    ]
  },
  "chronicler": {
    "archetype": "The Chronicler",
    "description": "You are a sage who honors history and the written word, keeper of lost, banned, or forbidden texts of truths the great Woodland powers would rather be forgotten.",
    "species": [],
    "adjectives": [
      "fastidious",
      "rumpled",
      "proper",
      "colorful"
    ],
    "items": [
      "old scrolls",
      "letter of introduction",
      "small glasses",
      "vest with secret pockets"
    ],
    "demeanor": [
      "clumsy",
      "endearing",
      "sly",
      "thoughtful"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I seek the Woodland's secrets"
          },
          {
            "text": "I swore an oath to record true, unbiased history"
          },
          {
            "text": "I want to spread knowledge throughout the Woodland"
          },
          {
            "text": "I aim to change the Woodland by sharing its history"
          },
          {
            "text": "I crave adventure"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Who inspired your love of history?",
        "type": "answers",
        "answers": [
          {
            "text": "My parents"
          },
          {
            "text": "An older sibling"
          },
          {
            "text": "An old mentor"
          },
          {
            "text": "A lover or friend"
          },
          {
            "text": "A formal school"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Justice"
      },
      {
        "name": "Discovery"
      },
      {
        "name": "Ambition"
      },
      {
        "name": "Clean Paws"
      }
    ],
    "natures": [
      {
        "name": "Observer"
      },
      {
        "name": "Activist"
      }
    ],
    "connections": [
      {
        "name": "Partner",
        "text": "_ and I exposed a dark secret of a faction, leading to a meaningful political change. What was it? And which member of that faction hates us for it?"
      },
      {
        "name": "Peer",
        "text": "I think _ sees the truth of the world, and I value their perspective deeply. What kinds of information do they see that I often overlook?"
      }
    ],
    "stats": {
      "charm": -1,
      "cunning": 2,
      "finesse": 1,
      "luck": 0,
      "might": 0
    },
    "startingValue": 10,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Counterfeit"
      },
      {
        "name": "Disable Device"
      },
      {
        "name": "Pickpocket"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Confuse Senses"
      },
      {
        "name": "Improvise Weapon"
      },
      {
        "name": "Parry"
      },
      {
        "name": "Trick Shot"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [
      "The Worth of a Book"
    ],
    "moves": [
      {
        "name": "The Worth of a Book"
      },
      {
        "name": "An Eye for the Real Story"
      },
      {
        "name": "Search the Records"
      },
      {
        "name": "Loremaster"
      },
      {
        "name": "Good Advice"
      },
      {
        "name": "Dedicated Scholar"
      }
    ]
  },
  "envoy": {
    "archetype": "The Envoy",
    "description": "You are a professional representative, capable of speaking for other powers while maintaining plausible deniability, fashioned as the ultimate neutral agent and diplomatic mercenary.",
    "species": [],
    "adjectives": [
      "bucolic",
      "decadent",
      "elegant",
      "traveled"
    ],
    "items": [
      "fancy boots",
      "token of esteem",
      "rugged scarf",
      "pipe and leaf"
    ],
    "demeanor": [
      "commanding",
      "kind",
      "professional",
      "sleazy"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I am called to serve a noble cause"
          },
          {
            "text": "I want to make a name for myself with every faction"
          },
          {
            "text": "I hold no loyalty save to the highest bidder"
          },
          {
            "text": "I have many conflicting loyalties"
          },
          {
            "text": "I seek the truth behind an ally's disappearance"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My commander"
          },
          {
            "text": "My family"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My master"
          },
          {
            "text": "My mentor"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Loyalty"
      },
      {
        "name": "Greed"
      },
      {
        "name": "Ambition"
      },
      {
        "name": "Clean Paws"
      }
    ],
    "natures": [
      {
        "name": "Agent"
      },
      {
        "name": "Sworn"
      }
    ],
    "connections": [
      {
        "name": "Watcher",
        "text": "_ reminds me of a powerful political figure of the Woodland. Who do they resemble? Why is the resemblance so striking to me?"
      },
      {
        "name": "Peer",
        "text": "_ and I negotiated a truce between two warring parties within a clearing. Why were they so important to closing the deal?"
      }
    ],
    "stats": {
      "charm": 0,
      "cunning": 1,
      "finesse": 0,
      "luck": 1,
      "might": 0
    },
    "startingValue": 10,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Hide"
      },
      {
        "name": "Sneak"
      },
      {
        "name": "Pick Lock"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Parry"
      },
      {
        "name": "Quick Shot"
      },
      {
        "name": "Confuse Senses"
      },
      {
        "name": "Improvise"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [
      "Diplomat"
    ],
    "moves": [
      {
        "name": "Diplomat"
      },
      {
        "name": "Fancy Meeting You Here"
      },
      {
        "name": "Turncoat"
      },
      {
        "name": "A Silvered Tongue"
      },
      {
        "name": "Trust in Me"
      },
      {
        "name": "Kiss the Ring"
      }
    ]
  },
  "exile": {
    "archetype": "The Exile",
    "description": "You were once a prominent member of a powerful faction, but now you are exiled from it, and defined by what you do in relation to the group you once called your own.",
    "species": [],
    "adjectives": [
      "shabby",
      "flashy",
      "formal",
      "inconspicuous"
    ],
    "items": [
      "precious heirloom",
      "mark of privilege",
      "ragged cloak",
      "old book"
    ],
    "demeanor": [
      "bitter",
      "cautious",
      "clever",
      "vain"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "What caused your fall?",
        "type": "answers",
        "answers": [
          {
            "text": "I led a failed coup or rebellion"
          },
          {
            "text": "I committed a terrible crime"
          },
          {
            "text": "I was betrayed by my closest allies"
          },
          {
            "text": "I fell prey to my rival's schemes"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why were you exiled (not killed)?",
        "type": "answers",
        "answers": [
          {
            "text": "A complex legal system protected me"
          },
          {
            "text": "The last of my allies saved my life"
          },
          {
            "text": "My enemies granted me mercy"
          },
          {
            "text": "I fled before facing judgment"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I seek a new home in the Woodland"
          },
          {
            "text": "I want to reclaim my prestige"
          },
          {
            "text": "I wish to make amends for my sins"
          },
          {
            "text": "I seek revenge against my enemies"
          }
        ]
      },
      {
        "question": "Which faction exiled you?",
        "type": "faction",
        "reputation": {
          "set": -2
        }
      },
      {
        "question": "Which faction now seeks your loyalty or allegiance?",
        "type": "faction",
        "reputation": {
          "set": 1
        }
      }
    ],
    "drives": [
      {
        "name": "Loyalty"
      },
      {
        "name": "Revenge"
      },
      {
        "name": "Chaos"
      },
      {
        "name": "Infamy"
      }
    ],
    "natures": [
      {
        "name": "Schemer"
      },
      {
        "name": "Avenger"
      }
    ],
    "connections": [
      {
        "name": "Protector",
        "text": "I see greatness in _ that I wish to nurture...and perhaps turn to my own purposes. What is it about them that inspires me so?"
      },
      {
        "name": "Family",
        "text": "_ sheltered me in the earliest days of my exile when I was at my most vulnerable. Why did they offer me such kindness in my moment of need?"
      }
    ],
    "stats": {
      "charm": 1,
      "cunning": -1,
      "finesse": 0,
      "luck": 1,
      "might": 1
    },
    "startingValue": 10,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Sneak"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Cleave"
      },
      {
        "name": "Quick Shot"
      },
      {
        "name": "Storm a Group"
      },
      {
        "name": "Vicious Strike"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [
      "Known by All"
    ],
    "moves": [
      {
        "name": "Known by All"
      },
      {
        "name": "Above It All"
      },
      {
        "name": "I Bring You..."
      },
      {
        "name": "Greatest of the Age"
      },
      {
        "name": "Born to Be a King"
      },
      {
        "name": "Fancy Paper"
      }
    ]
  },
  "harrier": {
    "archetype": "The Harrier",
    "description": "You are a quick, enterprising vagabond, racing easily from building to building and clearing to clearing without anything stopping you, perhaps finding yourself in places others would rather keep secret or hidden.",
    "species": [],
    "adjectives": [
      "roguish",
      "kitted out",
      "vibrant",
      "scarred"
    ],
    "items": [
      "half-started maps",
      "sewn bandana",
      "ball and cup",
      "wide-brimmed hat"
    ],
    "demeanor": [
      "excited",
      "energetic",
      "passionate",
      "flighty"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I want to fight for Woodland freedom"
          },
          {
            "text": "I am chasing a loved one"
          },
          {
            "text": "I am on the run for my crimes"
          },
          {
            "text": "I feel a deep wanderlust"
          },
          {
            "text": "I am on the run from a commitment at home"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My teacher"
          },
          {
            "text": "My family"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My idol"
          },
          {
            "text": "My best friend"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Crime"
      },
      {
        "name": "Discovery"
      },
      {
        "name": "Infamy"
      },
      {
        "name": "Wanderlust"
      }
    ],
    "natures": [
      {
        "name": "Dutiful"
      },
      {
        "name": "Competitive"
      }
    ],
    "connections": [
      {
        "name": "Peer",
        "text": "_ and I tried to blaze a new trail between two clearings; without the support of the major factions, it never fully came to fruition."
      },
      {
        "name": "Friend",
        "text": "_ and I forged a bond while investigating a ruin deep in the woods. What strange minor trinkets do each of you carry from that expedition?"
      }
    ],
    "stats": {
      "charm": 0,
      "cunning": -1,
      "finesse": 2,
      "luck": 1,
      "might": 0
    },
    "startingValue": 9,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Acrobatics"
      },
      {
        "name": "Sneak"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Quick Shot"
      },
      {
        "name": "Trick Shot"
      },
      {
        "name": "Harry"
      },
      {
        "name": "Disarm"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Cross Country"
      },
      {
        "name": "Fleet of Foot and Hand"
      },
      {
        "name": "Don't Shoot the Messenger"
      },
      {
        "name": "Parkour"
      },
      {
        "name": "Traveller Extraordinaire"
      },
      {
        "name": "Smuggler's Path"
      }
    ]
  },
  "heretic": {
    "archetype": "The Heretic",
    "description": "You are a fervent believer in a cause or ideology that most Woodland denizens and factions find distasteful and unacceptable, even if your beliefs are genuinely for the greater good of the denizens.",
    "species": [],
    "adjectives": [
      "unkempt",
      "young",
      "clear-eyed",
      "lithe"
    ],
    "items": [
      "colorful robes",
      "facial tattoo",
      "token of belief",
      "unique jewelry"
    ],
    "demeanor": [
      "passionate",
      "negative",
      "eccentric",
      "proud"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "What are the fundamental tenets of your cause?",
        "type": "answers",
        "answers": [
          {
            "text": "To overturn a tradition"
          },
          {
            "text": "To exalt the worthy"
          },
          {
            "text": "To unseat the corrupt"
          },
          {
            "text": "To uplift the downtrodden"
          },
          {
            "text": "To destroy a falsehood"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I must make amends for my past"
          },
          {
            "text": "I want to bring truth to all"
          },
          {
            "text": "I seek still greater undestanding"
          },
          {
            "text": "I'm being hunted by the powerful"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My devotee"
          },
          {
            "text": "My guru"
          },
          {
            "text": "My family"
          },
          {
            "text": "My secret love"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction is known to hate those who share your cause?",
        "type": "faction",
        "reputation": {
          "set": -1
        }
      },
      {
        "question": "Which faction is known to harbor those who share you cause?",
        "type": "faction",
        "reputation": {
          "set": 1
        }
      }
    ],
    "drives": [
      {
        "name": "Principles"
      },
      {
        "name": "Protection"
      },
      {
        "name": "Freedom"
      },
      {
        "name": "Chaos"
      }
    ],
    "natures": [
      {
        "name": "Believer"
      },
      {
        "name": "Healer"
      }
    ],
    "connections": [
      {
        "name": "Protector",
        "text": "_ has come to share my beliefs; I must stand with them, no matter the cost. What happened to us that convinced them of the wisdom of my cause?"
      },
      {
        "name": "Watcher",
        "text": "_ was once hurt greatly by someone who shared my cause. Why do I think I might still win them over? What have I already tried to do to earn their trust?"
      }
    ],
    "stats": {
      "charm": 2,
      "cunning": 0,
      "finesse": -1,
      "luck": 1,
      "might": 0
    },
    "startingValue": 9,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Counterfeit"
      },
      {
        "name": "Sleight of Hand"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Cleave"
      },
      {
        "name": "Disarm"
      },
      {
        "name": "Quick Shot"
      },
      {
        "name": "Storm a Group"
      }
    ],
    "numMoves": 2,
    "defaultMoves": [
      "Friends Indeed",
      "Hear Me!"
    ],
    "moves": [
      {
        "name": "Friends Indeed"
      },
      {
        "name": "Hear Me!"
      },
      {
        "name": "Destroy Something Beautiful"
      },
      {
        "name": "Devilish Charm"
      },
      {
        "name": "Center of the Universe"
      },
      {
        "name": "You Shall Not Pass"
      }
    ]
  },
  "pirate": {
    "archetype": "The Pirate",
    "description": "You are a rogue boat captain, at home on the waters of the Woodland's rivers, lakes, or bays, free from the sway of land-bound life and more than willing to do whatever it takes to maintain that freedom.",
    "species": [],
    "adjectives": [
      "branded",
      "fancy",
      "grizzled",
      "attractive"
    ],
    "items": [
      "flashy hat",
      "lucky trinket",
      "flask of rum",
      "lodestone and compass"
    ],
    "demeanor": [
      "honest",
      "flamboyant",
      "stoic",
      "strange"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I believe I'm haunted by a powerful curse"
          },
          {
            "text": "I hear the call of gold and silver"
          },
          {
            "text": "I am despised by other denizens"
          },
          {
            "text": "I am fleeing the consequences of my piracy"
          },
          {
            "text": "I wish to build a network of fellow pirates and freebooters"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "What happened to your captain?",
        "type": "answers",
        "answers": [
          {
            "text": "Disappearance"
          },
          {
            "text": "Died in a blaze of glory"
          },
          {
            "text": "Mutiny"
          },
          {
            "text": "Imprisonment"
          },
          {
            "text": "Retirement"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Freedom"
      },
      {
        "name": "Revenge"
      },
      {
        "name": "Crime"
      },
      {
        "name": "Infamy"
      }
    ],
    "natures": [
      {
        "name": "Rogue"
      },
      {
        "name": "Merchant"
      }
    ],
    "connections": [
      {
        "name": "Partner",
        "text": "_ and I seized valuable cargo from a faction together. Who did we rob? Why?"
      },
      {
        "name": "Family",
        "text": "_ had a good relationship with my former captain. How have they supported me in taking on the role as my own?"
      }
    ],
    "stats": {
      "charm": 1,
      "cunning": 0,
      "finesse": 0,
      "luck": 1,
      "might": 0
    },
    "startingValue": 10,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Acrobatics"
      },
      {
        "name": "Blindside"
      },
      {
        "name": "Pick Lock"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Parry"
      },
      {
        "name": "Trick Shot"
      },
      {
        "name": "Storm a Group"
      },
      {
        "name": "Vicious Strike"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [
      "Small Ship",
      "Sail On"
    ],
    "moves": [
      {
        "name": "Small Ship"
      },
      {
        "name": "Sail On"
      },
      {
        "name": "Swashbuckler"
      },
      {
        "name": "X Marks the Spot"
      },
      {
        "name": "Plenty of Rum"
      },
      {
        "name": "Sea Legs"
      }
    ]
  },
  "prince": {
    "archetype": "The Prince",
    "description": "You are a second-generation vagabond, heir to your parent's masteries and knowledge, but also born to this life of roguery and independence\u00e2\u20ac\u201dyou are not a vagabond by your own volition.",
    "species": [],
    "adjectives": [
      "bright-eyed",
      "practical",
      "short",
      "simple"
    ],
    "items": [
      "trusty backpack",
      "comfortable jacket",
      "family compass",
      "walking stick"
    ],
    "demeanor": [
      "arrogant",
      "curious",
      "foolhardy",
      "brave"
    ],
    "background": [
      {
        "question": "Why did your parents raise you as a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "They rejected the ordinary life of a clearing of the Woodland"
          },
          {
            "text": "They feared their enemies would find them if they settled down"
          },
          {
            "text": "They wanted me to make my own choices free of society's influence"
          },
          {
            "text": "They never fit in with the denizens"
          },
          {
            "text": "They didn't know how else to live"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "What happened to your parents?",
        "type": "answers",
        "answers": [
          {
            "text": "Captured by a powerful faction"
          },
          {
            "text": "Felled by a rival vagabond"
          },
          {
            "text": "Retired to a Woodland clearing"
          },
          {
            "text": "Missing in the forest, now presumed dead"
          },
          {
            "text": "Killed in battle by agents of a powerful faction"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction did your parents serve the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction did your parents most often oppose?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Protection"
      },
      {
        "name": "Freedom"
      },
      {
        "name": "Crime"
      },
      {
        "name": "Wanderlust"
      }
    ],
    "natures": [
      {
        "name": "Scion"
      },
      {
        "name": "Trailblazer"
      }
    ],
    "connections": [
      {
        "name": "Peer",
        "text": "_ used to work with one of my parents and invited me to join the band when I came of age. How did I impress them with my talents?"
      },
      {
        "name": "Family",
        "text": "_ was mentored by one of my parents. What vagabond skills did they learn from my parents that I've always struggled to master?"
      }
    ],
    "stats": {
      "charm": -1,
      "cunning": 1,
      "finesse": 1,
      "luck": 1,
      "might": 0
    },
    "startingValue": 7,
    "chooseFeats": 4,
    "feats": [],
    "alwaysFeats": [
      {
        "name": "Sneak"
      },
      {
        "name": "Hide"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Confuse Senses"
      },
      {
        "name": "Disarm"
      },
      {
        "name": "Parry"
      },
      {
        "name": "Harry"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [
      "Heirloom Weapon",
      "Legacy"
    ],
    "moves": [
      {
        "name": "Heirloom Weapon"
      },
      {
        "name": "Legacy"
      },
      {
        "name": "One of Us"
      },
      {
        "name": "Tall Tales"
      },
      {
        "name": "No Jail Can Hold Me"
      },
      {
        "name": "Favored"
      }
    ]
  },
  "raconteur": {
    "archetype": "The Raconteur",
    "description": "You are a storyteller, making coin and earning trust by moving amid the clearings and weaving tales that ultimately teach the denizens the \"truth\" of what goes on in the Woodland.",
    "species": [],
    "adjectives": [
      "shabby",
      "flashy",
      "haphazard",
      "effete"
    ],
    "items": [
      "gold tooth",
      "swirling cloak",
      "homespun memento",
      "tuning fork"
    ],
    "demeanor": [
      "ingenious",
      "passionate",
      "verbose",
      "smooth"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I want to see all of the Woodland"
          },
          {
            "text": "I want to find a worthy hero to write about"
          },
          {
            "text": "I want to witness a legendary event firsthand"
          },
          {
            "text": "I want to find the kind of true love found in epic poetry"
          },
          {
            "text": "I have been run out of too many clearings to stay still"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you wronged and how?",
        "type": "answers",
        "answers": [
          {
            "text": "A lover, with my words"
          },
          {
            "text": "A friend, with my actions"
          },
          {
            "text": "An innocent, with my silence"
          },
          {
            "text": "An ally, with my inaction"
          },
          {
            "text": "A sibling, many times"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Discovery"
      },
      {
        "name": "Thrills"
      },
      {
        "name": "Infamy"
      },
      {
        "name": "Clean Paws"
      }
    ],
    "natures": [
      {
        "name": "Legend"
      },
      {
        "name": "Companion"
      }
    ],
    "connections": [
      {
        "name": "Friend",
        "text": "_ and I still talk about the time we were run out of a clearing, even though we thought our adventures would lead the powers-that-be to treat us as heroes. What did we do? How did it go wrong?"
      },
      {
        "name": "Family",
        "text": "_ and I have been through battles, ruin-delves, heists, and more together. Which particular incident made us close? How did I make it famous?"
      }
    ],
    "stats": {
      "charm": 2,
      "cunning": 1,
      "finesse": 1,
      "luck": -1,
      "might": -1
    },
    "startingValue": 8,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Counterfeit"
      },
      {
        "name": "Pick Lock"
      },
      {
        "name": "Pickpocket"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Confuse Senses"
      },
      {
        "name": "Improvise Weapon"
      },
      {
        "name": "Disarm"
      },
      {
        "name": "Vicious Strike"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [
      "Tools of the Trade"
    ],
    "moves": [
      {
        "name": "Tools of the Trade"
      },
      {
        "name": "Adoring Fans"
      },
      {
        "name": "All Eyes on Me"
      },
      {
        "name": "Quick Fingers, Quicker Eyes"
      },
      {
        "name": "Silver Tongue"
      },
      {
        "name": "Sweet as Honey"
      }
    ]
  },
  "raider": {
    "archetype": "The Raider",
    "description": "You are a bandit, a thief-by-force, dangerous and threatening but without loyalty to any commander or master.",
    "species": [],
    "adjectives": [
      "well-groomed",
      "huge",
      "scarred",
      "lean"
    ],
    "items": [
      "sigil pendant",
      "dark cloak",
      "face paint",
      "sentimental talisman"
    ],
    "demeanor": [
      "intimidating",
      "jovial",
      "curt",
      "curious"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I am feared by most denizens"
          },
          {
            "text": "I wish to see all the Woodlands have to offer"
          },
          {
            "text": "I refuse to serve someone unworthy"
          },
          {
            "text": "I seek to overthrow all oppressors"
          },
          {
            "text": "I am running from powerful enemies"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My mentor"
          },
          {
            "text": "My ward"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My sibling"
          },
          {
            "text": "My best friend"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Loyalty"
      },
      {
        "name": "Chaos"
      },
      {
        "name": "Crime"
      },
      {
        "name": "Greed"
      }
    ],
    "natures": [
      {
        "name": "Bandit"
      },
      {
        "name": "Hero"
      }
    ],
    "connections": [
      {
        "name": "Protector",
        "text": "The first time I saw _ hey piqued my curiosity; I went out of my way to protect them from the ire of my own band. What about them sparked my loyalty?"
      },
      {
        "name": "Watcher",
        "text": "_ bested me in combat when I got out of hand. How? Why did I thank them for it?"
      }
    ],
    "stats": {
      "charm": 0,
      "cunning": -1,
      "finesse": 1,
      "luck": 0,
      "might": 2
    },
    "startingValue": 10,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Acrobatics"
      },
      {
        "name": "Blindside"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Cleave"
      },
      {
        "name": "Confuse Senses"
      },
      {
        "name": "Storm a Group"
      },
      {
        "name": "Vicious Strike"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Eye For Battle"
      },
      {
        "name": "Ironhide"
      },
      {
        "name": "Loot and Plunder"
      },
      {
        "name": "Merciful Might"
      },
      {
        "name": "Plan of Attack"
      },
      {
        "name": "Fearsome Visage"
      }
    ]
  },
  "ranger": {
    "archetype": "The Ranger",
    "description": "You are a capable, stealthy vagabond, centered on the forests that fill the Woodland between the clearings, more interested in the wilds than in the company of other Woodland denizens or their society.",
    "species": [],
    "adjectives": [
      "unkempt",
      "scarred",
      "natural",
      "practical"
    ],
    "items": [
      "forest charm",
      "leafy cloak",
      "smoking pipe",
      "stolen ring"
    ],
    "demeanor": [
      "terse",
      "mistrusting",
      "polite",
      "kind"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I dislike the hypocrisy of society"
          },
          {
            "text": "I am mistrusted by other denizens"
          },
          {
            "text": "I want to wander the Woodland"
          },
          {
            "text": "I need to find and save a loved one"
          },
          {
            "text": "I seek escape from the wars"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My commander"
          },
          {
            "text": "My family"
          },
          {
            "text": "My best friend"
          },
          {
            "text": "My student"
          },
          {
            "text": "No one- I lost those who mattered to me (choose a faction and mark notoriety)",
            "factionDelta": -1
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Discovery"
      },
      {
        "name": "Freedom"
      },
      {
        "name": "Revenge"
      },
      {
        "name": "Protection"
      }
    ],
    "natures": [
      {
        "name": "Loner"
      },
      {
        "name": "Cynic"
      }
    ],
    "connections": [
      {
        "name": "Watcher",
        "text": "I was tricked, conned, or deceived by _ once. Why do I choose to continue working with them?"
      },
      {
        "name": "Protector",
        "text": "I did something that would have gotten me the enmity of a Woodland faction\u00e2\u20ac\u201d if _ hadn't covered for me. What did I do? Why and how did they protect me? Regardless, I feel indebted to them."
      }
    ],
    "stats": {
      "charm": -1,
      "cunning": 1,
      "finesse": 1,
      "luck": 0,
      "might": 1
    },
    "startingValue": 9,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Sneak"
      },
      {
        "name": "Hide"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Cleave"
      },
      {
        "name": "Disarm"
      },
      {
        "name": "Harry"
      },
      {
        "name": "Vicious Strike"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Silent Paws"
      },
      {
        "name": "Slip Away"
      },
      {
        "name": "Poisons and Antidotes"
      },
      {
        "name": "Forager"
      },
      {
        "name": "Threatening Visage"
      },
      {
        "name": "Dirty Fighter"
      }
    ]
  },
  "ronin": {
    "archetype": "The Ronin",
    "description": "You are a skilled, willful vagabond, formerly a servant of a lord in a different land, now masterless. You came to the Woodland to live as a free vagabond.",
    "species": [
      "raccoon dog"
    ],
    "adjectives": [
      "militaristic",
      "outlandish",
      "simple",
      "colorful"
    ],
    "items": [
      "lord's token",
      "mark of esteem",
      "stringed instrument",
      "board game"
    ],
    "demeanor": [
      "gruff",
      "polite",
      "direct",
      "dangerous"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I want to build a masterless life"
          },
          {
            "text": "I seek a cause to redeem myself"
          },
          {
            "text": "I aim to bring a hunted foe to justice"
          },
          {
            "text": "I am hunted by old foes"
          },
          {
            "text": "I need freedom to fulfill my master's last wish"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "What happened to your last master?",
        "type": "answers",
        "answers": [
          {
            "text": "Assassination"
          },
          {
            "text": "Unjust imprisonment"
          },
          {
            "text": "Disappearance"
          },
          {
            "text": "Justified overthrow"
          },
          {
            "text": "Betrayal"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Principles"
      },
      {
        "name": "Revenge"
      },
      {
        "name": "Thrills"
      },
      {
        "name": "Wanderlust"
      }
    ],
    "natures": [
      {
        "name": "Survivor"
      },
      {
        "name": "Pilgrim"
      }
    ],
    "connections": [
      {
        "name": "Partner",
        "text": "_ and I worked together on my first real task of significance in the Woodland, deposing a dangerous authority figure of a faction. Who did we depose? Why?"
      },
      {
        "name": "Watcher",
        "text": "I see in _ many reminders of my old master. I am drawn to them, even as I watch them carefully. What is it that reminds me of my old master? How do they feel about my watchful eyes?"
      }
    ],
    "stats": {
      "charm": 0,
      "cunning": 1,
      "finesse": 0,
      "luck": -1,
      "might": 2
    },
    "startingValue": 11,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Blindside"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Cleave"
      },
      {
        "name": "Storm a Group"
      },
      {
        "name": "Harry"
      },
      {
        "name": "Vicious Strike"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Always Armed"
      },
      {
        "name": "Knowing a Lord's Will"
      },
      {
        "name": "Well-Mannered"
      },
      {
        "name": "Fealty"
      },
      {
        "name": "The Rules of War"
      },
      {
        "name": "Always Watching"
      }
    ]
  },
  "scoundrel": {
    "archetype": "The Scoundrel",
    "description": "You are a lucky, dangerous vagabond, acting more as destroyer and troublemaker than anything else, perhaps creating chaos and destruction for its own sake.",
    "species": [],
    "adjectives": [
      "suspicious",
      "impoverished",
      "flea-bitten",
      "scarred"
    ],
    "items": [
      "full face mask",
      "mousesteel spark lighter",
      "overly large coat",
      "sulphurous pouches"
    ],
    "demeanor": [
      "shifty",
      "slimy",
      "straightforward",
      "naive"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I am on the run for a destructive crime"
          },
          {
            "text": "I seek vengeance for my suffering"
          },
          {
            "text": "I wish to defeat a faction"
          },
          {
            "text": "I am mistrusted by other denizens"
          },
          {
            "text": "I want to be free from society's bonds"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My teacher"
          },
          {
            "text": "My family"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My only defender"
          },
          {
            "text": "My best friend"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Chaos"
      },
      {
        "name": "Thrills"
      },
      {
        "name": "Crime"
      },
      {
        "name": "Infamy"
      }
    ],
    "natures": [
      {
        "name": "Arsonist"
      },
      {
        "name": "Combative"
      }
    ],
    "connections": [
      {
        "name": "Friend",
        "text": "_ and I once met and pulled off a mad, impossible stunt together. What did we do? Why?"
      },
      {
        "name": "Partner",
        "text": "_ and I destroyed a faction's resource, on behalf of an opposing faction. Why?"
      }
    ],
    "stats": {
      "charm": 1,
      "cunning": -1,
      "finesse": 0,
      "luck": 2,
      "might": 0
    },
    "startingValue": 8,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Acrobatics"
      },
      {
        "name": "Hide"
      },
      {
        "name": "Sneak"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Confuse Senses"
      },
      {
        "name": "Improvise Weapon"
      },
      {
        "name": "Quick Shot"
      },
      {
        "name": "Vicious Strike"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Arsonist"
      },
      {
        "name": "Create to Destroy"
      },
      {
        "name": "It's a Distraction!"
      },
      {
        "name": "Daredevil"
      },
      {
        "name": "Danger Mask"
      },
      {
        "name": "Better Lucky than Good"
      }
    ]
  },
  "seeker": {
    "archetype": "The Seeker",
    "description": "You are an explorer by nature, interested in free-ranging discovery, delving into ruins, and uncovering whatever secret wonders and ancient truths lie hidden amid the Woodland.",
    "species": [],
    "adjectives": [
      "honest",
      "traveled",
      "whimsical",
      "young"
    ],
    "items": [
      "trusty satchel",
      "large and grandiose hat",
      "book of stamps",
      "sturdy boots"
    ],
    "demeanor": [
      "absentminded",
      "driven",
      "jovial",
      "quiet"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I want to wander the Woodland"
          },
          {
            "text": "I'm seeking answers to a mystery"
          },
          {
            "text": "I need to find and reconnect with a loved one"
          },
          {
            "text": "I am pursuing a treasure"
          },
          {
            "text": "I stole and sold something precious from someone dangerous"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My family"
          },
          {
            "text": "An spouse or loved one"
          },
          {
            "text": "My best friend"
          },
          {
            "text": "My fellow explorer"
          },
          {
            "text": "My idol"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Justice"
      },
      {
        "name": "Discovery"
      },
      {
        "name": "Greed"
      },
      {
        "name": "Wanderlust"
      }
    ],
    "natures": [
      {
        "name": "Explorer"
      },
      {
        "name": "Historian"
      }
    ],
    "connections": [
      {
        "name": "Partner",
        "text": "I and _ have seen the wonders of the Woodland together. What makes them a stalwart companion on my travels?"
      },
      {
        "name": "Peer",
        "text": "_ is famous for a discovery of their own. I greatly respect them! What did they discover? How?"
      }
    ],
    "stats": {
      "charm": -1,
      "cunning": 1,
      "finesse": 1,
      "luck": 0,
      "might": 1
    },
    "startingValue": 10,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Acrobatics"
      },
      {
        "name": "Disable Device"
      },
      {
        "name": "Pick Lock"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Confuse Senses"
      },
      {
        "name": "Disarm"
      },
      {
        "name": "Parry"
      },
      {
        "name": "Trick Shot"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [
      "Word on the Street"
    ],
    "moves": [
      {
        "name": "Word on the Street"
      },
      {
        "name": "Never Lost"
      },
      {
        "name": "Treasure Hunter"
      },
      {
        "name": "Loremaster"
      },
      {
        "name": "Watch the Signs"
      },
      {
        "name": "Unstable Ground"
      }
    ]
  },
  "thief": {
    "archetype": "The Thief",
    "description": "You are a cunning, criminal vagabond, capable of stealing even the most well-guarded treasures, perhaps committed to crime and theft for its own sake.",
    "species": [],
    "adjectives": [
      "worn",
      "fidgety",
      "inconspicuous",
      "flamboyant"
    ],
    "items": [
      "black cape",
      "large bag",
      "old broken weapon",
      "stolen scarf"
    ],
    "demeanor": [
      "fast-talking",
      "quiet",
      "angry",
      "friendly"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I have no better way to get food, water, shelter, and money"
          },
          {
            "text": "I am on the run from \"associates\""
          },
          {
            "text": "I am mistrusted by other denizens"
          },
          {
            "text": "I am pursuing a treasure"
          },
          {
            "text": "I am being hunted by a powerful official"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My partner-in-crime"
          },
          {
            "text": "My family"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My protector"
          },
          {
            "text": "My benefactor"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Freedom"
      },
      {
        "name": "Greed"
      },
      {
        "name": "Ambition"
      },
      {
        "name": "Thrills"
      }
    ],
    "natures": [
      {
        "name": "Kleptomaniac"
      },
      {
        "name": "Rebellious"
      }
    ],
    "connections": [
      {
        "name": "Peer",
        "text": "I stole something important, something needed or craved, for _. I proved my worth to them."
      },
      {
        "name": "Friend",
        "text": "_ sprang to get me out of holding, whether they bailed me out or rescued me. I owe them."
      }
    ],
    "stats": {
      "charm": 0,
      "cunning": 0,
      "finesse": 2,
      "luck": 1,
      "might": -1
    },
    "startingValue": 6,
    "chooseFeats": 4,
    "feats": [],
    "numSkills": 1,
    "skills": [
      {
        "name": "Confuse Senses"
      },
      {
        "name": "Improvise Weapon"
      },
      {
        "name": "Parry"
      },
      {
        "name": "Trick Shot"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Breaking and Entering"
      },
      {
        "name": "Disappear Into the Dark"
      },
      {
        "name": "Rope-a-dope"
      },
      {
        "name": "Small Hands"
      },
      {
        "name": "Master Thief"
      },
      {
        "name": "Nose For Gold"
      }
    ]
  },
  "tinker": {
    "archetype": "The Tinker",
    "description": "You are an adept, clever vagabond, interested in mechanisms and craftsmanship, perhaps possessed of ideas that separate you from those around you.",
    "species": [],
    "adjectives": [
      "scattered",
      "organized",
      "grubby",
      "singed"
    ],
    "items": [
      "eccentric tool belt",
      "beautiful whetstone",
      "former patron's insignia",
      "massive packs"
    ],
    "demeanor": [
      "hopeful",
      "cheerful",
      "inquisitive",
      "cynical"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I refuse to keep my ideas to myself"
          },
          {
            "text": "I need to rebuild my workshop anew in a safe space"
          },
          {
            "text": "I crave adventure"
          },
          {
            "text": "I need to find and save my family"
          },
          {
            "text": "I need to keep my most dangerous design safe"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My mentor"
          },
          {
            "text": "My family"
          },
          {
            "text": "My best friend"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My leader"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Greed"
      },
      {
        "name": "Ambition"
      },
      {
        "name": "Revenge"
      },
      {
        "name": "Protection"
      }
    ],
    "natures": [
      {
        "name": "Perfectionist"
      },
      {
        "name": "Radical"
      }
    ],
    "connections": [
      {
        "name": "Peer",
        "text": "_ and I have been working together well for a while. We read each other's moves easily."
      },
      {
        "name": "Family",
        "text": "_ and I had each other's back when we were run out of a clearing because our natures got out of hand."
      }
    ],
    "stats": {
      "charm": -1,
      "cunning": 2,
      "finesse": 1,
      "luck": 0,
      "might": 0
    },
    "startingValue": 8,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Counterfeit"
      },
      {
        "name": "Pick Lock"
      },
      {
        "name": "Disable Device"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Cleave"
      },
      {
        "name": "Improvise Weapon"
      },
      {
        "name": "Harry"
      },
      {
        "name": "Trick Shot"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [
      "Toolbox",
      "Repair"
    ],
    "moves": [
      {
        "name": "Toolbox"
      },
      {
        "name": "Repair"
      },
      {
        "name": "Big Pockets"
      },
      {
        "name": "Jury Rig"
      },
      {
        "name": "Nimble Mind"
      },
      {
        "name": "Dismantle"
      }
    ]
  },
  "vagrant": {
    "archetype": "The Vagrant",
    "description": "You are a charming, survivor vagabond, using words to get out of dangerous situations, perhaps even setting possible predators upon each other to keep them away from yourself.",
    "species": [],
    "adjectives": [
      "mangy",
      "wild",
      "patchwork",
      "inconspicuous"
    ],
    "items": [
      "stolen military insignia",
      "tattered cloak",
      "luck charm",
      "gambling paraphernalia"
    ],
    "demeanor": [
      "excited",
      "low key",
      "thoughtful",
      "angry"
    ],
    "background": [
      {
        "question": "Where do you call home?",
        "type": "answers",
        "answers": [
          {
            "text": "_ clearing",
            "type": "clearing",
            "input": "text"
          },
          {
            "text": "the forest"
          },
          {
            "text": "a place far from here",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Why are you a vagabond?",
        "type": "answers",
        "answers": [
          {
            "text": "I am being hunted by a powerful vagabond"
          },
          {
            "text": "I can't settle down with the denizen I truly love"
          },
          {
            "text": "I seek to depose corrupt and dangerous leaders"
          },
          {
            "text": "I feel deep wanderlust"
          },
          {
            "text": "I am on the run for my lies"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Whom have you left behind?",
        "type": "answers",
        "answers": [
          {
            "text": "My partner in crime"
          },
          {
            "text": "My family"
          },
          {
            "text": "My loved one"
          },
          {
            "text": "My boss"
          },
          {
            "text": "My best friend"
          },
          {
            "text": "Custom...",
            "type": "text",
            "input": "text"
          }
        ]
      },
      {
        "question": "Which faction have you served the most?",
        "type": "faction",
        "reputation": {
          "delta": 2
        }
      },
      {
        "question": "With which faction have you earned a special enmity?",
        "type": "faction",
        "reputation": {
          "delta": -1
        }
      }
    ],
    "drives": [
      {
        "name": "Chaos"
      },
      {
        "name": "Thrills"
      },
      {
        "name": "Clean Paws"
      },
      {
        "name": "Wanderlust"
      }
    ],
    "natures": [
      {
        "name": "Glutton"
      },
      {
        "name": "Hustler"
      }
    ],
    "connections": [
      {
        "name": "Family",
        "text": "After _ and I pulled off an impressive heist and stole something very valuable from a powerful faction, my bad choices landed me in dire straits. But they bailed me out, and we've been close ever since."
      },
      {
        "name": "Watcher",
        "text": "_ saw through one of my cons, and turned it back on me. How? Why did we forgive each other?"
      }
    ],
    "stats": {
      "charm": 2,
      "cunning": 1,
      "finesse": -1,
      "luck": 0,
      "might": 0
    },
    "startingValue": 9,
    "chooseFeats": 0,
    "feats": [
      {
        "name": "Pick Lock"
      },
      {
        "name": "Sleight of Hand"
      }
    ],
    "numSkills": 1,
    "skills": [
      {
        "name": "Quick Shot"
      },
      {
        "name": "Improvise Weapon"
      },
      {
        "name": "Harry"
      },
      {
        "name": "Vicious Strike"
      }
    ],
    "numMoves": 3,
    "defaultMoves": [],
    "moves": [
      {
        "name": "Instigator"
      },
      {
        "name": "Pleasant Facade"
      },
      {
        "name": "Desperate Smile"
      },
      {
        "name": "Charm Offensive"
      },
      {
        "name": "Let's Play"
      },
      {
        "name": "Pocket Sand"
      }
    ]
  }
};