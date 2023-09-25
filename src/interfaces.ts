import { IconButtonProps } from '@mui/material/IconButton';

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
