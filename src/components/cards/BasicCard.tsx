import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from '@mui/material/styles';
import { BasicCardProps, ExpandButtonProps } from '../../interfaces';
import { getScreenSize } from '../../utils';

const ExpandButton = styled((props: ExpandButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...rest } = props;
  return <IconButton {...rest} />;
})(({ theme, expand }: { theme: Theme; expand: boolean }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
})) as React.ComponentType<ExpandButtonProps>;

const BasicCard = ({ title, preview, isExpanded, setExpanded }: BasicCardProps) => {
  const screenSize = getScreenSize();
  const avatar = title.charAt(0).toUpperCase();

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const getCardWith = () => {
    if (screenSize.width > 1200) {
      return screenSize.width / 4;
    }
    if (screenSize.width > 600) {
      return screenSize.width / 2;
    }
    return screenSize.width;
  };

  return (
    <Card sx={{ width: getCardWith() }} role={preview ? 'CardPreview' : 'Card'}>
      <CardHeader
        avatar={<Avatar aria-label="avatar">{avatar}</Avatar>}
        action={
          <ExpandButton expand={isExpanded} onClick={toggleExpand} aria-expanded={isExpanded} aria-label="show more">
            <ExpandMoreIcon />
          </ExpandButton>
        }
        title={title}
      />
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>This is some test content.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default BasicCard;
