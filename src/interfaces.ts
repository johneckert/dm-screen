import { IconButtonProps } from '@mui/material/IconButton';

export interface SmallCardProps {
  title: string;
  type: CardType;
  content: NoteContent | PCContent | RuleContent | MapContent | MonsterContent;
}

export enum CardType {
  Note = 'note',
  PC = 'pc',
  Rule = 'rule',
  Map = 'map',
  Monster = 'monster',
}

export interface CardData {
  id: string;
  title: string;
  content: NoteContent | PCContent | RuleContent | MapContent | MonsterContent;
  column: string;
  type: CardType;
}

export interface NoteContent {
  content: string;
}

export interface PCContent {
  content: string;
}

export interface RuleContent {
  content: string;
}

export interface MapContent {
  roomNumber: string;
  description: string;
  content: string;
}

export interface MonsterContent {
  content: string;
}

export interface DraggableCardProps extends CardData {
  updateCardData: (id: string, title: string, content: string) => void;
}

export interface DragItem {
  id: string;
  type: string;
  left: number;
  top: number;
  column: number;
  row: number;
}

export interface ExpandButtonProps extends IconButtonProps {
  expand: boolean;
}

export interface EditButtonProps extends IconButtonProps {
  edit: boolean;
}

export interface GridSize {
  rowSize: number;
  columnSize: number;
}

export interface GridTemplate {
  rowDefinition: string;
  columnDefinition: string;
}

export interface ScreenSize {
  width: number;
  height: number;
}
