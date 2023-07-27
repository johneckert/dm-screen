import { memo, useEffect, CSSProperties, FC } from 'react';
import type { DragSourceMonitor } from 'react-dnd';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { ItemTypes } from '../constants';
import { BasicCardProps } from '../interfaces';
import BasicCard from './cards/BasicCard';

interface DraggableCardProps extends BasicCardProps {
  id: string;
  left: number;
  top: number;
}

export interface BoxDragPreviewProps {
  title: string;
}

export interface BoxDragPreviewState {
  tickTock: unknown;
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
  left,
  top,
}: DraggableCardProps) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, left, top, title },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title],
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div ref={drag} style={getStyles(left, top, isDragging)} role="DraggableCard">
      <BasicCard title={title} />
    </div>
  );
});

const previewStyles: CSSProperties = {
  display: 'inline-block',
  opacity: 0.5,
};

export const CardDragPreview: FC<BoxDragPreviewProps> = memo(function CardDragPreview({ title }: BasicCardProps) {
  return (
    <div style={previewStyles}>
      <BasicCard title={title} preview />
    </div>
  );
});

export default DraggableCard;
