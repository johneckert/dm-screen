import React, { useState } from 'react';
import { CardData, SkillDescription, RuleTable, RuleCardContent } from '../../interfaces';
import { RULES, RULE_DATA } from '../../ruleData';
import ExpandedCardLayout from './ExpandedCardLayout';
import TabSelect from './cardFields/TabSelect';
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
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

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
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',
  },
  modalTitle: {
    width: '100%',
    margin: theme.spacing(4),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1.5),
  },
  titleInput: {
    '& input': {
      fontSize: theme.spacing(6),
      fontWeight: 400,
    },
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    overflowY: 'scroll',
    width: '100%',
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
    borderBottom: 'none',
    backgroundColor: AMBER[300],
  },
  descriptionRow: {
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
  editButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: theme.spacing(1),
    marginLeft: 'auto',
  },
  tableSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  headerRow: {
    border: `1px solid ${AMBER[800]}`,
    '& th': {
      fontWeight: 'bold',
      backgroundColor: AMBER[200],
    },
  },
  tableRow: {
    border: `1px solid ${AMBER[800]}`,
    '&:last-child td, &:last-child th': {
      border: 0,
    },
    '&:nth-of-type(odd)': {
      backgroundColor: AMBER[100],
    },
    '&:nth-of-type(even)': {
      backgroundColor: AMBER[200],
    },
  },
}));

export const DescriptionSection: React.FC<{ description: SkillDescription }> = ({ description }) => {
  const classes = useStyles({ isEditing: false });
  return (
    <Box className={classes.description}>
      {typeof description === 'string' ? (
        <Box className={classes.descriptionRow}>
          <Typography className={classes.descriptionFullWidth} id="desc-sentence">
            {description}
          </Typography>
        </Box>
      ) : (
        <>
          {Object.keys(description).map((skill) => {
            return (
              <Box className={classes.descriptionRow} key={skill} data-testid="desc-row">
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

export const TableSection: React.FC<{ subRule: string; tableData: RuleTable }> = ({ subRule, tableData }) => {
  const { headers, rows } = tableData;
  const classes = useStyles({ isEditing: false });
  const hasDescription = tableData.description;
  const spacer = String.fromCharCode(183);
  const rulesWithDots = splitAndTitleCase(subRule, ' ', ' ' + spacer + ' ');
  const ruleText = splitAndTitleCase(rulesWithDots, '-', ' ');
  return (
    <Box className={classes.tableSection} data-testid="table-section">
      <Box className={classes.skillName}>
        <Typography id="skill-name" variant="h4" component="h4" data-testid="table-name">
          {ruleText}
        </Typography>
      </Box>
      {hasDescription && <DescriptionSection description={tableData.description ?? ''} />}
      <TableContainer component={Box}>
        <Table aria-label="rule-table">
          <TableHead>
            <TableRow className={classes.headerRow}>
              {headers.map((header) => {
                return <TableCell key={header}>{splitAndTitleCase(header)}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row[headers[0]]} className={classes.tableRow}>
                {headers.map((header) => {
                  return <TableCell key={row[header]}>{row[header]}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
  const cardContent = expandedCardData.content as RuleCardContent;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(cardContent.title);
  const [cardTab, setCardTab] = useState(expandedCardData.tab);
  const ruleData = RULE_DATA[title];
  const subRules = Object.keys(ruleData);
  const classes = useStyles({ isEditing });
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, content: { title: title }, tab: cardTab });
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
          <Box className={classes.header}>
            <Typography
              id="rule-card-title"
              className={classes.modalTitle}
              variant="h3"
              component="h3"
              data-testid="title-view"
            >
              Choose Rule
            </Typography>
          </Box>
          <Select
            labelId="rule-select-label"
            sx={{ marginBottom: 2, width: '100%' }}
            id="rule-select"
            value={title}
            label="Rule"
            data-testid="rule-select"
            onChange={(e) => setTitle(e.target.value)}
          >
            {RULES.map((value) => (
              <MenuItem key={value} value={value} data-testid="select-option">
                {splitAndTitleCase(value)}
              </MenuItem>
            ))}
          </Select>
          <TabSelect cardTab={cardTab} setCardTab={setCardTab} />
        </>
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
          <Box className={classes.cardBody}>
            {subRules.map((subRule) => (
              <TableSection subRule={subRule} tableData={ruleData[subRule]} key={subRule} />
            ))}
          </Box>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedRuleCard;
