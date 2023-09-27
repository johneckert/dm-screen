import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Header = () => {
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
  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          DM Screen
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="download"
          name="download"
          sx={{ mr: 2 }}
          onClick={downloadCards}
        >
          <SaveAltIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
