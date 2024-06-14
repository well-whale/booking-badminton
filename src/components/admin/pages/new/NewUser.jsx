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
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import "../new/NewUser.css";
import { newUser } from "../../../../services/UserServices";

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const NewUser = ({ open, handleClose, refreshData }) => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false); 

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true); 

    try {
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        alert("Please enter a valid email address.");
        setSubmitting(false);
        return;
      }
      if (!/^\d+$/.test(formData.phone)) {
        alert("Please enter a valid phone number.");
        setSubmitting(false); 
        return;
      }
      const response = await newUser(formData);
      setFormData(initialFormData);
      handleClose();
      refreshData(); // Refresh the user list after adding a new user
    } catch (error) {
      alert("An error occurred while adding the user.");
    } finally {
      setSubmitting(false); 
    }
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
          <div className="header">
            <h3><PersonAddAlt1Icon style={{fontSize:"70px"}} /> Add User Form</h3>
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
                color="success"
                className="form-button"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit"}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className="form-button"
                onClick={() => setFormData(initialFormData)}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default NewUser;
