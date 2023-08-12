import { IconButtonProps } from '@mui/material/IconButton';

export interface BasicCardProps {
  id: string;
  title: string;
  content: string;
  updateCardData?: (id: string, title: string, content: string) => void;
}

export interface CardData {
  id: string;
  title: string;
  content: string;
  column: string;
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
