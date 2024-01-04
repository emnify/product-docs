import React from "react";
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import remarkMdx from "remark-mdx";

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
              <Markdown
                key={index}
                components={{ p: "td" }}
                remarkPlugins={[remarkMdx]}
              >
                {cell}
              </Markdown>
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
