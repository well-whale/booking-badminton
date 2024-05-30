import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";
import Rating from '@mui/material/Rating';
import "react-image-gallery/styles/css/image-gallery.css";
import "../courts/CourtDetail.css";
import { CiWifiOn } from "react-icons/ci";
import { FaMotorcycle } from "react-icons/fa";
import { GiWaterBottle } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
const CourtDetail = () => {
  const [isFavorited, setIsFavorited] = useState(false); // Biến trạng thái để theo dõi trạng thái yêu thích

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited); // Đảo ngược trạng thái yêu thích
  };

  const amenities = [
    { name: 'Wifi', icon: <CiWifiOn /> },
    { name: 'Bãi đỗ xe máy', icon: <FaMotorcycle /> },
    { name: 'Nước uống', icon: <GiWaterBottle /> },
    { name: 'Căng tin', icon: <IoRestaurantOutline /> },
    { name: 'Đồ ăn', icon: <IoFastFoodOutline /> }
  ];

  const productDetailItem = {
    images: [
      {
        original: "https://sonsanepoxy.vn/wp-content/uploads/2023/07/Thi-cong-san-cau-long.jpg",
        thumbnail: "https://sonsanepoxy.vn/wp-content/uploads/2023/07/Thi-cong-san-cau-long.jpg"
      },
      {
        original: "https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg",
        thumbnail: "https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg"
      },
      {
        original: "https://storage.googleapis.com/leep_app_website/2021/03/kich-thuoc-san-cau-long-2.jpg",
        thumbnail: "https://storage.googleapis.com/leep_app_website/2021/03/kich-thuoc-san-cau-long-2.jpg"
      },
      {
        original: "https://img.meta.com.vn/Data/image/2019/05/15/kich-thuoc-san-cau-long-tieu-chuan.png",
        thumbnail: "https://img.meta.com.vn/Data/image/2019/05/15/kich-thuoc-san-cau-long-tieu-chuan.png"
      },
    ],
    title: "Sân cầu lông Tre Xanh",
    clock: "5H - 23H",
    numberofcourt: "6 sân",
    address: "50 Xô Viết Nghệ Tĩnh, Phường 19, Bình Thạnh, Thành phố Hồ Chí Minh",
    phoneNumber: "03456789",
    socialMedia: "Facebook",
    price: "Từ 50.000 vnđ/h/sân.",
    star:5
  };  

  return (
    <section className="product-detail-container">
      <div className="image-gallery-container">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={productDetailItem.images}
        />
      </div>

      <div className='product'>
        <div className="amenities-container">
          <h2 className="product-title">{productDetailItem.title}<div className="rating-container">
            <div style={{ display: "flex", alignItems: "center" }}>
            <Rating name="read-only" value={productDetailItem.star} readOnly />
              <div
                style={{ fontSize: "20px", color: isFavorited ? "red" : "grey", cursor: "pointer" }}
                onClick={toggleFavorite}
              >
                <FaHeart />
              </div>
            </div>
          </div></h2>
          <h3 className="product-category">
            <LuMapPin /> <span>{productDetailItem.address}</span>
          </h3>
          <div className="product-reviews">

          </div>
          <p className="product-brand">
            Giờ Hoạt Động: <span>{productDetailItem.clock}</span>
          </p>
          <p className="product-brand">
            Quy mô: <span>{productDetailItem.numberofcourt}</span>
          </p>

          <p className="product-sku">
            Điện Thoại: <span>{productDetailItem.phoneNumber}</span>
          </p>
          <p className="product-price">
            Giá: <span>{productDetailItem.price}</span>
          </p>
        </div>

        <div className="amenities-container">
          <h5>Dịch vụ tiện ích</h5>
          <ul className="amenities-list">
            {amenities.map((amenity, index) => (
              <li key={index} className="amenity-item">
                <div className="amenity-icon">{amenity.icon}</div>
                <div>{amenity.name}</div>
              </li>
            ))}
          </ul>
        </div>

        <button className="btn-book">
          <NavLink className="dropdown-item" to="/booking"onClick={() => window.scrollTo(0, 100)}>Đặt sân</NavLink>
        </button>
      </div>
    </section>
  );
};

export default CourtDetail;
