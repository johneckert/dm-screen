import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { CardType, GenericCardContent } from '../../interfaces';
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

const SmallCard = ({ title, content, type }: SmallCardProps) => {
  const screenSize = getScreenSize();
  const mapContent = content as GenericCardContent;

  const avatar = () => {
    switch (type) {
      case CardType.Map:
        return mapContent?.roomNumber;
      case CardType.Note:
        return <PushPinIcon />;
      case CardType.Rule:
        return <LightbulbIcon />;
      case CardType.Player:
        return <PersonIcon />;
      case CardType.Monster:
        return <BugReportIcon />;
      default:
        return title.charAt(0).toUpperCase();
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
        title={splitAndTitleCase(title)}
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
