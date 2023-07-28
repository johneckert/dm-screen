import { IconButtonProps } from '@mui/material/IconButton';

export interface BasicCardProps {
  title: string;
  content: string;
  preview?: boolean;
  isExpanded: boolean;
  setExpanded: (value: boolean) => void;
}

export interface BoxDragPreviewProps {
  title: string;
  content: string;
  isExpanded: boolean;
  setExpanded: (expanded: boolean) => void;
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
