import Head from 'next/head';
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
    To Be Complete
  </>
);

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
