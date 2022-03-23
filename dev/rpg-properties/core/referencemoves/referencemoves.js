let referencemoves = {
  "Travel Through Forest": {
    "type": "Travel",
    "text": "When you **travel from clearing to clearing through the forest**, the band collectively decides how it travels and one rolls:\n\n* Slowly, foraging heavily: everyone clears 2-depletion. The band collectively marks an exhaustion for each band member. -1 to the roll.\n* Carefully, avoiding trouble: the band collectively marks one depletion or exhaustion for each band member. +1 to the roll.\n* As quickly as possible: everyone marks exhaustion and depletion. +2 to the roll.\n\nOn a hit, you can pass through the forest to any clearing on the other side, and the GM will tell you one interesting place you passed by\u00e2\u20ac\u201dyou can return later. On a 10+, the transit is largely safe. On a 7-9, something from the interesting place is following you; you can let it track you, or every vagabond marks exhaustion to lose it. On a miss, you run afoul of one of the forest's dangers during the trip, and you can't escape it easily; deal with it before you can reach the clearing on the other side.\n"
  },
  "Travel Along Path": {
    "type": "Travel",
    "text": "When you travel from clearing to clearing along the path, the band collectively decides how it travels and one rolls:\n\n* At a relaxing pace: everyone clears 3-exhaustion. The band collectively marks a total of 2-depletion. -1 to the roll.\n* At an average pace: everyone clears 2-exhaustion. The band collectively marks 1-depletion. +0 to the roll.\n* Safely, quickly, and under the radar: the band collectively marks 1-depletion for supplies. +1 to the roll.\n* Urgently fast: everyone marks exhaustion. Take a +2 to the roll.\n\nOn a hit, you reach the next clearing in a timely fashion. On a 10+, the trip is uninterrupted and quick. On a 7-9, you encounter something noteworthy on the path\u00e2\u20ac\u201da caravan, a battleground, or something else odd passing through. On a miss, you are caught in the middle of a dangerous situation before you arrive at the next clearing.\n"
  },
  "Ask for a Favor": {
    "type": "Reputation",
    "text": "When you **ask for a reasonable favor based on your reputation**, roll with Reputation with the appropriate faction. On a hit, they'll grant you what you want. On a 7-9, it costs your rep a bit; clear one prestige or mark notoriety, your choice. On a miss, they refuse and view you with suspicion; mark notoriety."
  },
  "Meet Someone Important": {
    "type": "Reputation",
    "text": "When you **meet with someone important for the first time**, roll with Reputation for their faction. On a hit, you're aware of their wider reputation (if any), and they're aware of yours (if any). On a 7-9, pick one. On a 10+, both.\n\n* You've heard stories; ask a question about them, and the GM will tell you one story you've heard about them as an answer.\n* They've heard something in your favor; take +1 forward when you first try to play up your connection with them and their faction.\n\nOn a miss, you only know the basics about them, and they've heard stories about you and the things you've done, true or false\u00e2\u20ac\u201dprepare for major complications.\n"
  },
  "Sway an NPC": {
    "type": "Reputation",
    "requirement": "Requires +2 Reputation or Higher",
    "text": "When you **try to sway an open or vulnerable NPC by appealing to their belief in your reputation**, roll with Reputation for their faction. On a hit, you can change their mind about the world; say what you want them to,believe, and the GM will rewrite their drive accordingly. On a 7-9, you use up some goodwill; clear 3 prestige. If you don't have enough prestige to clear, mark the remainder in notoriety. On a miss, the NPC takes the wrong message away from what you say; the GM will rewrite their drive accordingly."
  },
  "Command Resources": {
    "type": "Reputation",
    "requirement": "Requires +3 Reputation",
    "text": "When you **command an NPC to give you significant, valuable resources**, roll with Reputation for their faction. On a 10+, you get what you need as soon as they can get it to you. On a 7-9, they impose a condition on how you can use the resources, or what you must return to the faction in recompense. On a miss, they don't have what you need, but they tell you a way you can get it at a steep cost or some serious difficulty."
  },
  "Conduct Sanctioned Trade": {
    "type": "Reputation",
    "requirement": "Requires +2 Reputation (**Riverfolk Company**)",
    "text": "When you **write up an exchange of goods or services between any parties and sign it in the name of the Riverfolk Company**, roll with Reputation with the Riverfolk Company. On a hit, you form a proper agreement the Company will uphold, by force if it must\u00e2\u20ac\u201dname the parties (including you), their responsibilities and promises, and any extra penalties for breach of contract. On a 7-9, Company support\u00e2\u20ac\u201dmercenaries, trade embargos, etc.\u00e2\u20ac\u201dstill comes, but at a cost; when you want a Company agent to help uphold the contract, you'll have to offer a 1-Value bribe before they will act. On a 10+, the contract is airtight; provide you have a copy in hand, Company agents will enforce the contract in full. On a miss, your contract has a loophole or error in it; the Riverfolk Company won't enforce it, and it's only a matter of time before a participating party takes advantage.\n"
  },
  "Draw Attention": {
    "type": "Reputation",
    "requirement": "Requires -2 Reputation or Lower",
    "text": "When you **try to publicly draw attention to yourself as an enemy of a faction**, roll with Reputation for that faction, treating it as positive (+2 or +3) for this roll. On a hit, you draw out the faction's resources to oppose you; brace yourself. On a 7-9, choose 1; on a 10+, choose 2.\n\n* The faction employs significant military strength to chase you down.\n* The faction deploys an available, capable NPC agent (of your choice) to chase you down.\n* The faction is rattled by your threat; mark 2-notoriety with them.\n\nOn a miss, your enemies are already moving against you quietly; the GM tells you how they catch you unprepared.\n"
  },
  "Endorse a New Leader": {
    "type": "Reputation",
    "requirement": "Requires +1 Reputation",
    "text": "When you **openly endorse an individual as the new leader of a faction's forces and/or presence in a clearing**, roll with Reputation with that faction. On a hit, you throw your support behind that individual and the faction's representatives in that clearing react. On a 7-9, the GM chooses 2. On a 10+, the GM chooses 1.\n\n* the faction's current leadership in the clearing is directly opposed; you need to handle them before your endorsed candidate can take over\n* the denizens of the clearing aren't on board; you need to speak to denizen leadership and convince them, or expect direct opposition\n* the faction's enemies in the clearing want to take advantage of the shift in power; keep an eye out for conspiracies and plots\n\nOn a miss, after you publicly announce your support something new and dangerous is revealed about the leadership or the individual you endorsed that reframes the situation.\n"
  },
  "Incite Revolt": {
    "type": "Reputation",
    "requirement": "Requires +2 Reputation (**Woodland Alliance**)",
    "text": "When you **incite local Woodland Alliance sympathizers and agents to revolt**, roll with Reputation with the Woodland Alliance. On a hit, the revolt is imminent\u00e2\u20ac\u201dyou have to prepare! It will take place when next time passes. On 7-9, the GM chooses 2. On a 10+, the GM chooses 1.\n\n* you need to convince at least one local sympathizer to get important resources or support for the revolt; otherwise, it will fail\n* you need to weaken, destroy, or incapacitate a specific opposing force; otherwise, the revolt will fail\n* you need to steal weapons or equipment for local sympathizers; otherwise, the revolt will fail\n* you need to rally a local group by doing them a favor; otherwise, the revolt will fail\n\nOn a miss, the revolt fires off right now \u00e2\u20ac\u201d well before you are ready, and while the opposing forces might be prepared for you. Good luck.\n"
  },
  "Intimidate Enemy Troops": {
    "type": "Reputation",
    "requirement": "Requires -2 Reputation",
    "text": "When you **draw attention to yourself and threaten enemy troops by wielding your Reputation through an intimidating display**, roll with Reputation with the enemy's faction, treating it as positive (+2 or +3) for this roll. On a hit, you put fear into the enemy. On a 7-9, pick 1. On a 10+, pick 2.\n\n* the enemy troops won't act until their leader makes a rallying speech or cry to them\u00e2\u20ac\u201dthe leader is exposed and vulnerable to attack\n* the enemy troops will target you, above all else, when they attack\n* the enemy troops are rattled; inflict 2-morale harm on the group\n\nOn a miss, the enemy is invigorated by their anger at you, and they act right now, in full force.\n"
  },
  "Lead Troops in Battle": {
    "type": "Reputation",
    "requirement": "Requires +3 Reputation",
    "text": "When you **lead troops of a faction in battle**, roll with Reputation with that faction. On a hit, they accept you as their commander for the fight. On a 7-9, hold 2. On a 10+, hold 3. Spend your hold 1-for-1 during the fight to commit them to:\n\n* take and hold a location\n* rout a substantial enemy presence\n* take an enemy leader captive\n* destroy a fortification or resource\n* defend a group or location\n\nOn a miss, your troops engage in battle but with a confused command structure\u00e2\u20ac\u201dthey wind up embroiled in chaotic battle across the entire area, and in their confusion, they're losing.\n"
  },
  "Make a Pointed Threat": {
    "type": "Reputation",
    "requirement": "Requires -3 Reputation",
    "text": "When you **make a pointed threat to an NPC by wielding your reputation**, roll with Reputation for their faction, treating it as positive (+3) for this roll. On a 10+, they are rattled; they must surrender, retreat, or charge, GM's choice. On a 7-9, you must make a demonstration of your dangerous intent first, before they are rattled. On a miss, your reputation precedes you; they reveal how they prepared for someone like you."
  },
  "Plan New Project": {
    "type": "Reputation",
    "requirement": "Requires +2 Reputation (**Marquisate**)",
    "text": "When you convince **Marquisate officers to begin a new significant project**, roll with Reputation with the Marquisate. On a hit, they begin the project. On a 7-9, the GM chooses 3. On a 10+, the GM chooses 2.\n* it will take time; check back in after time passes\n* it requires special resources; the Marquisate agents will tell you what they need\n* it requires elimination of a threat first; the Marquisate agents will point you at the threat\n* it can't be quite what you asked for\u00e2\u20ac\u201djust something close enough; the Marquisate agents will tell you what form it takes\n\nOn a miss, the Marquisate cannot undertake your project right now because the Marquisate's resources\u00e2\u20ac\u201dand you\u00e2\u20ac\u201dare required elsewhere; the GM will tell you why, and where.\n"
  },
  "Preach to the Choir": {
    "type": "Reputation",
    "requirement": "Requires +2 Reputation (**Lizard Cult**)",
    "text": "When you **preach a sermon with a message to a crowd of Lizard Cultists**, roll with Reputation with the Lizard Cult. On a 10+, hold 3. On a 7\u00e2\u20ac\u201c9, hold 1. Spend your hold 1-for-1 to make the crowd:\n\n* bring someone forward and deliver them\n* bring forward goods and offerings (providing you with at least 6-Value)\n* unite and fight for you, destroying or attacking a target of your choice\n* repair or defend something of your choice\n* go quietly back to their lives\n\nOn a miss, the mob hears your message incorrectly, and acts on that belief.\n"
  },
  "Requisition Permits": {
    "type": "Reputation",
    "requirement": "Requires +2 Reputation (**Grand Duchy**)",
    "text": "When you **requisition permits from the Grand Duchy**, roll with Reputation with the Duchy. On a hit, you can requisition a permit with certain access rights granted. These rights remain legal until when next time passes. On a 7-9, choose 2 access rights. On a 10+ choose 3.\n\n* you are permitted to travel through Grand Duchy tunnels with the aid of a Duchy guide, allowing you to move between any two clearings connected by tunnels without making a roll\n* you are permitted to obtain supplies from Grand Duchy caches and citadels with impunity; any time you reach such a cache, you may take up to 4-Value in supplies, no questions asked\n* you are permitted access to members of Duchy Parliament; you can ask any Duchy outpost for news on their locations, and you can always gain access to them, no questions asked\n* you are permitted to pass freely and without molestation in Duchy controlled areas, no matter whether you are carrying weapons or obvious contraband or not\n* you are permitted to act directly against or harm any individuals not openly protected by the Duchy, and any individuals openly protected against the Duchy if you can prove their culpability in a crime\n\nOn a miss, a Duchy official comes to interrogate you about your requests for permit; expect undesirable scrutiny.\n"
  },
  "Tap Criminal Networks": {
    "type": "Reputation",
    "requirement": "Requires +2 Reputation (**Corvid Conspiracy**)",
    "text": "When you **tap the local Corvid Conspiracy networks for a favor**, pick your favor from the list below and roll with Reputation with the Corvid Conspiracy.\n\n* illicit goods, left in a hidden drop location for you\n* assassination, accomplished quietly and without fuss\n* sabotage, conducted on valuable equipment\n* blackmail, collected and delivered to you for use\n* secret intelligence, captured and safely sent to you\n\nOn a 7-9, the Conspiracy fulfills the favor, but leaves a request for you too\u00e2\u20ac\u201da favor for a favor. On a 10+, the Conspiracy just leaves a reminder that it might call upon you at some later date. On a miss, your illicit communications with the Conspiracy go awry\u00e2\u20ac\u201dsomeone else gets your request, and they aren't happy.\n"
  },
  "Villify a Leader": {
    "type": "Reputation",
    "requirement": "Requires +1 Reputation",
    "text": "When you **openly vilify an existing leader of a faction's forces and/or presence in a clearing**, roll with Reputation with that faction. On a hit, you've stirred up dissent\u00e2\u20ac\u201dthe leader's departure from power is set in motion. They will be removed from power when next time passes... unless they take other action (alliances, use of force, etc.) to quash the dissent. In the meantime, on a 7-9, the GM chooses 2. On a 10+, the GM chooses 1.\n\n* your words are taken up and elaborated upon; resistance to the leader you targeted threatens to get out of control, involving violence or arson\n* the leader (or their defenders and supporters) grows more radical in their defensiveness; they will respond to any threats to their position with force\n* you are singled out for your blunt outspokenness; expect reprisals\n\nOn a miss, your words wind up stoking opposition\u00e2\u20ac\u201dmore denizens, agents, and faction members come out in support of the leader you tried to vilify.\n"
  },
  "Wield Bureaucracy": {
    "type": "Reputation",
    "requirement": "Requires +2 Reputation (**Eyrie**)",
    "text": "When you **wield the bureaucracy of the Eyrie Dynasties to achieve your ends while time passes**, roll with Reputation with the Eyrie. On 7-9, choose 1. On a 10+, choose 2.\n\n* you gather information from your contacts; ask the GM any three questions about the Woodland, and they will answer truthfully from the Eyrie's perspective\n* you push the Eyrie to allocate resources just a bit differently; they will deliver some available resource to a clearing of your choice, as long as it makes any sense to do so\n* you add a stipulation to an upcoming Eyrie attack or action; the soldiers will follow it\n* you arrange a meeting or audience with any Eyrie individual at a place of your choosing; the GM will tell you when the meeting takes place\n* you get Eyrie courts to add or repeal a legal requirement within any one Eyrie-controlled clearing; the Eyrie theoretically must follow it\n\nOn a miss, the Eyrie's bureaucracy plays back, and you find yourself charged with a duty you hadn't planned on from Eyrie authorities; fulfill it before time passes next, or mark 3-notoriety.\n"
  },
  "Built-In Weapons": {
    "type": "Species",
    "requirement": "Cat, Fox, Bird of Prey, Lizard",
    "text": "Your claws, fangs, or talons are natural weaponry, with intimate range, using up no Load and inflicting injury instead of exhaustion. Choose one weapon tag from the list:\n\n* Barbed: When you catch someone with this weapon's end, mark exhaustion to move to intimate range and **grapple with them** as if you had rolled a 10+.\n* Fast: Mark wear when **engaging in melee** to suffer 1 fewer harm, even on a miss.\n* Intimidating: When you flaunt this item to **persuade an NPC** through threats, you can mark 2-notoriety with their faction to shift a miss to a 7-9 or a 7-9 to a 10+.\n* Precise: Mark wear to ignore your enemy's armor when you inflict harm.\n* Quick: Mark exhaustion to **engage in melee** with Finesse instead of Might.\n* Sharp: Mark wear when inflicting harm with this weapon to inflict 1 additional harm.\n* Signature: Whenever you earn prestige or notoriety while showing this item, mark 1 additional prestige or notoriety. And one weapon flaw from the list:\n\n  * Identifiable: This item is known to be associated with a particular individual. Anyone who sees it instantly recognizes it and associates you with that individual.\n\n  * Slow: When you **engage in melee** with this weapon, choose one fewer option. Mark wear to ignore this effect.\n\n  * Ugly: Take \u00e2\u20ac\u201c1 to **meet someone important** while they can see this item. Mark exhaustion to hide it.\n\n  * Unwieldy: Take a \u00e2\u20ac\u201c1 to all weapon moves\u00e2\u20ac\u201dboth basic and special weapon moves\u00e2\u20ac\u201dmade with this weapon. Mark exhaustion to ignore this effect.\n"
  },
  "Cached Resources": {
    "type": "Species",
    "requirement": "Fox, Squirrel, Mole",
    "text": "You've hidden resources all over the forest, sometimes even in locations that you've since forgotten. When you search for one of your caches, roll with Cunning. On a hit, you find a stash of resources; clear 2-depletion. On a 7-9, the search takes forever; mark exhaustion. On a miss, your wandering puts you in danger before you realize it.\n"
  },
  "Garner Sympathy": {
    "type": "Species",
    "requirement": "Rabbit, Mouse, Corvid",
    "text": "When you **plead with a PC** by guilting them into going along with you, mark exhaustion to allow them to clear 2-exhaustion instead of one when they agree to what you have proposed.\n"
  },
  "Scenting the Clearing": {
    "type": "Species",
    "requirement": "Cat, Dog, Wolf",
    "text": "When you sniff out the details of a new clearing, roll with Cunning. On a 10+, ask two questions from the list below. On a 7-9, ask one.\n\n* What's the most surprising scent I pick up in the clearing's most public area?\n* What interesting scent trail catches my attention, and where does it lead?\n* What scent has somebody taken efforts to hide, and where do I smell it?\n* What smells like the most dangerous place in the clearing?\n* What smells like the safest place in the clearing?\n\nOn a miss, ask one, but your sniffing around leaves you distracted from another threat; it gets the drop on you.\n"
  },
  "Searching the Cracks": {
    "type": "Species",
    "requirement": "Fox, Mouse, Otter",
    "text": "When you carefully search someone's private space for secrets, roll with Luck. On a hit, the GM will either tell you there are none here\u00e2\u20ac\u201dthey're not hiding anything\u00e2\u20ac\u201dor that you found something surprising, incriminating, or telling. On a 7-9, you leave no evidence behind or you can take something with you, your choice. On a 10+, both, or you can plant something. On a miss, something you find is strange and distracts you... just long enough to be caught!\n"
  },
  "Stroke of Luck": {
    "type": "Species",
    "requirement": "Rabbit",
    "text": "Take +1 Luck (max +3)."
  },
  "Tight Squeeze": {
    "type": "Species",
    "requirement": "Mouse, Cat, Lizard",
    "text": "When you squeeze through a tight space, roll with Finesse. On a hit, you make it through to the other side. On a 7-9, mark injury or mark 3-wear on your gear, your choice. On a miss, you're stuck and something on the other side isn't looking too friendly.\n"
  },
  "Convenient Hideout": {
    "type": "Species",
    "requirement": "Fox, Rabbit",
    "text": "Your eyes are adept at finding good, safe places to hunker down. When you attempt to lay low in the forest, roll with Cunning. On a hit, you find a convenient hideout nearby. On a 10+, pick 2. On a 7-9, pick 1:\n\n* Food and water are easily accessible from the hideout\n* The area is untouched and undisturbed by other denizens or threats\n* The route to the hideout is safe and easy\n\nOn a miss, you reach the hideout\u00e2\u20ac\u201dchoose 1\u00e2\u20ac\u201dbut you aren't alone when you arrive.\n"
  },
  "Nine Lives": {
    "type": "Species",
    "requirement": "Cat, Corvids",
    "text": "Once per session, when you mark your last box of injury, mark exhaustion to ignore the blow entirely and stay on your feet long enough for one last act of heroism. Once the deed is done, you collapse, unconscious."
  },
  "Underground Tunnels": {
    "type": "Species",
    "requirement": "Rabbit, Mouse, Mole",
    "text": "Take the _Hide_ roguish feat (it does not count against your limit). When you **attempt to hide by burrowing underground**, roll with Might instead of Finesse."
  },
  "Fox": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n* Sniff out a hidden stash of food or resources.\n* Take a +1 to travel through the forest between clearings\n* Lash out with fangs and claws; inflict 1-injury\n\n**Instinct move**: Once per session, clear exhaustion when you use the cover of darkness to your advantage in a dangerous situation.\n"
  },
  "Mouse": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Gain access to or escape a location by squeezing through a tight space.\n* Sniff out a hidden stash of food or resources\n* Take a 12+ instead of rolling when tricking an NPC into underestimating you\n\n**Instinct move**: Once per session, clear exhaustion when you scout out an area in advance of a conflict or scheme.\n"
  },
  "Rabbit": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Gain access to or escape a location by burrowing underground\n* Sprint at speeds beyond nearly all other denizens\n* Listen in on a nearby conversation without drawing attention\n\n**Instinct move**: Once per session, clear exhaustion when you convince your allies to pursue a new strategy when a plan goes awry.\n"
  },
  "Otter": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Gain access to or escape a location by swimming underwater\n* Improvise a simple but functional tool from nearby resources\n* Find safe shelter for your band, regardless of your environment\n\n**Instinct move**: Once per session, clear exhaustion when you keep the group together in circumstances that threaten to divide you.\n"
  },
  "Bird of Prey": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Track a denizen from the air without revealing yourself\n* Lash out with talons and beak; inflict 1-injury\n* Fly to any location within a clearing in a few moments\n\n**Instinct move**: Once per session, clear exhaustion when you acquire information that gives you an advantage over an enemy.\n"
  },
  "Cat": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Track a denizen through an unguarded dark area without revealing yourself\n* Fall from any height without harm\n* Lash out with fangs and claws; inflict 1-injury\n\n**Instinct move**: Once per session, clear exhaustion when you catch and corner someone you're hunting.\n"
  },
  "Lizard": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Quickly scurry through a survivable dangerous environment without suffering injury\n* Gain access to or escape a location by squeezing through a tight space\n* Clamber up a vertical surface or treacherous and narrow path\n\n**Instinct move**: Once per session, clear exhaustion when you spend several hours basking in heat.\n"
  },
  "Corvid": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Sniff out a hidden stash of food or resources\n* Snatch and pocket a single valuable or shiny object vulnerable to you\n* Fly away into the darkness of night, losing any pursuers\n\n**Instinct move**: Once per session, clear exhaustion when you use a tool or piece of equipment in a surprising or innovative way.\n"
  },
  "Small Bird": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Fly to any location within a clearing in a few moments\n* Find a perfect hiding place out of sight of a pursuer\n* Take a 12+ to attempt a roguish feat of acrobatics or trust fate when acting acrobatically, as long as you are carrying 2-Load or less\n\n**Instinct move**: Once per session, clear exhaustion when you manage to lose or avoid unwanted attention.\n"
  },
  "Mole": {
    "type": "Instinct",
    "text": "Mark exhaustion to activate an ability:\n\n* Dig into loose soil and dirt, emerging sometime later from a different, reachable point\n* Touch nose to earth and detect vibrations of any nearby denizens.\n* Take a +1 to travel through the forest between clearings\n\n**Instinct move**: Once per session, clear exhaustion when you handle a beautiful, well-crafted, or otherwise tactilely pleasing object you haven't held before.\n"
  }
};