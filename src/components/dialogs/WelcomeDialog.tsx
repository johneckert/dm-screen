import React from 'react';
import ModalLayout from '../layout/ModalLayout';
import { Box, Typography } from '@mui/material';

const WelcomeDialog: React.FC<{
  showWelcomeDialog: boolean;
  setSeenWelcomeDialog: () => void;
}> = ({ setSeenWelcomeDialog, showWelcomeDialog }) => {
  return (
    <ModalLayout isVisible={showWelcomeDialog} close={setSeenWelcomeDialog}>
      <Box id="welcome-dialog" sx={{ overflowY: 'scroll' }}>
        <Typography sx={{ mb: 1 }} variant="mainTitle">
          Welcome to DM Screen!
        </Typography>
        <Typography sx={{ mb: 4 }} variant="cardSectionLabel">
          Your ultimate companion for running 5e Dungeons and Dragons online!
        </Typography>
        <Typography sx={{ mb: 2 }} component="p">
          DM Screen is a digital canvas designed to help you get organized so you can focus on what matters, telling
          your story. In addition to cards for quickly referencing rules, DM Screen allows you to create custom cards to
          track info about your players, monsters, map locations, and generic notes. You can even use mardown to format
          your cards so they are easy to read!
        </Typography>
        <Typography sx={{ mb: 2 }} component="p">
          Stay organized on the fly with our intuitive drag-and-drop feature which allows you to effortlessly arrange
          your cards, making it easy to stay organized no matter what your players get up to. Need additional structure?
          Fear not! DM Screen let's you organize your cards across multiple tabs, so you can keep your campaign data
          organized by session, location, or any other way you see fit.
        </Typography>
        <Typography sx={{ mb: 2 }} component="p">
          I don't want your data! With DM Screen, your creations are stored directly in your browser. There is also an
          export feature so that you can save your campaign data locally and ensure that your data is not lost when you
          clear your browser cache.
        </Typography>
        <Typography sx={{ mb: 4 }} component="p">
          Embrace the boundless possibilities that DM Screen brings to your digital tabletop. Unleash your creativity,
          streamline your campaign management, and embark on unforgettable journeys with the click of a button.
        </Typography>
        <Typography sx={{ mb: 2 }} component="p">
          Best regards,
        </Typography>
        <Typography sx={{ mb: 4 }} component="p">
          John
        </Typography>
      </Box>
    </ModalLayout>
  );
};

export default WelcomeDialog;
