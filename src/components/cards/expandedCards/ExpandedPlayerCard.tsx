import React, { useState } from 'react';
import { CardData, CardType, PlayerCardContent } from '../../../interfaces';
import ExpandedCardLayout from '../ExpandedCardLayout';
import { Typography } from '@mui/material';
import PlayerCardForm from '../newCardForms/PlayerCardForm';
import DisplayField from '../cardFields/DisplayField';
import IconField from '../cardFields/IconField';
import BlockField from '../cardFields/BlockField';
import StatField from '../cardFields/StatField';
import CardHeader from '../cardFields/CardHeader';
import CardBodyLayout from '../../layout/CardBodyLayout';
import ColumnLayout from '../../layout/ColumnLayout';
import RowLayout from '../../layout/RowLayout';

interface ExpandedPlayerCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
  deleteCard: (cardData: CardData) => void;
}

const ExpandedPlayerCard: React.FC<ExpandedPlayerCardProps> = ({
  closeExpandedCard,
  expandedCardData,
  updateCard,
  deleteCard,
}) => {
  const cardContent = expandedCardData.content as PlayerCardContent;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(cardContent.title);
  const [notes, setNotes] = useState(cardContent.notes);
  const [charClass, setCharClass] = useState(cardContent.charClass);
  const [charLevel, setCharLevel] = useState(cardContent.charLevel);
  const [charRace, setCharRace] = useState(cardContent.charRace);
  const [charBackground, setCharBackground] = useState(cardContent.charBackground);
  const [size, setSize] = useState(cardContent.size);
  const [hp, setHp] = useState(cardContent.hp);
  const [ac, setAc] = useState(cardContent.ac);
  const [strength, setStrength] = useState(cardContent.strength);
  const [dexterity, setDexterity] = useState(cardContent.dexterity);
  const [constitution, setConstitution] = useState(cardContent.constitution);
  const [intelligence, setIntelligence] = useState(cardContent.intelligence);
  const [wisdom, setwisdom] = useState(cardContent.wisdom);
  const [charisma, setCharisma] = useState(cardContent.charisma);
  const [passivePerception, setPassivePerception] = useState(cardContent.passivePerception);
  const [passiveInvestigation, setPassiveInvestigation] = useState(cardContent.passiveInvestigation);
  const [passiveStealth, setPassiveStealth] = useState(cardContent.passiveStealth);
  const [passiveInsight, setPassiveInsight] = useState(cardContent.passiveInsight);
  const [speed, setSpeed] = useState(cardContent.speed);
  const [spellCastingAbility, setSpellCastingAbility] = useState(cardContent.spellCastingAbility);
  const [spellCastingModifier, setSpellCastingModifier] = useState(cardContent.spellCastingModifier);
  const [spellSaveDC, setSpellSaveDC] = useState(cardContent.spellSaveDC);
  const [spellAttackBonus, setSpellAttackBonus] = useState(cardContent.spellAttackBonus);
  const [link, setLink] = useState(cardContent.link);
  const [languages, setLanguages] = useState(cardContent.languages);
  const formContent = {
    title,
    hp,
    ac,
    size,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    charClass,
    charLevel,
    charRace,
    charBackground,
    passivePerception,
    passiveStealth,
    passiveInvestigation,
    passiveInsight,
    speed,
    spellCastingAbility,
    spellCastingModifier,
    spellSaveDC,
    spellAttackBonus,
    languages,
    link,
    notes,
  };
  const handleContentUpdate = (content: PlayerCardContent) => {
    setTitle(content.title);
    setNotes(content.notes);
    setCharClass(content.charClass);
    setCharLevel(content.charLevel);
    setCharRace(content.charRace);
    setCharBackground(content.charBackground);
    setSize(content.size);
    setHp(content.hp);
    setAc(content.ac);
    setStrength(content.strength);
    setDexterity(content.dexterity);
    setConstitution(content.constitution);
    setIntelligence(content.intelligence);
    setwisdom(content.wisdom);
    setCharisma(content.charisma);
    setPassivePerception(content.passivePerception);
    setPassiveInvestigation(content.passiveInvestigation);
    setPassiveStealth(content.passiveStealth);
    setPassiveInsight(content.passiveInsight);
    setSpeed(content.speed);
    setSpellCastingAbility(content.spellCastingAbility);
    setSpellCastingModifier(content.spellCastingModifier);
    setSpellSaveDC(content.spellSaveDC);
    setSpellAttackBonus(content.spellAttackBonus);
    setLink(content.link);
    setLanguages(content.languages);
  };

  const handleEdit = () => {
    if (isEditing) {
      updateCard({
        ...expandedCardData,
        content: {
          title: title,
          hp: hp,
          ac: ac,
          charClass: charClass,
          charLevel: charLevel,
          charRace: charRace,
          charBackground: charBackground,
          passivePerception: passivePerception,
          passiveStealth: passiveStealth,
          passiveInsight: passiveInsight,
          speed: speed,
          spellCastingAbility: spellCastingAbility,
          spellCastingModifier: spellCastingModifier,
          spellSaveDC: spellSaveDC,
          spellAttackBonus: spellAttackBonus,
          languages: languages,
          link: link,
          notes: notes,
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
          <Typography id="player-card-title" variant="cardHeader">
            Editing
          </Typography>
          <CardBodyLayout>
            <PlayerCardForm content={formContent} setContent={handleContentUpdate} />
          </CardBodyLayout>
        </>
      ) : (
        <>
          <CardHeader title={title} handleEdit={handleEdit} />
          <CardBodyLayout>
            <RowLayout>
              <Typography variant="cardSubtitle" component="h4" sx={{ alignSelf: 'center', margin: 0 }}>
                <strong>Race: </strong>
                {charRace}
              </Typography>
              <Typography variant="cardSubtitle" component="h4" sx={{ alignSelf: 'center', margin: 0 }}>
                <strong>Class: </strong>
                {charClass}
              </Typography>
              <Typography variant="cardSubtitle" component="h4" sx={{ alignSelf: 'center', margin: 0 }}>
                <strong>Level: </strong>
                {charLevel}
              </Typography>
              <Typography variant="cardSubtitle" component="h4" sx={{ alignSelf: 'center', margin: 0 }}>
                <strong>Background: </strong>
                {charBackground}
              </Typography>
              <Typography variant="cardSubtitle" component="h4" sx={{ alignSelf: 'center', margin: 0 }}>
                <strong>Size: </strong>
                {size || 'M'}
              </Typography>
            </RowLayout>
            <RowLayout>
              <StatField label="STR" value={strength} cardType={CardType.Player} />
              <StatField label="DEX" value={dexterity} cardType={CardType.Player} />
              <StatField label="CON" value={constitution} cardType={CardType.Player} />
              <StatField label="INT" value={intelligence} cardType={CardType.Player} />
              <StatField label="WIS" value={wisdom} cardType={CardType.Player} />
              <StatField label="CHA" value={charisma} cardType={CardType.Player} />
            </RowLayout>
            <RowLayout>
              <IconField label="HP" value={hp} cardType={CardType.Player} />
              <IconField label="AC" value={ac} cardType={CardType.Player} />
            </RowLayout>
            <RowLayout>
              <ColumnLayout>
                <DisplayField label="Passive Perception" value={passivePerception} />
                <DisplayField label="Passive Investigation" value={passiveInvestigation} />
                <DisplayField label="Passive Stealth" value={passiveStealth} />
                <DisplayField label="Passive Insight" value={passiveInsight} />
              </ColumnLayout>
              <ColumnLayout>
                <DisplayField label="Spell Casting Ability" value={spellCastingAbility} />
                <DisplayField label="Spell Casting Modifier" value={spellCastingModifier} />
                <DisplayField label="Spell Save DC" value={spellSaveDC} />
                <DisplayField label="Spell Attack Bonus" value={spellAttackBonus} />
              </ColumnLayout>
            </RowLayout>
            <ColumnLayout>
              <DisplayField label="Speed" value={speed} />
              <DisplayField label="Languages" value={languages} />
              <DisplayField label="Character Sheet" value={link} />
            </ColumnLayout>
            <ColumnLayout>
              <BlockField label="Notes" value={notes} cardType={CardType.Player} />
            </ColumnLayout>
          </CardBodyLayout>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedPlayerCard;
