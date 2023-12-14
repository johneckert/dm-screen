import { render, screen, act } from '@testing-library/react';
import TabHeader from './TabHeader';

const mockSetActiveTab = jest.fn();
const mockSetTabs = jest.fn();
const mockShowNewCardDialog = jest.fn();

const mockTabs = ['tab-1', 'tab-2'];
const mockActiveTab = 'tab-1';

describe('<TabHeader />', () => {
  it('renders', () => {
    render(
      <TabHeader
        tabs={mockTabs}
        setTabs={mockSetTabs}
        activeTab={mockActiveTab}
        setActiveTab={mockSetActiveTab}
        setShowNewCardDialog={mockShowNewCardDialog}
      />,
    );
    expect(screen.getByTestId('tab-header')).toBeInTheDocument();
  });

  it('renders a tab for each tab in storage', () => {
    render(
      <TabHeader
        tabs={mockTabs}
        setTabs={mockSetTabs}
        activeTab={mockActiveTab}
        setActiveTab={mockSetActiveTab}
        setShowNewCardDialog={mockShowNewCardDialog}
      />,
    );
    expect(screen.getByText(/tab-1/i)).toBeInTheDocument();
    expect(screen.getByText(/tab-2/i)).toBeInTheDocument();
  });

  it('renders a new tab button', () => {
    render(
      <TabHeader
        tabs={mockTabs}
        setTabs={mockSetTabs}
        activeTab={mockActiveTab}
        setActiveTab={mockSetActiveTab}
        setShowNewCardDialog={mockShowNewCardDialog}
      />,
    );
    expect(screen.getByText(/\+ Tab/i)).toBeInTheDocument();
  });

  it('sets the active tab when a tab is clicked', () => {
    render(
      <TabHeader
        tabs={mockTabs}
        setTabs={mockSetTabs}
        activeTab={mockActiveTab}
        setActiveTab={mockSetActiveTab}
        setShowNewCardDialog={mockShowNewCardDialog}
      />,
    );

    const tabTwo = screen.getByText(/tab-2/i);

    act(() => {
      tabTwo.click();
    });

    expect(mockSetActiveTab).toHaveBeenCalledWith('tab-2');
  });

  it('opens new tab dialog when "+ Tab" button is clicked', () => {
    render(
      <TabHeader
        tabs={mockTabs}
        setTabs={mockSetTabs}
        activeTab={mockActiveTab}
        setActiveTab={mockSetActiveTab}
        setShowNewCardDialog={mockShowNewCardDialog}
      />,
    );

    const newTab = screen.getByText(/\+ Tab/i);

    act(() => {
      newTab.click();
    });
    expect(screen.getByText(/Create New Tab/i)).toBeInTheDocument();
  });

  it('opens new card dialog when "+ Card" button is clicked', () => {
    render(
      <TabHeader
        tabs={mockTabs}
        setTabs={mockSetTabs}
        activeTab={mockActiveTab}
        setActiveTab={mockSetActiveTab}
        setShowNewCardDialog={mockShowNewCardDialog}
      />,
    );

    const newCard = screen.getByText(/\+ Card/i);

    act(() => {
      newCard.click();
    });
    expect(mockShowNewCardDialog).toBeCalledWith(true);
  });
});
