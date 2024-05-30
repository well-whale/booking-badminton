import React from 'react';
import { NavLink } from "react-router-dom";
import Rater from "react-rater";
import { GiTennisCourt } from "react-icons/gi";
import image1 from '../img/caytrac.png';
import image2 from '../img/kienthiet.jpg';
import image3 from '../img/trexanh.jpg';
import image4 from '../img/lequydon.png';
import image5 from '../img/thaotrang.png';
import image6 from '../img/thuysan.png';
import "../Court/SearchList.css"

const address = [
    "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8",
    "Quận 10", "Quận 11", "Quận 12", "Quận Phú Nhuận", "Quận Bình Thạnh",
    "Quận Gò Vấp", "Quận Tân Bình", "Quận Bình Tân", "Quận Tân Phú",
    "Thành phố Thủ Đức", "Bình Chánh", "Hóc Môn", "Củ Chi", "Cần Giờ", "Nhà Bè"
  ];

  const Courts = [
    {
      image: image3,
      name: "Sân Cầu lông Tre Xanh",
      address: "Bình Thạnh, Thành phố Hồ Chí Minh",
      subcourt: "4 sân",
      star: "4"
    },
    {
      image: image2,
      name: "Sân Cầu Lông Kiến Thiết",
      address: " Quận 9, Thành phố Hồ Chí Minh",
      subcourt: "3 sân",
      star: "5"
    },
    {
      image: image6,
      name: "Sân cầu lông Thủy Sản",
      address: "Bình Tân, Thành phố Hồ Chí Minh",
      subcourt: "3 sân",
      star: "5"
    },
    {
      image: image4,
      name: "Sân cầu lông Lê Quý Đôn",
      address: " quận 11, TPHCM",
      subcourt: "4 sân",
      star: "5"
    },
    {
      image: image5,
      name: "Sân Cầu Lông Thảo Trang",
      address: "Bình Tân, Thành phố Hồ Chí Minh",
      subcourt: "3 sân",
      star: "4"
    },
    {
      image: image1,
      name: "Sân cầu lông Cây trắc",
      address: " Củ Chi, Thành phố Hồ Chí Minh",
      subcourt: "4 sân",
      star: "5"
    }
  ];
const SearchList = () => {
  return (
    <div>
    <div className="booking__container1">
          <form>
            <div className="form__group">
              <div className="input__group">
                <select defaultValue="">
                  <option value="" disabled>Select location</option>
                  {address.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
                <label>Location</label>
              </div>
              <p>Where are you playing?</p>
            </div>
            <div className="form__group">
              <div className="input__group">
                <input type="date" />
                <label>Check In</label>
              </div>
              <p>Add date</p>
            </div>
          </form>
          <button className="search" type="submit">
            <div id="s-circle"></div>
            Search
          </button>
        </div>
      <div className="section__container">
      
        <section className="popular__container">
          <h2 className="section__header"></h2>
          <div className="popular__grid" >
          {Courts.map((court, index) => (
            <NavLink key={index} to={`/view/`} className="popular__card" onClick={() => window.scrollTo(0, 100)}>
              <img src={court.image} alt={court.name} />
              <div className="popular__content">
                <div className="popular__card__header">
                  <h4 style={{ display: 'flex' }}>{court.name}
                  </h4>
                </div>
                <p>{court.address}</p>
                <div className="subcourt-container">
                  <div className="subcourt">
                    <p className="subcourt-icon"><GiTennisCourt /></p>
                    <p>{court.subcourt}</p>
                  </div>
                  <div className="rater-container">
                    <h5>
                      <Rater
                        style={{ fontSize: "18px", color: "yellow", marginRight: "15px", weight: '50%' }}
                        total={5}
                        interactive={false}
                        rating={court.star}
                      />
                    </h5>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        </section>
      </div>
    </div>
  );
};

export default SearchList;
