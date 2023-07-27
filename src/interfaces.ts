import { IconButtonProps } from '@mui/material/IconButton';

export interface DragItem {
  id: string;
  type: string;
  left: number;
  top: number;
}

export interface ExpandButtonProps extends IconButtonProps {
  expand: boolean;
}

export interface BasicCardProps {
  title: string;
  preview?: boolean;
}
