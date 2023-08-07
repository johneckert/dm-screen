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
import { BREAKPOINTS, HEADER_HEIGHT, NUMBER_OF_COLUMNS, NUMBER_OF_ROWS } from '../../constants';

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

const BasicCard = ({ id, title, preview, content, isExpanded, setExpanded, updateCardData }: BasicCardProps) => {
  const screenSize = getScreenSize();
  const [isEditing, setEditing] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);
  const [cardContent, setCardContent] = useState(content);

  const avatar = cardTitle.charAt(0).toUpperCase();

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const toggleEdit = () => {
    setEditing(!isEditing);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardTitle(event.target.value);
    updateCardData(id, event.target.value, cardContent);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardContent(event.target.value);
    updateCardData(id, cardTitle, event.target.value);
  };

  const getCardWith = () => {
    if (screenSize.width > BREAKPOINTS.xl) {
      return screenSize.width / NUMBER_OF_COLUMNS.xl - 16;
    }
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

  const titleComponent = () => {
    if (isEditing) {
      return (
        <TextField
          id="title-input"
          role="text-field"
          value={cardTitle}
          variant="standard"
          sx={{ width: '100%' }}
          onChange={handleTitleChange}
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
          role="text-field"
          value={cardContent}
          multiline
          sx={{ width: '100%' }}
          onChange={handleContentChange}
        />
      );
    }
    return <Typography>{cardContent}</Typography>;
  };

  return (
    <Card
      sx={{
        width: getCardWith(),
        zIndex: isEditing ? '50' : '0',
        margin: '8px 0',
        maxHeight: getCardHeight(),
      }}
      role={preview ? 'CardPreview' : 'Card'}
      data-testid="basic-card"
    >
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
          <EditButton edit={isEditing} onClick={toggleEdit} aria-expanded={isExpanded} aria-label="edit">
            <EditIcon sx={{ color: isEditing ? PINK[100] : 'primary' }} />
          </EditButton>
        </CardActions>
      </Collapse>
    </Card>
  );
};

export default BasicCard;
