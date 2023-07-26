import { useState } from 'react';
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
import { StyledComponent } from '@emotion/styled';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const ExpandMore: StyledComponent<ExpandMoreProps> = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...rest } = props;
  return <IconButton {...rest} />;
})(({ theme, expand }:{ theme: Theme; expand: boolean }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface BaseCardProps {
    title: string;
    subheader?: string
}

const BaseCard = ({ title, subheader = "" }: BaseCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const avatar = title.charAt(0).toUpperCase();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="avatar">
            { avatar }
          </Avatar>
        }
        action={
            <ExpandMore
            expand={expanded}
            onClick={toggleExpand}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title={title}
        subheader={subheader}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            This is some test content.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BaseCard;