import React from "react";
import List from "react-bootstrap/ListGroup";
import Item from "react-bootstrap//ListGroupItem";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

const Session = ({ id, ip, date, number, ...Icon }) => (
  <div className="session">
    <h4 className="session__header">
      <Badge className="session__badge" pill variant="dark">
        {number}
      </Badge>
      {id}
    </h4>
    <List className="session__list">
      <Item className="session__list-item">IP: {ip}</Item>
      <Item className="session__list-item">Date: {date}</Item>
    </List>
    <Table striped bordered className="table">
      <thead>
        <tr>
          <th>Device</th>
          <th>OS</th>
          <th>Browser</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Icon.Device />
          </td>
          <td>
            <Icon.Os />
          </td>
          <td>
            <Icon.Browser />
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

Session.propTypes = {
  id: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  Device: PropTypes.elementType.isRequired,
  Os: PropTypes.elementType.isRequired,
  Browser: PropTypes.elementType.isRequired
};

export default Session;
