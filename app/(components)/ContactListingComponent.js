"use client";

import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { getText } from "../(utilities)/ii18Utility";
import { Star, StarFill, Pencil, Trash } from "react-bootstrap-icons";
import "./style.css";
import PayeeDetails from "./PayeeEdit";

const ContactListingComponent = (props) => {
  const [isDel, setDel] = useState(false);

  const list = [
    {
      id: "123",
      name: "Shyam Sundar",
      account: "ABC12345",
      bank: "HDFC",
      isFav: false,
    },
    {
      id: "235",
      name: "someone",
      account: "ABGC2321312",
      bank: "HSBC",
      isFav: true,
    },
  ];

  return (
    <div className="listing-container">
      {isDel && <PayeeDetails />}
      {
        <Card>
          <Card.Body>
            <div className="listing-header">
              <h3>Payee Listing</h3>
              <Button variant="primary">Add +</Button>
            </div>
            <div className="contact-listing">
              <Table hover>
                <thead>
                  <tr>
                    <th>{getText("nameLabel")}</th>
                    <th>{getText("accountNumber")}</th>
                    <th>{getText("bankName")}</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.account}</td>
                      <td>{user.bank}</td>
                      <td>{user.isFav ? <StarFill /> : <Star />}</td>
                      <td>
                        <Pencil />
                      </td>
                      <td>
                        <Trash onClick={() => setDel(true)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      }
    </div>
  );
};

export default ContactListingComponent;
