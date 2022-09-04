import Head from 'next/head';
import { Box, Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import * as React from 'react';

import { DashboardLayout } from '../components/dashboard-layout';
import { ImageCarousel } from './../components/dashboard/image-carousel';
import { productCategories } from 'src/services/data';
import { allBags } from 'src/services/data';
import { ProductCard } from './../components/product/product-card';

const bannerImages = [
  {
    name: 'image4',
    image: '/static/images/bndbroad/bannerImages/image5.jpg'
  }
];

const Products = () => {
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <ImageCarousel images={bannerImages}></ImageCarousel>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Product Categories" centered>
              {productCategories.map((c, i) => (
                <Tab key={i} label={c} value={i.toString()} />
              ))}
            </TabList>
          </Box>
          {productCategories.map((c, i) => (
            <TabPanel key={i} value={i.toString()}>
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
                {allBags.map((p, ii) => (
                  <Grid key={ii} item lg={3}>
                    {p.category === c ? <ProductCard product={p}></ProductCard> : null}
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </>
  );
};

Products.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Products;
