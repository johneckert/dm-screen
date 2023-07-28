import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from '@mui/material/styles';
import { PINK } from '../../colors';
import { BasicCardProps, ExpandButtonProps, EditButtonProps } from '../../interfaces';
import { getScreenSize } from '../../utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExpandButton = styled(({ expand, ...rest }: ExpandButtonProps) => {
  return <IconButton {...rest} />;
})(({ theme, expand }: { theme: Theme; expand: boolean }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
})) as React.ComponentType<ExpandButtonProps>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const EditButton = styled(({ edit, ...rest }: EditButtonProps) => {
  return <IconButton {...rest} />;
})(({ theme, edit }: { theme: Theme; edit: boolean }) => ({
  transform: !edit ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
})) as React.ComponentType<EditButtonProps>;

const BasicCard = ({ title, preview, isExpanded, setExpanded }: BasicCardProps) => {
  const screenSize = getScreenSize();
  const [isEditing, setEditing] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);
  const [cardContent, setCardContent] = useState('This is some test content.');

  const avatar = cardTitle.charAt(0).toUpperCase();

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const toggleEdit = () => {
    setEditing(!isEditing);
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

  const titleComponent = () => {
    if (isEditing) {
      return (
        <TextField
          id="title-input"
          value={cardTitle}
          variant="standard"
          sx={{ width: '100%' }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCardTitle(event.target.value);
          }}
        />
      );
    }
    return <Typography>{cardTitle}</Typography>;
  };

  const contentComponent = () => {
    if (isEditing) {
      return (
        <TextField
          id="content-input"
          value={cardContent}
          multiline
          sx={{ width: '100%' }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCardContent(event.target.value);
          }}
        />
      );
    }
    return <Typography>{cardContent}</Typography>;
  };

  return (
    <Card sx={{ width: getCardWith(), zIndex: isEditing ? '50' : '0' }} role={preview ? 'CardPreview' : 'Card'}>
      <CardHeader
        avatar={<Avatar aria-label="avatar">{avatar}</Avatar>}
        action={
          <ExpandButton expand={isExpanded} onClick={toggleExpand} aria-expanded={isExpanded} aria-label="show more">
            <ExpandMoreIcon />
          </ExpandButton>
        }
        title={titleComponent()}
      />
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Container>{contentComponent()}</Container>
        </CardContent>
        <CardActions disableSpacing>
          <EditButton edit={isEditing} onClick={toggleEdit} aria-expanded={isExpanded} aria-label="show more">
            <EditIcon sx={{ color: isEditing ? PINK[100] : 'primary' }} />
          </EditButton>
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default BasicCard;
