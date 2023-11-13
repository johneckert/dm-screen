import { SelectChangeEvent } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { RULES } from '../../../ruleData';
import { splitAndTitleCase } from '../../../utils';
import { RuleCardContent } from '../../../interfaces';
import { set } from 'lodash';

const RuleCardForm: React.FC<{
  content: RuleCardContent;
  setContent: React.Dispatch<React.SetStateAction<RuleCardContent>> | ((content: RuleCardContent) => void);
}> = ({ content, setContent }) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    setContent({ title: e.target.value });
  };
  return (
    <div data-testid="rule-form">
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
