import React from 'react';
import { Card, CardHeader, CardContent, Avatar, Typography, useTheme } from '@mui/material';
import { CardType, MapCardContent } from '../../interfaces';
import { SmallCardProps } from '../../interfaces';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import BugReportIcon from '@mui/icons-material/BugReport';
import { splitAndTitleCase } from '../../utils';
import MapCardSmall from './smallCards/MapCardSmall';
import NoteCardSmall from './smallCards/NoteCardSmall';
import PlayerCardSmall from './smallCards/PlayerCardSmall';
import MonsterCardSmall from './smallCards/MonsterCardSmall';
import RuleCardSmall from './smallCards/RuleCardSmall';

const SmallCardLayout: React.FC<SmallCardProps> = ({ id, content, type, handleContextMenuOpen }) => {
  const theme = useTheme();
  const avatar = () => {
    switch (type) {
      case CardType.Map:
        const mapContent = (content as MapCardContent) ?? {};
        return mapContent?.roomNumber ?? 'X';
      case CardType.Note:
        return <PushPinIcon />;
      case CardType.Rule:
        return <LightbulbIcon />;
      case CardType.Player:
        return <PersonIcon />;
      case CardType.Monster:
        return <BugReportIcon />;
      default:
        return content.title.charAt(0).toUpperCase();
    }
  };

  const renderSmallCard = () => {
    switch (type) {
      case CardType.Map:
        return <MapCardSmall content={content} />;
      case CardType.Note:
        return <NoteCardSmall content={content} />;
      case CardType.Player:
        return <PlayerCardSmall content={content} />;
      case CardType.Monster:
        return <MonsterCardSmall content={content} />;
      case CardType.Rule:
        return <RuleCardSmall content={content} />;
      default:
        return <Typography>TODO: what should this be?</Typography>;
    }
  };

  return (
    <Card
      sx={{
        width: '100%',
        zIndex: '0',
        margin: '8px 0',
        minHeight: '250px',
        height: '250px',
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        handleContextMenuOpen(e, id);
      }}
      data-testid="basic-card"
    >
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" sx={{ bgcolor: theme.palette[type].main, fontWeight: 'bold' }}>
            {avatar()}
          </Avatar>
        }
        title={content.title ? splitAndTitleCase(content.title) : ''}
        titleTypographyProps={{ fontSize: 16, fontWeight: 500 }}
      />
      <CardContent sx={{ py: 0, height: '70%' }}>{renderSmallCard()}</CardContent>
    </Card>
  );
};

export default SmallCardLayout;
