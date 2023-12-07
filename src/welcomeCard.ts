import { CardData, CardType } from './interfaces';
import { DEFAULT_TABS } from './constants';
import { RULES } from './ruleData';

const INSTRUCTION_TEXT =
  '# Thanks for checking out DM Screen! \n \
DM Screen is a digital tool designed to be used while DM-ing games online. \n \
\n \
### Basic Features \n \
- You can keep track of your notes, rules, monsters, and players using different card types. \n \
- You can drag and drop cards to move them around. \n \
- You can create tabs to organize your cards on different screens so they are easy to reference during a session. \n \
- Most Text fields support markdown. \n \
\n \
### Saving Data \n \
- Your data is saved automatically to your browser (in localStorage).  \n \
- You can also download/upload your data as a JSON file. \n \
- Clearing your browser cache will delete all of your data. \n \
- If you need to clear your cache or move between browsers, you can download a save file and reupload it.';

const RULE_CARDS: CardData[] = RULES.map((rule: string, index) => ({
  id: `rule-${rule}`,
  content: {
    title: rule,
  },
  column: `droppable-${(index % 4) + 1}`,
  tab: DEFAULT_TABS[1],
  type: CardType.Rule,
}));

export const WELCOME_CARDS: CardData[] = [
  {
    id: 'welcome-1',
    content: {
      title: 'Welcome to the DM Screen!',
      notes: INSTRUCTION_TEXT,
    },
    column: 'droppable-1',
    tab: DEFAULT_TABS[0],
    type: CardType.Note,
  },
  ...RULE_CARDS,
];
