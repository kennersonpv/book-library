import React, { useState, useEffect } from "react";
import "./BookList.css"; // Import your CSS file for this component

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <table className="search-results-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Publisher</th>
            <th>Authors</th>
            <th>Type</th>
            <th>ISBN</th>
            <th>Category</th>
            <th>Available Copies</th>
          </tr>
        </thead>
        <tbody>
          {books.map((result, index) => (
            <tr key={index}>
              <td>{result.title}</td>
              <td>{result.publisher}</td>
              <td>{result.authors.join(", ")}</td>
              <td>{result.type}</td>
              <td>{result.isbn}</td>
              <td>{result.category}</td>
              <td>{result.availableCopies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
