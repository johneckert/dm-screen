import { IconButtonProps } from '@mui/material/IconButton';

export interface NoteCardProps {
  title: string;
  content: string;
}

export enum CardType {
  Note = 'note',
  PC = 'pc',
  Rule = 'rule',
  Monster = 'monster',
}

export interface CardData {
  id: string;
  title: string;
  content: string;
  column: string;
  type: CardType;
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
