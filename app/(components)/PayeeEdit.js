"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PayeeDetails = () => {
  const [users, setUsers] = useState([
    {
      customerId: 1,
      accountno: "ZG335656001",
      name: "John Doe",
      bankname: "HSBC",
    },
    {
      customerId: 2,
      accountno: "ZG335656002",
      name: "Jane Smith",
      bankname: "HDFC",
    },
    {
      customerId: 3,
      accountno: "ZG335656003",
      name: "Bob Johnson",
      bankname: "AXIS",
    },
  ]);

  const handleEdit = (customerId) => {
    // console.log(Edit button clicked for user with id ${customerId});
  };

  const handleDelete = (customerId) => {
    setShow(true);
    // console.log(Delete button clicked for user with id ${customerId});
    // setUsers(users.filter(user => user.customerId !== customerId));
  };

  const handleDeleteInfo = (customerId) => {
    setUsers(users.filter((user) => user.customerId !== customerId));
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Modal show={true} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Delete Payee</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure, you want to delete?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button
          variant="primary"
          onClick={() => handleDeleteInfo(user.customerId)}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PayeeDetails;
