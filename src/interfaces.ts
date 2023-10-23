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
  // Monster = 'Monster',
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
  description?: string; // for maps
  hp?: string; // for players
  ac?: string; // for players
  passivePerception?: string; // for players
  passiveInvestigation?: string; // for players
  passiveStealth?: string; // for players
  passiveInsight?: string; // for players
  speed?: string; // for players
  spellSaveDC?: string; // for players
  spellAttackBonus?: string; // for players
  link?: string; // for players
  languages?: string; // for players
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
