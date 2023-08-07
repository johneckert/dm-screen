import { IconButtonProps } from '@mui/material/IconButton';

export interface BasicCardProps {
  id: string;
  title: string;
  content: string;
  preview?: boolean;
  isExpanded: boolean;
  setExpanded: (value: boolean) => void;
  updateCardData: (id: string, title: string, content: string) => void;
}

export interface BoxDragPreviewProps extends BasicCardProps {}

export interface CardData {
  id: string;
  left: number;
  top: number;
  title: string;
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
}

export interface ExpandButtonProps extends IconButtonProps {
  expand: boolean;
}

export interface EditButtonProps extends IconButtonProps {
  edit: boolean;
}

export interface Grid {
  rows: number;
  columns: number;
}

export interface GridTemplate {
  rowDefinition: string;
  columnDefinition: string;
}

export interface ScreenSize {
  width: number;
  height: number;
}
