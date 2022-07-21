import React from 'react';
import Carousel from 'react-material-ui-carousel';
import PropTypes from 'prop-types';

export const ImageCarousel = (props) => {
  let { images, navButtonsAlwaysVisible = true, indicators = true } = props;
  if (images.length === 1) {
    navButtonsAlwaysVisible = false;
    indicators = false;
  }
  return (
    <>
      <Carousel
        navButtonsAlwaysVisible={navButtonsAlwaysVisible}
        animation="slide"
        duration="700"
        indicators={indicators}>
        {images.map((image, i) => (
          <div key={i} className="fill">
            <img src={image.path} alt={image.name} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

ImageCarousel.propTypes = {
  item: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string
    })
  ),
  navButtonsAlwaysVisible: PropTypes.bool,
  indicators: PropTypes.bool
};
