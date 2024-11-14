import React from 'react';
import { formater } from '../../../utils/fomater';
import { BiShoppingBag } from "react-icons/bi";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.scss";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import { Link } from 'react-router-dom';
import { HiOutlineEye } from "react-icons/hi2";

import banner_sale1Img from "../../../assets/users/images/sale/banner_sale1.png"
import banner_sale2Img from "../../../assets/users/images/sale/banner_sale2.png"
// Đường dẫn hình ảnh của bạn
import Cal1Img from '../../../assets/users/images/categories/cart_1.png';
import Cal2Img from '../../../assets/users/images/categories/cart_2.png';
import Cal3Img from '../../../assets/users/images/categories/cart_3.png';
import Cal4Img from '../../../assets/users/images/categories/cart_4.png';
import Cal5Img from '../../../assets/users/images/categories/cart_5.png';
import Cal6Img from '../../../assets/users/images/categories/cart_6.png';
import Cal7Img from '../../../assets/users/images/categories/cart_7.png';
// Đường dẫn hình ảnh
import featured1 from '../../../assets/users/images/featured/featured1.png';
import featured2 from '../../../assets/users/images/featured/featured2.png';
import featured3 from '../../../assets/users/images/featured/featured3.png';
import featured4 from '../../../assets/users/images/featured/featured4.png';
import featured5 from '../../../assets/users/images/featured/featured5.png';
import featured6 from '../../../assets/users/images/featured/featured6.png';
import featured7 from '../../../assets/users/images/featured/featured7.png';

const MyComponent = () => {
  // Cấu hình cho Carousel
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const sliderItem = [
    { bgImg: Cal1Img, name: "Kinh doanh" },
    { bgImg: Cal2Img, name: "Kinh doanh" },
    { bgImg: Cal3Img, name: "Kinh doanh" },
    { bgImg: Cal4Img, name: "Kinh doanh" },
    { bgImg: Cal5Img, name: "Kinh doanh" },
    { bgImg: Cal6Img, name: "Kinh doanh" },
    { bgImg: Cal7Img, name: "Kinh doanh" },
  ];

  const featproducts = {
    all: {
      title: "Toàn bộ",
      products: [
        { img: featured1, name: "Thịt bò", price: 20000 },
        { img: featured2, name: "Thịt gà", price: 15000 },
        { img: featured3, name: "Thịt gà", price: 15000 },
        { img: featured7, name: "Thịt gà", price: 15000 },
        { img: featured5, name: "Thịt gà", price: 15000 },
      ]
    },
    freshMeat: {
      title: "Thịt tươi",
      products: [
        { img: featured3, name: "Thịt lợn", price: 18000 },
        { img: featured4, name: "Thịt cừu", price: 25000 },
        { img: featured6, name: "Thịt cừu", price: 25000 },
        { img: featured1, name: "Thịt cừu", price: 25000 },
        { img: featured2, name: "Thịt cừu", price: 25000 }
      ]
    },
    fruits: {
      title: "Trái cây",
      products: [
        { img: featured5, name: "Thịt lợn", price: 18000 },
        { img: featured4, name: "Thịt cừu", price: 25000 },
        { img: featured7, name: "Thịt cừu", price: 25000 },
        { img: featured3, name: "Thịt cừu", price: 25000 },
        { img: featured2, name: "Thịt cừu", price: 25000 }
      ]
    },
    fruitss: {
      title: "Bánh mỳ",
      products: [
        { img: featured5, name: "Thịt lợn", price: 18000 },
        { img: featured3, name: "Thịt cừu", price: 25000 },
        { img: featured2, name: "Thịt cừu", price: 25000 },
        { img: featured3, name: "Thịt cừu", price: 25000 },
        { img: featured1, name: "Thịt cừu", price: 25000 }
      ]
    },
  };

  const renderFeaturedProduct = (data) => {
    const tablist = [];
    const tabPanels = [];

    Object.keys(data).forEach((key, index) => {
      tablist.push(<Tab key={index}>{data[key].title}</Tab>);

      const tabPanelItems = [];
      data[key].products.forEach((item, j) => {
        tabPanelItems.push(
          <div className="col-lg-3" key={j}>
            <div className="Featured__item">
              <div className="Featured__item__pic" style={{ backgroundImage: `url(${item.img})` }}>
                <ul className="Featured__item__pic__hover">
                  <li><HiOutlineEye /></li>
                  <li><BiShoppingBag /></li>
                </ul>
              </div>
              <div className="Featured__item__text">
                <h6>
                  <Link to="#">{item.name}</Link>
                </h6>
                <h5>{formater(item.price)}</h5>
              </div>
            </div>
          </div>
        );
      });
      tabPanels.push(
        <TabPanel key={index}>
          <div className="row">{tabPanelItems}</div>
        </TabPanel>
      );
    });

    return (
      <Tabs>
        <TabList>{tablist}</TabList>
        {tabPanels}
      </Tabs>
    );
  };

  return (
    <>
      {/* Categories Begin */}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItem.map((item, key) => (
            <div
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.bgImg})` }}
              key={key}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Categories End */}

      {/* Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProduct(featproducts)}
        </div>
      </div>
      {/* Featured End */}
      {/*Banner Begin*/}
      <div className='container'>
        <div className='banner'>
          <div className='container__pic'>
            <img src={banner_sale1Img} alt='banner' />
            
          </div>
          <div className='container__pic'>
            <img src={banner_sale2Img} alt='banner' />
            
          </div>
        </div>
      </div>
      {/*Banner End*/}
    </>
  );
};

export default MyComponent;
