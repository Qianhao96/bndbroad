import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import FeedIcon from '@mui/icons-material/Feed';
import MenuIcon from '@mui/icons-material/Menu';

import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';

import { Logo } from './logo';
import { NavItem } from './nav-item';

const items = [
  {
    href: '/',
    icon: <MenuIcon fontSize="small" />,
    title: 'HOME'
  },
  {
    href: '/about',
    icon: <InfoIcon fontSize="small" />,
    title: 'About Us'
  },
  {
    href: '/products',
    icon: <ShoppingBagIcon fontSize="small" />,
    title: 'Products'
  },
  {
    href: '/cases',
    icon: <ShoppingBagIcon fontSize="small" />,
    title: 'Cases'
  },
  {
    href: '/news',
    icon: <FeedIcon fontSize="small" />,
    title: 'News'
  },
  {
    href: '/contact',
    icon: <ContactPageIcon fontSize="small" />,
    title: 'Contact Us'
  }
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  }, [router.asPath]);

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
        <div>
          <Box sx={{ pl: 4, pt: 1 }}>
            <NextLink href="/" passHref>
              <a style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Logo
                  sx={{
                    height: 70,
                    width: 70
                  }}
                />
                <h1 style={{ color: '#D1D5DB', marginLeft: '7px' }}>Jsmax</h1>
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            mb: 1
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent">
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary">
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
