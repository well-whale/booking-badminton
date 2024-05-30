import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../courts/ListCourt.css";
import { NavLink } from "react-router-dom";

import image1 from '../../../img/caytrac.png';
import image2 from '../../../img/kienthiet.jpg';
import image3 from '../../../img/trexanh.jpg';
import image4 from '../../../img/lequydon.png';
import image5 from '../../../img/thaotrang.png';
import image6 from '../../../img/thuysan.png';
const ListCourt = () => {
  const courts = [
    {
      imgSrc: image3,
      name: "Sân Cầu lông Tre Xanh",
      address: " Bình Thạnh, Thành phố Hồ Chí Minh"
    },
    {
      imgSrc: image2,
      name: "Sân Cầu Lông Kiến Thiết",
      address: " Quận 9, Thành phố Hồ Chí Minh"
    },
    {
      imgSrc: image6,
      name: "Sân cầu lông Thủy Sản",
      address: " Bình Tân, Thành phố Hồ Chí Minh"
    },
    {
      imgSrc: image4,
      name: "Sân cầu lông Lê Quý Đôn",
      address: "Quận 11, TPHCM"
    },
    {
      imgSrc: image5,
      name: "Sân Cầu Lông Thảo Trang",
      address: "Bình Tân, Thành phố Hồ Chí Minh"
    },
    {
      imgSrc: image1,
      name: "Sân cầu lông Cây trắc",
      address: "Củ Chi, Thành phố Hồ Chí Minh"
    }

  ];

  return (
    <section className="product-detail-list-container">
      <h2 className="section__header">Các Sân Khác  </h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        autoPlay
        infiniteLoop
        centerMode
        centerSlidePercentage={33.33}
        dynamicHeight={false}
      >
        {courts.map((court, index) => (
          <div key={index} className="carousel-card">
            <img src={court.imgSrc} className="carousel-card-img" alt={court.title} />
            <div className="carousel-card-body">
              <h5 className="carousel-card-title">{court.name}</h5>
              <p className="carousel-card-text">{court.address}</p>
              <button className="btn" onClick={() => window.scrollTo(0, 100)}><NavLink key={index} to='/view' className="popular__card" />Xem Sân
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default ListCourt;
