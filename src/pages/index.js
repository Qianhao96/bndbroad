import { Box, Typography, Divider, Grid } from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import Carousel from 'better-react-carousel';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';
import { ProductCard } from './../components/product/product-card';
import { indexBagProducts } from './../services/data';

const bannerImages = [
  {
    name: 'image1',
    image: '/static/images/bndbroad/bannerImages/image1.jpg'
  },
  {
    name: 'image2',
    image: '/static/images/bndbroad/bannerImages/image2.jpg'
  },
  {
    name: 'image3',
    image: '/static/images/bndbroad/bannerImages/image3.jpg'
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
      <Typography variant="h4">JSMAX RECOMMENDS IT FOR YOU</Typography>
    </Box>
    <Box style={{ display: 'flex', justifyContent: 'center' }}>
      <Box style={{ marginRight: '100px' }}>
        <NextLink href="/products?tab=0">
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
        <NextLink href="/products?tab=1">
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
        <NextLink href="/products?tab=2">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/glove.png"
              alt=""
              style={{ width: '99px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Gloves</p>
          </a>
        </NextLink>
      </Box>
      <Box style={{ marginRight: '100px' }}>
        <NextLink href="/products?tab=3">
          <a style={{ textDecoration: 'none', textAlign: 'center' }}>
            <img
              src="/static/images/bndbroad/productsImages/cap.png"
              alt=""
              style={{ width: '85px' }}
            />
            <p style={{ fontSize: '16px', color: '#333' }}>Cap</p>
          </a>
        </NextLink>
      </Box>
      {/* <Box style={{ marginRight: '100px' }}>
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
      </Box> */}
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
            <Typography variant="h4">JSMAX</Typography>
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
            1.The company is located in the developed urban area of Jiangxi, with convenient
            transportation and excellent environment. At the junction of Jiangxi and Hubei, this is
            very convenient for business development.
          </Typography>
          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            2. Professional foreign trade team With more than 15 years of foreign trade foundries,
            direct trade, bringing you a better shopping experience
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
          <img width="65%" src="/static/images/bndbroad/indexImages/indexImage1.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="65%" src="/static/images/bndbroad/indexImages/indexImage2.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="69%"
            style={{ top: '125px', position: 'relative' }}
            src="/static/images/bndbroad/indexImages/indexImage3.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            style={{ top: '95px', position: 'relative' }}
            src="/static/images/bndbroad/indexImages/indexImage4.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="79%"
            style={{ top: '95px', position: 'relative' }}
            src="/static/images/bndbroad/indexImages/indexImage5.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </Box>

    <Box sx={{ backgroundColor: 'white' }}>
      {/* <Carousel cols={1} rows={1} gap={10} autoplay={3000} hideArrow={true} loop>
        <Carousel.Item>
          <img
            width="100%"
            height="75%"
            src="/static/images/bndbroad/indexImages/index-box4-bg.jpg"
          />
        </Carousel.Item>
      </Carousel> */}
      <img
        style={{ width: '60%', height: '30%', marginLeft: '15%', marginBottom: '20px' }}
        src="/static/images/bndbroad/indexImages/index-box4-bg.jpg"
      />
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
              <Typography variant="h4">JSMAX</Typography>
              <Typography variant="h5">ADVANTAGE</Typography>
            </Box>
            <Typography variant="h5">Jiujiang Junxin Trading Co., Ltd.</Typography>
            <Divider />
            <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
              Jiujiang Junxin Trading Co., Ltd. was established in 2022. It is a professional
              foreign trade company with import and export rights of goods and technology.We focus
              on the import and export business of the luggage.
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
          <Box sx={{ position: 'relative', paddingLeft: '40%' }}>
            <img src="/static/images/bndbroad/indexImages/indexImages.gif" alt="loading..." />
          </Box>
        </Grid>
      </Grid>
    </Box>

    {/* News */}
    <Box sx={{ mt: 5, mb: 10 }}></Box>
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
