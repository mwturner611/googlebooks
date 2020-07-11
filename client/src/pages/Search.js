import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/Api";
import Header from "../components/Header";


function Search() {
    const [results, setResults] = useState([]);

    function searchTitle(search){
        API.searchBooks(search)
            .then(res =>
                    setResults(res.data.items)
            )
            .catch(err => console.log(err));
    };

      // Load all books and store them with setBooks
  useEffect(() => {
    searchTitle("Titanic")
  }, []);

    return(

        <Header></Header>
    )
}

export default Search;