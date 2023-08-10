import React, { memo, useEffect, useState, CSSProperties, FC } from 'react';
import Box from '@mui/material/Box';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import makeStyles from '@mui/styles/makeStyles';
import { ItemTypes } from '../constants';
import { BasicCardProps, BoxDragPreviewProps, DraggableCardProps } from '../interfaces';
import BasicCard from './cards/BasicCard';

interface StyleProps {
  left: number;
  top: number;
  column: number;
  row: number;
  isDragging: boolean;
}

const useStyles = makeStyles((theme) => ({
  draggableCard: {
    // position: 'absolute',
    transform: (props: StyleProps) => `translate3d(${props.left}px, ${props.top}px, 0)`,
    WebkitTransform: (props: StyleProps) => `translate3d(${props.left}px, ${props.top}px, 0)`,
    opacity: (props: StyleProps) => (props.isDragging ? 0.3 : 1),
    height: (props: StyleProps) => (props.isDragging ? 0 : ''),
    gridColumnStart: (props: StyleProps) => props.column,
    gridRowStart: (props: StyleProps) => props.row,
  },
}));

const DraggableCard: FC<DraggableCardProps> = memo(function DraggableCard({
  id,
  title,
  content,
  left,
  top,
  column,
  row,
  updateCardData,
}: DraggableCardProps) {
  const [expanded, setExpanded] = useState(true);
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, left, top, column, row, title, content, expanded, setExpanded },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title, content, expanded, setExpanded],
  );
  const classes = useStyles({ isDragging, left, top, column, row });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <Box ref={drag} className={classes.draggableCard} role="DraggableCard">
      <BasicCard
        id={id}
        title={title}
        content={content}
        isExpanded={expanded}
        setExpanded={setExpanded}
        updateCardData={updateCardData}
      />
    </Box>
  );
});

export const CardDragPreview: FC<BoxDragPreviewProps> = memo(function CardDragPreview({
  id,
  title,
  content,
  isExpanded,
  setExpanded,
}: BasicCardProps) {
  const previewStyles: CSSProperties = {
    display: 'inline-block',
    opacity: 0.5,
  };

  return (
    <div style={previewStyles}>
      <BasicCard
        id={id}
        title={title}
        content={content}
        preview
        isExpanded={isExpanded}
        setExpanded={setExpanded}
        updateCardData={() => {}}
      />
    </div>
  );
});

export default DraggableCard;
