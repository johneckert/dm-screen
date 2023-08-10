import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import makeStyles from '@mui/styles/makeStyles';
import { HEADER_HEIGHT, ItemTypes } from '../constants';
import { CardData, ScreenSize, GridSize, GridTemplate } from '../interfaces';
import { getScreenSize, getGridSize, getGridTemplate } from '../utils';
import { useLocalStorage } from 'usehooks-ts';
import theme from '../theme';
import { v4 as uuidv4 } from 'uuid';
import { remove } from 'lodash';

const DEMO_CARDS: CardData[] = [
  { id: uuidv4(), column: 1, row: 1, title: 'A Test', content: 'Content A.' },
  { id: uuidv4(), column: 3, row: 2, title: 'B Test', content: 'Content B.' },
];

interface StyleProps {
  screenSize: ScreenSize;
  gridTemplate: GridTemplate;
}

const useStyles = makeStyles((theme) => ({
  screenArea: (props: StyleProps) => ({
    width: props.screenSize.width,
    height: props.screenSize.height - HEADER_HEIGHT,
    paddingLeft: '8px',
    paddingRight: '8px',
  }),
  gridContainer: {
    display: 'grid',
    width: '100%',
    height: '100%',
    gridTemplateColumns: (props: StyleProps) => props.gridTemplate.columnDefinition,
    gridTemplateRows: (props: StyleProps) => props.gridTemplate.rowDefinition,
  },
  gridItem: {},
}));

const ScreenArea = () => {
  const [cards, setCards] = useLocalStorage('cards', DEMO_CARDS || ([] as CardData[]));
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());
  const [gridSize, setGridSize] = useState<GridSize>(getGridSize(screenSize));
  const [GridTemplate, setGridTemplate] = useState<GridTemplate>(getGridTemplate(screenSize));
  const styleProps: StyleProps = { screenSize: screenSize, gridTemplate: GridTemplate };
  const classes = useStyles(styleProps);

  const findFirstEmptySpace = (): [row: number, column: number] => {
    //TODO: fix this!
    let columns = [1, 2, 3, 4];
    let rows = [1, 2, 3, 4];
    cards.forEach((card) => {
      remove(columns, (column: number) => column === card.column);
      remove(rows, (row: number) => row === card.row && card.column === columns[0]);
    });
    return [rows[0], columns[0]];
  };

  console.log('gridSize', gridSize);
  const createCard = () => {
    const id = uuidv4();
    const [row, column] = findFirstEmptySpace();
    setCards((prevCards: CardData[]) => [
      ...prevCards,
      { id, column: column, row: row, title: 'New Card', content: 'Content' },
    ]);
  };

  const updateCardData = (id: string, title: string, content: string): void => {
    const targetCard = cards.find((card) => card.id === id);
    if (targetCard) {
      targetCard.title = title;
      targetCard.content = content;
      setCards(cards);
    }
  };

  const onDragStart = (e: Event) => {
    console.log('onDragStart', e);
    //change styles?
  };

  const onDrop = (e: Event) => {
    console.log('onDrop', e);
    // calculate new row
    // calculate new column
    // if new space is occupied, swap cards
    // else update card
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setScreenSize(getScreenSize());
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    setGridSize(getGridSize(screenSize));
    setGridTemplate(getGridTemplate(screenSize));
  }, [screenSize]);

  return (
    <Container maxWidth={false} disableGutters className={classes.screenArea} data-testid="screen-area">
      <Box className={classes.gridContainer} data-testid="screen-area"></Box>
    </Container>
  );

  // return (
  //   <Container maxWidth={false} disableGutters className={classes.screenArea} data-testid="screen-area">
  //     <Box className={classes.gridContainer} data-testid="screen-area">
  //       {cards.map((card) => (
  //         <div
  //           key={card.id}
  //           draggable="true"
  //           onDragStart={onDragStart}
  //           onDrop={onDrop}
  //           style={{
  //             gridColumnStart: card.column,
  //             gridColumnEnd: card.column + 1,
  //             gridRowStart: card.row,
  //             gridRowEnd: card.row + 1,
  //           }}
  //         >
  //           <span>{card.title}</span>
  //           <span>{card.content}</span>
  //         </div>
  //       ))}
  //     </Box>
  //     {cards.length < 1 && (
  //       <Fab
  //         color="primary"
  //         aria-label="add-card"
  //         onClick={createCard}
  //         sx={{ position: 'absolute', bottom: '1em', right: '1em' }}
  //       >
  //         <AddIcon />
  //       </Fab>
  //     )}
  //   </Container>
  // );
};

export default ScreenArea;
