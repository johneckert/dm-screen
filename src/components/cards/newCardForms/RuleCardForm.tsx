import { SelectChangeEvent } from '@mui/material';
import { Box, Select, InputLabel, MenuItem } from '@mui/material';
import { RULES } from '../../../ruleData';
import { splitAndTitleCase } from '../../../utils';
import { RuleCardContent, CardType } from '../../../interfaces';
import FormDivider from '../cardFields/FormDivider';

const RuleCardForm: React.FC<{
  content: RuleCardContent;
  setContent: React.Dispatch<React.SetStateAction<RuleCardContent>> | ((content: RuleCardContent) => void);
}> = ({ content, setContent }) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    setContent({ title: e.target.value });
  };
  return (
    <div data-testid="rule-form">
      <FormDivider type={CardType.Rule} />
      <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
        <InputLabel id="rule-select-label">Rule*</InputLabel>
        <Select
          labelId="rule-select-label"
          sx={{ marginBottom: 2, width: '100%' }}
          id="rule-select"
          value={content.title}
          data-testid="rule-select"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          {RULES.map((value) => (
            <MenuItem key={value} value={value} data-testid="select-option">
              {splitAndTitleCase(value)}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </div>
  );
};

export default RuleCardForm;
