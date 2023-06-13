import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";



const SearchBar = ({setResults}) => {


    const[input, setInput] = useState("");

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
      }


      const url = `https://api.tvmaze.com/search/shows?q=${input}`;


    const fetchData = (value) => {
        fetch(url)
           .then((response) => response.json())
           .then((json) => {
             const results = json.filter((user) => {
                return user || user.shows || user.shows.name.toLowerCase().includes({input});
             });
         setResults(results)
        });
      };


  return (
    <div>
      <div className="search-bar-container searchBar">
        <div className="input-wrapper">
          <FaSearch id="search-icon" />
          <input
            placeholder="Search by title..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
