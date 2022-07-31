import PropTypes from 'prop-types';
import NextLink from 'next/link';

import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export const ProductCard = ({ product }) => (
  <NextLink href="/products">
    <Card style={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="300"
        width="250"
        image={product.path}
        alt={product.name}
        sx={{ width: '80%', marginLeft: '11%' }}
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h6">{product.name}</Typography>
      </CardContent>
    </Card>
  </NextLink>
);

ProductCard.propTypes = {
  product: PropTypes.shape({ path: PropTypes.string, name: PropTypes.string })
};
