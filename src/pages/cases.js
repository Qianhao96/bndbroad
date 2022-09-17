import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';
import { Typography, Box } from '@mui/material';

const bannerImages = [
  {
    name: 'image6',
    image: '/static/images/bndbroad/bannerImages/image6.jpg'
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
        paddingTop: '5px',
        paddingBottom: '30px'
      }}>
      <Typography variant="h4">Coming Soon.</Typography>
    </Box>
  </>
);

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
