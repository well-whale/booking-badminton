import React, { useState } from "react";
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
import "../new/NewUser.css";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const NewUser = ({ open, handleClose }) => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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
    // Add your form submission logic here
    handleClose();
    setFormData(initialFormData); 
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <div className="new">
        <div className="newContainer">
          <h3>Add New Customer</h3>
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
                label="Password*"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
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
              <FormControl fullWidth>
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="form-button"
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default NewUser;
