import { List, ListItem, styled, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import { NavLinStyled } from './../../styles/linknavbar'


const pages = [
  {path:'*',
  name: 'Dasboard'},
  {path:'/anagrafica',
  name: 'Anagrafica'},
  {path:'/impostazioni',
  name: 'Impostazioni'},
  ];


const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const listNavlinks = pages.map((e, i)=>(<ListItem key={i}>
  <NavLinStyled to={e.path} >{e.name}</NavLinStyled>
</ListItem>));


function Navbar() {
  return (
    <AppBar position="static">
      <StyledToolBar>
          <Typography variant='h4'>
            Gedip
          </Typography>
          <List sx={{ display: 'flex' }}>
          {listNavlinks}
          </List>
      </StyledToolBar>
    </AppBar >
  );
}

export default Navbar



