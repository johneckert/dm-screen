import React, { useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { WHITE } from '../../colors';
import { styled } from '@mui/material/styles';
import { validateFileType } from '../../utils';
import VerificationDialog from '../modals/VerificationDialog';
import { DialogTypes, CardData } from '../../interfaces';
import { DIALOG_MESSAGES, DEFAULT_TAB } from '../../constants';
import useCardStorage from '../../hooks/useCardStorage';
import { mapCards } from '../../utils';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface FileActionMenuProps {
  setTabs: (tabs: string[]) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const FileActionMenu: React.FC<FileActionMenuProps> = ({ setTabs, activeTab, setActiveTab }) => {
  const fileUploadRef = useRef<null | HTMLInputElement>(null);
  const [showFileActions, setShowFileActions] = useState<boolean>(false);
  const [dialogType, setDialogType] = useState<DialogTypes | null>(null);
  const passClickToInput = () => {
    fileUploadRef.current?.click();
  };
  const [_, setCards] = useCardStorage();

  const downloadCards = () => {
    const saveData = localStorage.getItem('cards');
    const json = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(saveData))}`;
    const link = document.createElement('a');
    link.setAttribute('href', json);
    link.setAttribute('download', 'dmscreen.json');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const uploadCards = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (file && validateFileType(file)) {
        const cards = JSON.parse(JSON.parse(event.target?.result as string)) as CardData[];
        const tabs = cards.map((card: CardData) => card.tab) ?? [DEFAULT_TAB];
        setTabs([...new Set(tabs)]);
        setCards(mapCards(cards));
        setActiveTab(tabs[0]);
      } else {
        setDialogType(DialogTypes.FileType);
      }
    };
    reader.readAsText(file as Blob);
  };

  const handleCancel = () => {
    setDialogType(null);
  };

  const handleConfirm = () => {
    if (dialogType === DialogTypes.Upload) {
      passClickToInput();
    } else if (dialogType === DialogTypes.Reset) {
      setCards(mapCards([]));
      setActiveTab(activeTab);
    }
    setDialogType(null);
  };

  const handleUploadClick = () => setDialogType(DialogTypes.Upload);
  const handleResetClick = () => setDialogType(DialogTypes.Reset);
  const handleShowFileActions = () => setShowFileActions(true);
  const handleHideFileActions = () => setShowFileActions(false);
  const toggleFileActions = () => setShowFileActions(!showFileActions);

  return (
    <Box onMouseEnter={handleShowFileActions} onMouseLeave={handleHideFileActions} data-testid="file-actions">
      {showFileActions ? (
        <Box sx={{ transition: 'all 1s' }}>
          <IconButton onClick={downloadCards} sx={{ mr: 2, color: WHITE }} data-testid="download-button">
            <SaveAltIcon />
          </IconButton>
          <IconButton onClick={handleUploadClick} sx={{ mr: 2, color: WHITE }} data-testid="upload-button">
            <VisuallyHiddenInput ref={fileUploadRef} type="file" onChange={uploadCards} data-testid="file-input" />
            <CloudUploadIcon />
          </IconButton>
          <IconButton onClick={handleResetClick} sx={{ mr: 2, color: WHITE }} data-testid="reset-button">
            <DeleteIcon />
          </IconButton>
        </Box>
      ) : (
        <Box sx={{ transition: 'all 1s' }}>
          <IconButton onClick={toggleFileActions} sx={{ mr: 2, color: WHITE }} data-testid="upload-button">
            <SaveIcon />
          </IconButton>
        </Box>
      )}
      {dialogType && (
        <VerificationDialog
          dialogOpen={!!dialogType}
          dialogMessage={dialogType ? DIALOG_MESSAGES[dialogType] : ''}
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
          confirmOnly={dialogType === DialogTypes.FileType}
        />
      )}
    </Box>
  );
};

export default FileActionMenu;
