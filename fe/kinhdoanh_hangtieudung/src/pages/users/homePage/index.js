import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Đường dẫn hình ảnh của bạn
import CaltImg from '../../../assets/users/images/categories/cart_1.png';

const MyComponent = () => {
  // Cấu hình cho Carousel
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <div className="container container__categories_slider">
      <Carousel responsive={responsive} className="categories_slider">
        <div 
          className="categories_slider_item"
          style={{ backgroundImage: `url(${CaltImg})` }}
        >
          {/* Nội dung của item, nếu có */}
        </div>
      </Carousel>
    </div>
  );
};

export default MyComponent;
