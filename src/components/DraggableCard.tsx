import { memo, useEffect, useState, CSSProperties, FC } from 'react';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { ItemTypes } from '../constants';
import { BasicCardProps, BoxDragPreviewProps } from '../interfaces';
import BasicCard from './cards/BasicCard';

interface DraggableCardProps {
  id: string;
  left: number;
  top: number;
  title: string;
  content: string;
}

function getStyles(left: number, top: number, isDragging: boolean): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0.3 : 1,
    height: isDragging ? 0 : '',
  };
}

const DraggableCard: FC<DraggableCardProps> = memo(function DraggableCard({
  id,
  title,
  content,
  left,
  top,
}: DraggableCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, left, top, title, content, expanded, setExpanded },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title, content, expanded, setExpanded],
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div ref={drag} style={getStyles(left, top, isDragging)} role="DraggableCard">
      <BasicCard title={title} content={content} isExpanded={expanded} setExpanded={setExpanded} />
    </div>
  );
});

const previewStyles: CSSProperties = {
  display: 'inline-block',
  opacity: 0.5,
};

export const CardDragPreview: FC<BoxDragPreviewProps> = memo(function CardDragPreview({
  title,
  content,
  isExpanded,
  setExpanded,
}: BasicCardProps) {
  return (
    <div style={previewStyles}>
      <BasicCard title={title} content={content} preview isExpanded={isExpanded} setExpanded={setExpanded} />
    </div>
  );
});

export default DraggableCard;
