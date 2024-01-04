import React from "react";
import PropTypes from "prop-types";

const Table = ({ data }) => {
  const headers = Object.keys(data[0]);
  const rows = data.map(item => Object.values(item));
  const capitalizeHeader = header => {
    return header.charAt(0).toUpperCase() + header.slice(1);
  };

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{capitalizeHeader(header)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Table;
