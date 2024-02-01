import React, { useState } from 'react';
import ModalLayout from '../layout/ModalLayout';
import { Box, Button, Typography, Link, Stepper, Step, StepLabel } from '@mui/material';

const StepOne: React.FC = () => {
  return (
    <>
      <Typography sx={{ mb: 1 }} variant="mainTitle">
        Welcome to DM Screen!
      </Typography>
      <Typography sx={{ mb: 4 }} variant="cardSectionLabel">
        Your ultimate companion for running 5e Dungeons and Dragons online.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        DM Screen is designed to help you get organized so you can focus on what matters, having fun! It is a dynamic
        version of the pen and paper dm screen, which you can customize to meet your needs.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        Take this quick tour to learn about the different features available or just dive right in and start creating.
      </Typography>
    </>
  );
};

const StepTwo: React.FC = () => {
  return (
    <>
      <Typography sx={{ mb: 1 }} variant="mainTitle">
        Cards
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        There are 5 types of cards you can create: <Typography variant="fieldLabel">Rules, </Typography>
        <Typography variant="fieldLabel">Notes, </Typography>
        <Typography variant="fieldLabel">Maps, </Typography>
        <Typography variant="fieldLabel">Monsters, </Typography>and{' '}
        <Typography variant="fieldLabel">Players.</Typography> You can even use{' '}
        <Typography variant="fieldLabel">
          <Link href="https://www.markdownguide.org/cheat-sheet" underline="hover" target="_blank" rel="noreferrer">
            markdown
          </Link>{' '}
        </Typography>
        to format your cards for easier readability.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">Rule Cards:</Typography> These are the standard rules from the pen & paper dm
        screen.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">Note Cards:</Typography> A simple card with a single text field for keeping
        track of anything else you need.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">Map Cards:</Typography> This card type has a space for a room id, as well as
        read-out-loud text and dm notes.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">Monster Cards:</Typography> Monster cards contain a stat block and notes
        section. There's even an option to import monsters from the Basic Rules when you create a card.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">Player Cards:</Typography> A basic player stat block with a focus on the stats
        you need on the fly like AC and passive percpetion.
      </Typography>
    </>
  );
};

const StepThree: React.FC = () => {
  return (
    <>
      <Typography sx={{ mb: 1 }} variant="mainTitle">
        Layout
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        DM Screen features a fully customizable layout, that you can change on the fly.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">Drag & Drop: </Typography>
        Reorganize your notes on the fly with our intuitive drag-and-drop feature which allows you to effortlessly
        arrange your cards, making it easy to stay organized no matter what your players get up to.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">Custom Tabs: </Typography>
        Need additional structure? Fear not! DM Screen let's you organize your cards across multiple tabs, so you can
        keep your campaign data organized by session, location, or any other way you see fit.
      </Typography>
    </>
  );
};

const StepFour: React.FC = () => {
  return (
    <>
      <Typography sx={{ mb: 1 }} variant="mainTitle">
        Import/Export
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        Don't lose your data!
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">No account needed. </Typography>
        DM Screen doesn't store your data anywhere but in your browser. This means you can use it without an account and
        I can develop it for free.
      </Typography>
      <Typography sx={{ mb: 3 }} component="p">
        <Typography variant="fieldLabel">Don't lose your data! </Typography>
        Since DM Screen doesn't save your data anywhere, you will lose it if you clear your browser cache. To make sure
        this doesn't happen, you can export your data to a file, and then import it again later.
      </Typography>
    </>
  );
};

const WelcomeDialog: React.FC<{
  showWelcomeDialog: boolean;
  setSeenWelcomeDialog: () => void;
}> = ({ setSeenWelcomeDialog, showWelcomeDialog }) => {
  const STEPS = [<StepOne />, <StepTwo />, <StepThree />, <StepFour />];
  const STEP_LABELS = ['Welcome', 'Cards', 'Layout', 'Export/Import'];
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
