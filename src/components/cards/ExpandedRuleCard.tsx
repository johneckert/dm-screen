import React, { useState } from 'react';
import { CardData, Ability, Rule, SkillBreakDown, SkillDescription } from '../../interfaces';
import { RULES, ABILITIES, TWO_COLUMN_RULES, RULE_DATA } from '../../ruleData';
import ExpandedCardLayout from './ExpandedCardLayout';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { AMBER } from '../../colors';
import { splitAndTitleCase } from '../../utils';

interface StyleProps {
  isEditing: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  modalTitle: {
    width: '100%',
    margin: theme.spacing(4),
    paddingLeft: '42%',
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
  },
  titleInput: {
    '& input': {
      fontSize: theme.spacing(6),
      fontWeight: 400,
    },
  },
  abilityCardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflowY: 'scroll',
  },
  twoColumnCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflowY: 'scroll',
  },
  skillContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  skillName: {
    width: '100%',
    textAlign: 'center',
    border: `1px solid ${AMBER[800]}`,
    borderBottom: 'none',
    marginTop: theme.spacing(1),
    backgroundColor: AMBER[700],
    color: AMBER[100],
  },
  description: {
    width: '100%',
    border: `1px solid ${AMBER[800]}`,
    backgroundColor: AMBER[300],
  },
  descriptionTable: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  descriptionFullWidth: {
    marginLeft: 'auto',
    padding: theme.spacing(1),
    width: '100%',
  },
  descKeyCell: {
    fontWeight: 'bold',
    paddingLeft: theme.spacing(10),
    width: '25%',
  },
  descValueCell: {
    marginLeft: 'auto',
    width: '70%',
  },
  breakDownRowOdd: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    border: `1px solid ${AMBER[800]}`,
    borderTop: 'none',
    backgroundColor: AMBER[100],
  },
  breakDownRowEven: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    border: `1px solid ${AMBER[800]}`,
    borderTop: 'none',
    backgroundColor: AMBER[200],
  },
  keyCell: {
    fontWeight: 'bold',
    padding: theme.spacing(1),
    borderRight: `1px solid ${AMBER[800]}`,
    width: '30%',
  },
  valueCell: {
    marginLeft: 'auto',
    padding: theme.spacing(1),
    width: '70%',
  },
  editButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
  },
}));

const DescriptionBlock: React.FC<{ description: SkillDescription }> = ({ description }) => {
  const classes = useStyles({ isEditing: false });
  const skills = Object.keys(description);
  return (
    <Box className={classes.description}>
      {typeof description === 'string' ? (
        <Box className={classes.descriptionTable}>
          <Typography className={classes.descriptionFullWidth} id="desc-sentence">
            {description}
          </Typography>
        </Box>
      ) : (
        <>
          {skills.map((skill) => {
            return (
              <Box className={classes.descriptionTable}>
                <Typography sx={{ fontWeight: 'bold' }} className={classes.descKeyCell} id="desc-key">
                  {splitAndTitleCase(skill)}:
                </Typography>
                <Typography className={classes.descValueCell} id="desc-value">
                  {description[skill]}
                </Typography>
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
};

const SectionRow: React.FC<{ breakDownItem: string; breakDownValue: string; order: number }> = ({
  breakDownItem,
  breakDownValue,
  order,
}) => {
  const classes = useStyles({ isEditing: false });
  return (
    <Box className={order % 2 === 0 ? classes.breakDownRowEven : classes.breakDownRowOdd}>
      <Typography className={classes.keyCell} id="breakdown-key">
        {splitAndTitleCase(breakDownItem)}:
      </Typography>
      <Typography className={classes.valueCell} id="breakdown-value">
        {breakDownValue}
      </Typography>
    </Box>
  );
};

const RuleSection: React.FC<{ rule: string; ruleData: SkillBreakDown; isAbilityCard?: boolean }> = ({
  rule,
  ruleData,
  isAbilityCard = false,
}) => {
  console.log(rule);
  const classes = useStyles({ isEditing: false });
  const spacer = isAbilityCard ? String.fromCharCode(183) : ' ';
  const rulesWithDots = splitAndTitleCase(rule, ' ', ' ' + spacer + ' ');
  const ruleText = splitAndTitleCase(rulesWithDots, '-', ' ');
  return (
    <Box className={classes.skillContainer}>
      <Box className={classes.skillName}>
        <Typography id="skill-name" variant="h4" component="h4" data-testid="skill-name">
          {ruleText}
        </Typography>
      </Box>
      {Object.keys(ruleData).map((breakDownItem, i) => {
        if (breakDownItem === 'description') {
          return <DescriptionBlock description={ruleData.description} />;
        }
        return (
          <SectionRow breakDownItem={breakDownItem} order={i} breakDownValue={ruleData[breakDownItem] as string} />
        );
      })}
    </Box>
  );
};

const AbilityCard: React.FC<{ title: Ability }> = ({ title }) => {
  const classes = useStyles({ isEditing: false });
  const ability = RULE_DATA[title]; //strength
  const skills = Object.keys(ability);
  return (
    <Box className={classes.abilityCardContent}>
      {skills.map((skill) => {
        return <RuleSection rule={skill} ruleData={ability[skill]} key={skill} isAbilityCard />;
      })}
    </Box>
  );
};

const TwoColumnRuleCard: React.FC<{ title: Rule }> = ({ title }) => {
  const classes = useStyles({ isEditing: false });
  const ruleData = RULE_DATA[title][title];
  return (
    <Box className={classes.twoColumnCard}>
      <RuleSection rule={title} ruleData={ruleData} />;
    </Box>
  );
};

interface ExpandedRuleCardProps {
  closeExpandedCard: () => void;
  expandedCardData: CardData;
  updateCard: (cardData: CardData) => void;
  deleteCard: (cardData: CardData) => void;
}

const ExpandedRuleCard: React.FC<ExpandedRuleCardProps> = ({
  closeExpandedCard,
  expandedCardData,
  updateCard,
  deleteCard,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(expandedCardData.title);
  const classes = useStyles({ isEditing });
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, title: title, content: { content: splitAndTitleCase(title) } });
    }
    setIsEditing(!isEditing);
  };

  const renderRule = () => {
    console.log(title);
    if (ABILITIES.includes(title)) {
      return <AbilityCard title={title as Ability} />;
    } else if (TWO_COLUMN_RULES.includes(title.toLowerCase())) {
      return <TwoColumnRuleCard title={title as Rule} />;
    } else {
      return <div>ELSE</div>;
    }
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
        <Select
          labelId="card-type-select-label"
          sx={{ marginBottom: 2 }}
          id="card-type-select"
          value={title}
          label="Type"
          data-testid="card-type-select"
          onChange={(e) => setTitle(e.target.value as Rule)}
        >
          {RULES.map((value) => (
            <MenuItem key={value} value={value} data-testid="select-option">
              {splitAndTitleCase(value)}
            </MenuItem>
          ))}
        </Select>
      ) : (
        <>
          <Box className={classes.header}>
            <Typography
              id="rule-card-title"
              className={classes.modalTitle}
              variant="h3"
              component="h3"
              data-testid="title-view"
            >
              {splitAndTitleCase(title)}
            </Typography>
            <IconButton
              className={classes.editButton}
              aria-label="edit-save-button"
              data-testid="edit-button"
              onClick={handleEdit}
            >
              <EditIcon />
            </IconButton>
          </Box>
          {renderRule()}
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedRuleCard;
