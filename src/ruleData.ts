import { RuleData, SmallCardRuleData } from './interfaces';

/* 
NOTE ON KEY NAMES: 
For key names of main rules eg. 'strength' spaces should be used between words.
For key names of sub-rules eg. 'athletics' a '-' represents a space in the rule name and ' ' represents a dot. 
*/

export const RULE_DATA: RuleData = {
  strength: {
    athletics: {
      description: 'Climb a wall or a rope, swim or jump high.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Normal wall; Tread in rough condition; Water; Clear obstacle while jumping',
        },
        {
          difficulty: 'Moderate',
          examples: 'Rope from overhang; Swim in rough water',
        },
        {
          difficulty: 'Hard',
          examples: 'Wall with rare handholds; Catch on a rope; Violent water',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Slippery wall; Stormy waters; Clear obstacle while jumping',
        },
      ],
    },
    'feats-of-strength other': {
      description:
        'Any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Struck/broken door; Weak bindings; Pull stuck wedge obiect loose',
        },
        {
          difficulty: 'Moderate',
          examples: 'Reinforced wooden door; Hang on a wagon',
        },
        {
          difficulty: 'Hard',
          examples: 'Heavy locked/barred door; Topple stone statue; Pull stuck wagon',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Heavy reinforced door; Hold door against water',
        },
      ],
    },
  },
  dexterity: {
    acrobatics: {
      description: 'Walk across difficult surface; Hold balance; Land safely; Otherwise fall / take damage.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Icy surface; Turbulent situation; Land on dificult terrain',
        },
        {
          difficulty: 'Moderate',
          examples: 'Narrow edge; swing from chandelier and land',
        },
        {
          difficulty: 'Hard',
          examples: 'Cross a wildly swaying rope bridge',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Walk across a tightrope; Vault over/under an enemy',
        },
      ],
    },
    'sleight-of-hand': {
      headers: ['description', 'purpose'],
      rows: [
        {
          description: 'Contest vs. Perception',
          purpose: 'Hide an object on your person; Palm an object; Lift a purse; Plant an object on another person.',
        },
      ],
    },
    stealth: {
      headers: ['description', 'purpose'],
      rows: [
        {
          description: 'Contest vs. Deception',
          purpose: 'Conceal from enemies; Sneak past targets; Slip away while others are distracted.',
        },
      ],
    },
    'pick-lock disarm-trap': {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Simple lock; Simple trap',
        },
        {
          difficulty: 'Moderate',
          examples: 'Typical lock; Average trap',
        },
        {
          difficulty: 'Hard',
          examples: 'Elaborate lock; Complex trap',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Masterwork lock; Magical trap',
        },
      ],
    },
  },
  constitution: {
    concentration: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: '10 or half of the damage taken.',
          examples: 'After taking damage while maintaining concentration spell.',
        },
      ],
    },
  },
  intelligence: {
    'arcana history nature religion': {
      description: {
        arcana: 'Spells, magic items, planes of existence',
        history: 'historical events, old kingdoms, legendary people',
        nature: 'terrain. plants and animals',
        religion: 'deities, rites and prayers, holy symbols',
      },
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Recall widely known information. (common)',
        },
        {
          difficulty: 'Moderate',
          examples: 'Recall more obscure or specific information. (uncommon)',
        },
        {
          difficulty: 'Hard',
          examples: 'Recall truly esoteric or precise information. (rare)',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Recall information that is known only by a privileged few. (very rare)',
        },
      ],
    },
    'investigation other': {
      description:
        "Identity a trap or a secret or coded message; Communicate a idea with an creature you don't share a language with; Discover the true nature of an illusion",
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Obvious trap or a secret; Simple idea with an intelligent creature; Low-level illusion',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Typical trap; Determine time or cause of death of a recentlv deceased creature; Estimate the material worth of an item; Mid-level illusion',
        },
        {
          difficulty: 'Hard',
          examples:
            'Well-hidden trap, object, or area; Forge a document or identity such a document; High-level illusion',
        },
        {
          difficulty: 'Very Hard',
          examples:
            'Magically-hidden trap, object, or area; Discern the purpose and process of a comblicated device or system; Determine the integrity of a structure, construct, or formation and identity any exploitable weak points.',
        },
      ],
    },
  },
  wisdom: {
    'insight perception': {
      description: {
        insight: 'Read the intentions of a creature; Check if it the truth',
        perception: 'Spot/recognize a location; Hear a sound; Detect a smell; Feel vibrations through the ground',
      },
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples:
            'Read a child, prominent landmark, or structure; Hear the far-off sound of thunder signaling a coming storm',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Discern the leader of a group; the intended message of a non-verbal talk shot a natural-obscured obiect or teature: a conversation in the next room',
        },
        {
          difficulty: 'Hard',
          examples:
            "Guess at the enemy's next action; Well-hidden object or feature; A hushed conversation through a heavv door",
        },
        {
          difficulty: 'Very Hard',
          examples: 'Near invisible object or feature; Read the lips of a creature vou can see but not hear',
        },
      ],
    },
    survival: {
      description: 'Follow a trail / track; forage food for a day; navigate in wilderness.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples:
            'Well-worn trail in a forest; Tracks of a creature through snow or mud; Forage in a plentiful area; Navigate on a clear night',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Abandoned or forgotten trail; Track a creature through a forest; Forage in a sparse area; Navigate on a cloudy night; Predict an oncoming storm; Identify the signs of nearby creatures',
        },
        {
          difficulty: 'Hard',
          examples:
            "Track over barren terrain; Forage in a harsh area; Navigate through an alien area on a cloudy night; Predict tomorrow's weather",
        },
        {
          difficulty: 'Very Hard',
          examples: 'Track after rainfall; Navigate an alien area on a stormy night.',
        },
      ],
    },
    'animal-handling medicine other': {
      description: {
        'Animal Handling': 'Interact with or train an animal',
        Medicine: 'cure or stabilize a creature , diagnose ailments',
      },
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Domesticated animal; Stabilize a dying creature outside of combat; Common ailment',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Wild but otherwise peaceful animal; Perform a complex maneuver while mounted; Set a broken bone; Stabilize a dying creature in the middle of combat; Uncommon ailment',
        },
        {
          difficulty: 'Hard',
          examples: "Intuit a hostile animal's next action; Control an untrained mount; Rare ailment",
        },
        {
          difficulty: 'Very Hard',
          examples: 'Calm a dangerous wild animal; Diagnose magical and divine ailments',
        },
      ],
    },
  },
  charisma: {
    deception: {
      headers: ['description', 'examples'],
      rows: [
        {
          description: 'Contest vs. Insight',
          examples:
            'Fast-talk or con someone, adopt a disguise or impersonate another creature, tell a convincing lie or otherwise hide vour true intentions.',
        },
      ],
    },
    intimidation: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Scare a spineless noble in to handing over their coin purse.',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Pry information out of an uncooperative prisoner, convince street thugs to back down from a confrontation.',
        },
        {
          difficulty: 'Hard',
          examples:
            'Advise a guard that it might be best to look the other wav this time around, coerce an official in to signing a document.',
        },
        {
          difficulty: 'Very Hard',
          examples: 'Frighten a creature larger than you, causing it to flee; Stop an agitated mob in their tracks.',
        },
      ],
    },
    performance: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Routine performance such as telling a story in a tavern or around a campfire.',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Professional performance such as an inspiring speech or an impressive musical display which may attract the attention of a local troupe and lead to regional fame.',
        },
        {
          difficulty: 'Hard',
          examples:
            'Memorable pertormance which may attract the attention of a local patron and lead to national fame.',
        },
        {
          difficulty: 'Very Hard',
          examples:
            'Extraordinary performance which may attract the attention of distant patrons and even extra-planar beings.',
        },
      ],
    },
    persuasion: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'Easy',
          examples: 'Convince the mayor to allow your party to help calm a distraught person.',
        },
        {
          difficulty: 'Moderate',
          examples:
            'Persuade a group of highway thieves to leave in peace. Convince a friendly aquaintance that you know best.',
        },
        {
          difficulty: 'Hard',
          examples:
            'Convince a chamberlain to let your party see the king, inspire or rally a crown of townsfolk negotiate a peace between warring tribes.',
        },
        {
          difficulty: 'Very Hard',
          examples:
            "Convince a sphinx that you are worthy of the secrets it guards; Assure a dragon you're worth more alive than dead.",
        },
      ],
    },
  },
  'encounter distance': {
    terrain: {
      headers: ['description', 'distance'],
      rows: [
        {
          description: 'Arctic, desert, farmland, or grassland',
          distance: '6d6 x 10 feet',
        },
        {
          description: 'Forest, swamp, or woodland',
          distance: '2d8 x 10 feet',
        },
        {
          description: 'Hills or wastelands',
          distance: '2d10 x 10 feet',
        },
        {
          description: 'Jungle',
          distance: '2d6 x 10 feet',
        },
        {
          description: 'Mountains',
          distance: '4d10 x 10 feet',
        },
        {
          description: 'Underdark or urban',
          distance: '2d4 x 10 feet',
        },
      ],
    },
    'audible-distance': {
      headers: ['description', 'distance'],
      rows: [
        {
          description: 'Trying to be quiet',
          distance: '2d6 x 5 feet',
        },
        {
          description: 'Normal noise level',
          distance: '2d6 x 10 feet',
        },
        {
          description: 'Loud noise level',
          distance: '2d6 x 50 feet',
        },
      ],
    },
    'visibility-outdoors': {
      headers: ['description', 'distance'],
      rows: [
        {
          description: 'Clear day, no obstructions',
          distance: '2 miles',
        },
        {
          description: 'Rain',
          distance: '1 mile',
        },
        {
          description: 'Fog',
          distance: '100 to 300 feet',
        },
        {
          description: 'From height',
          distance: 'x 20',
        },
      ],
    },
  },
  conditions: {
    conditions: {
      headers: ['condition', 'effect'],
      rows: [
        {
          condition: 'Blinded',
          effect:
            'Automatically fail any check requiring sight. Disadvantage on attack rolls. Attackers have advantage.',
        },
        {
          condition: 'Charmed',
          effect:
            'Cannot attack the charmer or target them with harmful abilities or effects. The charmer has advantage on interacting socially with the charmed creature.',
        },
        {
          condition: 'Deafened',
          effect: 'Automatically fail any ability check that requires hearing.',
        },
        {
          condition: 'Exhaustion',
          effect:
            '1: Disadvantage on ability checks; 2: Half Speed; 3: Disadvantage on attack rolls and saving throws; 4: HP Max halved; 5: Speed reduced to 0; 6: Death',
        },
        {
          condition: 'Falling',
          effect:
            'At the end of a fall a creature takes 1d6 bludgeoning damage for every 10 feet they fell (max 20d6). A creature who takes damage this way is knocked prone.',
        },
        {
          condition: 'Frightened',
          effect:
            "A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can't willingly move closer to the source of its fear.",
        },
        {
          condition: 'Grappled',
          effect:
            "A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed. The condition ends if the grappler is incapacitated (see the condition). The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.",
        },
        {
          condition: 'Hidden',
          effect:
            "When you attack a target that you can't see, you have disadvantage on the attack roll. This is true whether you're guessing the target's location or you're targeting a creature you can hear but not see. If the target isn't in the location you targeted, you automatically miss, but the GM typically just says that the attack missed, not whether you guessed the target's location correctly. When a creature can't see you, you have advantage on attack rolls against it. If you are hidden–both unseen and unheard when you make an attack, you give away your location when the attack hits or misses.",
        },
        {
          condition: 'Incapacitated',
          effect: "An incapacitated creature can't take actions or reactions.",
        },
        {
          condition: 'Invisible',
          effect:
            "An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage.",
        },
        {
          condition: 'Paralyzed',
          effect:
            "A paralyzed creature is incapacitated (see the condition) and can't move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
        },
        {
          condition: 'Petrified',
          effect:
            "A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can't move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.",
        },
        {
          condition: 'Poisoned',
          effect: 'A poisoned creature has disadvantage on attack rolls and ability checks.',
        },
        {
          condition: 'Prone',
          effect:
            "A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.",
        },
        {
          condition: 'Restrained',
          effect:
            "A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.",
        },
        {
          condition: 'Stunned',
          effect:
            "A stunned creature is incapacitated (see the condition), can't move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.",
        },
        {
          condition: 'Unconscious',
          effect:
            "An unconscious creature is incapacitated (see the condition), can't move or speak, and is unaware of its surroundings The creature drops whatever it's holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.",
        },
      ],
    },
  },
  cover: {
    cover: {
      headers: ['cover', 'effect'],
      rows: [
        {
          cover: 'Half cover',
          effect: '+2 to AC and Dexterity saving throws',
        },
        {
          cover: 'Three-quarters cover',
          effect: '+5 to AC and Dexterity saving throws',
        },
        {
          cover: 'Full cover',
          effect: 'Cannot be targeted directly by an attack or spell',
        },
      ],
    },
  },
  actions: {
    actions: {
      headers: ['action', 'description'],
      rows: [
        {
          action: 'Attack',
          description: 'Make a melee or ranged attack. See the attacks section for more details.',
        },
        {
          action: 'Cast',
          description:
            'You cast a cantrip or leveled spell. See the spells casting time. You can only cast one leveled spell per turn, but you can cast another leveled spell as a reaction.',
        },
        {
          action: 'Dash',
          description:
            'Gain extra movement equal to your speed for the turn. This movement happens after your normal movement.',
        },
        {
          action: 'Disengage',
          description: 'Your movement does not provoke opportunity attacks for the turn.',
        },
        {
          action: 'Dodge',
          description:
            'Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage. You lose this benefit if you are incapacitated or if your speed drops to 0.',
        },
        {
          action: 'Grapple',
          description:
            "(1 melee attack) You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, you grapple the target.",
        },
        {
          action: 'Help',
          description:
            'You aid another creature in making a skill check or attack roll. The target gains advantage on the next ability check or attack roll it makes before the start of your next turn.',
        },
        {
          action: 'Hide',
          description:
            'You make a Dexterity (Stealth) check in an attempt to become hidden. While hidden you have advantage on attacks and attacks against you have disadvantage.',
        },
        {
          action: 'Ready',
          description:
            "You wait for a particular circumstance before you act, which let's you use your reaction before the start of your next turn. You must decide in advance what circumstance will trigger your reaction and what action you will take in response ot the trigger. If you ready a spell it must have a casting time of 1 action and you must concentrate on it until you release it.",
        },
        {
          action: 'Search',
          description: 'You make a Wisdom (Perception) check or Intelligence (Investigation) check to find something.',
        },
        {
          action: 'Shove',
          description:
            "(1 melee attack) You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, you either knock the target prone or push it 5 feet away from you.",
        },
        {
          action: 'Use a magic item',
          description: 'You use a magic item that requires an action to use.',
        },
        {
          action: 'Use an object',
          description: 'You use an object that requires an action to use.',
        },
        {
          action: 'Use a special ability',
          description: 'You use a special ability that requires an action to use.',
        },
      ],
    },
  },
  'setting a dc': {
    'setting-a-dc': {
      headers: ['difficulty', 'dc'],
      rows: [
        {
          difficulty: 'Very easy',
          dc: '5',
        },
        {
          difficulty: 'Easy',
          dc: '10',
        },
        {
          difficulty: 'Moderate',
          dc: '15',
        },
        {
          difficulty: 'Hard',
          dc: '20',
        },
        {
          difficulty: 'Very hard',
          dc: '25',
        },
        {
          difficulty: 'Nearly impossible',
          dc: '30',
        },
      ],
    },
  },
  'tracking dc': {
    'tracking-dc': {
      headers: ['ground conditions', 'dc'],
      rows: [
        {
          'ground conditions': 'Soft surfaces such as snow',
          dc: '10',
        },
        {
          'ground conditions': 'Dirt or grass',
          dc: '15',
        },
        {
          'ground conditions': 'Bare stone',
          dc: '20',
        },
        {
          'ground conditions': 'Each day since the creature passed',
          dc: '+5',
        },
        {
          'ground conditions': 'Creature left a trail such as blood',
          dc: '-5',
        },
      ],
    },
  },
  'object ac': {
    'object-ac': {
      headers: ['substance', 'ac'],
      rows: [
        {
          substance: 'Cloth, paper, rope',
          ac: '11',
        },
        {
          substance: 'Crystal, glass, ice',
          ac: '13',
        },
        {
          substance: 'Wood, bone',
          ac: '15',
        },
        {
          substance: 'Stone',
          ac: '17',
        },
        {
          substance: 'Iron, steel',
          ac: '19',
        },
        {
          substance: 'Mithral',
          ac: '21',
        },
        {
          substance: 'Adamantine',
          ac: '23',
        },
      ],
    },
  },
  'object hp': {
    'object-hp': {
      headers: ['size', 'fragile', 'resilient'],
      rows: [
        {
          size: 'Tiny (bottle, lock)',
          fragile: '2 (1d4)',
          resilient: '5 (2d4)',
        },
        {
          size: 'Small (chest, lute)',
          fragile: '3 (1d6)',
          resilient: '10 (3d6)',
        },
        {
          size: 'Medium (barrel, chandelier)',
          fragile: '4 (1d8)',
          resilient: '18 (4d8)',
        },
        {
          size: 'Large (cart, 10x10 ft. window)',
          fragile: '5 (1d10)',
          resilient: '27 (5d10)',
        },
        {
          size: 'Huge (rowboat, statue)',
          fragile: '6 (1d12)',
          resilient: '40 (6d12)',
        },
        {
          size: 'Gargantuan (sailing ship, castle wall)',
          fragile: '7 (2d6)',
          resilient: '50 (7d10)',
        },
      ],
    },
  },
  'food and drink': {
    'food-and-drink': {
      headers: ['food', 'cost'],
      rows: [
        {
          food: 'Ale, gallon',
          cost: '2 sp',
        },
        {
          food: 'Ale, pint',
          cost: '4 cp',
        },
        {
          food: 'Wine, common (pitcher)',
          cost: '2 sp',
        },
        {
          food: 'Wine, fine (bottle)',
          cost: '10 gp',
        },
        {
          food: 'Banquet (per person)',
          cost: '10 gp',
        },
        {
          food: 'Bread, loaf',
          cost: '2 cp',
        },
        {
          food: 'Cheese, hunk',
          cost: '1 sp',
        },
        {
          food: 'Inn stay (per day, poor)',
          cost: '2 sp',
        },
        {
          food: 'Inn stay (per day)',
          cost: '5 sp',
        },
        {
          food: 'Inn stay (per day, wealthy)',
          cost: '2 gp',
        },
        {
          food: 'Meal (per day, poor)',
          cost: '3 sp',
        },
        {
          food: 'Meal (per day)',
          cost: '5 sp',
        },
        {
          food: 'Meal (per day, wealthy)',
          cost: '8 sp',
        },
      ],
    },
  },
  'services and transportation': {
    'services-and-transportation': {
      headers: ['service', 'cost'],
      rows: [
        {
          service: 'Coach cab (per mile)',
          cost: '3 cp',
        },
        {
          service: 'Coach hire (per day)',
          cost: '1 gp',
        },
        {
          service: 'Hireling, trained (per day)',
          cost: '2 gp',
        },
        {
          service: 'Hireling, untrained (per day)',
          cost: '2 sp',
        },
        {
          service: 'Messenger (per mile)',
          cost: '2 cp',
        },
        {
          service: 'Road or gate toll',
          cost: '1 cp',
        },
        {
          service: "Ship's passage (per day)",
          cost: '1 sp',
        },
      ],
    },
  },
  'travel pace': {
    'travel-pace': {
      description: 'Distance per...',
      headers: ['pace', 'distance per minute', 'distance per hour', 'distance per day', 'effect'],
      rows: [
        {
          pace: 'slow',
          'distance per minute': '200 ft.',
          'distance per hour': '2 miles',
          'distance per day': '18 miles',
          effect: 'Able to use stealth',
        },
        {
          pace: 'normal',
          'distance per minute': '300 ft.',
          'distance per hour': '3 miles',
          'distance per day': '24 miles',
          effect: 'No effect',
        },
        {
          pace: 'fast',
          'distance per minute': '400 ft.',
          'distance per hour': '4 miles',
          'distance per day': '30 miles',
          effect: '-5 penalty to passive Wisdom (Perception) scores',
        },
      ],
    },
  },
};

