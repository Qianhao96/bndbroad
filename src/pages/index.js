import { Box, Typography, Container, Divider } from '@mui/material';
import Head from 'next/head';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';
import NextLink from 'next/link';

const bannerImages = [
  {
    name: 'image1',
    path: '/static/images/bndbroad/bannerImages/image1.jpg'
  },
  {
    name: 'image2',
    path: '/static/images/bndbroad/bannerImages/image2.jpg'
  },
  {
    name: 'image3',
    path: '/static/images/bndbroad/bannerImages/image3.jpg'
  }
];

const Dashboard = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <ImageCarousel images={bannerImages}></ImageCarousel>
    <Box
      style={{
        textAlign: 'center',
        paddingTop: '5px',
        paddingBottom: '30px'
      }}>
      <Typography variant="h5">WHAT ARE YOU LOOKING FOR?</Typography>
      <Typography variant="h4">Bonade RECOMMENDS IT FOR YOU</Typography>
    </Box>
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Box style={{ marginRight: '100px' }}>
        <NextLink href="/products">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/index-box1-img1.png"
              alt=""
              style={{ width: '80px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Bags</p>
          </a>
        </NextLink>
      </Box>
      <Box style={{ marginRight: '100px' }}>
        <NextLink href="/products">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/index-box1-img2.png"
              alt=""
              style={{ width: '100px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Leather</p>
          </a>
        </NextLink>
      </Box>
      <Box style={{ marginRight: '100px' }}>
        <NextLink href="/products">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/index-box1-img3.png"
              alt=""
              style={{ width: '73px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Gift</p>
          </a>
        </NextLink>
      </Box>
      <Box style={{ marginRight: '100px' }}>
        <NextLink href="/products">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/index-box1-img4.png"
              alt=""
              style={{ width: '70px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Toy</p>
          </a>
        </NextLink>
      </Box>
      <Box style={{ marginRight: '100px' }}>
        <NextLink href="/products">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/index-box1-img5.png"
              alt=""
              style={{ width: '60px', marginLeft: '50px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Household Appliances</p>
          </a>
        </NextLink>
      </Box>
      <Box style={{ marginRight: '100px' }}>
        <NextLink href="/products">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/index-box1-img6.png"
              alt=""
              style={{ width: '89px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Electronics</p>
          </a>
        </NextLink>
      </Box>
      <Box style={{ width: '100px', marginRight: '100px' }}>
        <NextLink href="/products">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/index-box1-img7.png"
              alt=""
              style={{ width: '53px', marginLeft: '20px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Mobile Accessories</p>
          </a>
        </NextLink>
      </Box>
    </Box>
    {/* Products Bag Links */}
    <Box sx={{ mt: 5, mb: 10 }}>Test</Box>
    <Box sx={{ display: 'flex', mb: 3, height: '460px' }}>
      <Box sx={{ width: '50%', position: 'relative' }}>
        <Box
          style={{
            position: 'absolute',
            top: '-40px',
            left: '30px',
            color: 'white',
            backgroundColor: '#355e9a',
            padding: 20
          }}>
          <Typography variant="h4">BONADE</Typography>
          <Typography variant="h5">ADVANTAGE</Typography>
        </Box>
        <img
          src="/static/images/bndbroad/productsImages/index-box3-left-img1.jpg"
          alt=""
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
      <Box
        sx={{
          padding: 3,
          width: '50%',
          backgroundColor: 'white',
          boxShadow:
            '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);'
        }}>
        <Typography variant="h3">We are trustworthy</Typography>
        <Divider />
        <Typography variant="body1" sx={{ pt: 3, pb: 3 }}>
          1. The Company is geographically located in the central area of Longgang Central City with
          convenient transportation and excellent environment, and at the junction of Dongguan and
          Huizhou, which is convenient for business development.
        </Typography>
        <Typography variant="body1" sx={{ pt: 3, pb: 3 }}>
          2. Professional foreign trade team: with more than 20 years of experience in foreign trade
          export, familiar with international trade laws and regulations.
        </Typography>
        <Typography variant="body1" sx={{ pt: 3, pb: 3 }}>
          3. The bag industry has more than 15 years.
        </Typography>
        <Typography variant="body1" sx={{ pt: 3, pb: 3 }}>
          4. We have a professional technical team and strong factory productivity support to help
          buyers choose satisfactory products. At the same time, we can provide professional product
          customization business.
        </Typography>
      </Box>
    </Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
