import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardType, GenericCardContent } from '../../interfaces';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { Theme } from '@mui/material/styles';
import { SmallCardProps, ExpandButtonProps } from '../../interfaces';
import { getScreenSize } from '../../utils';
import { HEADER_HEIGHT, NUMBER_OF_ROWS } from '../../constants';

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

const SmallCard = ({ title, content, type }: SmallCardProps) => {
  const screenSize = getScreenSize();
  const [isExpanded, setExpanded] = useState(true);
  const mapContent = content as GenericCardContent;

  const avatar = () => {
    switch (type) {
      case CardType.Map:
        return mapContent?.roomNumber;
      default:
        title.charAt(0).toUpperCase();
    }
  };

  const detailText = () => {
    let detailText = '';
    switch (type) {
      case CardType.Map:
        detailText = content.description ?? '';
        break;
      default:
        detailText = content.content;
    }
    return detailText.length > 100 ? `${detailText.substring(0, 100)}...` : detailText;
  };

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const getCardHeight = () => {
    return (screenSize.height - HEADER_HEIGHT) / NUMBER_OF_ROWS - 16;
  };

  return (
    <Card
      sx={{
        width: '100%',
        zIndex: '0',
        margin: '8px 0',
        height: getCardHeight(),
      }}
      data-testid="basic-card"
    >
      <CardHeader
        avatar={<Avatar aria-label="avatar">{avatar()}</Avatar>}
        action={
          <ExpandButton expand={isExpanded} onClick={toggleExpand} aria-expanded={isExpanded} aria-label="show more">
            <OpenWithIcon />
          </ExpandButton>
        }
        title={title}
      />
      <CardContent>
        <Container>
          <Typography>{detailText()}</Typography>
        </Container>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
