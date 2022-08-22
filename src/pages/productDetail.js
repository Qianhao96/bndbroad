import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';
import { allBags, makeupStorageBags } from 'src/services/data';

const bannerImages = [
  {
    name: 'image4',
    path: '/static/images/bndbroad/bannerImages/image5.jpg'
  }
];

const ProductDetail = () => {
  const router = useRouter();
  const { id, cat } = router.query;
  // console.log(id);
  // console.log('--------')
  // console.log(allBags);
  console.log(makeupStorageBags);
  console.log(allBags);
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
    return (
      <>
        <Head>
          <title>Products</title>
        </Head>
        <ImageCarousel images={bannerImages}></ImageCarousel>
        {product.name}
      </>
    );
  } else {
    return null;
  }
};

ProductDetail.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ProductDetail;
