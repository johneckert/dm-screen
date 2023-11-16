import { render, screen } from '@testing-library/react';
import RuleCardSmall from './RuleCardSmall';
import { SMALL_TABLE_RULES } from '../../../ruleData';

const mockRuleCardContent = {
  id: '1',
  title: 'strength',
};

const mockInvalidRuleCardContent = {
  id: '1',
  title: 'cheese',
};

describe('<RuleCardSmall />', () => {
  it('renders description of rule', () => {
    render(<RuleCardSmall content={mockRuleCardContent} />);
    expect(screen.getByTestId('small-rule-card')).toHaveTextContent(SMALL_TABLE_RULES[mockRuleCardContent.title]);
  });

  it('fails gracefully', () => {
    render(<RuleCardSmall content={mockInvalidRuleCardContent} />);
    expect(screen.getByTestId('small-rule-card')).toBeEmptyDOMElement();
  });
});
