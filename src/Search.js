import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const Search = () => {

  const usenavigate = useNavigate();

  const [results, setResults] = useState([])

  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username === "" || username === null) {
      usenavigate("/login");
    }
  }, []);



  return (
    <div>
      <div className="header">
        <Link className="logout" style={{ float: "right" }} to={"/"}>
          Logout
        </Link>
      </div>
      <h2 className="text-center searchHead">Search</h2>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default Search;
