import { SkillData } from './interfaces';

export const RULE_DATA: SkillData = {
  strength: {
    athletics: {
      description: 'Climb a wall or a rope, swim or jump high.',
      easy: 'Normal wall; tread in rough condition; water; clear obstacle while jumping.',
      moderate: 'Rope from overhang; swim in rough water.',
      hard: 'Wall with rare handholds; catch on a rope; violent water.',
      'very hard': 'Slippery wall; clip vertically; stormy waters.',
    },
    'feats-of-strength other': {
      description:
        'Any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation.',
      easy: 'Struck/broken door: weak bindings: pull stuck wedge obiect loose.',
      moderate: 'Reinforced wooden door; hang on a wagon.',
      hard: 'Heavy locked/barred door; topple stone statue.',
      'very hard': 'Heavy reinforced door; hold door against water.',
    },
  },
  dexterity: {
    acrobatics: {
      description: 'Walk across difficult surface; hold balance; land safely. Otherwise fall / take damage.',
      easy: 'Icy surface; turbulent situation; land on dificult terrain.',
      moderate: 'Narrow edge; swing from chandelier and land.',
      hard: 'Cross a wildly swaying rope bridge.',
      'very hard': 'Walk across a tightrope; vault over/under an enemy.',
    },
    'sleight-of-hand': {
      'contest vs deception': 'Plant or steal an object on or from a target.',
    },
    stealth: {
      'contest vs deception': 'Conceal from enemies; sneak past targets; Slip awav while others are distracted.',
    },
    'pick-lock disarm-trap': {
      easy: 'Simple lock; simple trap.',
      moderate: 'Typical lock.',
      hard: 'Elaborate lock; average trap.',
      'very hard': 'Masterwork lock; complex trap.',
    },
  },
  constitution: {
    concentration: {
      'ten or half the damage taken': 'After taking damage while maintaining concentration spell.',
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
      easy: 'Recall widely known information (common)',
      moderate: 'Recall more obscure or specific information (uncommon)',
      hard: 'Recall truly esoteric or precise information (rare)',
      'very hard': 'Recall information that is known only by a privileged few (very rare)',
    },
    'investigation other': {
      description:
        "Identity a trap or a secret or coded message; communicate a idea with an creature vou don't share a language with; discover the true nature of an illusion.",
      easy: 'Obvious trap or a secret; simple idea with an intelligent creature; low-level illusion.',
      moderate:
        'Typical trap; determine time or cause of death of a recentlv deceased creature: estimate the material worth of an item; mid-level illusion.',
      hard: 'Well-hidden trap, object, or area; forge a document or identity such a document; high-level illusion.',
      'very hard':
        'Magicallv-hidden trap. obiect. or area: discern the purpose and process of a comblicated device or system; determine the integrity of a structure, construct, or tormation and identity any exploitable weak points.',
    },
  },
  wisdom: {
    'insight perception': {
      description: {
        insight: 'Read the intentions of a creature; check if it the truth.',
        perception: 'Spot/recognize a location; hear a sound.',
      },
      easy: 'read a child, prominent landmark, or structure; hear the far-off sound of thunder signaling a coming storm.',
      moderate:
        'Discern the leader of a group; the intended message of a non-verbal talk shot a natural-obscured obiect or teature: a conversation in the next room.',
      hard: "guess at the enemy's next action: well-hidden object or feature; a hushed conversation through a heavv door.",
      'very hard': 'near v-invisible obiect or feature: read the lips of a creature vou can see but not hear.',
    },
    survival: {
      description: 'Follow a trail / track; forage food for a day; navigate in wilderness.',
      easy: 'well-worn trail in a forest: tracks of a creature through snow or mud: forage in a plentiful area; navigate on a clear night.',
      moderate:
        'abandoned or forgotten trail; track a creature through a forest; forage in a sparse area; navigate on a cloudy night; predict an oncoming storm; identify the signs of nearby creatures.',
      hard: "Track over barren terrain: forage in a harsh area; navigate through an alien area on a cloudy night; predict tomorrow's weather.",
      'very hard': 'Track after rainfall: navigate an alien area on a stormy night.',
    },
    'animal-handling medicine other': {
      description: {
        'Animal Handling': 'Interact with or train an animal.',
        Medicine: 'cure or stabilize a creature , diagnose ailments.',
      },
      easy: 'domesticated animal stabilize a dying creature outside of combat; common ailment.',
      moderate:
        'wild but otherwise peaceful animal. perform a complex maneuver while mounted; set a broken bone; stabilize a dying creature in the middle of combat: uncommon ailment.',
      hard: "Intuit a hostile animal's next action: control an untrained mount; rare ailment.",
      'very hard': 'Calm a dangerous wild animal diagnose magical and divine ailments.',
    },
  },
  charisma: {
    deception: {
      'contest vs insight':
        'Fast-talk or con someone, adopt a disguise or impersonate another creature, tell a convincing lie or otherwise hide vour true intentions.',
    },
    intimidation: {
      easy: 'Scare a spine ess noble in to handing over their coin purse.',
      moderate:
        'Pry information out of an uncooperative prisoner, convince street thugs to back down from a controntatior.',
      hard: 'Advise a suard that it might be best to look the other wav this time around, coerce an official in to signing a document.',
      'very hard': 'Frighten a creature arger than vou. causing it to flee; stop an agitated mob in their tracks.',
    },
    performance: {
      easy: 'Routine performance such as telling a storv in a tavern or around a campfire.',
      moderate:
        'Professional performance such as an inspiring speech or an impressive musical display which may attract the attention of a local troupe and lead to regional fame.',
      hard: 'Memorable bertormance which mav attract the attention of a oca patron and lead to national tame.',
      'very hard':
        'Extraordinarv performance which mav attract the attention of distant patrons and even extra-planar beings.',
    },
    persuasion: {
      easy: 'Convince the mavor to allow vour part to helo calm a distraught person.',
      moderate:
        'Persuade a groun of bichway thieves to leave in beace. convince a friend v acauaintance that vou know best.',
      hard: 'Convince a chamberlain to let vour party see the king, inspire or rallv a crown of townsfolk negotiate a peace between warring tribes.',
      'very hard':
        "Convince a chhiny that vol are worthy of the secrets it guards assure a dragon vou're worth more alive than dead.",
    },
  },
  conditions: {
    conditions: {
      blinded: 'Automatically fail any check requiring sight. Disadvantage on attack rolls. Attackers have advantage.',
      charmed:
        'Cannot attack the charmer or target them with harmful abilities or effects.Charmer has advantage on interacting socially with the charmed creature',
      deafened: 'Automatically fail any ability check that requires hearing.',
      exhaustion:
        '1: Disadvantage on ability checks; 2: Half Speed; 3: Disadvantage on attack rolls and saving throws; 4: HP Max halved; 5: Speed reduced to 0; 6: Death',
      falling:
        'At the end of a fall a creature takes 1d6 bludgeoning damage for every 10 feet they fell (max 20d6). A creature who takes damage this way is knocked prone',
      frightened:
        'A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can’t willingly move closer to the source of its fear.',
      grappled:
        'A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. The condition ends if the grappler is incapacitated (see the condition). The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.',
      hidden:
        "When you attack a target that you can't see, you have disadvantage on the attack roll. This is true whether you're guessing the target's location or you're targeting a creature you can hear but not see. If the target isn't in the location you targeted, you automatically miss, but the GM typically just says that the attack missed, not whether you guessed the target's location correctly. When a creature can't see you, you have advantage on attack rolls against it. If you are hidden–both unseen and unheard–when you make an attack, you give away your location when the attack hits or misses.",
      incapacitated: 'An incapacitated creature can’t take actions or reactions.',
      invisible:
        'An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature’s attack rolls have advantage.',
      paralyzed:
        'A paralyzed creature is incapacitated (see the condition) and can’t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.',
      petrified:
        'A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.',
      poisoned: 'A poisoned creature has disadvantage on attack rolls and ability checks.',
      prone:
        'A prone creature’s only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.',
      restrained:
        'A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.',
      stunned:
        'A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.',
      unconscious:
        'An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.',
    },
  },
  cover: {
    cover: {
      'half cover': '+2 to AC and Dexterity saving throws',
      'three-quarters cover': '+5 to AC and Dexterity saving throws',
      'full cover': 'Cannot be targeted directly by an attack or spell',
    },
  },
  actions: {
    actions: {
      attack: 'Make a melee or ranged attack',
      cast: 'You cast a cantrip or leveled spell. See the spells casting time. You can only cast one leveled spell per turn, but you can cast another leveled spell as a reaction.',
      dash: 'Gain extra movement equal to your speed for the turn. This movement happens after your normal movement.',
      disengage: 'Your movement does not provoke opportunity attacks for the turn.',
      dodge:
        'Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage. You lose this benefit if you are incapacitated or if your speed drops to 0.',
      grapple:
        '(1 melee attack) You make a Strength (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, you grapple the target.',
      help: 'You aid another creature in making a skill check or attack roll. The target gains advantage on the next ability check or attack roll it makes before the start of your next turn.',
      hide: 'You make a Dexterity (Stealth) check in an attempt to become hidden. While hidden you have advantage on attacks and attacks against you have disadvantage.',
      ready:
        "You wait for a particular circumstance before you act, which let's you use your reaction before the start of your next turn. You must decide in advance what circumstance will trigger your reaction and what action you will take in response ot the trigger. If you ready a spell it must have a casting time of 1 action and you must concentrate on it until you release it.",
      search: 'You make a Wisdom (Perception) check or Intelligence (Investigation) check to find something.',
      shove:
        '(1 melee attack) You make a Strength (Athletics) check contested by the target’s Strength (Athletics) or Dexterity (Acrobatics) check. If you win the contest, you either knock the target prone or push it 5 feet away from you.',
      'use a magic item': 'You use a magic item that requires an action to use.',
      'use an object': 'You use an object that requires an action to use.',
      'use a special ability': 'You use a special ability that requires an action to use.',
    },
  },
  'setting a dc': {
    'setting a dc': {
      Difficuty: 'DC',
      'very easy': '5',
      easy: '10',
      moderate: '15',
      hard: '20',
      'very hard': '25',
      'nearly impossible': '30',
    },
  },
  'tracking dc': {
    'tracking dc': {
      'Ground Conditions': 'DC',
      'soft surfaces such as snow': '10',
      'Dirt or grass': '15',
      'Bare stone': '20',
      'Each day since the creature passed': '+5',
      'Creature left a trail such as blood': '-5',
    },
  },
  'object ac': {
    'object ac': {
      Substance: 'AC',
      'Cloth, paper, rope': '11',
      'Crystal, glass, ice': '13',
      'Wood, bone': '15',
      Stone: '17',
      'Iron, steel': '19',
      Mithral: '21',
      Adamantine: '23',
    },
  },
  'object hp': {
    'object hp': {
      Size: 'HP (fragile/resilient)',
      'Tiny (bottle, lock)': '2(1d4) / 5(2d4)',
      'Small (chest, lute)': '3(1d6) / 10(3d6)',
      'Medium (barrel, chandelier)': '4(1d8) / 18(4d8)',
      'Large (cart, 10x10 ft. window)': '5(1d10) / 27(5d10)',
      'Huge (rowboat, statue)': '6(1d12) / 40(6d12)',
      'Gargantuan (sailing ship, castle wall)': '7(2d6) / 50(7d10)',
    },
  },
  'food and drink': {
    'food and drink': {
      Food: 'Cost',
      'Ale, gallon': '2 sp',
      'Ale, pint': '4 cp',
      'Wine, common (pitcher)': '2 sp',
      'Wine, fine (bottle)': '10 gp',
      'Banquet (per person)': '10 gp',
      'Bread, loaf': '2 cp',
      'Cheese, hunk': '1 sp',
      'Inn stay (per day, poor)': '2 sp',
      'Inn stay (per day)': '5 sp',
      'Inn stay (per day, wealthy)': '2 gp',
      'Meal (per day, poor)': '3 sp',
      'Meal (per day)': '5 sp',
      'Meal (per day, wealthy)': '8 sp',
    },
  },
  'services and transportation': {
    'services and transportation': {
      Service: 'Cost',
      'Coach cab (per mile)': '3 cp',
      'Coach hire (per day)': '1 gp',
      'Hireling, trained (per day)': '2 gp',
      'Hireling, untrained (per day)': '2 sp',
      'Messenger (per mile)': '2 cp',
      'Road or gate toll': '1 cp',
      'Ship’s passage (per day)': '1 sp',
    },
  },
};

export const RULES = Object.keys(RULE_DATA);
export const ABILITIES = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
export const TWO_COLUMN_RULES = [
  'conditions',
  'cover',
  'actions',
  'setting a dc',
  'tracking dc',
  'object ac',
  'object hp',
  'food and drink',
  'services and transportation',
];
