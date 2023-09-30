import { RuleData } from './interfaces';

export const RULE_DATA: RuleData = {
  strength: {
    athletics: {
      description: 'Climb a wall or a rope, swim or jump high.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'Normal wall; tread in rough condition; water; clear obstacle while jumping.',
        },
        {
          difficulty: 'moderate',
          examples: 'Rope from overhang; swim in rough water.',
        },
        {
          difficulty: 'hard',
          examples: 'Wall with rare handholds; catch on a rope; violent water.',
        },
        {
          difficulty: 'very hard',
          examples: 'Slippery wall; clip vertically; stormy waters.',
        },
      ],
    },
    'feats-of-strength other': {
      description:
        'Any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'Struck/broken door: weak bindings: pull stuck wedge obiect loose.',
        },
        {
          difficulty: 'moderate',
          examples: 'Reinforced wooden door; hang on a wagon.',
        },
        {
          difficulty: 'hard',
          examples: 'Heavy locked/barred door; topple stone statue.',
        },
        {
          difficulty: 'very hard',
          examples: 'Heavy reinforced door; hold door against water.',
        },
      ],
    },
  },
  dexterity: {
    acrobatics: {
      description: 'Walk across difficult surface; hold balance; land safely. Otherwise fall / take damage.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'Icy surface; turbulent situation; land on dificult terrain.',
        },
        {
          difficulty: 'moderate',
          examples: 'Narrow edge; swing from chandelier and land.',
        },
        {
          difficulty: 'hard',
          examples: 'Cross a wildly swaying rope bridge.',
        },
        {
          difficulty: 'very hard',
          examples: 'Walk across a tightrope; vault over/under an enemy.',
        },
      ],
    },
    'sleight-of-hand': {
      headers: ['description', 'purpose'],
      rows: [
        {
          description: 'contest vs perception',
          purpose: 'Hide an object on your person; palm an object.',
        },
      ],
    },
    stealth: {
      headers: ['description', 'purpose'],
      rows: [
        {
          description: 'contest vs deception',
          purpose: 'Conceal from enemies; sneak past targets; Slip awav while others are distracted.',
        },
      ],
    },
    'pick-lock disarm-trap': {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'Simple lock; simple trap.',
        },
        {
          difficulty: 'moderate',
          examples: 'Typical lock.',
        },
        {
          difficulty: 'hard',
          examples: 'Elaborate lock; average trap.',
        },
        {
          difficulty: 'very hard',
          examples: 'Masterwork lock; complex trap.',
        },
      ],
    },
  },
  constitution: {
    concentration: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'ten or half the damage taken',
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
          difficulty: 'easy',
          examples: 'Recall widely known information (common)',
        },
        {
          difficulty: 'moderate',
          examples: 'Recall more obscure or specific information (uncommon)',
        },
        {
          difficulty: 'hard',
          examples: 'Recall truly esoteric or precise information (rare)',
        },
        {
          difficulty: 'very hard',
          examples: 'Recall information that is known only by a privileged few (very rare)',
        },
      ],
    },
    'investigation other': {
      description:
        "Identity a trap or a secret or coded message; communicate a idea with an creature vou don't share a language with; discover the true nature of an illusion.",
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'Obvious trap or a secret; simple idea with an intelligent creature; low-level illusion.',
        },
        {
          difficulty: 'moderate',
          examples:
            'Typical trap; determine time or cause of death of a recentlv deceased creature: estimate the material worth of an item; mid-level illusion.',
        },
        {
          difficulty: 'hard',
          examples:
            'Well-hidden trap, object, or area; forge a document or identity such a document; high-level illusion.',
        },
        {
          difficulty: 'very hard',
          examples:
            'Magicallv-hidden trap. obiect. or area: discern the purpose and process of a comblicated device or system; determine the integrity of a structure, construct, or tormation and identity any exploitable weak points.',
        },
      ],
    },
  },
  wisdom: {
    'insight perception': {
      description: {
        insight: 'Read the intentions of a creature; check if it the truth.',
        perception: 'Spot/recognize a location; hear a sound.',
      },
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples:
            'read a child, prominent landmark, or structure; hear the far-off sound of thunder signaling a coming storm.',
        },
        {
          difficulty: 'moderate',
          examples:
            'Discern the leader of a group; the intended message of a non-verbal talk shot a natural-obscured obiect or teature: a conversation in the next room.',
        },
        {
          difficulty: 'hard',
          examples:
            "guess at the enemy's next action: well-hidden object or feature; a hushed conversation through a heavv door.",
        },
        {
          difficulty: 'very hard',
          examples: 'near v-invisible obiect or feature: read the lips of a creature vou can see but not hear.',
        },
      ],
    },
    survival: {
      description: 'Follow a trail / track; forage food for a day; navigate in wilderness.',
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples:
            'well-worn trail in a forest: tracks of a creature through snow or mud: forage in a plentiful area; navigate on a clear night.',
        },
        {
          difficulty: 'moderate',
          examples:
            'abandoned or forgotten trail; track a creature through a forest; forage in a sparse area; navigate on a cloudy night; predict an oncoming storm; identify the signs of nearby creatures.',
        },
        {
          difficulty: 'hard',
          examples:
            "Track over barren terrain: forage in a harsh area; navigate through an alien area on a cloudy night; predict tomorrow's weather.",
        },
        {
          difficulty: 'very hard',
          examples: 'Track after rainfall: navigate an alien area on a stormy night.',
        },
      ],
    },
    'animal-handling medicine other': {
      description: {
        'Animal Handling': 'Interact with or train an animal.',
        Medicine: 'cure or stabilize a creature , diagnose ailments.',
      },
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'domesticated animal stabilize a dying creature outside of combat; common ailment.',
        },
        {
          difficulty: 'moderate',
          examples:
            'wild but otherwise peaceful animal. perform a complex maneuver while mounted; set a broken bone; stabilize a dying creature in the middle of combat: uncommon ailment.',
        },
        {
          difficulty: 'hard',
          examples: "Intuit a hostile animal's next action: control an untrained mount; rare ailment.",
        },
        {
          difficulty: 'very hard',
          examples: 'Calm a dangerous wild animal diagnose magical and divine ailments.',
        },
      ],
    },
  },
  charisma: {
    deception: {
      headers: ['description', 'examples'],
      rows: [
        {
          description: 'contest vs insight',
          examples:
            'Fast-talk or con someone, adopt a disguise or impersonate another creature, tell a convincing lie or otherwise hide vour true intentions.',
        },
      ],
    },
    intimidation: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'Scare a spine ess noble in to handing over their coin purse.',
        },
        {
          difficulty: 'moderate',
          examples:
            'Pry information out of an uncooperative prisoner, convince street thugs to back down from a controntatior.',
        },
        {
          difficulty: 'hard',
          examples:
            'Advise a guard that it might be best to look the other wav this time around, coerce an official in to signing a document.',
        },
        {
          difficulty: 'very hard',
          examples: 'Frighten a creature arger than vou. causing it to flee; stop an agitated mob in their tracks.',
        },
      ],
    },
    performance: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'Routine performance such as telling a storv in a tavern or around a campfire.',
        },
        {
          difficulty: 'moderate',
          examples:
            'Professional performance such as an inspiring speech or an impressive musical display which may attract the attention of a local troupe and lead to regional fame.',
        },
        {
          difficulty: 'hard',
          examples: 'Memorable bertormance which mav attract the attention of a oca patron and lead to national tame.',
        },
        {
          difficulty: 'very hard',
          examples:
            'Extraordinarv performance which mav attract the attention of distant patrons and even extra-planar beings.',
        },
      ],
    },
    persuasion: {
      headers: ['difficulty', 'examples'],
      rows: [
        {
          difficulty: 'easy',
          examples: 'Convince the mavor to allow vour part to helo calm a distraught person.',
        },
        {
          difficulty: 'moderate',
          examples:
            'Persuade a groun of bichway thieves to leave in beace. convince a friend v acauaintance that vou know best.',
        },
        {
          difficulty: 'hard',
          examples:
            'Convince a chamberlain to let vour party see the king, inspire or rallv a crown of townsfolk negotiate a peace between warring tribes.',
        },
        {
          difficulty: 'very hard',
          examples:
            "Convince a chhiny that vol are worthy of the secrets it guards assure a dragon vou're worth more alive than dead.",
        },
      ],
    },
  },
  'encounter distance': {
    terrain: {
      headers: ['description', 'distance'],
      rows: [
        {
          description: 'arctic, desert, farmland, or grassland',
          distance: '6d6 x 10 feet',
        },
        {
          description: 'forest, swamp, or woodland',
          distance: '2d8 x 10 feet',
        },
        {
          description: 'hills or wastelands',
          distance: '2d10 x 10 feet',
        },
        {
          description: 'jungle',
          distance: '2d6 x 10 feet',
        },
        {
          description: 'mountains',
          distance: '4d10 x 10 feet',
        },
        {
          description: 'underdark or urban',
          distance: '2d4 x 10 feet',
        },
      ],
    },
    'audible-distance': {
      headers: ['description', 'distance'],
      rows: [
        {
          description: 'trying to be quiet',
          distance: '2d6 x 5 feet',
        },
        {
          description: 'normal noise level',
          distance: '2d6 x 10 feet',
        },
        {
          description: 'loud noise level',
          distance: '2d6 x 50 feet',
        },
      ],
    },
    'visibility-outdoors': {
      headers: ['description', 'distance'],
      rows: [
        {
          description: 'clear day, no obstructions',
          distance: '2 miles',
        },
        {
          description: 'rain',
          distance: '1 mile',
        },
        {
          description: 'fog',
          distance: '100 to 300 feet',
        },
        {
          description: 'from height',
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
          condition: 'blinded',
          effect:
            'Automatically fail any check requiring sight. Disadvantage on attack rolls. Attackers have advantage.',
        },
        {
          condition: 'charmed',
          effect:
            'Cannot attack the charmer or target them with harmful abilities or effects.Charmer has advantage on interacting socially with the charmed creature',
        },
        {
          condition: 'deafened',
          effect: 'Automatically fail any ability check that requires hearing.',
        },
        {
          condition: 'exhaustion',
          effect:
            '1: Disadvantage on ability checks; 2: Half Speed; 3: Disadvantage on attack rolls and saving throws; 4: HP Max halved; 5: Speed reduced to 0; 6: Death',
        },
        {
          condition: 'falling',
          effect:
            'At the end of a fall a creature takes 1d6 bludgeoning damage for every 10 feet they fell (max 20d6). A creature who takes damage this way is knocked prone',
        },
        {
          condition: 'frightened',
          effect:
            'A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can’t willingly move closer to the source of its fear.',
        },
        {
          condition: 'grappled',
          effect:
            'A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. The condition ends if the grappler is incapacitated (see the condition). The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.',
        },
        {
          condition: 'hidden',
          effect:
            "When you attack a target that you can't see, you have disadvantage on the attack roll. This is true whether you're guessing the target's location or you're targeting a creature you can hear but not see. If the target isn't in the location you targeted, you automatically miss, but the GM typically just says that the attack missed, not whether you guessed the target's location correctly. When a creature can't see you, you have advantage on attack rolls against it. If you are hidden–both unseen and unheard–when you make an attack, you give away your location when the attack hits or misses.",
        },
        {
          condition: 'incapacitated',
          effect: 'An incapacitated creature can’t take actions or reactions.',
        },
        {
          condition: 'invisible',
          effect:
            'An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature’s attack rolls have advantage.',
        },
        {
          condition: 'paralyzed',
          effect:
            'A paralyzed creature is incapacitated (see the condition) and can’t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.',
        },
        {
          condition: 'petrified',
          effect:
            'A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.',
        },
        {
          condition: 'poisoned',
          effect: 'A poisoned creature has disadvantage on attack rolls and ability checks.',
        },
        {
          condition: 'prone',
          effect:
            'A prone creature’s only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.',
        },
        {
          condition: 'restrained',
          effect:
            'A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.',
        },
        {
          condition: 'stunned',
          effect:
            'A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.',
        },
        {
          condition: 'unconscious',
          effect:
            'An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.',
        },
      ],
    },
  },
  cover: {
    cover: {
      headers: ['cover', 'effect'],
      rows: [
        {
          cover: 'half cover',
          effect: '+2 to AC and Dexterity saving throws',
        },
        {
          cover: 'three-quarters cover',
          effect: '+5 to AC and Dexterity saving throws',
        },
        {
          cover: 'full cover',
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
          action: 'attack',
          description: 'Make a melee or ranged attack',
        },
        {
          action: 'cast',
          description:
            'You cast a cantrip or leveled spell. See the spells casting time. You can only cast one leveled spell per turn, but you can cast another leveled spell as a reaction.',
        },
        {
          action: 'dash',
          description:
            'Gain extra movement equal to your speed for the turn. This movement happens after your normal movement.',
        },
        {
          action: 'disengage',
          description: 'Your movement does not provoke opportunity attacks for the turn.',
        },
        {
          action: 'dodge',
          description:
            'Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage. You lose this benefit if you are incapacitated or if your speed drops to 0.',
        },
        {
          action: 'grapple',
          description:
            '(1 melee attack) You make a Strength (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, you grapple the target.',
        },
        {
          action: 'help',
          description:
            'You aid another creature in making a skill check or attack roll. The target gains advantage on the next ability check or attack roll it makes before the start of your next turn.',
        },
        {
          action: 'hide',
          description:
            'You make a Dexterity (Stealth) check in an attempt to become hidden. While hidden you have advantage on attacks and attacks against you have disadvantage.',
        },
        {
          action: 'ready',
          description:
            "You wait for a particular circumstance before you act, which let's you use your reaction before the start of your next turn. You must decide in advance what circumstance will trigger your reaction and what action you will take in response ot the trigger. If you ready a spell it must have a casting time of 1 action and you must concentrate on it until you release it.",
        },
        {
          action: 'search',
          description: 'You make a Wisdom (Perception) check or Intelligence (Investigation) check to find something.',
        },
        {
          action: 'shove',
          description:
            '(1 melee attack) You make a Strength (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, you either knock the target prone or push it 5 feet away from you.',
        },
        {
          action: 'use a magic item',
          description: 'You use a magic item that requires an action to use.',
        },
        {
          action: 'use an object',
          description: 'You use an object that requires an action to use.',
        },
        {
          action: 'use a special ability',
          description: 'You use a special ability that requires an action to use.',
        },
      ],
    },
  },
  'setting a dc': {
    'setting a dc': {
      headers: ['difficulty', 'dc'],
      rows: [
        {
          difficulty: 'very easy',
          dc: '5',
        },
        {
          difficulty: 'easy',
          dc: '10',
        },
        {
          difficulty: 'moderate',
          dc: '15',
        },
        {
          difficulty: 'hard',
          dc: '20',
        },
        {
          difficulty: 'very hard',
          dc: '25',
        },
        {
          difficulty: 'nearly impossible',
          dc: '30',
        },
      ],
    },
  },
  'tracking dc': {
    'tracking dc': {
      headers: ['ground conditions', 'dc'],
      rows: [
        {
          'ground conditions': 'soft surfaces such as snow',
          dc: '10',
        },
        {
          'ground conditions': 'dirt or grass',
          dc: '15',
        },
        {
          'ground conditions': 'bare stone',
          dc: '20',
        },
        {
          'ground conditions': 'each day since the creature passed',
          dc: '+5',
        },
        {
          'ground conditions': 'creature left a trail such as blood',
          dc: '-5',
        },
      ],
    },
  },
  'object ac': {
    'object ac': {
      headers: ['substance', 'ac'],
      rows: [
        {
          substance: 'cloth, paper, rope',
          ac: '11',
        },
        {
          substance: 'crystal, glass, ice',
          ac: '13',
        },
        {
          substance: 'wood, bone',
          ac: '15',
        },
        {
          substance: 'stone',
          ac: '17',
        },
        {
          substance: 'iron, steel',
          ac: '19',
        },
        {
          substance: 'mithral',
          ac: '21',
        },
        {
          substance: 'adamantine',
          ac: '23',
        },
      ],
    },
  },
  'object hp': {
    'object hp': {
      headers: ['size', 'fragile', 'resilient'],
      rows: [
        {
          size: 'tiny (bottle, lock)',
          fragile: '2 (1d4)',
          resilient: '5 (2d4)',
        },
        {
          size: 'small (chest, lute)',
          fragile: '3 (1d6)',
          resilient: '10 (3d6)',
        },
        {
          size: 'medium (barrel, chandelier)',
          fragile: '4 (1d8)',
          resilient: '18 (4d8)',
        },
        {
          size: 'large (cart, 10x10 ft. window)',
          fragile: '5 (1d10)',
          resilient: '27 (5d10)',
        },
        {
          size: 'huge (rowboat, statue)',
          fragile: '6 (1d12)',
          resilient: '40 (6d12)',
        },
        {
          size: 'gargantuan (sailing ship, castle wall)',
          fragile: '7 (2d6)',
          resilient: '50 (7d10)',
        },
      ],
    },
  },
  'food and drink': {
    'food and drink': {
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
    'services and transportation': {
      headers: ['service', 'cost'],
      rows: [
        {
          service: 'coach cab (per mile)',
          cost: '3 cp',
        },
        {
          service: 'coach hire (per day)',
          cost: '1 gp',
        },
        {
          service: 'hireling, trained (per day)',
          cost: '2 gp',
        },
        {
          service: 'hireling, untrained (per day)',
          cost: '2 sp',
        },
        {
          service: 'messenger (per mile)',
          cost: '2 cp',
        },
        {
          service: 'road or gate toll',
          cost: '1 cp',
        },
        {
          service: "ship's passage (per day)",
          cost: '1 sp',
        },
      ],
    },
  },
  'travel pace': {
    'travel pace': {
      description: 'distance per...',
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
          effect: 'no effect',
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
