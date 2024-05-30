import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./TimeSlot.css"; // Import the CSS file

// Function to generate time slots
const generateTimeSlots = (startTime, endTime, interval) => {
  const timeSlots = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    const hours = String(Math.floor(currentTime / 60)).padStart(2, "0");
    const minutes = String(currentTime % 60).padStart(2, "0");
    const timeString = `${hours}:${minutes}`;
    timeSlots.push({ timeString, id: currentTime });
    currentTime += interval;
  }

  return timeSlots;
};

// Court details
const courtDetail = {
  image: "https://sonsanepoxy.vn/wp-content/uploads/2023/07/lap-dat-he-thong-den-chieu-san-cau-long.jpg",
  title: "Sân cầu lông Tre Xanh",
  clockStart: 5, // Start time in hours
  clockEnd: 23, // End time in hours
  numberofcourt: 4,
  address: "50 Xô Viết Nghệ Tĩnh, Phường 19, Bình Thạnh, Thành phố Hồ Chí Minh",
  phoneNumber: "03456789",
  price: 50000, // Price per 30 minutes
};

// Function to generate area names based on the number of courts
const generateAreas = (numCourts) => {
  return Array.from({ length: numCourts }, (_, i) => `Sân ${i + 1}`);
};

const TimeSlots = () => {
  const [selectedArea, setSelectedArea] = useState("Sân 1");
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [firstSelected, setFirstSelected] = useState(null);
  const [timeSlotsAM, setTimeSlotsAM] = useState([]);
  const [timeSlotsPM, setTimeSlotsPM] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const startTime = courtDetail.clockStart * 60; // 5:00 AM in minutes
    const endTime = courtDetail.clockEnd * 60; // 11:00 PM in minutes
    const interval = 30; // 30 minutes interval
    setTimeSlotsAM(generateTimeSlots(startTime, 12 * 60, interval));
    setTimeSlotsPM(generateTimeSlots(12.5 * 60, endTime, interval));
  }, []);

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const toggleTimeSlot = (id) => {
    if (firstSelected === null) {
      setFirstSelected(id);
      setSelectedTimes([id]);
      setStartTime(id);
      setEndTime(null);
    } else {
      const newSelectedTimes = [];
      const start = Math.min(firstSelected, id);
      const end = Math.max(firstSelected, id);
      for (let i = start; i <= end; i += 30) {
        newSelectedTimes.push(i);
      }
      setSelectedTimes(newSelectedTimes);
      setFirstSelected(null); // Reset firstSelected after the range is selected
      setStartTime(start);
      setEndTime(end);
    }
  };

  const areas = generateAreas(courtDetail.numberofcourt);

  const selectedTimeRange = startTime !== null && endTime !== null
    ? `${String(Math.floor(startTime / 60)).padStart(2, "0 ")}:${String(startTime % 60).padStart(2, "0")} - ${String(Math.floor(endTime / 60)).padStart(2, "0")}:${String(endTime % 60).padStart(2, "0")}`
    : '';

  const totalPrice = selectedTimes.length > 0 ? ((endTime - startTime) / 60 * courtDetail.price * 2) : 0;

  return (
    <div className="container">
      <div className="left-section">
        <h3>Ca Sáng </h3>
        <div id="time-slots" className="times-container">
          {timeSlotsAM.map(({ timeString, id }) => (
            <div
              key={id}
              className={`time ${selectedTimes.includes(id) ? "selected" : ""}`}
              onClick={() => toggleTimeSlot(id)}
            >
              {timeString}
            </div>
          ))}
        </div>
        <h3>Ca Chiều </h3>
        <div id="time-slots" className="times-container">
          {timeSlotsPM.map(({ timeString, id }) => (
            <div
              key={id}
              className={`time ${selectedTimes.includes(id) ? "selected" : ""}`}
              onClick={() => toggleTimeSlot(id)}
            >
              {timeString}
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="area-info">
          <img src={courtDetail.image} alt={courtDetail.title} />
          <h2>{courtDetail.title}</h2>
          <h5>{courtDetail.address}</h5>
          <label>
            {selectedTimeRange}
          </label>
          {selectedTimeRange && (
            <div>
              <h5>Thành tiền: {totalPrice.toLocaleString()} VND</h5>
            </div>
          )}
        </div>
        <div className="area-selection">
          <label>Chọn Sân:</label>
          <select onChange={handleAreaChange} value={selectedArea}>
            {areas.map(area => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        <button className="payment-button">
          <NavLink className="dropdown-item" to="/payment">
            Thanh toán
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default TimeSlots;
