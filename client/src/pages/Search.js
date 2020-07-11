import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/Api";
import Header from "../components/Header";
import Description from "../components/Description";
import Form from "../components/Search";
import Results from "../components/Results";


function Search() {
    const [results, setResults] = useState([]);
    const [lookup, setLookUp] = useState([]);

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
        <div>
        <Header/>
        <Description/>
        <Form/>
        <div className="Container-fluid">
          {results.map (result => (
            <Results
            imageLinks ={result.volumeInfo.imageLinks.thumbnail}
            infoLink={result.volumeInfo.infoLink}
            title={result.volumeInfo.title}
            authors={result.volumeInfo.authors}
            description={result.volumeInfo.description}  
            />
          ))}
        
        </div>
        </div>
    )
}

export default Search;