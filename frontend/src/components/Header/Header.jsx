import "./Header.css";

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {

  const { handleFilters } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleFilters}
        >
          <MenuIcon />
        </IconButton>
        <Typography>Customs shops</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;