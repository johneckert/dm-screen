import { memo, useState, useEffect, CSSProperties, FC } from 'react';
import type { DragSourceMonitor } from 'react-dnd'
import { useDrag } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from '@mui/material/styles';
import { ItemTypes } from '../constants';

interface ExpandButtonProps extends IconButtonProps {
  expand: boolean;
}

interface BasicCard {
  title: string;
  preview?: boolean;
}

interface DraggableCardProps extends BasicCard {
    id: string
    left: number
    top: number
}

export interface BoxDragPreviewProps {
  title: string
}

export interface BoxDragPreviewState {
  tickTock: unknown
}

function getStyles(
  left: number,
  top: number,
  isDragging: boolean,
): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : '',
  }
}

const ExpandButton = styled((props: ExpandButtonProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { expand, ...rest } = props;
    return <IconButton {...rest} />;
})(({ theme, expand }:{ theme: Theme; expand: boolean }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
})) as React.ComponentType<ExpandButtonProps>;

export const BasicCard = ({ title, preview }: BasicCard) => {
  const [expanded, setExpanded] = useState(false);
  const avatar = title.charAt(0).toUpperCase();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} role={preview ? 'BoxPreview' : 'Box'}>
        <CardHeader
          avatar={
            <Avatar aria-label="avatar">
              { avatar }
            </Avatar>
          }
          action={
              <ExpandButton
              expand={expanded}
              onClick={toggleExpand}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandButton>
          }
          title={title}
        />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              This is some test content.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
  )
};

const DraggableCard: FC<DraggableCardProps> = memo(function DraggableCard({ id, title, left, top }: DraggableCardProps) {
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { id, left, top, title },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title],
  )

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])

  return (
    <div ref={drag} style={getStyles(left, top, isDragging)} role="DraggableCard">
      <BasicCard title={title} />
    </div>
  );
});

const previewStyles: CSSProperties = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
}

export const CardDragPreview: FC<BoxDragPreviewProps> = memo(
  function CardDragPreview({ title }: BasicCard ) {

    return (
      <div style={previewStyles}>
        <BasicCard title={title} preview />
      </div>
    )
  },
)


export default DraggableCard;