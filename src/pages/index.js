import Head from 'next/head';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';

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
  </>
);

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
