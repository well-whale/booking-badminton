import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { NavLink } from "react-router-dom";
import { Autocomplete, TextField } from '@mui/material';

import "../search/Search.css"
const address = [
  "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8",
  "Quận 10", "Quận 11", "Quận 12", "Quận Phú Nhuận", "Quận Bình Thạnh",
  "Quận Gò Vấp", "Quận Tân Bình", "Quận Bình Tân", "Quận Tân Phú",
  "Thành phố Thủ Đức", "Bình Chánh", "Hóc Môn", "Củ Chi", "Cần Giờ", "Nhà Bè"
];
const Search = () => {
  return (
    <div className="booking__container">
      <form>
        <div className="form__group">
          <div className="input__group">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={address}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Location" />}
            />
          </div>
          <p>Where are you playing?</p>
        </div>
        {/* <div className="form__group">
          <div className="input__group">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Date" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <p>When do you want to play?</p>
        </div> */}
      </form>
      <button className="search" type="submit">
        <div id="s-circle"></div>
        Search
      </button>
    </div>
  );
};

export default Search;
