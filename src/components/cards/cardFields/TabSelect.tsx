import React from 'react';
import { DEFAULT_TAB } from '../../../constants';
import { useReadLocalStorage } from 'usehooks-ts';
import { MenuItem, Select, InputLabel } from '@mui/material';

const TabSelect: React.FC<{ cardTab: string; setCardTab: (tab: string) => void }> = ({ cardTab, setCardTab }) => {
  const tabs = useReadLocalStorage<string[]>('tabs') ?? [DEFAULT_TAB];

  return (
    <>
      <InputLabel id="tab-select-label">Tab</InputLabel>
      <Select
        labelId="tab-select-label"
        sx={{ marginBottom: 2 }}
        id="tab-select"
        value={cardTab}
        label="Tab"
        data-testid="card-tab-select"
        onChange={(e) => setCardTab(e.target.value)}
      >
        {tabs.map((value) => (
          <MenuItem key={value} value={value} data-testid="select-option">
            {value}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default TabSelect;
