import { render, screen, waitFor, act } from '@testing-library/react';
import ExpandedRuleCard, { DescriptionSection, TableSection } from './ExpandedRuleCard';
import { CardType } from '../../../interfaces';
import { DEFAULT_TABS } from '../../../constants';

const mockCloseExpandedCard = jest.fn();
const mockUpdateCard = jest.fn();
const mockDeleteCard = jest.fn();

const expandedRuleCardData = {
  id: '1',
  type: CardType.Rule,
  column: 'column-1',
  content: { title: 'strength' },
  tab: DEFAULT_TABS[0],
};

describe('<ExpandedRuleCard />', () => {
  it('renders', () => {
    render(
      <ExpandedRuleCard
        closeExpandedCard={mockCloseExpandedCard}
        expandedCardData={expandedRuleCardData}
        deleteCard={mockDeleteCard}
        updateCard={mockUpdateCard}
      />,
    );
    expect(screen.getByTestId('expanded-card')).toBeInTheDocument();
  });

  describe('Edit Mode', () => {
    it('renders rule select input', () => {
      render(
        <ExpandedRuleCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedRuleCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      const editButton = screen.getByTestId('edit-button');
      act(() => {
        editButton.click();
      });

      expect(screen.getByTestId('rule-select')).toBeInTheDocument();
    });
  });

  describe('View Mode', () => {
    it('renders edit button', () => {
      render(
        <ExpandedRuleCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedRuleCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      waitFor(() => {
        const editButton = screen.getByTestId('edit-button');
        expect(editButton).toBeInTheDocument();
      });
    });

    it('renders title', () => {
      render(
        <ExpandedRuleCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedRuleCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      waitFor(() => {
        const titleComponent = screen.getByTestId('title-view');
        expect(titleComponent).toBeInTheDocument();
      });
    });

    it('renders a tableSection for each key in rule object.', () => {
      render(
        <ExpandedRuleCard
          closeExpandedCard={mockCloseExpandedCard}
          expandedCardData={expandedRuleCardData}
          updateCard={mockUpdateCard}
          deleteCard={mockDeleteCard}
        />,
      );

      waitFor(() => {
        const tableSections = screen.queryByTestId('table-section');
        expect(tableSections).toHaveLength(2);
      });
    });
  });

  describe('<DescriptionSection />', () => {
    it('renders a single description row if the description is a string', () => {
      const description = 'This is a description';

      render(<DescriptionSection description={description} />);

      waitFor(() => {
        expect(screen.getByTestId('desc-sentence')).toBeInTheDocument();
      });
    });

    it('renders a description row for each key if description is an object', () => {
      const description = {
        description: 'This is a description',
        description2: 'This is a second description',
      };

      render(<DescriptionSection description={description} />);

      waitFor(() => {
        expect(screen.queryByTestId('desc-row')).toHaveLength(2);
      });
    });
  });

  describe('<TableSection />', () => {
    const mockTableData = {
      description: 'description',
      headers: ['header'],
      rows: [{ header: 'row' }, { header: 'row2' }],
    };

    const mockTableDataWithDesc = {
      headers: ['header'],
      rows: [{ header: 'row' }, { header: 'row2' }],
    };

    it('renders a table section', () => {
      render(<TableSection subRule={'subRule'} tableData={mockTableData} />);

      waitFor(() => {
        expect(screen.getByTestId('table-section')).toBeInTheDocument();
      });
    });

    it('renders a table name', () => {
      render(<TableSection subRule={'subRule'} tableData={mockTableData} />);
      waitFor(() => {
        expect(screen.getByTestId('table-name')).toBeInTheDocument();
      });
    });

    it('renders a description section if tableData has a description', () => {
      render(<TableSection subRule={'subRule'} tableData={mockTableData} />);

      waitFor(() => {
        expect(screen.getByTestId('description-section')).toBeInTheDocument();
      });
    });

    it('does not render a description section if tableData does not have a description', () => {
      render(<TableSection subRule={'subRule'} tableData={mockTableDataWithDesc} />);

      waitFor(() => {
        expect(screen.queryByTestId('description-section')).not.toBeInTheDocument();
      });
    });

    it('renders the correct number of rows', () => {
      render(<TableSection subRule={'subRule'} tableData={mockTableData} />);

      waitFor(() => {
        expect(screen.queryByTestId('table-row')).toHaveLength(2);
      });
    });
  });
});
