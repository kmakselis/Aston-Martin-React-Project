import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
// import CartContext from '../contexts/cart-context';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.grey[200],

  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
}));

const pages = [
  { text: 'Pagrindinis', to: '/' },
  { text: 'Modeliai', to: '/models' },
  { text: 'Kontaktai', to: '/contacts' },
];

const Navbar = () => (
  // const cartContext = React.useContext(CartContext);
  <AppBar position="fixed" style={{ background: 'black', boxShadow: 'none' }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Box sx={{ display: 'flex', alignSelf: 'stretch' }}>
        {pages.map(({ text, to }) => <Link key={to} to={to}>{text}</Link>)}
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;

function add(a, b) {
  const res = a + b;

  return res;
}

add(1, 2);
