import React from "react";
import List from "react-bootstrap/ListGroup";
import Item from "react-bootstrap//ListGroupItem";
import Badge from "react-bootstrap/Badge";
import Table from "react-bootstrap/Table";
import Tooltiped from "./Tooltiped";
import PropTypes from "prop-types";

const Session = ({ id, ip, date, number, device, os, browser }) => (
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
            <Tooltiped title={device.label} Icon={device.Icon} />
          </td>
          <td>
            <Tooltiped title={os.label} Icon={os.Icon} />
          </td>
          <td>
            <Tooltiped title={browser.label} Icon={browser.Icon} />
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
);

const metaDataShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
}).isRequired;

Session.propTypes = {
  id: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  device: metaDataShape,
  os: metaDataShape,
  browser: metaDataShape
};

export default Session;
