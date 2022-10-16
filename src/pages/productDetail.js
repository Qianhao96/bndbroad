import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';
import { allBags } from 'src/services/data';
import { Grid, Box, Typography, Divider, Button, ImageList, ImageListItem } from '@mui/material';

const bannerImages = [
  {
    name: 'image4',
    image: '/static/images/bndbroad/bannerImages/image5.jpg'
  }
];

const ProductDetail = () => {
  const router = useRouter();
  const { id, cat } = router.query;

  // console.log(allBags);

  let product;

  switch (cat) {
    case 'Bags':
      product = allBags.find((b) => b.id.toString() === id);
      break;
    case 'Leather':
      // code block
      break;
    case 'Gift':
      // code block
      break;
    case 'Toy':
      // code block
      break;
    case 'Household Appliances':
      // code block
      break;
    case 'Electronics':
      // code block
      break;
    case 'Mobile Accessories':
      // code block
      break;
    default:
      break;
  }

  if (product) {
    let productImages = [
      {
        name: product.name,
        image: product.image
      },
      {
        name: product.name,
        image: product.image1
      },
      {
        name: product.name,
        image: product.image2
      }
    ];
    return (
      <>
        <Head>
          <title>Products</title>
        </Head>
        <ImageCarousel images={bannerImages}></ImageCarousel>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 3,
            width: '100%',
            backgroundColor: '#f5f5f5'
          }}>
          <Grid container spacing={7} sx={{ width: '90%' }}>
            <Grid item xl={5}>
              <div style={{ width: '600px' }}>
                <ImageCarousel images={productImages}></ImageCarousel>
              </div>
            </Grid>
            <Grid item xl={7}>
              <Typography variant="h3"> {product.name}</Typography>
              <Divider />
              {Object.keys(product).map((key, index) => {
                if (!key.includes('image')) {
                  return (
                    <div key={index}>
                      <Typography variant="h6" display="inline">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </Typography>
                      :{' '}
                      <Typography display="inline" variant="h7">
                        {product[key]}
                      </Typography>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
              <Divider />
              <Grid container spacing={7} sx={{ width: '100%', marginTop: 1 }}>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="h8">Service hotline: +86 0755 2826 8813</Typography>
                </Grid>
                <Grid item lg={6}>
                  <Button variant="contained">ONLINE CONSULTATION</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 3,
            width: '100%',
            backgroundColor: '#f5f5f5'
          }}>
          <Box sx={{ width: '60%' }}>
            <Typography variant="h4">PRODUCT DETAILS</Typography>
            <Divider />
            <Box sx={{ marginTop: 1, marginBottom: 1 }}>
              <ImageList sx={{ width: '100%', height: '100%' }} cols={1}>
                <ImageListItem>
                  <img src={`${product.imaged1}`} alt={product.name} />
                </ImageListItem>
              </ImageList>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 3,
            width: '100%',
            backgroundColor: '#f5f5f5'
          }}>
          <Box sx={{ width: '60%' }}>
            <Typography variant="h4">OUR ADVANTAGES AND SERVICES</Typography>
            <Divider />
            <Box sx={{ marginTop: 1, marginBottom: 1 }}>
              <Grid container spacing={7} sx={{ width: '100%', marginTop: 1 }}>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImageList sx={{ width: '100%', height: '100%' }} cols={1}>
                    <ImageListItem>
                      <img
                        src={`/static/images/bndbroad/productsImages/pDetailFooterImage.jpg`}
                        alt={product.name}
                      />
                    </ImageListItem>
                  </ImageList>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6">
                      MORE THAN 10 YEARS OF PRODUCT CONTROL EXPERIENCE
                    </Typography>
                    <Divider />
                    <Typography variant="h8">
                      Management personnel (including on-site cadres) have more than 10 years
                      experience in product production management. There are several full-process
                      processing plants in China, which strictly control every processing detail.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6">PROFESSIONAL FOREIGN TRADE TEAM</Typography>
                    <Divider />
                    <Typography variant="h8">
                      More than 20 years experience in foreign trade export, familiar with
                      international trade laws and regulations.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImageList sx={{ width: '100%', height: '100%' }} cols={1}>
                    <ImageListItem>
                      <img
                        src={`/static/images/bndbroad/productsImages/pDetailFooterImage1.jpg`}
                        alt={product.name}
                      />
                    </ImageListItem>
                  </ImageList>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImageList sx={{ width: '100%', height: '100%' }} cols={1}>
                    <ImageListItem>
                      <img
                        src={`/static/images/bndbroad/productsImages/pDetailFooterImage2.jpg`}
                        alt={product.name}
                      />
                    </ImageListItem>
                  </ImageList>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6">
                      ADVANCED PRODUCTION EQUIPMENT +TEST INSTRUMENTS
                    </Typography>
                    <Divider />
                    <Typography variant="h8">
                      Production equipment: the introduction of intelligent sewing machine, cutting
                      bed, ribbon cutting machine, peeling machine and so onTesting equipment:
                      tensile strength tester, vibration tester, salt water spray tester, cloth
                      tester, etc.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6">1V1 ORDER TRACKING SERVICE</Typography>
                    <Divider />
                    <Typography variant="h8">
                      Accurately understand customer processing needs before sales, determine
                      processing plans and specify delivery time.Respond quickly to customer
                      questions within 7*8 hours after sale, and provide lifetime warranty service
                      free of working hours.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg={6} sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImageList sx={{ width: '100%', height: '100%' }} cols={1}>
                    <ImageListItem>
                      <img
                        src={`/static/images/bndbroad/productsImages/pDetailFooterImage3.jpg`}
                        alt={product.name}
                      />
                    </ImageListItem>
                  </ImageList>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </>
    );
  } else {
    return null;
  }
};

ProductDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ProductDetail;
