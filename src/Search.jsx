import React, { useState } from "react";
import BookList from "./BookList";

const Search = () => {
  const mockedApiResponse = [
    {
      title: "Book 1",
      publisher: "Publisher A",
      authors: ["Author A1", "Author A2"],
      type: "Fiction",
      isbn: "1234567890",
      category: "Adventure",
      availableCopies: 5,
    },
    {
      title: "Book 2",
      publisher: "Publisher B",
      authors: ["Author B1", "Author B2"],
      type: "Non-Fiction",
      isbn: "0987654321",
      category: "Science",
      availableCopies: 3,
    },
  ];

  const [selectedOption, setSelectedOption] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState(mockedApiResponse);

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const params = selectedOption === "author" ? `author=${searchValue}` : `isbn=${searchValue}`    
      const apiUrl = `https://localhost:7294/api/Book?${params}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setSearchResult(data);

      console.log("API Response:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <label>
          Select an Option:
          <select value={selectedOption} onChange={handleDropdownChange}>
            <option value="">Select</option>
            <option value="author">Author</option>
            <option value="isbn">ISBN</option>
          </select>
        </label>

        <br />

        <label>
          Search Value:
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchInputChange}
          />
        </label>

        <br />

        <button type="submit">Search</button>
      </form>
      <BookList books={searchResult} />
    </div>
  );
};

export default Search;
