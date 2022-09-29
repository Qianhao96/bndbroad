import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}>
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}>
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Email: junsanfactory@126.com">
            <Typography
              color="textPrimary"
              variant="h7"
              sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} fontSize="medium" /> Email: junsanfactory@126.com
            </Typography>
          </Tooltip>
          <Tooltip title="Tel：+86 13767233603">
            <Typography
              color="textPrimary"
              variant="h7"
              sx={{ display: 'flex', alignItems: 'center', ml: 5 }}>
              <CallIcon sx={{ mr: 1 }} fontSize="medium" /> Tel：+86 13767233603
            </Typography>
          </Tooltip>
          <Tooltip title=" Mob：+86 13767233603">
            <Typography
              color="textPrimary"
              variant="h7"
              sx={{ display: 'flex', alignItems: 'center', ml: 5 }}>
              <MobileScreenShareIcon sx={{ mr: 1 }} fontSize="medium" /> Mob：+86 13767233603
            </Typography>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Twitter">
            <IconButton sx={{ ml: 1 }}>
              <TwitterIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Facebook">
            <IconButton sx={{ ml: 1 }}>
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
