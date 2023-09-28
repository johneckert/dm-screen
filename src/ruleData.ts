import { SkillData } from './interfaces';

export const ABILITIES = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

export const skillData: SkillData = {
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
      'ten or half the damage taken': '',
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
        "Identity a trap or a secret or coded message; communicate a idea with an creature vou don't share a language with; discover the true nature of an illusion",
      easy: 'Obvious trap or a secret; simple idea with an intelligent creature; low-level illusion',
      moderate:
        'Typical trap; determine time or cause of death of a recentlv deceased creature: estimate the material worth of an item; mid-level illusion',
      hard: 'Well-hidden trap, object, or area; forge a document or identity such a document; high-level illusion',
      'very hard':
        'Magicallv-hidden trap. obiect. or area: discern the purpose and process of a comblicated device or system; determine the integrity of a structure, construct, or tormation and identity any exploitable weak points',
    },
  },
  wisdom: {
    'insight perception': {
      description: {
        insight: 'Read the intentions of a creature; check if it the truth',
        perception: 'Spot/recognize a location; hear a sound',
      },
      easy: 'read a child, prominent landmark, or structure; hear the far-off sound of thunder signaling a coming storm',
      moderate:
        'Discern the leader of a group; the intended message of a non-verbal talk shot a natural-obscured obiect or teature: a conversation in the next room',
      hard: "guess at the enemy's next action: well-hidden object or feature; a hushed conversation through a heavv door",
      'very hard': 'near v-invisible obiect or feature: read the lips of a creature vou can see but not hear',
    },
    survival: {
      description: 'Follow a trail / track; forage food for a day; navigate in wilderness',
      easy: 'well-worn trail in a forest: tracks of a creature through snow or mud: forage in a plentiful area; navigate on a clear night',
      moderate:
        'abandoned or forgotten trail; track a creature through a forest; forage in a sparse area; navigate on a cloudy night; predict an oncoming storm; identify the signs of nearby creatures',
      hard: "Track over barren terrain: forage in a harsh area; navigate through an alien area on a cloudy night; predict tomorrow's weather",
      'very hard': 'Track after rainfall: navigate an alien area on a stormy night',
    },
    'animal-handling medicine other': {
      description: {
        'Animal Handling': 'Interact with or train an animal',
        Medicine: 'cure or stabilize a creature , diagnose ailments',
      },
      easy: 'domesticated animal stabilize a dying creature outside of combat; common ailment',
      moderate:
        'wild but otherwise peaceful animal. perform a complex maneuver while mounted; set a broken bone; stabilize a dying creature in the middle of combat: uncommon ailment',
      hard: "Intuit a hostile animal's next action: control an untrained mount; rare ailment",
      'very hard': 'Calm a dangerous wild animal diagnose magical and divine ailments',
    },
  },
  charisma: {
    deception: {
      'contest vs insight':
        'Fast-talk or con someone, adopt a disguise or impersonate another creature, tell a convincing lie or otherwise hide vour true intentions',
    },
    intimidation: {
      easy: 'Scare a spine ess noble in to handing over their coin purse',
      moderate:
        'Pry information out of an uncooperative prisoner, convince street thugs to back down from a controntatior',
      hard: 'Advise a suard that it might be best to look the other wav this time around, coerce an official in to signing a document',
      'very hard': 'Frighten a creature arger than vou. causing it to flee; stop an agitated mob in their tracks',
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
      easy: 'Convince the mavor to allow vour part to helo calm a distraught person',
      moderate:
        'Persuade a groun of bichway thieves to leave in beace. convince a friend v acauaintance that vou know best',
      hard: 'Convince a chamberlain to let vour party see the king, inspire or rallv a crown of townsfolk negotiate a peace between warring tribes',
      'very hard':
        "Convince a chhiny that vol are worthy of the secrets it guards assure a dragon vou're worth more alive than dead",
    },
  },
};
