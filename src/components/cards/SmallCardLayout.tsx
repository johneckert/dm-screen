import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardType, MapCardContent } from '../../interfaces';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { SmallCardProps } from '../../interfaces';
import { getScreenSize, avatarColor } from '../../utils';
import { HEADER_HEIGHT, NUMBER_OF_ROWS } from '../../constants';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import BugReportIcon from '@mui/icons-material/BugReport';
import { splitAndTitleCase } from '../../utils';
import RoomCardSmall from './smallCards/MapCardSmall';
import NoteCardSmall from './smallCards/NoteCardSmall';
import PlayerCardSmall from './smallCards/PlayerCardSmall';
import MonsterCardSmall from './smallCards/MonsterCardSmall';
import RuleCardSmall from './smallCards/RuleCardSmall';

const SmallCardLayout = ({ content, type }: SmallCardProps) => {
  const screenSize = getScreenSize();
  const mapContent = (content as MapCardContent) ?? {};

  const avatar = () => {
    switch (type) {
      case CardType.Map:
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
        return <RoomCardSmall content={content} />;
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

  const getCardHeight = () => {
    console.log((screenSize.height - HEADER_HEIGHT) / NUMBER_OF_ROWS - 16);
    return (screenSize.height - HEADER_HEIGHT) / NUMBER_OF_ROWS - 16;
  };

  return (
    <Card
      sx={{
        width: '100%',
        zIndex: '0',
        margin: '8px 0',
        minHeight: '250px',
        // height: getCardHeight(),
        height: '250px',
      }}
      data-testid="basic-card"
    >
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" sx={{ bgcolor: avatarColor(type), fontWeight: 'bold' }}>
            {avatar()}
          </Avatar>
        }
        title={content.title ? splitAndTitleCase(content.title) : ''}
        sx={{ fontSize: 2, fontWeight: 900 }}
      />
      <CardContent sx={{ py: 0, height: '70%' }}>{renderSmallCard()}</CardContent>
    </Card>
  );
};

export default SmallCardLayout;
