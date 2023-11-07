import React, { useState } from 'react';
import { CardData, CardType, MonsterCardContent } from '../../interfaces';
import ExpandedCardLayout from '../layout/ExpandedCardLayout';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import TabSelect from './cardFields/TabSelect';
import MonsterCardForm from './newCardForms/MonsterCardForm';
import DisplayField from './cardFields/DisplayField';
import StatField from './cardFields/StatField';
import IconField from './cardFields/IconField';
import BlockField from './cardFields/BlockField';
import CardHeader from './cardFields/CardHeader';

const useStyles = makeStyles<Theme>((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  editView: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  modalTitle: {
    margin: theme.spacing(4),
    paddingX: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  editButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
  },
}));

interface ExpandedMonsterCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
  deleteCard: (cardData: CardData) => void;
}

const ExpandedMonsterCard: React.FC<ExpandedMonsterCardProps> = ({
  closeExpandedCard,
  expandedCardData,
  updateCard,
  deleteCard,
}) => {
  const cardContent = expandedCardData.content as MonsterCardContent;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(cardContent.title);
  const [size, setSize] = useState(cardContent.size);
  const [type, setType] = useState(cardContent.type);
  const [alignment, setAlignment] = useState(cardContent.alignment);
  const [hitDice, setHitDice] = useState(cardContent.hitDice);
  const [hitPointsRoll, setHitPointsRoll] = useState(cardContent.hitPointsRoll);
  const [hp, setHp] = useState(cardContent.hp);
  const [ac, setAc] = useState(cardContent.ac);
  const [strength, setStrength] = useState(cardContent.strength);
  const [dexterity, setDexterity] = useState(cardContent.dexterity);
  const [constitution, setConstitution] = useState(cardContent.constitution);
  const [intelligence, setIntelligence] = useState(cardContent.intelligence);
  const [wisdom, setwisdom] = useState(cardContent.wisdom);
  const [charisma, setCharisma] = useState(cardContent.charisma);
  const [speed, setSpeed] = useState(cardContent.speed);
  const [proficiencies, setProficiencies] = useState(cardContent.proficiencies);
  const [vulnerabilities, setVulnerabilities] = useState(cardContent.vulnerabilities);
  const [resistances, setResistances] = useState(cardContent.resistances);
  const [damageImmunities, setDamageImmunities] = useState(cardContent.damageImmunities);
  const [conditionImmunities, setConditionImmunities] = useState(cardContent.conditionImmunities);
  const [senses, setSenses] = useState(cardContent.senses);
  const [challengeRating, setChallengeRating] = useState(cardContent.challengeRating);
  const [specialAbilities, setspecialAbilities] = useState(cardContent.specialAbilities);
  const [actions, setActions] = useState(cardContent.actions);
  const [legendaryActions, setLegendaryActions] = useState(cardContent.legendaryActions);
  const [image, setImage] = useState(cardContent.image);
  const [link, setLink] = useState(cardContent.link);
  const [languages, setLanguages] = useState(cardContent.languages);
  const [description, setDescription] = useState(cardContent.description);
  const [notes, setNotes] = useState(cardContent.notes);
  const [cardTab, setCardTab] = useState(expandedCardData.tab);
  const classes = useStyles();
  const formContent = {
    title,
    size,
    type,
    alignment,
    hitDice,
    hitPointsRoll,
    hp,
    ac,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    speed,
    proficiencies,
    vulnerabilities,
    resistances,
    damageImmunities,
    conditionImmunities,
    senses,
    challengeRating,
    specialAbilities,
    actions,
    legendaryActions,
    image,
    link,
    languages,
    description,
    notes,
  };
  const handleContentUpdate = (content: MonsterCardContent) => {
    setTitle(content.title);
    setSize(content.size);
    setType(content.type);
    setAlignment(content.alignment);
    setHitDice(content.hitDice);
    setHitPointsRoll(content.hitPointsRoll);
    setHp(content.hp);
    setAc(content.ac);
    setStrength(content.strength);
    setDexterity(content.dexterity);
    setConstitution(content.constitution);
    setIntelligence(content.intelligence);
    setwisdom(content.wisdom);
    setCharisma(content.charisma);
    setSpeed(content.speed);
    setProficiencies(content.proficiencies);
    setVulnerabilities(content.vulnerabilities);
    setResistances(content.resistances);
    setDamageImmunities(content.damageImmunities);
    setConditionImmunities(content.conditionImmunities);
    setSenses(content.senses);
    setChallengeRating(content.challengeRating);
    setspecialAbilities(content.specialAbilities);
    setActions(content.actions);
    setLegendaryActions(content.legendaryActions);
    setImage(content.image);
    setLink(content.link);
    setLanguages(content.languages);
    setDescription(content.description);
    setNotes(content.notes);
  };

  const handleEdit = () => {
    if (isEditing) {
      updateCard({
        ...expandedCardData,
        content: {
          ...formContent,
        },
        tab: cardTab,
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <ExpandedCardLayout
      cardData={expandedCardData}
      closeExpandedCard={closeExpandedCard}
      deleteCard={deleteCard}
      isEditing={isEditing}
      saveCard={handleEdit}
    >
      {isEditing ? (
        <>
          <Typography id="editing-title" sx={{ alignSelf: 'center' }} className={classes.modalTitle} component="h3">
            Editing
          </Typography>
          <Box className={classes.editView}>
            <TabSelect cardTab={cardTab} setCardTab={setCardTab} />
            <MonsterCardForm content={formContent} setContent={handleContentUpdate} />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.header}>
            <CardHeader title={title} handleEdit={handleEdit} />
          </Box>
          <Box className={classes.body}>
            <Box sx={{ mb: 3, px: 3 }} className={classes.row}>
              <DisplayField label="Size" value={size} />
              <DisplayField label="Type" value={type} />
              <DisplayField label="Alignment" value={alignment} />
            </Box>
            <Box sx={{ mb: 3 }} className={classes.row}>
              <StatField label="STR" value={strength} cardType={CardType.Monster} />
              <StatField label="DEX" value={dexterity} cardType={CardType.Monster} />
              <StatField label="CON" value={constitution} cardType={CardType.Monster} />
              <StatField label="INT" value={intelligence} cardType={CardType.Monster} />
              <StatField label="WIS" value={wisdom} cardType={CardType.Monster} />
              <StatField label="CHA" value={charisma} cardType={CardType.Monster} />
            </Box>
            <Box sx={{ mb: 3 }} className={classes.row}>
              <IconField label="HP" value={hp} cardType={CardType.Monster} />
              <IconField label="AC" value={ac} cardType={CardType.Monster} />
              <IconField label="Speed" value={speed} cardType={CardType.Monster} />
            </Box>
            <Box className={classes.row}>
              <Box className={classes.group}>
                <DisplayField label="Vulnerabilities" value={vulnerabilities} />
                <DisplayField label="Resistances" value={resistances} />
                <DisplayField label="Dammage Immunities" value={damageImmunities} />
                <DisplayField label="Condition Immunitiest" value={conditionImmunities} />
              </Box>
              <Box className={classes.group}>
                <DisplayField label="Proficiencies" value={proficiencies} />
                <DisplayField label="Senses" value={senses} />
                <DisplayField label="Languages" value={languages} />
                <DisplayField label="CR" value={challengeRating} />
              </Box>
            </Box>
            <Box className={classes.group}>
              <BlockField label="Special Abilities" value={specialAbilities} cardType={CardType.Monster} />
            </Box>
            <Box className={classes.group}>
              <BlockField label="Actions" value={actions} cardType={CardType.Monster} />
            </Box>
            {legendaryActions && (
              <Box className={classes.group}>
                <BlockField label="Legendary Actions" value={legendaryActions} cardType={CardType.Monster} />
              </Box>
            )}
            <Box className={classes.group}>
              <BlockField label="Description" value={description} cardType={CardType.Monster} />
            </Box>
            <Box className={classes.group}>
              <BlockField label="Notes" value={notes} cardType={CardType.Monster} />
            </Box>
            {image && (
              <Box className={classes.group}>
                <img src={image} alt={`image of ${title}`} />
              </Box>
            )}
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedMonsterCard;
