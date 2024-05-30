import React from 'react';
import "../home/Home.css";
import { NavLink } from "react-router-dom";
import Rating from '@mui/material/Rating';
import image1 from '../../../img/caytrac.png';
import image2 from '../../../img/kienthiet.jpg';
import image3 from '../../../img/trexanh.jpg';
import image4 from '../../../img/lequydon.png';
import image5 from '../../../img/thaotrang.png';
import image6 from '../../../img/thuysan.png';
import { GiTennisCourt } from "react-icons/gi";
import {Autocomplete,TextField} from '@mui/material';
import Search from '../search/Search';


const address = [
  "Quận 1",
  "Quận 3",
  "Quận 4",
  "Quận 5",
  "Quận 6",
  "Quận 7",
  "Quận 8",
  "Quận 10",
  "Quận 11",
  "Quận 12",
  "Quận Phú Nhuận",
  "Quận Bình Thạnh",
  "Quận Gò Vấp",
  "Quận Tân Bình",
  "Quận Bình Tân",
  "Quận Tân Phú",
  "Thành phố Thủ Đức",
  "Bình Chánh",
  "Hóc Môn",
  "Củ Chi",
  "Cần Giờ",
  "Nhà Bè"
];

const HomePage = () => {
  const Courts = [
    {
      image: image3,
      name: "Sân Cầu lông Tre Xanh",
      address: "Bình Thạnh, Thành phố Hồ Chí Minh",
      subcourt: "4 sân",
      star: 4
    },
    {
      image: image2,
      name: "Sân Cầu Lông Kiến Thiết",
      address: " Quận 9, Thành phố Hồ Chí Minh",
      subcourt: "3 sân",
      star: 5
    },
    {
      image: image6,
      name: "Sân cầu lông Thủy Sản",
      address: "Bình Tân, Thành phố Hồ Chí Minh",
      subcourt: "3 sân",
      star: 5
    },
    {
      image: image4,
      name: "Sân cầu lông Lê Quý Đôn",
      address: " quận 11, TPHCM",
      subcourt: "4 sân",
      star: 5
    },
    {
      image: image5,
      name: "Sân Cầu Lông Thảo Trang",
      address: "Bình Tân, Thành phố Hồ Chí Minh",
      subcourt: "3 sân",
      star: 4
    },
    {
      image: image1,
      name: "Sân cầu lông Cây trắc",
      address: " Củ Chi, Thành phố Hồ Chí Minh",
      subcourt: "4 sân",
      star: 5
    }
  ];

  const [value, setValue] = React.useState(2);
  return (
    <div className="section__container header__container">
      <div className="header__image__container">
        <div className="header__content">
          <h1>Book Your Badminton Court</h1>
          <p>Play with Ease!</p>
        </div>
        <div className="booking__container">
          <form>
            <div className="form__group">
              <div className="input__group">
                <select defaultValue="">
                  <option value="" disabled>Select location</option>
                  {address.map((location, index) => (
                    <option key={index} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              <p>Where are you playing?</p>
            </div>
            {/* <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={address}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Location" />}
                /> */}
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
        <Search/>
      </div>
      <section className="section__container popular__container">
        <h2 className="section__header">Popular Badminton Courts</h2>
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
                      <Rating name="read-only" value={court.star} readOnly />
                    </h5>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
      <section className="section__container">
        <div className="reward__container">
          <p>20+ badminton courts</p>
          <h4>"Join BadmintonHub and unlock unbeatable discounts on your court bookings!"</h4>
          <button className="reward__btn">Book Now</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
