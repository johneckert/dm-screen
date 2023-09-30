export interface SmallCardProps {
  title: string;
  type: CardType;
  content: GenericCardContent;
}

export enum CardType {
  Note = 'Note',
  // PC = 'PC',
  Rule = 'Rule',
  Map = 'Map',
  // Monster = 'Monster',
}

export type Ability = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';
export type Skill =
  | 'athletics'
  | 'feats of strength or other'
  | 'acrobatics'
  | 'sleight of hand'
  | 'stealth'
  | 'pick lock or disarm trap'
  | 'concentration'
  | 'arcana history nature religion'
  | 'investigation other'
  | 'animal handling'
  | 'insight perception'
  | 'animal handling medicine other'
  | 'deception'
  | 'intimidation'
  | 'performance'
  | 'persuasion';

export type Rule =
  | 'strength'
  | 'dexterity'
  | 'constitution'
  | 'intelligence'
  | 'wisdom'
  | 'charisma'
  | 'conditions'
  | 'cover';

export interface CardData {
  id: string;
  title: string;
  content: GenericCardContent;
  column: string;
  type: CardType;
}

export interface GenericCardContent {
  roomNumber?: string;
  description?: string;
  content: string;
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
