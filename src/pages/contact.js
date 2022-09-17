import Head from 'next/head';
import { Box, Typography, Grid, Tooltip } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import LanguageIcon from '@mui/icons-material/Language';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';

const bannerImages = [
  {
    name: 'image8',
    image: '/static/images/bndbroad/bannerImages/image8.jpg'
  }
];

const Products = () => (
  <>
    <Head>
      <title>Products</title>
    </Head>
    <ImageCarousel images={bannerImages}></ImageCarousel>
    <Box
      style={{
        textAlign: 'center',
        marginTop: '40px',
        paddingBottom: '30px'
      }}>
      <Typography variant="h4">
        BONADE ENTERPRISE MANAGEMENT CONSULTING (SHENZHEN) CO., LTD,
      </Typography>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: 3,
        width: '100%'
      }}>
      <Grid
        container
        spacing={7}
        sx={{ width: '60%', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px', paddingBottom: '60px' }}>
        <Grid item xl={6}>
          <Tooltip title="Tel：+86 0755 2826 8813">
            <Typography
              color="textPrimary"
              variant="h7"
              sx={{ display: 'flex', alignItems: 'center', ml: 5 }}>
              <CallIcon sx={{ mr: 1 }} fontSize="medium" /> Tel：+86 0755 2826 8813
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xl={6}>
          <Tooltip title="Email: yolanda@bndbroad.com">
            <Typography
              color="textPrimary"
              variant="h7"
              sx={{ display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1 }} fontSize="medium" /> Email: yolanda@bndbroad.com
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xl={6}>
          <Tooltip title=" Mob：+86 136 3261 1713">
            <Typography
              color="textPrimary"
              variant="h7"
              sx={{ display: 'flex', alignItems: 'center', ml: 5 }}>
              <MobileScreenShareIcon sx={{ mr: 1 }} fontSize="medium" /> Mob：+86 136 3261 1713
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xl={6}>
          <Tooltip title=" Mob：+86 136 3261 1713">
            <Typography
              color="textPrimary"
              variant="h7"
              sx={{ display: 'flex', alignItems: 'center' }}>
              <LanguageIcon sx={{ mr: 1 }} fontSize="medium" /> Website: www.junsanfactory.com.au
            </Typography>
          </Tooltip>
        </Grid>
        <Grid item xl={12}>
          <Tooltip title=" Mob：+86 136 3261 1713">
            <Typography
              color="textPrimary"
              variant="h7"
              sx={{ display: 'flex', alignItems: 'center' }}>
              <AddLocationAltIcon sx={{ mr: 1 }} fontSize="medium" /> Address : Room 519, Chengtou
              Business Center, Qinglin Road, Huanggekeng Community, Longcheng Street, Longgang
              District, Shenzhen city,Guangdong Province, China.
            </Typography>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  </>
);

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
