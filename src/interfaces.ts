import { IconButtonProps } from '@mui/material/IconButton';

export interface BasicCardProps {
  id: string;
  title: string;
  content: string;
  preview?: boolean;
  updateCardData?: (id: string, title: string, content: string) => void;
}

export interface BoxDragPreviewProps extends BasicCardProps {}

export interface CardData {
  id: string;
  title: string;
  content: string;
  column: number;
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
