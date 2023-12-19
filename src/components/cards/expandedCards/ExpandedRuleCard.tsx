import React, { useState } from 'react';
import { CardData, SkillDescription, RuleTable, RuleCardContent } from '../../../interfaces';
import { RULE_DATA } from '../../../ruleData';
import ExpandedCardLayout from '../ExpandedCardLayout';
import { Box, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { AMBER } from '../../../colors';
import { splitAndTitleCase } from '../../../utils';
import CardHeader from '../cardFields/CardHeader';
import RuleCardForm from '../newCardForms/RuleCardForm';
import CardBodyLayout from '../../layout/CardBodyLayout';

export const DescriptionSection: React.FC<{ description: SkillDescription }> = ({ description }) => {
  return (
    <Box sx={{ width: '100%', border: `1px solid ${AMBER[800]}`, borderBottom: 'none', backgroundColor: AMBER[300] }}>
      {typeof description === 'string' ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            id="desc-sentence"
            sx={(theme) => {
              return {
                marginLeft: 'auto',
                padding: theme.spacing(1),
                width: '100%',
              };
            }}
          >
            {description}
          </Typography>
        </Box>
      ) : (
        <>
          {Object.keys(description).map((skill) => {
            return (
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
                key={skill}
                data-testid="desc-row"
              >
                <Typography
                  id="desc-key"
                  sx={(theme) => {
                    return {
                      fontWeight: 'bold',
                      paddingLeft: theme.spacing(10),
                      width: '25%',
                    };
                  }}
                >
                  {splitAndTitleCase(skill)}:
                </Typography>
                <Typography sx={{ marginLeft: 'auto', width: '70%' }} id="desc-value">
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
  const hasDescription = tableData.description;
  const spacer = String.fromCharCode(183);
  const rulesWithDots = splitAndTitleCase(subRule, ' ', ' ' + spacer + ' ');
  const ruleText = splitAndTitleCase(rulesWithDots, '-', ' ');
  return (
    <Box
      sx={(theme) => {
        return {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          marginBottom: theme.spacing(2),
          width: '100%',
        };
      }}
      data-testid="table-section"
    >
      <Box
        sx={(theme) => {
          return {
            width: '100%',
            textAlign: 'center',
            border: `1px solid ${AMBER[800]}`,
            borderBottom: 'none',
            marginTop: theme.spacing(1),
            backgroundColor: AMBER[700],
            color: AMBER[100],
          };
        }}
      >
        <Typography id="skill-name" variant="h4" component="h4" data-testid="table-name">
          {ruleText}
        </Typography>
      </Box>
      {hasDescription && <DescriptionSection description={tableData.description ?? ''} />}
      <TableContainer component={Box}>
        <Table aria-label="rule-table">
          <TableHead>
            <TableRow
              sx={{
                border: `1px solid ${AMBER[800]}`,
                '& th': {
                  fontWeight: 'bold',
                  backgroundColor: AMBER[200],
                },
              }}
            >
              {headers.map((header) => {
                return <TableCell key={header}>{splitAndTitleCase(header)}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row[headers[0]]}
                sx={{
                  border: `1px solid ${AMBER[800]}`,
                  '& th': {
                    fontWeight: 'bold',
                    backgroundColor: AMBER[200],
                  },
                }}
              >
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
  const ruleData = RULE_DATA[title];
  const subRules = Object.keys(ruleData);
  const handleEdit = () => {
    if (isEditing) {
      updateCard({ ...expandedCardData, content: { title: title } });
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
          <Box>
            <Typography
              id="rule-card-title"
              variant="h3"
              component="h3"
              data-testid="title-view"
              sx={(theme) => {
                return {
                  width: '100%',
                  margin: theme.spacing(4),
                  paddingLeft: theme.spacing(2),
                  paddingRight: theme.spacing(2),
                  paddingTop: theme.spacing(1.5),
                };
              }}
            >
              Choose Rule
            </Typography>
          </Box>
          <RuleCardForm content={{ title: title }} setContent={(content: RuleCardContent) => setTitle(content.title)} />
        </>
      ) : (
        <>
          <CardHeader title={splitAndTitleCase(title)} handleEdit={handleEdit} />
          <CardBodyLayout>
            {subRules.map((subRule) => (
              <TableSection subRule={subRule} tableData={ruleData[subRule]} key={subRule} />
            ))}
          </CardBodyLayout>
        </>
      )}
    </ExpandedCardLayout>
  );
};

export default ExpandedRuleCard;
