import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const options = [
  { value: 3, label: "3" },
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" }
];

const SessionSelect = ({ itemsPerPage, setItemsPerPage }) => {
  const onItemsPerPageChange = event => {
    const { value } = event.target;
    setItemsPerPage(Number(value));
  };

  return (
    <Form inline>
      <Form.Group className="session-select">
        <Form.Control
          className="select"
          as="select"
          value={itemsPerPage}
          onChange={onItemsPerPageChange}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Form.Control>
        <Form.Label className="ml-2">sessions shown</Form.Label>
      </Form.Group>
    </Form>
  );
};

SessionSelect.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  setItemsPerPage: PropTypes.func.isRequired
};

export default SessionSelect;
