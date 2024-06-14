import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Dialog,
  Slide,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from '@mui/icons-material/Edit';
import "../update/UpdateUser.css";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const UpdateUser = ({ open, handleClose, user }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstname || "",
        lastName: user.lastname || "",
        email: user.email || "",
        password: "",
        phone: user.phone || "",
        role: user.role || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!/^\d+$/.test(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    console.log(formData);
    // Add your update form submission logic here
    handleClose();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      role: "",
    });
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="update">
        <div className="updateContainer">
          <div className="header">
            <h3> <EditIcon style={{fontSize:"70px"}}/>Update User Form</h3>
            <IconButton aria-label="close" onClick={handleClose} color="error" className="close-button">
              <CloseIcon />
            </IconButton>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-column">
                <TextField
                  id="firstName"
                  label="First Name*"
                  variant="outlined"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="lastName"
                  label="Last Name*"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="email"
                  label="Email*"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  fullWidth
                  margin="normal"
                />
              </div>
              <div className="form-column">
                <TextField
                  id="password"
                  label="Password*"
                  variant="outlined"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="phone"
                  label="Phone*"
                  variant="outlined"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  fullWidth
                  margin="normal"
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={formData.role}
                    label="Role"
                    onChange={handleRoleChange}
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                    <MenuItem value="staff">Staff</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="form-buttons">
              <Button
                type="submit"
                variant="contained"
                color="warning"
                className="form-button"
              >
                Update
              </Button>
              
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateUser;
