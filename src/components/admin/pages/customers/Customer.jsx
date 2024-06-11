import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { dataEX } from "./../../../../datatableSource";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import UpdateIcon from "@mui/icons-material/Update";
import "../customers/Customer.css";
import UserDetail from "../single/UserDetail";
import NewUser from "../new/NewUser";
import UpdateUser from "../update/UpdateUser";

const Customer = () => {
  const [data, setData] = useState(dataEX);
  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    setDeleteId(id);
    setDialogType("delete");
    setOpen(true);
  };

  const confirmDelete = () => {
    setData(data.filter((item) => item.id !== deleteId));
    handleClose();
  };

  const handleClickOpen = (user, type) => {
    setSelectedUser(user);
    setDialogType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUser(null);
    setDeleteId(null);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => (
        <div className="cellAction">
          <Button
            variant="outlined"
            color="info"
            startIcon={<VisibilityIcon />}
            onClick={() => handleClickOpen(params.row, "view")}
          >
            View
          </Button>
          <Button
            variant="outlined"
            color="warning"
            startIcon={<UpdateIcon />}
            onClick={() => handleClickOpen(params.row, "update")}
          >
            Update
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstname", headerName: "First Name", width: 140 },
    { field: "lastname", headerName: "Last Name", width: 140 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 100 },
    { field: "role", headerName: "Role", width: 100 },
  ];

  return (
    <div className="customer">
      <Sidebar />
      <div className="customerContainer">
        <div className="datatable">
          <div className="datatableTitle">
            <span>Customers</span>
            <Button
              variant="outlined"
              color="success"
              startIcon={<NoteAddIcon />}
              onClick={() => setDialogType("new") || setOpen(true)}
            >
              Add New
            </Button>
          </div>
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </div>

      {dialogType === "view" && selectedUser && (
        <UserDetail open={open} onClose={handleClose} user={selectedUser} />
      )}
      {dialogType === "new" && (
        <NewUser open={open} handleClose={handleClose} />
      )}
      {dialogType === "update" && (
        <UpdateUser open={open} handleClose={handleClose} user={selectedUser}/>
      )}
      {dialogType === "delete" && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this customer?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={confirmDelete} color="secondary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default Customer;