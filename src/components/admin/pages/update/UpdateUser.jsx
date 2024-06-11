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
} from "@mui/material";
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
          <h3>Update Customer</h3>
          <form onSubmit={handleSubmit}>
            <div>
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
            </div>
            <div>
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
            <div>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                fullWidth
                margin="normal"
                helperText="Leave blank to keep current password"
              />
            </div>
            <div>
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
            </div>
            <div>
              <FormControl fullWidth margin="normal">
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                  labelId="role-select-label"
                  id="role-select"
                  name="role"
                  value={formData.role}
                  onChange={handleRoleChange}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="staff">Staff</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="form-button"
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateUser;
