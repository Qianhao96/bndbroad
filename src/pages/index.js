import { Box, Typography, Divider, Grid } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import Carousel from 'better-react-carousel';
import ReactPlayer from 'react-player';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';
import { ProductCard } from './../components/product/product-card';
import { indexBagProducts } from './../services/data';

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

// const companyImages = [
//   {
//     name: 'image1',
//     path: '/static/images/bndbroad/indexImages/indexImage1.jpg'
//   },
//   {
//     name: 'image2',
//     path: '/static/images/bndbroad/indexImages/indexImage2.png'
//   },
//   {
//     name: 'image3',
//     path: '/static/images/bndbroad/indexImages/indexImage3.png'
//   },
//   {
//     name: 'image4',
//     path: '/static/images/bndbroad/indexImages/indexImage4.png'
//   },
//   {
//     name: 'image5',
//     path: '/static/images/bndbroad/indexImages/indexImage5.jpg'
//   },
//   {
//     name: 'image6',
//     path: '/static/images/bndbroad/indexImages/indexImage6.jpg'
//   },
//   {
//     name: 'image7',
//     path: '/static/images/bndbroad/indexImages/indexImage7.png'
//   }
// ];

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

    <Box sx={{ backgroundImage: 'url(/static/images/bndbroad/indexImages/index-box2-bg.jpg)' }}>
      <Grid
        container
        spacing={2}
        sx={{
          height: '20%',
          marginTop: 3,
          marginBottom: 7,
          paddingLeft: 5,
          paddingRight: 5
        }}>
        {indexBagProducts.map((product, i) => (
          <Grid key={i} item lg={3}>
            <ProductCard product={product}></ProductCard>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Grid container spacing={2}>
      <Grid item xl={6}>
        <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
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
      </Grid>
      <Grid item xl={6}>
        <Box
          sx={{
            padding: 3,
            height: '100%',
            width: '100%',
            backgroundColor: 'white',
            boxShadow:
              '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);'
          }}>
          <Typography variant="h3">We are trustworthy</Typography>
          <Divider />
          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            1. The Company is geographically located in the central area of Longgang Central City
            with convenient transportation and excellent environment, and at the junction of
            Dongguan and Huizhou, which is convenient for business development.
          </Typography>
          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            2. Professional foreign trade team: with more than 20 years of experience in foreign
            trade export, familiar with international trade laws and regulations.
          </Typography>
          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            3. The bag industry has more than 15 years.
          </Typography>
          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            4. We have a professional technical team and strong factory productivity support to help
            buyers choose satisfactory products. At the same time, we can provide professional
            product customization business.
          </Typography>
        </Box>
      </Grid>
    </Grid>
    <Box sx={{ padding: 5 }}>
      <Carousel cols={3} rows={1} gap={10} autoplay={3000} loop>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/indexImage1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/indexImage2.png" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/indexImage3.png" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/indexImage4.png" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/indexImage5.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/indexImage6.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/indexImage7.png" />
        </Carousel.Item>
      </Carousel>
    </Box>

    <Box sx={{ backgroundColor: 'white' }}>
      <Carousel cols={1} rows={1} gap={10} autoplay={3000} hideArrow={true} loop>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/index-box4-bg.jpg" />
        </Carousel.Item>
      </Carousel>
      <Grid container spacing={2}>
        <Grid item xl={6}>
          <Box
            sx={{
              padding: 3,
              height: '100%',
              width: '100%',
              backgroundColor: 'white',
              boxShadow:
                '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);'
            }}>
            <Box
              style={{
                color: 'white',
                backgroundColor: '#355e9a',
                padding: 20,
                width: '190px'
              }}>
              <Typography variant="h4">BONADE</Typography>
              <Typography variant="h5">ADVANTAGE</Typography>
            </Box>
            <Typography variant="h5">
              Bonade Enterprise Management Consulting (Shenzhen) Co., Ltd
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
              Bonade Enterprise Management Consulting (Shenzhen) Co., Ltd., was founded in 2018, it
              is a professional foreign trade company with import and export rights of goods and
              technologies. We focus on the import and export business of bags, leather, gifts,
              toys, electronic products, mobile phone accessories and household appliances.
            </Typography>
            <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
              We have a professional sales and technical teams, as well as a strong factory
              productivity support, we can help buyers to choose the satisfactory products.
            </Typography>
            <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
              At the same time, we can provide professional products customized business. Our
              products sell well all over the world, the current export to Europe and the United
              States accounted for 50%, other countries accounted for 50%.
            </Typography>
          </Box>
        </Grid>
        <Grid item xl={6}>
          <Box sx={{ position: 'relative', paddingTop: '60%' }}>
            <ReactPlayer
              style={{ position: 'absolute', top: 0, left: 0 }}
              url="/static/images/bndbroad/chiller.mp4"
              width="100%"
              height="100%"
              loop
              playing={true}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>

    <Box sx={{ mt: 5, mb: 10 }}>News</Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
