import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { Theme } from '@mui/material/styles';
import { SmallCardProps, ExpandButtonProps } from '../../interfaces';
import { getScreenSize } from '../../utils';
import { BREAKPOINTS, HEADER_HEIGHT, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from '../../constants';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExpandButton = styled(({ expand, ...rest }: ExpandButtonProps) => {
  return <IconButton {...rest} />;
})(({ theme, expand }: { theme: Theme; expand: boolean }) => ({
  transform: !expand ? 'rotate(45deg)' : 'rotate(225deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
})) as React.ComponentType<ExpandButtonProps>;

const SmallCard = ({ title, content }: SmallCardProps) => {
  const screenSize = getScreenSize();
  const [isExpanded, setExpanded] = useState(true);

  const avatar = title.charAt(0).toUpperCase();

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const getCardWith = () => {
    if (screenSize.width > BREAKPOINTS.lg) {
      return screenSize.width / NUMBER_OF_COLUMNS.lg - 16;
    }
    if (screenSize.width > BREAKPOINTS.md) {
      return screenSize.width / NUMBER_OF_COLUMNS.md - 16;
    }
    return screenSize.width - 16;
  };

  const getCardHeight = () => {
    return (screenSize.height - HEADER_HEIGHT) / NUMBER_OF_ROWS - 16;
  };

  return (
    <Card
      sx={{
        width: getCardWith(),
        zIndex: '0',
        margin: '8px 0',
        height: getCardHeight(),
      }}
      data-testid="basic-card"
    >
      <CardHeader
        avatar={<Avatar aria-label="avatar">{avatar}</Avatar>}
        action={
          <ExpandButton expand={isExpanded} onClick={toggleExpand} aria-expanded={isExpanded} aria-label="show more">
            <OpenWithIcon />
          </ExpandButton>
        }
        title={title}
      />
      <CardContent>
        <Container>
          <Typography>{content}</Typography>
        </Container>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
