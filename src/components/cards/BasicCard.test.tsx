import React from 'react';
import { render, screen, act } from '@testing-library/react';
import BasicCard from './BasicCard';

const mockCardData = { id: 'ABC-123', top: 40, left: 80, title: 'Pikachu', content: 'I am Pikachu' };
let isPreview = true;
let isExpanded = true;

const mockSetExpanded = jest.fn();
const mockUpdateCardData = jest.fn();

describe('BasicCard', () => {
  it('renders', () => {
    render(
      <BasicCard
        id={mockCardData.id}
        title={mockCardData.title}
        preview={isPreview}
        content={mockCardData.content}
        isExpanded={isExpanded}
        setExpanded={mockSetExpanded}
        updateCardData={mockUpdateCardData}
      />,
    );
    expect(screen.getByTestId('basic-card')).toBeInTheDocument();
  });

  it('renders an avatar', () => {
    render(
      <BasicCard
        id={mockCardData.id}
        title={mockCardData.title}
        preview={isPreview}
        content={mockCardData.content}
        isExpanded={isExpanded}
        setExpanded={mockSetExpanded}
        updateCardData={mockUpdateCardData}
      />,
    );
    expect(screen.getByLabelText('avatar')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(
      <BasicCard
        id={mockCardData.id}
        title={mockCardData.title}
        preview={isPreview}
        content={mockCardData.content}
        isExpanded={isExpanded}
        setExpanded={mockSetExpanded}
        updateCardData={mockUpdateCardData}
      />,
    );
    expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
  });

  it('expands the card when expand icon is clicked', () => {
    render(
      <BasicCard
        id={mockCardData.id}
        title={mockCardData.title}
        preview={isPreview}
        content={mockCardData.content}
        isExpanded={isExpanded}
        setExpanded={mockSetExpanded}
        updateCardData={mockUpdateCardData}
      />,
    );

    const expandIcon = screen.getByLabelText('show more');

    act(() => {
      expandIcon.click();
    });
    expandIcon.click();
    expect(mockSetExpanded).toHaveBeenCalled();
  });

  it('becomes editable when edit icon is clicked', () => {
    render(
      <BasicCard
        id={mockCardData.id}
        title={mockCardData.title}
        preview={isPreview}
        content={mockCardData.content}
        isExpanded={isExpanded}
        setExpanded={mockSetExpanded}
        updateCardData={mockUpdateCardData}
      />,
    );
    act(() => {
      const editIcon = screen.getByLabelText('edit');
      editIcon.click();
    });
    expect(screen.getAllByRole('text-field')).toHaveLength(2);
  });
});