export const RULES = Object.keys(RULE_DATA);

export const SMALL_TABLE_RULES: SmallCardRuleData = {
  strength: 'Measures physical power. Skills: Athletics',
  dexterity: 'Measures agility. Skills: Acrobatics, Sleight of Hand, Stealth',
  constitution: 'Measures endurance. Skills: Concentration',
  intelligence: 'Measures reasoning and memory. Skills: Arcana, History, Investigation, Nature, Religion',
  wisdom: 'Measures perception and insight. Skills: Animal Handling, Insight, Medicine, Perception, Survival',
  charisma: 'Measures force of personality. Skills: Deception, Intimidation, Performance, Persuasion',
  'encounter distance': 'Wilderness encounter distance based on visibility and terrain.',
  conditions: 'A list of conditions and their effects.',
  cover: 'Effects of cover. Cover: Half cover, Three-quarters cover, Full cover',
  actions: 'Available actions in combat.',
  'setting a dc': 'Guidlines for setting DC of an ability check.',
  'tracking dc': 'Guidlines for setting DC of tracking based on ground conditions.',
  'object ac': 'Armor class of objects based on substance.',
  'object hp': 'Hit points of objects based on size.',
  'food and drink': 'Prices of food and drink.',
  'services and transportation': 'Prices of services and transportation.',
  'travel pace': 'Distance and effects based on travel pace.',
};
