import Container from '@mui/material/Container';
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
import RoomCardSmall from './smallCards/RoomCardSmall';

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
        break;
      default:
        return <Typography>TODO: what should this be?</Typography>;
    }
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
        avatar={
          <Avatar aria-label="avatar" sx={{ bgcolor: avatarColor(type), fontWeight: 'bold' }}>
            {avatar()}
          </Avatar>
        }
        title={content.title ? splitAndTitleCase(content.title) : ''}
      />
      <CardContent sx={{ paddingY: 0, minHeight: '60%' }}>{renderSmallCard()}</CardContent>
    </Card>
  );
};

export default SmallCardLayout;
