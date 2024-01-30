import React, { useState } from 'react';
import ModalLayout from '../layout/ModalLayout';
import { Box, Button, Typography, Link, Stepper, Step, StepLabel } from '@mui/material';

const StepOne: React.FC = () => {
  return (
    <>
      <Typography sx={{ mb: 2 }} component="p">
        DM Screen is designed to help you get organized so you can focus on what matters, having fun! It is a dynamic
        version of the pen and paper dm screen, which you can customize to meet your needs.
      </Typography>
      <Typography sx={{ mb: 2 }} component="p">
        Take this qucik tour to learn about the different features available or just dive right in and start creating.
      </Typography>
      <Typography sx={{ mb: 2 }} component="p">
        Best regards,
      </Typography>
      <Typography sx={{ mb: 4 }} component="p">
        John
      </Typography>
    </>
  );
};

const StepTwo: React.FC = () => {
  return (
    <>
      <Typography sx={{ mb: 2 }} component="h1">
        Cards
      </Typography>
      <Typography sx={{ mb: 2 }} component="p">
        There are 5 types of cards you can create: Rules, Monsters, Maps, Players, and Notes. You can even use{' '}
        <Link href="https://www.markdownguide.org/cheat-sheet" underline="hover" target="_blank" rel="noreferrer">
          markdown
        </Link>
        to format your notes for easier readability.
        <ul>
          <li>
            <em>Rule:</em> These are the basic rules from the pen & paper dm screen.
          </li>
          <li>
            <em>Monster:</em> A basic statblock for keeping track of monsters. There's even an option to import monsters
            from the Basic Rules when you create a crd.
          </li>
          <li>
            <em>Map:</em> This card type has a space for a room id, as well as read-out-loud text and dm notes.
          </li>
          <li>
            <em>Players:</em> A basic stat block for keeping track of player info, especially the stats you need on the
            fly like AC and passive percpetion.
          </li>
          <li>
            <em>Note:</em> A basic card for keeping track of anything else you need.
          </li>
        </ul>
      </Typography>
    </>
  );
};

const StepThree: React.FC = () => {
  return (
    <>
      <Typography sx={{ mb: 2 }} component="p">
        Reorganize your notes on the fly with our intuitive drag-and-drop feature which allows you to effortlessly
        arrange your cards, making it easy to stay organized no matter what your players get up to.
      </Typography>
      <Typography sx={{ mb: 2 }} component="p">
        Need additional structure? Fear not! DM Screen let's you organize your cards across multiple tabs, so you can
        keep your campaign data organized by session, location, or any other way you see fit.
      </Typography>
    </>
  );
};

const StepFour: React.FC = () => {
  return (
    <>
      <Typography sx={{ mb: 2 }} component="p">
        DM Screen lives compleltey in your browser, all of your data is stored locally. This allows it to be free to use
      </Typography>
      <Typography sx={{ mb: 2 }} component="p">
        Unfortunatley, this also means you can lose your data if you clear your browser cache. To make sure you don't
        lose your data, you can export your data to a file, and then import it again later.
      </Typography>
    </>
  );
};

const WelcomeDialog: React.FC<{
  showWelcomeDialog: boolean;
  setSeenWelcomeDialog: () => void;
}> = ({ setSeenWelcomeDialog, showWelcomeDialog }) => {
  const STEPS = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />];
  const STEP_LABELS = ['Welcome', 'Cards', 'Tabs', 'Export/Import'];
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    if (activeStep === STEPS.length - 1) {
      setSeenWelcomeDialog();
      return;
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <ModalLayout isVisible={showWelcomeDialog} close={setSeenWelcomeDialog}>
      <Box
        id="welcome-dialog"
        sx={{ overflowY: 'scroll', display: 'flex', flexDirection: 'column', minHeight: '100%', p: 6, pb: 2 }}
      >
        <Typography sx={{ mb: 1 }} variant="mainTitle">
          Welcome to DM Screen!
        </Typography>
        <Typography sx={{ mb: 4 }} variant="cardSectionLabel">
          Your ultimate companion for running 5e Dungeons and Dragons online!
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mb: 8 }}>
          {STEP_LABELS.map((step) => {
            return (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {STEPS[activeStep]}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, marginTop: 'auto' }}>
          <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button variant="contained" onClick={handleNext}>
            {activeStep === STEPS.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    </ModalLayout>
  );
};

export default WelcomeDialog;
