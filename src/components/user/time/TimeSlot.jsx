
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './TimeSlot.css';
import { getCourtByIdCourt } from '../../../services/UserServices';

const generateTimeSlots = (startTime, endTime, interval) => {
  const timeSlots = [];
  let currentTime = startTime;

  while (currentTime <= endTime) {
    const hours = String(Math.floor(currentTime / 60)).padStart(2, '0');
    const minutes = String(currentTime % 60).padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    timeSlots.push({ timeString, id: currentTime });
    currentTime += interval;
  }

  return timeSlots;
};

const generateAreas = (numCourts) => {
  return Array.from({ length: numCourts }, (_, i) => `Sân ${i + 1}`);
};

const TimeSlots = () => {
  const [court, setCourt] = useState(null);
  const { idCourt } = useParams();
  const [selectedArea, setSelectedArea] = useState('Sân 1');
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [firstSelected, setFirstSelected] = useState(null);
  const [timeSlotsAM, setTimeSlotsAM] = useState([]);
  const [timeSlotsPM, setTimeSlotsPM] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getDetailCourt = async () => {
    try {
      const res = await getCourtByIdCourt(idCourt);
      if (res.status === 200) {
        setCourt(res.data);
        console.log(res.data);
      } else {
        setError("Failed to fetch court details");
      }
    } catch (err) {
      setError("An error occurred while fetching court details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetailCourt();
  }, [idCourt]);

  const getOpenTime = (slots) => {
    if (Array.isArray(slots) && slots.length > 0) {
      const times = slots.map(slot => ({
        open: slot.openTime,
      }));
      const earliestOpen = Math.min(...times.map(t => new Date(`1970-01-01T${t.open}`).getTime()));
      const formatTime = time => new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      return `${formatTime(earliestOpen)}`;
    }
    return "Đang Cập Nhật....";
  };

  const getCloseTime = (slots) => {
    if (Array.isArray(slots) && slots.length > 0) {
      const times = slots.map(slot => ({
        close: slot.closeTime
      }));
      const latestClose = Math.max(...times.map(t => new Date(`1970-01-01T${t.close}`).getTime()));
      const formatTime = time => new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      return `${formatTime(latestClose)}`;
    }
    return "Đang Cập Nhật....";
  };
  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };
  useEffect(() => {
    if (court) {
      const startTime = parseTime(getOpenTime(court.slotOfCourt));
      console.log(startTime)
      const endTime = parseTime(getCloseTime(court.slotOfCourt));
      console.log(endTime)

      const interval = 30;

      if (startTime !== null) {
        setTimeSlotsAM(generateTimeSlots(startTime, 12 * 60, interval));
        setTimeSlotsPM(generateTimeSlots(12.5 * 60, endTime, interval));
      }
    }
  }, [court]);

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
      setFirstSelected(null);
      setStartTime(start);
      setEndTime(end);
    }
  };

  const areas = generateAreas(court?.courtQuantity || 0);

  const selectedTimeRange = startTime !== null && endTime !== null
    ? `${String(Math.floor(startTime / 60)).padStart(2, '0')}:${String(startTime % 60).padStart(2, '0')} - ${String(Math.floor(endTime / 60)).padStart(2, '0')}:${String(endTime % 60).padStart(2, '0')}`
    : '';

  const totalPrice = selectedTimes.length > 0 ? ((endTime - startTime) / 60 * (court?.price?.[0]?.unitPrice || 0)) : 0;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!court) {
    return <div>No court details available</div>;
  }

  return (
    <div className="container">
      <div className="left-section">
        <div className="area-selection">
          <label>Chọn Sân:</label>
          <select onChange={handleAreaChange} value={selectedArea}>
            {areas.map(area => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <div className="input__group">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Date" />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <h3>Ca Sáng </h3>
        <div id="time-slots" className="times-container">
          {timeSlotsAM.map(({ timeString, id }) => (
            <div
              key={id}
              className={`time ${selectedTimes.includes(id) ? 'selected' : ''}`}
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
              className={`time ${selectedTimes.includes(id) ? 'selected' : ''}`}
              onClick={() => toggleTimeSlot(id)}
            >
              {timeString}
            </div>
          ))}
        </div>
      </div>
      <div className="right-section">
        <div className="area-info">
          {court?.images?.[0] && (
            <img src={court.images[0]} alt={court.courtName} />
          )}
          <h2>{court.courtName}</h2>
          <h5>{court.courtAddress}</h5>
          <label>
            {selectedTimeRange}
          </label>
          {selectedTimeRange && (
            <div>
              <h5>Thành tiền: {totalPrice.toLocaleString()} VND</h5>
            </div>
          )}
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