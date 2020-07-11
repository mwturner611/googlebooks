import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/Api";


function Search() {
    const [results, setResults] = useState([]);

    function searchTitle(search){
        API.searchBooks(search)
            .then(res =>
                    console.log(res.data.items)
            )
            .catch(err => console.log(err));
    };

      // Load all books and store them with setBooks
  useEffect(() => {
    searchTitle("Titanic")
  }, []);

    return(
        <div>It's the Search page

            
        </div>
    )
}

export default Search;