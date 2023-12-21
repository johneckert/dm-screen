import React, { useState } from 'react';
import { CardData, CardType, MonsterCardContent } from '../../../interfaces';
import ExpandedCardLayout from '../ExpandedCardLayout';
import { Typography } from '@mui/material';
import MonsterCardForm from '../newCardForms/MonsterCardForm';
import DisplayField from '../cardFields/DisplayField';
import StatField from '../cardFields/StatField';
import IconField from '../cardFields/IconField';
import BlockField from '../cardFields/BlockField';
import CardHeader from '../cardFields/CardHeader';
import CardBodyLayout from '../../layout/CardBodyLayout';
import RowLayout from '../../layout/RowLayout';
import ColumnLayout from '../../layout/ColumnLayout';

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
  const formContent = {
    title,
    size,
    type,
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
          <Typography id="editing-title" variant="cardHeader">
            Editing
          </Typography>
          <CardBodyLayout>
            <MonsterCardForm content={formContent} setContent={handleContentUpdate} />
          </CardBodyLayout>
        </>
      ) : (
        <>
          <CardHeader title={title} handleEdit={handleEdit} />
          <CardBodyLayout>
            <RowLayout>
              <Typography variant="cardSubtitle" component="h4" sx={{ alignSelf: 'center', margin: 0 }}>
                <strong>Size: </strong>
                {size}
              </Typography>
              <Typography variant="cardSubtitle" component="h4" sx={{ alignSelf: 'center', margin: 0 }}>
                <strong>Type: </strong>
                {type}
              </Typography>
              <Typography variant="cardSubtitle" component="h4" sx={{ alignSelf: 'center', margin: 0 }}>
                <strong>CR: </strong>
                {challengeRating}
              </Typography>
            </RowLayout>
            <RowLayout>
              <StatField label="STR" value={strength} cardType={CardType.Monster} />
              <StatField label="DEX" value={dexterity} cardType={CardType.Monster} />
              <StatField label="CON" value={constitution} cardType={CardType.Monster} />
              <StatField label="INT" value={intelligence} cardType={CardType.Monster} />
              <StatField label="WIS" value={wisdom} cardType={CardType.Monster} />
              <StatField label="CHA" value={charisma} cardType={CardType.Monster} />
            </RowLayout>
            <RowLayout sxOverrides={{ justifyContent: 'space-around' }}>
              <IconField label="HP" value={hp} cardType={CardType.Monster} />
              <IconField label="AC" value={ac} cardType={CardType.Monster} />
            </RowLayout>
            <RowLayout>
              <ColumnLayout>
                <DisplayField label="Vulnerabilities" value={vulnerabilities} />
                <DisplayField label="Resistances" value={resistances} />
                <DisplayField label="Dammage Immunities" value={damageImmunities} />
                <DisplayField label="Condition Immunitiest" value={conditionImmunities} />
              </ColumnLayout>
              <ColumnLayout>
                <DisplayField label="Proficiencies" value={proficiencies} />
                <DisplayField label="Senses" value={senses} />
                <DisplayField label="Languages" value={languages} />
                <DisplayField label="Speed" value={speed} />
              </ColumnLayout>
            </RowLayout>
            <ColumnLayout>
              <BlockField label="Special Abilities" value={specialAbilities} cardType={CardType.Monster} />
            </ColumnLayout>
            <ColumnLayout>
              <BlockField label="Actions" value={actions} cardType={CardType.Monster} />
            </ColumnLayout>
            {legendaryActions && (
              <ColumnLayout>
                <BlockField label="Legendary Actions" value={legendaryActions} cardType={CardType.Monster} />
              </ColumnLayout>
            )}
            <ColumnLayout>
              <BlockField label="Description" value={description} cardType={CardType.Monster} />
            </ColumnLayout>
            <ColumnLayout>
              <BlockField label="Notes" value={notes} cardType={CardType.Monster} />
            </ColumnLayout>
            {image && (
              <ColumnLayout>
                <img src={image} alt={`image of ${title}`} />
              </ColumnLayout>
            )}
          </CardBodyLayout>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedMonsterCard;
