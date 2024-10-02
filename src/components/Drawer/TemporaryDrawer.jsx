import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const actions = [
  { icon: <NavLink to='/add' ><AddCircleOutlineIcon /></NavLink>, name: 'Add ' },
  { icon: <NavLink to='/list'><FormatListBulletedIcon /></NavLink>, name: 'List ' },
  { icon: <NavLink to='/orders'><OutdoorGrillIcon /></NavLink>, name: 'Orders' },
];

export default function TemporaryDrawer() {
  return (
    <Box sx={{ }}>
      <SpeedDial
        className='d-md-none'
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 , }}
        icon={<SpeedDialIcon  openIcon={<MenuIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
