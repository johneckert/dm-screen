export interface SmallCardProps {
  title: string;
  type: CardType;
  content: GenericCardContent;
}

export enum CardType {
  Note = 'Note',
  Player = 'Player',
  Rule = 'Rule',
  Map = 'Map',
  Monster = 'Monster',
}

export enum DialogTypes {
  Upload = 'upload',
  Reset = 'reset',
  FileType = 'fileType',
}

export interface CardDataMap {
  [key: string]: CardData[];
}

export interface CardData {
  id: string;
  title: string;
  content: GenericCardContent;
  column: string;
  type: CardType;
  tab: string;
}

export interface GenericCardContent {
  content: string; //for all

  roomNumber?: string; // for maps
  description?: string; // for maps & monsters

  charClass?: string; // for players
  charRace?: string; // for players
  charBackground?: string; // for players
  charLevel?: string; // for players
  hp?: string; // for players & monsters
  ac?: string; // for players & monsters
  speed?: string; // for players & monsters
  passivePerception?: string; // for players
  passiveInvestigation?: string; // for players
  passiveStealth?: string; // for players
  passiveInsight?: string; // for players
  spellCastingAbility?: string; // for players
  spellCastingModifier?: string; // for players
  spellSaveDC?: string; // for players
  spellAttackBonus?: string; // for players
  link?: string; // for players & monsters
  languages?: string; // for players & monsters
  alignment?: string; // for players & monsters

  size?: string; // for monsters
  type?: string; // for monsters
  hitDice?: string; // for monsters
  hitPointsRoll?: string; // for monsters
  strength?: string; // for monsters
  dexterity?: string; // for monsters
  constitution?: string; // for monsters
  intelligence?: string; // for monsters
  wisdom?: string; // for monsters
  charisma?: string; // for monsters
  proficiencies?: string; // for monsters
  vulnerabilities?: string; // for monsters
  resistances?: string; // for monsters
  damageImmunities?: string; // for monsters
  conditionImmunities?: string; // for monsters
  senses?: string; // for monsters
  challengeRating?: string; // for monsters
  specialAbilities?: string; // for monsters
  actions?: string; // for monsters
  legendaryActions?: string; // for monsters
  image?: string; // for monsters
}

export interface ScreenSize {
  width: number;
  height: number;
}

export type SkillDescription = string | { [key: string]: string };

export interface SkillBreakDown {
  [key: string]: SkillDescription | string;
}

export type SkillValue = SkillBreakDown | Record<string, string>;

export interface SkillGroup {
  [key: string]: SkillBreakDown;
}

export interface SkillData {
  [key: string]: SkillGroup;
}

export interface RuleTable {
  description?: SkillDescription;
  headers: string[];
  rows: { [key: string]: string }[];
}

export interface RuleData {
  [key: string]: {
    [key: string]: RuleTable;
  };
}

export interface APIMonsterData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
