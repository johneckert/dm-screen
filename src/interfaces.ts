export interface SmallCardProps {
  title: string;
  type: CardType;
  content: GenericCardContent;
}

export enum CardType {
  Note = 'Note',
  // PC = 'PC',
  // Rule = 'Rule',
  Map = 'Map',
  // Monster = 'Monster',
}

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
