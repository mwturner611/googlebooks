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

    function handleInputChange(event) {
      const entered = event.target.value;
      setLookUp(entered)
    };
console.log(results);
    function handleFormSubmit(event){
      event.preventDefault();
      searchTitle(lookup)
    }
    function saveBook(id){
      const book = results.find(b => b.id === id);

      API.saveBook({
        image: book.volumeInfo.imageLinks.thumbnail,
        link: book.volumeInfo.infoLink,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description 
      })
      .then(() => searchTitle(lookup));
    };

   return(
        <div>
        <Header/>
        <Description/>
        <Form
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        />
        <div className="Container-fluid">
          {results.map (result => (
            <Results
            key={result.id}
            imageLinks ={result.volumeInfo.imageLinks.thumbnail}
            infoLink={result.volumeInfo.infoLink}
            title={result.volumeInfo.title}
            authors={result.volumeInfo.authors}
            description={result.volumeInfo.description}
            Button={() => (
              <button onClick={() => saveBook(result.id)} type="button" className="btn btn-primary">Save</button>
            )}
            />
          ))}
        
        </div>
        </div>
    )
}

export default Search;