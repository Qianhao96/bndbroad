import Head from 'next/head';
import { Box, Typography, Grid, Divider } from '@mui/material';
import Carousel from 'better-react-carousel';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';

const bannerImages = [
  {
    name: 'image4',
    image: '/static/images/bndbroad/bannerImages/image4.jpg'
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
        marginTop: '30px',
        paddingBottom: '30px'
      }}>
      <Typography variant="h4">ABOUT Jsmax</Typography>
    </Box>
    <Grid container spacing={2}>
      <Grid item xl={6}>
        <Box
          sx={{
            color: 'white',
            padding: 3,
            height: '100%',
            width: '100%',
            backgroundColor: '#1e558a',
            boxShadow:
              '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);'
          }}>
          <Typography variant="h3">Jiujiang Junxin Trading Co., Ltd.</Typography>

          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            Jiujiang Junxin Trading Co., Ltd. was established in 2022. It is a professional foreign
            trade company with import and export rights of goods and technology.We focus on the
            import and export business of the luggage.
          </Typography>
          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            We have a professional sales and technical teams, as well as a strong factory
            productivity support, we can help buyers to choose the satisfactory products.
          </Typography>
          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            At the same time, we can provide professional products customized business. Our products
            sell well all over the world, the current export to Europe and the United States
            accounted for 50%, other countries accounted for 50%.
          </Typography>
          <Typography variant="body1" sx={{ pt: 1, pb: 1 }}>
            Our business philosophy: integrity, innovation, professional and efficient, quality
            assurance!
          </Typography>
        </Box>
      </Grid>
      <Grid item xl={6}>
        <Box sx={{ position: 'relative', paddingLeft: '40%' }}>
          <img src="/static/images/bndbroad/indexImages/indexImages.gif" alt="loading..." />
        </Box>
      </Grid>
    </Grid>
    <Box
      style={{
        textAlign: 'center',
        marginTop: '30px',
        paddingBottom: '30px'
      }}>
      <Typography variant="h4">JSMAX ADVANTAGE</Typography>
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
          <img width="69%" src="/static/images/bndbroad/indexImages/indexImage3.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="/static/images/bndbroad/indexImages/indexImage4.jpg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="79%" src="/static/images/bndbroad/indexImages/indexImage5.jpg" />
        </Carousel.Item>
      </Carousel>
    </Box>
  </>
);

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
