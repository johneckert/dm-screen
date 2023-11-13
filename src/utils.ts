import { ScreenSize, CardData, CardDataMap, CardType, APIMonsterData } from './interfaces';
import { BREAKPOINTS } from './constants';
import { PURPLE, TEAL, AMBER, RED, BLUE } from './colors';
import { EMPTY_CARD_MAP } from './constants';

export const getScreenSize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

export const getBreakPoint = (screenSize: ScreenSize) => {
  if (screenSize.width > BREAKPOINTS.lg) {
    return 'lg';
  } else if (screenSize.width > BREAKPOINTS.md) {
    return 'md';
  } else {
    return 'sm';
  }
};

export const mapCards = (cards: CardData[]) =>
  cards.reduce((filteredCards: CardDataMap, card) => {
    filteredCards[card.column].push(card);
    return filteredCards;
  }, EMPTY_CARD_MAP);

export const flattenCards = (cardDataMap: CardDataMap) => {
  return Object.values(cardDataMap).flat();
};

export const avatarColor = (type: CardType) => {
  switch (type) {
    case CardType.Map:
      return PURPLE[300];
    case CardType.Note:
      return TEAL[300];
    case CardType.Rule:
      return AMBER[400];
    case CardType.Player:
      return RED[300];
    case CardType.Monster:
      return BLUE[300];
    default:
      return;
  }
};

export const upperFirst = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const splitAndTitleCase = (str: string, splitChar: string = ' ', joinChar: string = ' ') => {
  if (!str) return str;
  const ignoreWords = ['of', 'the', 'a', 'an', 'and', 'or', 'but', 'nor', 'for', 'yet', 'so'];
  return str
    .split(splitChar)
    .map((word) => (ignoreWords.includes(word) ? word : word[0].toUpperCase() + word.slice(1)))
    .join(joinChar);
};

export const validateFileType = (file: File) => {
  if (file.type.toLowerCase() !== 'application/json') {
    return false;
  }
  return true;
};

const combineToString = (speed: { [key: string]: string } | string) => {
  if (typeof speed === 'string') {
    return speed;
  }
  return Object.entries(speed)
    .map(([key, value]) => `${key}: ${value}ft.`)
    .join(', ');
};

const combineToMarkdown = (specialAbilities: { [key: string]: string }[] | string) => {
  if (typeof specialAbilities === 'string') {
    return specialAbilities;
  }
  const abilitiesMarkDown =
    specialAbilities?.map((ability) => {
      return `### ${ability.name}: \n ${ability.desc} \n`;
    }) || [];
  return abilitiesMarkDown.join('\n');
};

export const formatMonsterData = (monsterData: APIMonsterData) => {
  return {
    title: monsterData.name,
    size: monsterData.size,
    type: monsterData.type,
    alignment: monsterData.alignment,
    hitDice: monsterData.hit_dice,
    hp: monsterData.hit_points,
    ac: monsterData.armor_class,
    strength: monsterData.strength,
    dexterity: monsterData.dexterity,
    constitution: monsterData.constitution,
    intelligence: monsterData.intelligence,
    wisdom: monsterData.wisdom,
    charisma: monsterData.charisma,
    speed: combineToString(monsterData.speed),
    proficiencies: combineToString(monsterData.skills),
    vulnerabilities: monsterData.damage_vulnerabilities,
    resistances: monsterData.damage_resistances,
    damageImmunities: monsterData.damage_immunities,
    conditionImmunities: monsterData.condition_immunities,
    senses: monsterData.senses,
    challengeRating: monsterData.challenge_rating,
    specialAbilities: combineToMarkdown(monsterData.special_abilities),
    actions: combineToMarkdown(monsterData.actions),
    legendaryActions: combineToMarkdown(monsterData.legendary_actions),
    image: monsterData.img_main,
    languages: monsterData.languages,
    description: monsterData.desc,
  };
};
